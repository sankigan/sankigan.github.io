import{f as H,h as N,q as f,s as $,A as z,z as B,_ as V,c as U,o as j}from"./app-DuN9hoIQ.js";const S=12,c=8,A=`#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,J=H({__name:"StrandsCanvas",props:{colors:{default:()=>["#ff4d2e","#7c3aed","#06b6d4"]},count:{default:3},speed:{default:.45},amplitude:{default:1},waviness:{default:1},thickness:{default:.7},glow:{default:1.6},taper:{default:3},spread:{default:1},intensity:{default:.6},saturation:{default:.95},opacity:{default:1},scale:{default:1.5},centerY:{default:0},centerX:{default:0},span:{default:1}},setup(g,{expose:_}){_();const e=g,d=N(null);let u=null,n=null;f(()=>e.centerX,t=>{n&&(n.uniforms.uCenterX.value=t)}),f(()=>e.centerY,t=>{n&&(n.uniforms.uCenterY.value=t)}),f(()=>e.scale,t=>{n&&(n.uniforms.uScale.value=t)}),f(()=>e.span,t=>{n&&(n.uniforms.uSpan.value=t)});const w=`#version 300 es
precision highp float;

uniform float uTime;
uniform vec2 uResolution;
uniform vec3 uColors[${c}];
uniform int uColorCount;
uniform int uStrandCount;
uniform float uSpeed;
uniform float uAmplitude;
uniform float uWaviness;
uniform float uThickness;
uniform float uGlow;
uniform float uTaper;
uniform float uSpread;
uniform float uHueShift;
uniform float uIntensity;
uniform float uOpacity;
uniform float uScale;
uniform float uSaturation;
uniform float uCenterY;
uniform float uCenterX;
uniform float uSpan;
uniform float uDpr;

out vec4 fragColor;

const float PI = 3.14159265;

vec3 spectrum(float t) {
  return 0.5 + 0.5 * cos(2.0 * PI * (t + vec3(0.00, 0.33, 0.67)));
}

vec3 samplePalette(float t) {
  t = fract(t);
  float scaled = t * float(uColorCount);
  int idx = int(floor(scaled));
  float blend = fract(scaled);
  int nextIdx = idx + 1;
  if (nextIdx >= uColorCount) nextIdx = 0;
  return mix(uColors[idx], uColors[nextIdx], blend);
}

vec3 strandColor(float t) {
  if (uColorCount > 0) return samplePalette(t);
  return spectrum(t);
}

