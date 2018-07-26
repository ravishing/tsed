---
sidebar: auto
meta:
 - name: keywords
   description: api typescript node.js documentation MiddlewareService service
---
# MiddlewareService <Badge text="Service" type="service"/>
<!-- Summary -->
<section class="symbol-info"><table class="is-full-width"><tbody><tr><th>Module</th><td><div class="lang-typescript"><span class="token keyword">import</span> { MiddlewareService }&nbsp;<span class="token keyword">from</span>&nbsp;<span class="token string">"@tsed/common"</span></div></td></tr><tr><th>Source</th><td><a href="https://github.com/Romakita/ts-express-decorators/blob/v4.30.2/src//common/mvc/services/MiddlewareService.ts#L0-L0">/common/mvc/services/MiddlewareService.ts</a></td></tr></tbody></table></section>

<!-- Overview -->
## Overview


<pre><code class="typescript-lang "><span class="token keyword">class</span> MiddlewareService <span class="token keyword">extends</span> <a href="/api/core/class/ProxyMap.html"><span class="token">ProxyMap</span></a>&lt<span class="token punctuation">;</span><a href="/api/core/interfaces/Type.html"><span class="token">Type</span></a>&lt<span class="token punctuation">;</span><span class="token keyword">any</span>&gt<span class="token punctuation">;</span> | <span class="token keyword">any</span><span class="token punctuation">,</span> <a href="/api/common/di/class/Provider.html"><span class="token">Provider</span></a>&lt<span class="token punctuation">;</span><span class="token keyword">any</span>&gt<span class="token punctuation">;</span>&gt<span class="token punctuation">;</span> <span class="token punctuation">{</span>
  <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> injectorService<span class="token punctuation">:</span> <a href="/api/common/di/services/InjectorService.html"><span class="token">InjectorService</span></a><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">super</span><span class="token punctuation">(</span>injectorService<span class="token punctuation">,</span> <span class="token punctuation">{</span>filter<span class="token punctuation">:</span> <span class="token punctuation">{</span>type<span class="token punctuation">:</span> <a href="/api/common/di/interfaces/ProviderType.html"><span class="token">ProviderType</span></a>.MIDDLEWARE<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  @<span class="token function"><a href="/api/core/decorators/Deprecated.html"><span class="token">Deprecated</span></a></span><span class="token punctuation">(</span>"<span class="token keyword">static</span> MiddlewareService.<span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>. Removed feature."<span class="token punctuation">)</span>
  /* istanbul ignore next */
  <span class="token keyword">static</span> <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <a href="/api/core/interfaces/Type.html"><span class="token">Type</span></a>&lt<span class="token punctuation">;</span><span class="token keyword">any</span>&gt<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/common/di/class/Provider.html"><span class="token">Provider</span></a>&lt<span class="token punctuation">;</span><span class="token keyword">any</span>&gt<span class="token punctuation">;</span> | undefined <span class="token punctuation">{</span>
    return <a href="/api/common/di/registries/ProviderRegistry.html"><span class="token">ProviderRegistry</span></a>.<span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  @<span class="token function"><a href="/api/core/decorators/Deprecated.html"><span class="token">Deprecated</span></a></span><span class="token punctuation">(</span>"<span class="token keyword">static</span> MiddlewareService.<span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>. Removed feature."<span class="token punctuation">)</span>
  /* istanbul ignore next */
  <span class="token keyword">static</span> <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <a href="/api/core/interfaces/Type.html"><span class="token">Type</span></a>&lt<span class="token punctuation">;</span><span class="token keyword">any</span>&gt<span class="token punctuation">;</span><span class="token punctuation">,</span> provider<span class="token punctuation">:</span> <a href="/api/common/di/class/Provider.html"><span class="token">Provider</span></a>&lt<span class="token punctuation">;</span><span class="token keyword">any</span>&gt<span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <a href="/api/common/di/registries/ProviderRegistry.html"><span class="token">ProviderRegistry</span></a>.<span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> provider<span class="token punctuation">)</span><span class="token punctuation">;</span>
    return this<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  @<span class="token function"><a href="/api/core/decorators/Deprecated.html"><span class="token">Deprecated</span></a></span><span class="token punctuation">(</span>"<span class="token keyword">static</span> MiddlewareService.<span class="token function">has</span><span class="token punctuation">(</span><span class="token punctuation">)</span>. Removed feature."<span class="token punctuation">)</span>
  /* istanbul ignore next */
  <span class="token keyword">static</span> <span class="token function">has</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <a href="/api/core/interfaces/Type.html"><span class="token">Type</span></a>&lt<span class="token punctuation">;</span><span class="token keyword">any</span>&gt<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">boolean</span> <span class="token punctuation">{</span>
    return <a href="/api/common/di/registries/ProviderRegistry.html"><span class="token">ProviderRegistry</span></a>.<span class="token function">has</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  @<span class="token function"><a href="/api/core/decorators/Deprecated.html"><span class="token">Deprecated</span></a></span><span class="token punctuation">(</span>"MiddlewareService.<span class="token function">invoke</span><span class="token punctuation">(</span><span class="token punctuation">)</span>. Removed feature. <a href="/api/common/mvc/decorators/method/Use.html"><span class="token">Use</span></a> injectorService.invoke instead of."<span class="token punctuation">)</span>
  /* istanbul ignore next */
  invoke&lt<span class="token punctuation">;</span>T <span class="token keyword">extends</span> <a href="/api/common/mvc/interfaces/IMiddleware.html"><span class="token">IMiddleware</span></a>&gt<span class="token punctuation">;</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <a href="/api/core/interfaces/Type.html"><span class="token">Type</span></a>&lt<span class="token punctuation">;</span>T&gt<span class="token punctuation">;</span><span class="token punctuation">,</span> locals<span class="token punctuation">:</span> Map&lt<span class="token punctuation">;</span>Function<span class="token punctuation">,</span> <span class="token keyword">any</span>&gt<span class="token punctuation">;</span><span class="token punctuation"> = </span>new Map&lt<span class="token punctuation">;</span>Function<span class="token punctuation">,</span> <span class="token keyword">any</span>&gt<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> designParamTypes?<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> T <span class="token punctuation">{</span>
    return this.injectorService.invoke&lt<span class="token punctuation">;</span>T&gt<span class="token punctuation">;</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> locals<span class="token punctuation">,</span> designParamTypes<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  @<span class="token function"><a href="/api/core/decorators/Deprecated.html"><span class="token">Deprecated</span></a></span><span class="token punctuation">(</span>"MiddlewareService.<span class="token function">invokeMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span>. removed feature"<span class="token punctuation">)</span>
  /* istanbul ignore next */
  invokeMethod&lt<span class="token punctuation">;</span>T <span class="token keyword">extends</span> <a href="/api/common/mvc/interfaces/IMiddleware.html"><span class="token">IMiddleware</span></a>&gt<span class="token punctuation">;</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <a href="/api/core/interfaces/Type.html"><span class="token">Type</span></a>&lt<span class="token punctuation">;</span>T&gt<span class="token punctuation">;</span><span class="token punctuation">,</span> ...args<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> instance<span class="token punctuation"> = </span>this.injectorService.get&lt<span class="token punctuation">;</span>T&gt<span class="token punctuation">;</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
    if <span class="token punctuation">(</span>!instance || !instance.use<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      throw new <span class="token function"><a href="/api/common/mvc/errors/UnknowMiddlewareError.html"><span class="token">UnknowMiddlewareError</span></a></span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    return instance.<span class="token function">use</span><span class="token punctuation">(</span>...args<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>



<!-- Members -->




## Members


::: v-pre

<div class="method-overview">
<pre><code class="typescript-lang deprecated ">@<span class="token function"><a href="/api/core/decorators/Deprecated.html"><span class="token">Deprecated</span></a></span><span class="token punctuation">(</span>"<span class="token keyword">static</span> <a href="/api/common/mvc/services/MiddlewareService.html"><span class="token">MiddlewareService</span></a>.<span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>. Removed feature."<span class="token punctuation">)</span></code></pre>

</div>



:::



***



::: v-pre

<div class="method-overview">
<pre><code class="typescript-lang ">/* istanbul ignore next */</code></pre>

</div>



:::



***



::: v-pre

<div class="method-overview">
<pre><code class="typescript-lang "><span class="token keyword">static</span> <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <a href="/api/core/interfaces/Type.html"><span class="token">Type</span></a>&lt<span class="token punctuation">;</span><span class="token keyword">any</span>&gt<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/common/di/class/Provider.html"><span class="token">Provider</span></a>&lt<span class="token punctuation">;</span><span class="token keyword">any</span>&gt<span class="token punctuation">;</span> | undefined <span class="token punctuation">{</span>
 return <a href="/api/common/di/registries/ProviderRegistry.html"><span class="token">ProviderRegistry</span></a>.<span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span></code></pre>

</div>



:::



***



::: v-pre

<div class="method-overview">
<pre><code class="typescript-lang ">@<span class="token function"><a href="/api/core/decorators/Deprecated.html"><span class="token">Deprecated</span></a></span><span class="token punctuation">(</span>"<span class="token keyword">static</span> <a href="/api/common/mvc/services/MiddlewareService.html"><span class="token">MiddlewareService</span></a>.<span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>. Removed feature."<span class="token punctuation">)</span></code></pre>

</div>



:::



***



::: v-pre

<div class="method-overview">
<pre><code class="typescript-lang ">/* istanbul ignore next */</code></pre>

</div>



:::



***



::: v-pre

<div class="method-overview">
<pre><code class="typescript-lang "><span class="token keyword">static</span> <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <a href="/api/core/interfaces/Type.html"><span class="token">Type</span></a>&lt<span class="token punctuation">;</span><span class="token keyword">any</span>&gt<span class="token punctuation">;</span><span class="token punctuation">,</span> provider<span class="token punctuation">:</span> <a href="/api/common/di/class/Provider.html"><span class="token">Provider</span></a>&lt<span class="token punctuation">;</span><span class="token keyword">any</span>&gt<span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <a href="/api/common/di/registries/ProviderRegistry.html"><span class="token">ProviderRegistry</span></a>.<span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> provider<span class="token punctuation">)</span><span class="token punctuation">;</span>
 return this<span class="token punctuation">;</span>
  <span class="token punctuation">}</span></code></pre>

</div>



:::



***



::: v-pre

<div class="method-overview">
<pre><code class="typescript-lang deprecated ">@<span class="token function"><a href="/api/core/decorators/Deprecated.html"><span class="token">Deprecated</span></a></span><span class="token punctuation">(</span>"<span class="token keyword">static</span> <a href="/api/common/mvc/services/MiddlewareService.html"><span class="token">MiddlewareService</span></a>.<span class="token function">has</span><span class="token punctuation">(</span><span class="token punctuation">)</span>. Removed feature."<span class="token punctuation">)</span></code></pre>

</div>



:::



***



::: v-pre

<div class="method-overview">
<pre><code class="typescript-lang ">/* istanbul ignore next */</code></pre>

</div>



:::



***



::: v-pre

<div class="method-overview">
<pre><code class="typescript-lang "><span class="token keyword">static</span> <span class="token function">has</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <a href="/api/core/interfaces/Type.html"><span class="token">Type</span></a>&lt<span class="token punctuation">;</span><span class="token keyword">any</span>&gt<span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">boolean</span> <span class="token punctuation">{</span>
 return <a href="/api/common/di/registries/ProviderRegistry.html"><span class="token">ProviderRegistry</span></a>.<span class="token function">has</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span></code></pre>

</div>



:::



***



::: v-pre

<div class="method-overview">
<pre><code class="typescript-lang ">@<span class="token function"><a href="/api/core/decorators/Deprecated.html"><span class="token">Deprecated</span></a></span><span class="token punctuation">(</span>"<a href="/api/common/mvc/services/MiddlewareService.html"><span class="token">MiddlewareService</span></a>.<span class="token function">invoke</span><span class="token punctuation">(</span><span class="token punctuation">)</span>. Removed feature. <a href="/api/common/mvc/decorators/method/Use.html"><span class="token">Use</span></a> injectorService.invoke instead of."<span class="token punctuation">)</span></code></pre>

</div>



:::



***



::: v-pre

<div class="method-overview">
<pre><code class="typescript-lang ">/* istanbul ignore next */</code></pre>

</div>



:::



***



::: v-pre

<div class="method-overview">
<pre><code class="typescript-lang ">invoke&lt<span class="token punctuation">;</span>T <span class="token keyword">extends</span> <a href="/api/common/mvc/interfaces/IMiddleware.html"><span class="token">IMiddleware</span></a>&gt<span class="token punctuation">;</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <a href="/api/core/interfaces/Type.html"><span class="token">Type</span></a>&lt<span class="token punctuation">;</span>T&gt<span class="token punctuation">;</span><span class="token punctuation">,</span> locals<span class="token punctuation">:</span> Map&lt<span class="token punctuation">;</span>Function<span class="token punctuation">,</span> <span class="token keyword">any</span>&gt<span class="token punctuation">;</span><span class="token punctuation"> = </span>new Map&lt<span class="token punctuation">;</span>Function<span class="token punctuation">,</span> <span class="token keyword">any</span>&gt<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> designParamTypes?<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> T <span class="token punctuation">{</span>
 return this.injectorService.invoke&lt<span class="token punctuation">;</span>T&gt<span class="token punctuation">;</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> locals<span class="token punctuation">,</span> designParamTypes<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span></code></pre>

</div>



:::



***



::: v-pre

<div class="method-overview">
<pre><code class="typescript-lang ">@<span class="token function"><a href="/api/core/decorators/Deprecated.html"><span class="token">Deprecated</span></a></span><span class="token punctuation">(</span>"<a href="/api/common/mvc/services/MiddlewareService.html"><span class="token">MiddlewareService</span></a>.<span class="token function">invokeMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span>. removed feature"<span class="token punctuation">)</span></code></pre>

</div>



:::



***



::: v-pre

<div class="method-overview">
<pre><code class="typescript-lang ">/* istanbul ignore next */</code></pre>

</div>



:::



***



::: v-pre

<div class="method-overview">
<pre><code class="typescript-lang ">invokeMethod&lt<span class="token punctuation">;</span>T <span class="token keyword">extends</span> <a href="/api/common/mvc/interfaces/IMiddleware.html"><span class="token">IMiddleware</span></a>&gt<span class="token punctuation">;</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <a href="/api/core/interfaces/Type.html"><span class="token">Type</span></a>&lt<span class="token punctuation">;</span>T&gt<span class="token punctuation">;</span><span class="token punctuation">,</span> ...args<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">const</span> instance<span class="token punctuation"> = </span>this.injectorService.get&lt<span class="token punctuation">;</span>T&gt<span class="token punctuation">;</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
 if <span class="token punctuation">(</span>!instance || !instance.use<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   throw new <span class="token function"><a href="/api/common/mvc/errors/UnknowMiddlewareError.html"><span class="token">UnknowMiddlewareError</span></a></span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 return instance.<span class="token function">use</span><span class="token punctuation">(</span>...args<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span></code></pre>

</div>



:::