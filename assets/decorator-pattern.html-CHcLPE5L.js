import{_ as s,c as a,e as p,o as t}from"./app-DOK2Wtno.js";const e={};function c(o,n){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="装饰者模式" tabindex="-1"><a class="header-anchor" href="#装饰者模式"><span>装饰者模式</span></a></h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p>装饰者提供比继承更有弹性的替代方案。装饰者用于包装同接口的对象，不仅允许你向方法添加行为，而且还可以将方法设置为原始对象调用（比如装饰者的构造函数）。</p><p>装饰者用于通过重载方法的形式添加新功能，该模式可以在被装饰者前面或者后面加上自己 的行为以达到特定的目的。</p><h2 id="正文" tabindex="-1"><a class="header-anchor" href="#正文"><span>正文</span></a></h2><p>那么装饰者模式有什么好处呢？前面说了，装饰者是一种实现继承的替代方案。当脚本运行时，在子类中添加行为会影响原有类所有的实例，而装饰者却不然。取而代之的是它能给不同对象各自添加新行为。如下代码所示：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token comment">// 需要装饰的类（函数）</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Macbook</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">cost</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">return</span> <span class="token number">1000</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Memory</span><span class="token punctuation">(</span><span class="token parameter">macbook</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">cost</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> macbook<span class="token punctuation">.</span><span class="token function">cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">75</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">BlurayDrive</span><span class="token punctuation">(</span><span class="token parameter">macbook</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">cost</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> macbook<span class="token punctuation">.</span><span class="token function">cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">300</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Insurance</span><span class="token punctuation">(</span><span class="token parameter">macbook</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">cost</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> macbook<span class="token punctuation">.</span><span class="token function">cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">250</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 用法</span></span>
<span class="line"><span class="token keyword">var</span> myMacbook <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Insurance</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BlurayDrive</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Memory</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Macbook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myMacbook<span class="token punctuation">.</span><span class="token function">cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是另一个实例，当我们在装饰者对象上调用performTask时，它不仅具有一些装饰者的行为，同时也调用了下层对象的performTask函数。（有点费解。。。）</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">ConcreteClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">performTask</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">preTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;doing something&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">postTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">AbstractDecorator</span><span class="token punctuation">(</span><span class="token parameter">decorated</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">performTask</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        decorated<span class="token punctuation">.</span><span class="token function">performTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">ConcreteDecoratorClass</span><span class="token punctuation">(</span><span class="token parameter">decorated</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>base <span class="token operator">=</span> AbstractDecorator<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">base</span><span class="token punctuation">(</span>decorated<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    decorated<span class="token punctuation">.</span><span class="token function-variable function">preTask</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;pre-calling...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    decorated<span class="token punctuation">.</span><span class="token function-variable function">postTask</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;post-calling...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> concrete <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> decorator1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteDecoratorClass</span><span class="token punctuation">(</span>concrete<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> decorator2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteDecoratorClass</span><span class="token punctuation">(</span>decorator1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">decorator2<span class="token punctuation">.</span><span class="token function">performTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再来一个彻底的例子：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">var</span> tree <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">tree<span class="token punctuation">.</span><span class="token function-variable function">decorate</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Make sure the three won\\&#39;t fall&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">tree<span class="token punctuation">.</span><span class="token function-variable function">getDecorator</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">deco</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    tree<span class="token punctuation">[</span>deco<span class="token punctuation">]</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">tree</span><span class="token punctuation">[</span>deco<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">tree<span class="token punctuation">.</span><span class="token function-variable function">BlueBalls</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">decorate</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token class-name">BlueBalls</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">decorate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 第1步：先执行原型的decorate方法，也就是tree.decorate()</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Add blue balls&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 第2步：再输出blue</span></span>
<span class="line">      <span class="token comment">// 将这2步作为BlueBalls的decorate方法</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">tree<span class="token punctuation">.</span><span class="token function-variable function">Angel</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">decorate</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token class-name">Angel</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">decorate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 第4步：先执行原型（这时候是BlueBalls了）的decorate方法</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;An angel on the top&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 第5步：再输出angel</span></span>
<span class="line">      <span class="token comment">// 将这2步作为Angel的decorate方法</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">tree<span class="token punctuation">.</span><span class="token function-variable function">RedBalls</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">decorate</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token class-name">RedBalls</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">decorate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 第7步：先执行原型（这时候是Angel了）的decorate方法</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Put on some red balls&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 第8步：再输出red</span></span>
<span class="line">      <span class="token comment">// 将这2步作为Redballs的decorate方法</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">tree <span class="token operator">=</span> tree<span class="token punctuation">.</span><span class="token function">getDecorator</span><span class="token punctuation">(</span><span class="token string">&quot;BlueBalls&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 第3步：将BlueBalls对象赋给tree，这时候父原型里的getDecorator依然可用</span></span>
<span class="line">tree <span class="token operator">=</span> tree<span class="token punctuation">.</span><span class="token function">getDecorator</span><span class="token punctuation">(</span><span class="token string">&quot;Angel&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 第6步：将Angel对象赋给tree，这时候父原型的父原型里的getDecorator依然可用</span></span>
<span class="line">tree <span class="token operator">=</span> tree<span class="token punctuation">.</span><span class="token function">getDecorator</span><span class="token punctuation">(</span><span class="token string">&quot;RedBalls&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 第9步：将RedBalls对象赋给tree</span></span>
<span class="line">tree<span class="token punctuation">.</span><span class="token function">decorate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 第10步：执行RedBalls对象的decorate方法</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>装饰者模式是为已有功能动态地添加更多功能的一种方式，把每个要装饰的功能放在单独的函数里，然后用该函数包装所要装饰的已有函数对象，因此，当需要执行特殊行为的时候，调用代码就可以根据需要有选择地、按顺序地使用装饰功能来包装对象。优点是<strong>把类（函数）的核心职责和装饰功能分开了</strong>。</p>`,13)]))}const i=s(e,[["render",c],["__file","decorator-pattern.html.vue"]]),u=JSON.parse('{"path":"/blogs/design-patterns/decorator-pattern.html","title":"装饰者模式","lang":"zh-CN","frontmatter":{"title":"装饰者模式","date":"2019-4-12","editLink":false,"tags":["设计模式基础"],"categories":["设计模式"]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"正文","slug":"正文","link":"#正文","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1739191220000,"updatedTime":1739285518000,"contributors":[{"name":"sanki","email":"sanqi_3737@163.com","commits":3}]},"filePathRelative":"blogs/design-patterns/decorator-pattern.md"}');export{i as comp,u as data};
