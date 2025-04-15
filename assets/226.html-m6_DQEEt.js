import{_ as e,c as t,a as s,e as l,d as i,b as p,r as c,o}from"./app-DOK2Wtno.js";const r={},d={href:"https://leetcode.cn/problems/invert-binary-tree/description/",target:"_blank",rel:"noopener noreferrer"};function u(v,n){const a=c("ExternalLinkIcon");return o(),t("div",null,[s("blockquote",null,[s("p",null,[s("a",d,[n[0]||(n[0]=i("翻转二叉树")),p(a)])])]),n[1]||(n[1]=l(`<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述"><span>题目描述</span></a></h2><p>给你一棵二叉树的根节点 <code>root</code> ，翻转这棵二叉树，并返回其根节点。</p><p><strong>示例</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">输入：root = [4,2,7,1,3,6,9]</span>
<span class="line">输出：[4,7,2,9,6,3,1]</span>
<span class="line"></span>
<span class="line">输入：root = [2,1,3]</span>
<span class="line">输出：[2,3,1]</span>
<span class="line"></span>
<span class="line">输入：root = []</span>
<span class="line">输出：[]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解答" tabindex="-1"><a class="header-anchor" href="#解答"><span>解答</span></a></h2><details class="custom-container details"><summary class="custom-container-title">Code</summary><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Definition for a binary tree node.</span>
<span class="line"> * function TreeNode(val, left, right) <span class="token punctuation">{</span></span>
<span class="line"> *     this.val = (val===undefined ? 0 : val)</span>
<span class="line"> *     this.left = (left===undefined ? null : left)</span>
<span class="line"> *     this.right = (right===undefined ? null : right)</span>
<span class="line"> * <span class="token punctuation">}</span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span></span>
<span class="line"> * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">var</span> <span class="token function-variable function">invertTree</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> root<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> temp <span class="token operator">=</span> root<span class="token punctuation">.</span>left<span class="token punctuation">;</span></span>
<span class="line">  root<span class="token punctuation">.</span>left <span class="token operator">=</span> root<span class="token punctuation">.</span>right<span class="token punctuation">;</span></span>
<span class="line">  root<span class="token punctuation">.</span>right <span class="token operator">=</span> temp<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">invertTree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token function">invertTree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> root<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,6))])}const k=e(r,[["render",u],["__file","226.html.vue"]]),b=JSON.parse('{"path":"/blogs/algorithm/leetcode/226.html","title":"LeetCode 「简单」226.翻转二叉树","lang":"zh-CN","frontmatter":{"title":"LeetCode 「简单」226.翻转二叉树","date":"2025-3-10","editLink":false,"tags":["LeetCode"],"categories":["算法"]},"headers":[{"level":2,"title":"题目描述","slug":"题目描述","link":"#题目描述","children":[]},{"level":2,"title":"解答","slug":"解答","link":"#解答","children":[]}],"git":{"createdTime":1741607544000,"updatedTime":1741607544000,"contributors":[{"name":"sanki","email":"sanqi_3737@163.com","commits":1}]},"filePathRelative":"blogs/algorithm/leetcode/226.md"}');export{k as comp,b as data};
