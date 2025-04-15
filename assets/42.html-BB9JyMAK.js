import{_ as p,c as e,a as s,e as t,d as l,b as c,r as o,o as i}from"./app-DOK2Wtno.js";const u={},r={href:"https://leetcode.cn/problems/trapping-rain-water/description/",target:"_blank",rel:"noopener noreferrer"};function k(d,n){const a=o("ExternalLinkIcon");return i(),e("div",null,[s("blockquote",null,[s("p",null,[s("a",r,[n[0]||(n[0]=l("接雨水")),c(a)])])]),n[1]||(n[1]=t(`<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述"><span>题目描述</span></a></h2><p>给定 <code>n</code> 个非负整数表示每个宽度为 <code>1</code> 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。</p><p><strong>示例</strong></p><p><img src="https://s21.ax1x.com/2025/03/21/pE0FNc9.png" alt=""></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]</span>
<span class="line">输出：6</span>
<span class="line"></span>
<span class="line">输入：height = [4,2,0,3,2,5]</span>
<span class="line">输出：9</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解答" tabindex="-1"><a class="header-anchor" href="#解答"><span>解答</span></a></h2><h3 id="暴力法" tabindex="-1"><a class="header-anchor" href="#暴力法"><span>暴力法</span></a></h3><h4 id="关键思路" tabindex="-1"><a class="header-anchor" href="#关键思路"><span>关键思路</span></a></h4><p>对于每个柱子，找到它左边和右边的最高柱子，然后计算当前柱子能接的雨水量。</p><h4 id="具体步骤" tabindex="-1"><a class="header-anchor" href="#具体步骤"><span>具体步骤</span></a></h4><ol><li>遍历每个柱子</li><li>对于每个柱子，向左遍历找到左边的最高柱子</li><li>向右遍历找到右边的最高柱子</li><li>当前柱子能接的雨水量为 <code>min(左边最高, 右边最高) - 当前柱子高度</code></li><li>将所有柱子的雨水量累加</li></ol><details class="custom-container details"><summary class="custom-container-title">Code</summary><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">height</span></span>
<span class="line"> * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">var</span> <span class="token function-variable function">trap</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">height</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> height<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 计算左边最高柱子</span></span>
<span class="line">    <span class="token keyword">let</span> leftMaxHeight <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> i<span class="token punctuation">;</span> <span class="token operator">++</span>j<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      leftMaxHeight <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>leftMaxHeight<span class="token punctuation">,</span> height<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 计算右边最高柱子</span></span>
<span class="line">    <span class="token keyword">let</span> rightMaxHeight <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span> j <span class="token operator">&lt;</span> height<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>j<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      rightMaxHeight <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>rightMaxHeight<span class="token punctuation">,</span> height<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 累加雨水量（确保不为负数）</span></span>
<span class="line">    sum <span class="token operator">+=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>leftMaxHeight<span class="token punctuation">,</span> rightMaxHeight<span class="token punctuation">)</span> <span class="token operator">-</span> height<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> sum<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p><strong>Tips：为什么要包含当前柱子？</strong></p><ul><li><strong>接雨水的定义</strong>：接雨水的条件是当前柱子比左右两边的最高柱子低，才能形成“凹槽”接住雨水</li><li><strong>计算左边最高柱子</strong>：如果包含当前柱子，那么 <code>leftMaxHeight</code> 表示的是从最左边到当前柱子（包括当前柱子）的最高高度</li><li><strong>计算右边最高柱子</strong>：如果包含当前柱子，那么 <code>rightMaxHeight</code> 表示的是从当前柱子（包括当前柱子）到最右边的最高高度</li><li><strong>为什么包含当前柱子</strong>： <ul><li>如果当前柱子本身就是左边或右边的最高柱子，那么 <code>Math.min(leftMaxHeight, rightMaxHeight) - height[i]</code> 会得到 0，表示当前柱子不能接住雨水</li><li>这样可以避免错误地累加负数的雨水量</li></ul></li></ul><h3 id="动态规划" tabindex="-1"><a class="header-anchor" href="#动态规划"><span>动态规划</span></a></h3><h4 id="关键思路-1" tabindex="-1"><a class="header-anchor" href="#关键思路-1"><span>关键思路</span></a></h4><p>预先计算每个柱子的左边最高和右边最高，避免重复计算</p><h4 id="具体步骤-1" tabindex="-1"><a class="header-anchor" href="#具体步骤-1"><span>具体步骤</span></a></h4><ol><li>创建两个数组 <code>left_max</code> 和 <code>right_max</code>，分别存储每个柱子左边和右边的最高柱子</li><li>从左到右遍历一次，填充 <code>left_max</code></li><li>从右到左遍历一次，填充 <code>right_max</code></li><li>最后遍历每个柱子，计算雨水量并累加</li></ol><details class="custom-container details"><summary class="custom-container-title">Code</summary><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">height</span></span>
<span class="line"> * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">var</span> <span class="token function-variable function">trap</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">height</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> n <span class="token operator">=</span> height<span class="token punctuation">.</span>length<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 初始化 leftMax 和 rightMax 数组</span></span>
<span class="line">  <span class="token keyword">const</span> leftMax <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> rightMax <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 计算每个位置的左边最高柱子（包含当前柱子）</span></span>
<span class="line">  leftMax<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> height<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    leftMax<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>leftMax<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> height<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 计算每个位置的右边最高柱子（包含当前柱子）</span></span>
<span class="line">  rightMax<span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> height<span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token operator">--</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    rightMax<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>rightMax<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> height<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    sum <span class="token operator">+=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>leftMax<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> rightMax<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span> height<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> sum<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="双指针" tabindex="-1"><a class="header-anchor" href="#双指针"><span>双指针</span></a></h3><h4 id="关键思路-2" tabindex="-1"><a class="header-anchor" href="#关键思路-2"><span>关键思路</span></a></h4><p>使用两个指针从两端向中间移动，同时维护左右两边的最高柱子</p><h4 id="具体步骤-2" tabindex="-1"><a class="header-anchor" href="#具体步骤-2"><span>具体步骤</span></a></h4><ol><li>初始化两个指针 <code>left</code> 和 <code>right</code>，分别指向数组的开头和结尾</li><li>初始化 <code>left_max</code> 和 <code>right_max</code> 为 0</li><li>当 <code>left &lt; right</code> 时：</li></ol><ul><li>如果 <code>height[left] &lt; height[right]</code>： <ul><li>如果 <code>height[left] &gt;= left_max</code>，更新 <code>left_max</code></li><li>否则，累加雨水量 <code>left_max - height[left]</code></li><li>移动 <code>left</code> 指针向右</li></ul></li><li>否则： <ul><li>如果 <code>height[right] &gt;= right_max</code>，更新 <code>right_max</code></li><li>否则，累加雨水量 <code>right_max - height[right]</code></li><li>移动 <code>right</code> 指针向左</li></ul></li></ul><details class="custom-container details"><summary class="custom-container-title">Code</summary><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">height</span></span>
<span class="line"> * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">var</span> <span class="token function-variable function">trap</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">height</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 左指针</span></span>
<span class="line">  <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 右指针</span></span>
<span class="line">  <span class="token keyword">let</span> right <span class="token operator">=</span> height<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 从左到右的最高柱子高度</span></span>
<span class="line">  <span class="token keyword">let</span> leftMax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 从右到左的最高柱子高度</span></span>
<span class="line">  <span class="token keyword">let</span> rightMax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 总雨水量</span></span>
<span class="line">  <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 如果左边柱子较低，雨水的量就由左边的最高柱子决定</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>height<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">&lt;</span> height<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 如果当前柱子比 leftMax 高，更新 leftMax</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>height<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">&gt;</span> leftMax<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        leftMax <span class="token operator">=</span> height<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 否则累加雨水量</span></span>
<span class="line">        sum <span class="token operator">+=</span> leftMax <span class="token operator">-</span> height<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      <span class="token comment">// 移动左指针</span></span>
<span class="line">      <span class="token operator">++</span>left<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">// 如果右边柱子较低，雨水的量就由右边的最高柱子决定</span></span>
<span class="line">    <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 如果当前柱子比 rightMax 高，更新 rightMax</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>height<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">&gt;</span> rightMax<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        rightMax <span class="token operator">=</span> height<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 否则累加雨水量</span></span>
<span class="line">        sum <span class="token operator">+=</span> rightMax <span class="token operator">-</span> height<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      <span class="token comment">// 移动右指针</span></span>
<span class="line">      <span class="token operator">--</span>right<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> sum<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p><strong>Tips：为什么左边柱子较低，雨水的量由左边的最高柱子决定？</strong></p><ol><li>右边的柱子较高：由于 <code>height[left] &lt; height[right]</code>, 右边的柱子已经比左边的柱子高，因此右边的柱子不会限制雨水的量</li><li>左边的最高柱子决定雨水量：当前柱子能接住的雨水量取决于它左边的最高柱子（<code>leftMax</code>）和它右边的最高柱子（<code>rightMax</code>）中较矮的那一个。由于右边的柱子较高，<code>min(leftMax, rightMax)</code> 实际上等于 <code>leftMax</code></li><li>雨水量计算：当前柱子能接住的雨水量为 <code>leftMax - height[left]</code></li></ol>`,29))])}const v=p(u,[["render",k],["__file","42.html.vue"]]),h=JSON.parse('{"path":"/blogs/algorithm/leetcode/42.html","title":"LeetCode 「困难」42.接雨水","lang":"zh-CN","frontmatter":{"title":"LeetCode 「困难」42.接雨水","date":"2025-3-6","editLink":false,"tags":["LeetCode"],"categories":["算法"]},"headers":[{"level":2,"title":"题目描述","slug":"题目描述","link":"#题目描述","children":[]},{"level":2,"title":"解答","slug":"解答","link":"#解答","children":[{"level":3,"title":"暴力法","slug":"暴力法","link":"#暴力法","children":[]},{"level":3,"title":"动态规划","slug":"动态规划","link":"#动态规划","children":[]},{"level":3,"title":"双指针","slug":"双指针","link":"#双指针","children":[]}]}],"git":{"createdTime":1741262459000,"updatedTime":1742544942000,"contributors":[{"name":"sanki","email":"sanqi_3737@163.com","commits":3}]},"filePathRelative":"blogs/algorithm/leetcode/42.md"}');export{v as comp,h as data};