void main() {
  /*
    关键: gl_FragCoord 是【设备像素】(CSS × devicePixelRatio), 而 uResolution
    传入的是【CSS 像素】. Retina (dpr>1) 上两者差一个 dpr 倍数, 会让整个 uv
    坐标系被压缩 + 偏移 —— 表现为水平锚点 (uCenterX) 算出来的峰值落不到预期位置
    (右对齐时看起来仍居中). 先把 fragCoord 除回 CSS 像素, 与 uResolution 同空间.
  */
  vec2 frag = gl_FragCoord.xy / max(uDpr, 0.0001);
  vec2 uv = (frag - 0.5 * uResolution) / uResolution.y;
  uv /= max(uScale, 0.0001);

  float e = 0.06 + uIntensity * 0.94;

  /*
    水平包络 env 必须随 canvas aspect 自适应, 否则:
      - 原写法 cos(uv.x * PI * 1.3) 在 uv.x = ±0.385 归零;
      - uv 用 uResolution.y 归一, 物理边缘 uv.x = ±0.5 * aspect / uScale;
      - hero 越宽 (aspect 越大), 物理边缘越远超 0.385,
        包络只覆盖屏幕中心一小段, 两侧大片归零 → 视觉上流光"贴不到屏幕边".
    修法: 把"归零点"绑定到屏幕物理边缘.
      halfW = 当前 uv.x 物理边缘 (考虑 uScale 后).
      env = cos(uv.x / halfW * 0.5 * PI) ^ taper
      → uv.x = ±halfW (= 屏幕左右边) 时 cos = 0, 包络归零;
      → uv.x = 0 (屏幕中心) 时 cos = 1, 包络满值.
    波纹密度仍由 uWaviness * freq 控制, 不被包络影响.
  */
  float halfW = 0.5 * (uResolution.x / uResolution.y) / max(uScale, 0.0001);
  /*
    水平锚点平移: 把整条流光 (包络 + 波形) 沿 x 平移 shiftX.
      uCenterX 单位是 halfW (屏幕半宽), 与 aspect 解耦:
        uCenterX = 0  → ex = uv.x, 包络左右对称 (峰值居中, 两边缘归零);
        uCenterX = +1 → 峰值移到屏幕右边缘 (ex=0 落在 uv.x=halfW), 向左渐隐;
        uCenterX = -1 → 峰值移到左边缘.
      env 用 ex 计算, 故"右端贴右边缘"即对应 uCenterX → +1.
  */
  float shiftX = uCenterX * max(halfW, 0.0001);
  float ex = uv.x - shiftX;
  /*
    包络半宽 envW 与屏幕边缘解耦 (uSpan=1 时 envW=halfW, 退回旧行为).
      uSpan<1 → 归零点落在距峰值 envW < halfW 处, 即流光在抵达屏幕边
      【之前】就完全衰减为 0, 峰值偏右也不会被边缘硬切.
    clamp 把 cos 入参限制在 [-0.5π, 0.5π], 包络外 (|ex|>envW) cos 截断为 0,
    避免 cos 越过 0.5π 后回升 (否则会在远处冒出第二段亮带).
  */
  float envW = max(halfW * uSpan, 0.0001);
  float env = pow(max(cos(clamp(ex / envW, -1.0, 1.0) * 0.5 * PI), 0.0), uTaper);

  vec3 col = vec3(0.0);

  for (int i = 0; i < ${S}; i++) {
    if (i >= uStrandCount) break;

    float fi = float(i);
    float ph = fi * 1.7 * uSpread;
    float freq = (2.0 + fi * 0.35) * uWaviness;
    float spd = 1.4 + fi * 1.2;

    float tt = uTime * uSpeed;
    // 波形输入用平移后的 ex, 让起伏与包络锚点保持一致 (整条流光协调平移)
    float w = sin(ex * freq + tt * spd + ph) * 0.60
            + sin(ex * freq * 1.1 - tt * spd * 0.7 + ph * 1.7) * 0.40;

    float amp = (0.1 + 0.02 * e) * env * uAmplitude;
    // strand 中心线整体上抬 uCenterY (uv 单位, > 0 = 向上).
    // 注意是给 strand 自身的 y 加偏移, 不动 uv 原点 ——
    // 这样水平包络 env(uv.x) 不受影响, 流光完整不被切.
    float y = w * amp + uCenterY;

    float d = abs(uv.y - y);
    float thick = (0.001 + 0.05 * e) * (0.35 + env) * uThickness;
    float g = thick / (d + thick * 0.45);
    g = g * g;

    float h = fi / float(uStrandCount) + uv.x * 0.30 + uTime * 0.04 + uHueShift;
    col += strandColor(h) * g * env;
  }

  col *= 0.45 + 0.7 * e;
  col = 1.0 - exp(-col * uGlow);

  float gray = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col = max(mix(vec3(gray), col, uSaturation), 0.0);

  float lum = max(max(col.r, col.g), col.b);
  float alpha = clamp(lum, 0.0, 1.0) * uOpacity;

  fragColor = vec4(col * uOpacity, alpha);
}
`;$(async()=>{if(typeof window>"u")return;const t=d.value;if(!t||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const{Renderer:P,Program:T,Mesh:E,Triangle:k,Color:M}=await z(()=>import("./index-DIc7Xpaz.js"),[]),r=window.matchMedia("(max-width: 900px)").matches,O=r?1.5:2,W=Math.min(window.devicePixelRatio||1,O),v=new P({alpha:!0,premultipliedAlpha:!0,antialias:!r,dpr:W}),a=v.gl;a.clearColor(0,0,0,0),a.enable(a.BLEND),a.blendFunc(a.ONE,a.ONE_MINUS_SRC_ALPHA),a.canvas.style.backgroundColor="transparent";const p=new k(a);p.attributes.uv&&delete p.attributes.uv;const q=o=>{const l=o&&o.length?o:["#ffffff"],X=[];for(let x=0;x<c;x++){const G=l[x]??l[l.length-1],C=new M(G);X.push([C.r,C.g,C.b])}return X},b=r?.7:1,F=e.glow*b,Y=e.intensity*b,L=r?Math.max(2,e.count-1):e.count,i=new T(a,{vertex:A,fragment:w,uniforms:{uTime:{value:0},uResolution:{value:[t.offsetWidth,t.offsetHeight]},uColors:{value:q(e.colors)},uColorCount:{value:Math.min(e.colors.length,c)},uStrandCount:{value:Math.min(L,S)},uSpeed:{value:e.speed},uAmplitude:{value:e.amplitude},uWaviness:{value:e.waviness},uThickness:{value:e.thickness},uGlow:{value:F},uTaper:{value:e.taper},uSpread:{value:e.spread},uHueShift:{value:0},uIntensity:{value:Y},uOpacity:{value:e.opacity},uScale:{value:e.scale},uSaturation:{value:e.saturation},uCenterY:{value:e.centerY},uCenterX:{value:e.centerX},uSpan:{value:e.span},uDpr:{value:W}}}),D=new E(a,{geometry:p,program:i});n=i,t.appendChild(a.canvas);const m=()=>{if(!t)return;const o=t.offsetWidth,l=t.offsetHeight;v.setSize(o,l),i.uniforms.uResolution.value=[o,l]};window.addEventListener("resize",m),m();let s=0,I=!1;const h=o=>{if(I){s=requestAnimationFrame(h);return}s=requestAnimationFrame(h),i.uniforms.uTime.value=o*.001,v.render({scene:D})};s=requestAnimationFrame(h);const R=()=>{I=document.hidden};document.addEventListener("visibilitychange",R),u=()=>{var o;cancelAnimationFrame(s),window.removeEventListener("resize",m),document.removeEventListener("visibilitychange",R),t&&a.canvas.parentNode===t&&t.removeChild(a.canvas),(o=a.getExtension("WEBGL_lose_context"))==null||o.loseContext(),n=null}}),B(()=>{u==null||u(),u=null});const y={props:e,root:d,get cleanup(){return u},set cleanup(t){u=t},get programInstance(){return n},set programInstance(t){n=t},MAX_STRANDS:S,MAX_COLORS:c,VERT:A,FRAG:w};return Object.defineProperty(y,"__isScriptSetup",{enumerable:!1,value:!0}),y}}),K={ref:"root",class:"strands-canvas","aria-hidden":"true"};function Q(g,_,e,d,u,n){return j(),U("div",K,null,512)}const ee=V(J,[["render",Q],["__scopeId","data-v-54cdf8ce"],["__file","StrandsCanvas.vue"]]);export{ee as default};
