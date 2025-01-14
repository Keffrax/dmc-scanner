!function(){function e(e,t,o,i){Object.defineProperty(e,t,{get:o,set:i,enumerable:!0,configurable:!0})}var t,o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},s=o.parcelRequire94c2;null==s&&((s=function(e){if(e in i)return i[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return i[e]=o,t.call(o.exports,o,o.exports),o.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},o.parcelRequire94c2=s);var a=s.register;a("iE7OH",function(t,o){e(t.exports,"register",function(){return i},function(e){return i=e}),e(t.exports,"resolve",function(){return r},function(e){return r=e});var i,r,s=new Map;i=function(e,t){for(var o=0;o<t.length-1;o+=2)s.set(t[o],{baseUrl:e,path:t[o+1]})},r=function(e){var t=s.get(e);if(null==t)throw Error("Could not resolve bundle with id "+e);return new URL(t.path,t.baseUrl).toString()}}),a("aNJCr",function(t,o){e(t.exports,"getBundleURL",function(){return i},function(e){return i=e});var i,r={};i=function(e){var t=r[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),r[e]=t),t}}),a("bkcP3",function(e,t){e.exports=s("4WKyX")(s("iE7OH").resolve("iqysf")).then(()=>s("dZsGG"))}),a("4WKyX",function(e,t){var o=s("2prpb");e.exports=o(function(e){return new Promise(function(t,o){if([].concat(document.getElementsByTagName("script")).some(function(t){return t.src===e})){t();return}var i=document.createElement("link");i.href=e,i.rel="preload",i.as="script",document.head.appendChild(i);var r=document.createElement("script");r.async=!0,r.type="text/javascript",r.src=e,r.onerror=function(t){var i=TypeError("Failed to fetch dynamically imported module: ".concat(e,". Error: ").concat(t.message));r.onerror=r.onload=null,r.remove(),o(i)},r.onload=function(){r.onerror=r.onload=null,t()},document.getElementsByTagName("head")[0].appendChild(r)})})}),a("2prpb",function(e,t){var o={},i={},r={};e.exports=function(e,t){return function(s){var a=function(e){switch(e){case"preload":return i;case"prefetch":return r;default:return o}}(t);return a[s]?a[s]:a[s]=e.apply(null,arguments).catch(function(e){throw delete a[s],e})}}}),s("iE7OH").register(s("aNJCr").getBundleURL("9p9yL"),JSON.parse('["9p9yL","index.36010530.js","iqysf","es.b12f2a91.js"]'));/*!
 * @georapbox/a-tab-group
 * A custom element to create a group of tabs and tab panels.
 *
 * @version 2.4.1
 * @homepage https://github.com/georapbox/a-tab-group#readme
 * @author George Raptis <georapbox@gmail.com>
 * @license MIT
 */var n=(e="",t="")=>{let o=Math.random().toString(36).substring(2,8);return`${"string"==typeof e&&""!==e?e+"-":""}${o}${"string"==typeof t&&""!==t?"-"+t:""}`},l=(e,t)=>{if(Object.prototype.hasOwnProperty.call(t,e)){let o=t[e];delete t[e],t[e]=o}},d=0,c=`
  :host {
    box-sizing: border-box;
    display: inline-block;
    contain: content;
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: 0.375rem 0.75rem;
    white-space: nowrap;
    cursor: pointer;
  }

  :host([disabled]) .tab {
    opacity: 0.7;
    cursor: not-allowed;
  }

  :host([selected]) .tab {
    color: var(--selected-tab-color);
    background-color: var(--selected-tab-bg-color);
  }

  .tab__close {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem;
    font-size: inherit;
    cursor: pointer;
  }
`,h=document.createElement("template");h.innerHTML=`
  <style>
    ${c}
  </style>

  <div part="base" class="tab">
    <slot></slot>
  </div>
`,(class e extends HTMLElement{constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(h.content.cloneNode(!0))}static get observedAttributes(){return["selected","disabled","closable"]}attributeChangedCallback(e,t,o){if("selected"===e&&t!==o&&(this.setAttribute("aria-selected",this.selected.toString()),this.setAttribute("tabindex",this.disabled||!this.selected?"-1":"0")),"disabled"===e&&t!==o&&(this.setAttribute("aria-disabled",this.disabled.toString()),this.setAttribute("tabindex",this.disabled||!this.selected?"-1":"0")),"closable"===e&&t!==o){if(this.closable){let e=document.createElement("span");e.className="tab__close",e.setAttribute("part","close-tab"),e.innerHTML='<svg part="close-tab-icon" xmlns="http://www.w3.org/2000/svg" width="0.875em" height="0.875em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>',this.shadowRoot?.querySelector(".tab")?.appendChild(e),e.addEventListener("click",this.#e)}else{let e=this.shadowRoot?.querySelector(".tab__close");e?.removeEventListener("click",this.#e),e?.remove()}}}connectedCallback(){this.#t("selected"),this.#t("disabled"),this.#t("closable"),this.id||(this.id=n("tab",(++d).toString())),this.setAttribute("slot","tab"),this.setAttribute("role","tab"),this.setAttribute("aria-selected","false"),this.setAttribute("tabindex",this.disabled||!this.selected?"-1":"0")}disconnectedCallback(){this.shadowRoot?.querySelector(".tab__close")?.removeEventListener("click",this.#e)}get selected(){return this.hasAttribute("selected")}set selected(e){this.toggleAttribute("selected",!!e)}get disabled(){return this.hasAttribute("disabled")}set disabled(e){this.toggleAttribute("disabled",!!e)}get closable(){return this.hasAttribute("closable")}set closable(e){this.toggleAttribute("closable",!!e)}#e=e=>{e.stopPropagation(),this.dispatchEvent(new CustomEvent("a-tab-close",{bubbles:!0,composed:!0,detail:{tabId:this.id}}))};#t(e){return l(e,this)}static defineCustomElement(t="a-tab"){"u">typeof window&&!window.customElements.get(t)&&window.customElements.define(t,e)}}).defineCustomElement();var u=0,m=`
  :host {
    box-sizing: border-box;
    display: block;
    contain: content;
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }
`,p=document.createElement("template");p.innerHTML=`
  <style>
    ${m}
  </style>

  <div part="base" class="tab-panel">
    <slot></slot>
  </div>
`,(class e extends HTMLElement{constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(p.content.cloneNode(!0))}connectedCallback(){this.setAttribute("slot","panel"),this.setAttribute("role","tabpanel"),this.setAttribute("hidden",""),this.id||(this.id=n("panel",(++u).toString()))}static defineCustomElement(t="a-tab-panel"){"u">typeof window&&!window.customElements.get(t)&&window.customElements.define(t,e)}}).defineCustomElement();var b={TOP:"top",BOTTOM:"bottom",START:"start",END:"end"},g={LTR:"ltr",RTL:"rtl"},f=Object.entries(b).map(([,e])=>e),v={AUTO:"auto",MANUAL:"manual"},y={DOWN:"ArrowDown",LEFT:"ArrowLeft",RIGHT:"ArrowRight",UP:"ArrowUp",HOME:"Home",END:"End",ENTER:"Enter",SPACE:" "},w=`
  :host {
    --selected-tab-color: #005fcc;
    --selected-tab-bg-color: transparent;
    --tabs-scroll-behavior: smooth;
    --scroll-button-width: 2.125em;
    --scroll-button-height: 2.125em;
    --scroll-button-inline-offset: 0rem;

    box-sizing: border-box;
    display: block;
    contain: content;
  }

  @media (prefers-reduced-motion: reduce) {
    :host {
      --tabs-scroll-behavior: auto;
    }
  }

  :host([hidden]),
  [hidden],
  ::slotted([hidden]) {
    display: none !important;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  .tab-group {
    display: flex;
    width: 100%;
  }

  .tab-group__nav {
    position: relative;
  }

  .tab-group__nav--has-scroll-controls {
    padding: 0 calc(var(--scroll-button-width) + var(--scroll-button-inline-offset));
  }

  .tab-group__scroll-button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: var(--scroll-button-width);
    height: var(--scroll-button-height);
    padding: 0; /* Required for iOS, otherwise the svg is not visible: https://stackoverflow.com/questions/66532071/flex-svg-behaving-strange-in-ios-safari-14-0-3 */
    border: 0;
    z-index: 1;
    background-color: transparent;
    font-size: inherit;
    cursor: pointer;
    color: currentColor;
  }

  .tab-group__scroll-button--start {
    left: var(--scroll-button-inline-offset);
  }

  .tab-group__scroll-button--end {
    right: var(--scroll-button-inline-offset);
  }

  :host([dir="${g.RTL}"]) .tab-group__scroll-button--start,
  :host(:dir(${g.RTL})) .tab-group__scroll-button--start {
    right: var(--scroll-button-inline-offset);
    left: auto;
    transform: translateY(-50%) rotate(180deg);
  }

  :host([dir="${g.RTL}"]) .tab-group__scroll-button--end,
  :host(:dir(${g.RTL})) .tab-group__scroll-button--end {
    left: var(--scroll-button-inline-offset);
    right: auto;
    transform: translateY(-50%) rotate(180deg);
  }

  .tab-group__tabs {
    display: flex;
    padding: 0.25rem;
    overflow-x: auto;
    scroll-behavior: var(--tabs-scroll-behavior);
    scrollbar-width: none;
  }

  .tab-group__tabs::-webkit-scrollbar {
    display: none;
  }

  .tab-group__panels {
    padding: 1rem 0;
  }

  /* placement="top" */
  .tab-group,
  :host([placement="${b.TOP}"]) .tab-group {
    flex-direction: column;
  }

  /* placement="bottom" */
  :host([placement="${b.BOTTOM}"]) .tab-group {
    flex-direction: column;
  }

  :host([placement="${b.BOTTOM}"]) .tab-group__nav {
    order: 1;
  }

  /* placement="start" */
  :host([placement="${b.START}"]) .tab-group {
    flex-direction: row;
  }

  :host([placement="${b.START}"]) .tab-group__tabs {
    flex-direction: column;
    align-items: flex-start;
  }

  :host([placement="${b.START}"]) .tab-group__panels {
    flex: 1;
    padding: 0 1rem;
  }

  /* placement="end" */
  :host([placement="${b.END}"]) .tab-group {
    flex-direction: row;
  }

  :host([placement="${b.END}"]) .tab-group__nav {
    order: 1;
  }

  :host([placement="${b.END}"]) .tab-group__tabs {
    flex-direction: column;
    align-items: flex-start;
  }

  :host([placement="${b.END}"]) .tab-group__panels {
    flex: 1;
    padding: 0 1rem;
  }
`,E=document.createElement("template");E.innerHTML=`
  <style>${w}</style>

  <div part="base" class="tab-group">
    <div part="nav" class="tab-group__nav">
      <button type="button" part="scroll-button scroll-button--start" class="tab-group__scroll-button tab-group__scroll-button--start" aria-label="Scroll to start">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" part="scroll-button-icon">
          <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>
      </button>

      <div part="tabs" class="tab-group__tabs" role="tablist" tabindex="-1">
        <slot name="tab"></slot>
      </div>

      <button type="button" part="scroll-button scroll-button--end" class="tab-group__scroll-button tab-group__scroll-button--end" aria-label="Scroll to end">
        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1em" fill="currentColor" viewBox="0 0 16 16" part="scroll-button-icon">
          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </button>
    </div>

    <div part="panels" class="tab-group__panels">
      <slot name="panel"></slot>
    </div>
  </div>
`,(class e extends HTMLElement{#e=null;#t=null;#o=!1;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(E.content.cloneNode(!0))}static get observedAttributes(){return["placement","no-scroll-controls"]}attributeChangedCallback(e,t,o){"placement"===e&&t!==o&&this.#i(),"no-scroll-controls"===e&&t!==o&&this.#i()}get placement(){return this.getAttribute("placement")||b.TOP}set placement(e){null!=e&&this.setAttribute("placement",e)}get noScrollControls(){return this.hasAttribute("no-scroll-controls")}set noScrollControls(e){this.toggleAttribute("no-scroll-controls",!!e)}get scrollDistance(){return Math.abs(Number(this.getAttribute("scroll-distance")))||200}set scrollDistance(e){this.setAttribute("scroll-distance",Math.abs(e).toString()||"200")}get activation(){return this.getAttribute("activation")||v.AUTO}set activation(e){this.setAttribute("activation",e||v.AUTO)}get noTabCycling(){return this.hasAttribute("no-tab-cycling")}set noTabCycling(e){this.toggleAttribute("no-tab-cycling",!!e)}connectedCallback(){this.#r("placement"),this.#r("noScrollControls"),this.#r("scrollDistance"),this.#r("activation"),this.#r("noTabCycling");let e=this.shadowRoot?.querySelector("slot[name=tab]"),t=this.shadowRoot?.querySelector("slot[name=panel]"),o=this.shadowRoot?.querySelector(".tab-group__tabs"),i=this.shadowRoot?.querySelector(".tab-group__nav"),r=Array.from(this.shadowRoot?.querySelectorAll(".tab-group__scroll-button")||[]);e?.addEventListener("slotchange",this.#s),t?.addEventListener("slotchange",this.#s),o?.addEventListener("click",this.#a),o?.addEventListener("keydown",this.#n),r.forEach(e=>e.addEventListener("click",this.#l)),this.addEventListener("a-tab-close",this.#d),"ResizeObserver"in window&&(this.#e=new ResizeObserver(e=>{this.#t=window.requestAnimationFrame(()=>{let t=e?.[0]?.target,o=t?.scrollWidth>t?.clientWidth;r.forEach(e=>e.toggleAttribute("hidden",!o)),i?.part.toggle("nav--has-scroll-controls",o),i?.classList.toggle("tab-group__nav--has-scroll-controls",o)})})),this.#c(),this.#i()}disconnectedCallback(){let e=this.shadowRoot?.querySelector("slot[name=tab]"),t=this.shadowRoot?.querySelector("slot[name=panel]"),o=this.shadowRoot?.querySelector(".tab-group__tabs"),i=Array.from(this.shadowRoot?.querySelectorAll(".tab-group__scroll-button")||[]);e?.removeEventListener("slotchange",this.#s),t?.removeEventListener("slotchange",this.#s),o?.removeEventListener("click",this.#a),o?.removeEventListener("keydown",this.#n),i.forEach(e=>e.removeEventListener("click",this.#l)),this.removeEventListener("a-tab-close",this.#d),this.#h()}#u(){if(!this.#e)return;let e=this.shadowRoot?.querySelector(".tab-group__tabs");e&&(this.#e.unobserve(e),this.#e.observe(e))}#h(){this.#e&&(this.#e.disconnect(),null!==this.#t&&(window.cancelAnimationFrame(this.#t),this.#t=null))}#m(){return window.CSS.supports("selector(:dir(ltr))")?this.matches(":dir(ltr)")?g.LTR:g.RTL:window.getComputedStyle(this).direction||g.LTR}#c(){this.hidden=0===this.#p().length}#b(){let e=this.#p();this.#c(),e.forEach(e=>{let t=e.nextElementSibling;if(!t||"a-tab-panel"!==t.tagName.toLowerCase())return console.error(`Tab #${e.id} is not a sibling of a <a-tab-panel>`);e.setAttribute("aria-controls",t.id),t.setAttribute("aria-labelledby",e.id)})}#g(){return Array.from(this.querySelectorAll("a-tab-panel"))}#p(){return Array.from(this.querySelectorAll("a-tab"))}#f(e){let t=e.getAttribute("aria-controls");return this.querySelector(`#${t}`)}#v(){return this.#p().find(e=>!e.disabled)||null}#y(){let e=this.#p();for(let t=e.length-1;t>=0;t--)if(!e[t].disabled)return e[t];return null}#w(){let e=this.#p(),t=this.activation===v.MANUAL?e.findIndex(e=>e.matches(":focus"))-1:e.findIndex(e=>e.selected)-1;for(;e[(t+e.length)%e.length].disabled;)t--;return this.noTabCycling&&t<0?null:e[(t+e.length)%e.length]}#E(){let e=this.#p(),t=this.activation===v.MANUAL?e.findIndex(e=>e.matches(":focus"))+1:e.findIndex(e=>e.selected)+1;for(;e[t%e.length].disabled;)t++;return this.noTabCycling&&t>=e.length?null:e[t%e.length]}#x(){let e=this.#p(),t=this.#g();e.forEach(e=>e.selected=!1),t.forEach(e=>e.hidden=!0)}#i(){let e=this.shadowRoot?.querySelector(".tab-group__nav"),t=this.shadowRoot?.querySelector(".tab-group__tabs"),o=Array.from(this.shadowRoot?.querySelectorAll(".tab-group__scroll-button")||[]);this.noScrollControls||this.placement===b.START||this.placement===b.END?(this.#h(),o.forEach(e=>e.hidden=!0),e?.part.remove("nav--has-scroll-controls"),e?.classList.remove("tab-group__nav--has-scroll-controls"),t?.setAttribute("aria-orientation","vertical")):(this.#u(),o.forEach(e=>e.hidden=!1),t?.setAttribute("aria-orientation","horizontal"))}#A(){let e=this.#p(),t=e.find(e=>e.selected&&!e.disabled)||e.find(e=>!e.disabled);t&&(this.#o&&!t.selected&&this.dispatchEvent(new CustomEvent("a-tab-show",{bubbles:!0,composed:!0,detail:{tabId:t.id}})),this.#k(t))}#k(e){this.#x(),e&&(e.selected=!0);let t=this.#f(e);t&&(t.hidden=!1)}#s=e=>{this.#b(),this.#i(),this.#A(),"tab"===e.target.name&&(this.#o=!0)};#n=e=>{if("a-tab"!==e.target.tagName.toLowerCase()||e.altKey)return;let t=f.includes(this.placement||"")?this.placement:b.TOP,o=[b.TOP,b.BOTTOM].includes(t||"")?"horizontal":"vertical",i=this.#m(),r=null;switch(e.key){case y.LEFT:"horizontal"===o&&(r=i===g.LTR?this.#w():this.#E())&&(this.activation===v.MANUAL?r.focus():this.selectTab(r));break;case y.RIGHT:"horizontal"===o&&(r=i===g.LTR?this.#E():this.#w())&&(this.activation===v.MANUAL?r.focus():this.selectTab(r));break;case y.UP:"vertical"===o&&(r=this.#w())&&(this.activation===v.MANUAL?r.focus():this.selectTab(r));break;case y.DOWN:"vertical"===o&&(r=this.#E())&&(this.activation===v.MANUAL?r.focus():this.selectTab(r));break;case y.HOME:(r=this.#v())&&(this.activation===v.MANUAL?r.focus():this.selectTab(r));break;case y.END:(r=this.#y())&&(this.activation===v.MANUAL?r.focus():this.selectTab(r));break;case y.ENTER:case y.SPACE:(r=e.target)&&this.selectTab(r);break;default:return}e.preventDefault()};#a=e=>{let t=e.target.closest("a-tab");t&&this.selectTab(t)};#l=e=>{let t=e.target.closest(".tab-group__scroll-button"),o=this.shadowRoot?.querySelector(".tab-group__tabs");if(!t||!o)return;let i=t.classList.contains("tab-group__scroll-button--start"),r=this.#m()===g.LTR,s=o.scrollLeft;o.scrollTo({left:s+(i?r?-1:1:r?1:-1)*this.scrollDistance})};#d=e=>{let t=e.target,o=this.#f(t);t&&(t.remove(),t.selected&&this.dispatchEvent(new CustomEvent("a-tab-hide",{bubbles:!0,composed:!0,detail:{tabId:t.id}}))),o&&"a-tab-panel"===o.tagName.toLowerCase()&&o.remove()};#r(e){return l(e,this)}selectTabByIndex(e){let t=this.#p()[e];t&&this.selectTab(t)}selectTabById(e){let t=this.#p().find(t=>t.id===e);t&&this.selectTab(t)}selectTab(e){let t=this.#p().find(e=>e.selected);!e||e.disabled||e.selected||"a-tab"!==e.tagName.toLowerCase()||(this.#k(e),window.requestAnimationFrame(()=>{e.scrollIntoView({inline:"nearest",block:"nearest"}),e.focus()}),t&&this.dispatchEvent(new CustomEvent("a-tab-hide",{bubbles:!0,composed:!0,detail:{tabId:t.id}})),this.dispatchEvent(new CustomEvent("a-tab-show",{bubbles:!0,composed:!0,detail:{tabId:e.id}})))}static defineCustomElement(t="a-tab-group"){"u">typeof window&&!window.customElements.get(t)&&window.customElements.define(t,e)}}).defineCustomElement();/*!
 * @georapbox/web-share-element
 * A custom element that implements the Web Share API to share user-defined data.
 *
 * @version 3.1.1
 * @homepage https://github.com/georapbox/web-share-element#readme
 * @author George Raptis <georapbox@gmail.com>
 * @license MIT
 */var x=`
  :host {
    display: inline-block;
  }
`,A=document.createElement("template");A.innerHTML=`
  <style>${x}</style>
  <slot name="button"><button type="button" part="button"><slot name="button-content">Share</slot></button></slot>
`,(class e extends HTMLElement{#e;#p;#E=[];constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0}).appendChild(A.content.cloneNode(!0)),this.#e=this.shadowRoot?.querySelector('slot[name="button"]')||null,this.#p=this.#c()}static get observedAttributes(){return["disabled"]}attributeChangedCallback(e,t,o){"disabled"===e&&t!==o&&this.#p&&(this.#p.toggleAttribute("disabled",this.disabled),this.#p.setAttribute("aria-disabled",this.disabled.toString()),this.#p.part&&this.#p.part.contains("button")&&this.#p.part.toggle("button--disabled",this.disabled))}connectedCallback(){this.#t("shareUrl"),this.#t("shareTitle"),this.#t("shareText"),this.#t("shareFiles"),this.#t("disabled"),this.#e?.addEventListener("slotchange",this.#w),this.#p?.addEventListener("click",this.#i)}disconnectedCallback(){this.#e?.removeEventListener("slotchange",this.#w),this.#p?.removeEventListener("click",this.#i)}get disabled(){return this.hasAttribute("disabled")}set disabled(e){this.toggleAttribute("disabled",!!e)}get shareUrl(){return this.getAttribute("share-url")||""}set shareUrl(e){this.setAttribute("share-url",e)}get shareTitle(){return this.getAttribute("share-title")||""}set shareTitle(e){this.setAttribute("share-title",e)}get shareText(){return this.getAttribute("share-text")||""}set shareText(e){this.setAttribute("share-text",e)}get shareFiles(){return this.#E}set shareFiles(e){Array.isArray(e)&&e.length>0&&(this.#E=e)}async share(){if(!this.disabled)try{let e={};this.shareUrl&&(e.url=this.shareUrl),this.shareTitle&&(e.title=this.shareTitle),this.shareText&&(e.text=this.shareText),Array.isArray(this.shareFiles)&&this.shareFiles.length>0&&navigator.canShare&&navigator.canShare({files:this.shareFiles})&&(e.files=this.shareFiles),await navigator.share(e),this.dispatchEvent(new CustomEvent("web-share:success",{bubbles:!0,composed:!0,detail:{shareData:e}}))}catch(e){if(e instanceof Error&&"AbortError"===e.name){this.dispatchEvent(new CustomEvent("web-share:abort",{bubbles:!0,composed:!0,detail:{error:e}}));return}this.dispatchEvent(new CustomEvent("web-share:error",{bubbles:!0,composed:!0,detail:{error:e}}))}}#i=e=>{e.preventDefault(),this.disabled||this.share()};#w=e=>{e.target&&"button"===e.target.name&&(this.#p?.removeEventListener("click",this.#i),this.#p=this.#c(),this.#p&&(this.#p.addEventListener("click",this.#i),"BUTTON"===this.#p.nodeName||this.#p.hasAttribute("role")||this.#p.setAttribute("role","button")))};#c(){return this.#e&&this.#e.assignedElements({flatten:!0}).find(e=>"BUTTON"===e.nodeName||"button"===e.getAttribute("slot"))||null}#t(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}static defineCustomElement(t="web-share"){"u">typeof window&&!window.customElements.get(t)&&window.customElements.define(t,e)}}).defineCustomElement();var k=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["jxl","image/jxl"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["markdown","text/markdown"],["md","text/markdown"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]),C=[".DS_Store","Thumbs.db"],z=e=>{let{name:t}=e;if(t&&-1!==t.lastIndexOf(".")&&!e.type){let o=(t.split(".").pop()||"").toLowerCase(),i=k.get(o);i&&Object.defineProperty(e,"type",{value:i,writable:!1,configurable:!1,enumerable:!0})}return e},L=(e,t)=>{let o=z(e);if("string"!=typeof o.path){let{webkitRelativePath:i}=e;Object.defineProperty(o,"path",{value:"string"==typeof t?t:i||e.name,writable:!1,configurable:!1,enumerable:!0})}return o},S=async e=>await new Promise((t,o)=>{e.readEntries(t,o)}),T=async e=>{let t=[],o=await S(e);for(;o.length>0;)t.push(...o),o=await S(e);return t},_=e=>new Promise((t,o)=>{e.file(o=>t(L(o,e.fullPath)),o)}),M=async e=>{let t=[],o=[];for(let t of e){if("file"!==t.kind)continue;let e=t.getAsEntry?t.getAsEntry():t.webkitGetAsEntry();o.push(e)}for(;o.length>0;){let e=o.shift();if(e){if(e.isFile){let o=await _(e);-1===C.indexOf(o.name)&&t.push(o)}else e.isDirectory&&o.push(...await T(e.createReader()))}}return t},R=async e=>{let t=[];for(let o of e)-1===C.indexOf(o.name)&&t.push(L(o));return t},N=async e=>e.dataTransfer?e.dataTransfer.items?await M(e.dataTransfer.items):await R(e.dataTransfer.files):await R(e.target.files),q="files-dropzone",$="TOO_MANY_FILES",O=document.createElement("template"),H=`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  :host {
    --dropzone-border-width: 2px;
    --dropzone-border-style: dashed;
    --dropzone-border-radius: 0.25rem;
    --dropzone-border-color: #6c757d;
    --dropzone-border-color-dragover: #0d6efd;
    --dropzone-border-color-hover: var(--dropzone-border-color-dragover);
    --dropzone-background-color: #ffffff;
    --dropzone-background-color-dragover: #f4f4f5;
    --dropzone-background-color-hover: var(--dropzone-background-color-dragover);
    --dropzone-body-color: #3f3f46;
    --dropzone-body-color-dragover: var(--dropzone-body-color);
    --dropzone-body-color-hover: var(--dropzone-body-color-dragover);
    --dropzone-focus-shadow-rgb: 49,132,253;
    --dropzone-focus-box-shadow: 0 0 0 0.25rem rgba(var(--dropzone-focus-shadow-rgb), 0.5);
    --transition-duration: 0.2s; /* for backwards compatibility */
    --dropzone-transition-duration: var(--transition-duration);

    display: block;
  }

  :host(:not([no-style])) .dropzone {
    border: var(--dropzone-border-width) var(--dropzone-border-style) var(--dropzone-border-color);
    border-radius: var(--dropzone-border-radius);
    padding: 3rem 1rem;
    overflow: hidden;
    background-color: var(--dropzone-background-color);
    color: var(--dropzone-body-color);
    text-align: center;
    cursor: pointer;
    transition: border var(--dropzone-transition-duration) ease-in-out, background-color var(--dropzone-transition-duration) ease-in-out, color var(--dropzone-transition-duration) ease-in-out, box-shadow var(--dropzone-transition-duration) ease-in-out;
  }

  :host(:not([no-style])[disabled]) .dropzone {
    opacity: 0.8;
    cursor: not-allowed;
    user-select: none;
  }

  :host(:not([no-style]):not([disabled])) .dropzone--dragover {
    border-color: var(--dropzone-border-color-dragover);
    background-color: var(--dropzone-background-color-dragover);
    color: var(--dropzone-body-color-dragover);
  }

  :host(:not([no-style]):not([disabled])) .dropzone:focus-visible {
    outline: none;
    box-shadow: var(--dropzone-focus-box-shadow);
  }

  @media (hover: hover) {
    :host(:not([no-style]):not([disabled])) .dropzone:not(.dropzone--dragover):hover {
      border-color: var(--dropzone-border-color-hover);
      background-color: var(--dropzone-background-color-hover);
      color: var(--dropzone-body-color-hover);
    }
  }
`;O.innerHTML=`
  <style>
    ${H}
  </style>

  <input type="file" id="file-input" hidden>

  <div part="dropzone" class="dropzone" id="dropzone" tabindex="0" role="button" aria-disabled="false">
    <slot>Drag 'n' drop files here, or click to select files</slot>
  </div>
`,(class e extends HTMLElement{#p=null;#e=null;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0}).appendChild(O.content.cloneNode(!0)),this.shadowRoot&&(this.#p=this.shadowRoot.getElementById("file-input"),this.#e=this.shadowRoot.getElementById("dropzone"))}static get observedAttributes(){return["accept","disabled","multiple"]}attributeChangedCallback(e,t,o){"accept"===e&&t!==o&&this.#p&&(this.#p.accept=this.accept),"disabled"===e&&t!==o&&this.#p&&(this.#p.disabled=this.disabled,this.disabled?(this.#e?.removeAttribute("tabindex"),this.#e?.setAttribute("aria-disabled","true")):(this.#e?.setAttribute("tabindex","0"),this.#e?.setAttribute("aria-disabled","false"))),"multiple"===e&&t!==o&&this.#p&&(this.#p.multiple=this.multiple)}connectedCallback(){this.#r("accept"),this.#r("disabled"),this.#r("maxFiles"),this.#r("maxSize"),this.#r("minSize"),this.#r("multiple"),this.#r("autoFocus"),this.#r("noStyle"),this.#p?.addEventListener("change",this.#i),this.#e?.addEventListener("dragenter",this.#E),this.#e?.addEventListener("dragover",this.#t),this.#e?.addEventListener("dragleave",this.#s),this.#e?.addEventListener("drop",this.#w),this.#e?.addEventListener("click",this.#m),this.#e?.addEventListener("keyup",this.#o),this.autoFocus&&this.#e?.focus()}disconnectedCallback(){this.#p?.removeEventListener("change",this.#i),this.#e?.removeEventListener("dragenter",this.#E),this.#e?.removeEventListener("dragover",this.#t),this.#e?.removeEventListener("dragleave",this.#s),this.#e?.removeEventListener("drop",this.#w),this.#e?.removeEventListener("click",this.#m),this.#e?.removeEventListener("keyup",this.#o)}get accept(){return this.getAttribute("accept")||""}set accept(e){this.setAttribute("accept",null!=e?e.toString():e)}get disabled(){return this.hasAttribute("disabled")}set disabled(e){this.toggleAttribute("disabled",!!e)}get maxFiles(){let e=Number(this.getAttribute("max-files"))||0;return e<=0?1/0:Math.floor(Math.abs(e))}set maxFiles(e){this.setAttribute("max-files",null!=e?e.toString():e)}get maxSize(){let e=this.getAttribute("max-size");if(null===e)return 1/0;let t=Number(e);return Number.isNaN(t)?1/0:t}set maxSize(e){this.setAttribute("max-size",null!=e?e.toString():e)}get minSize(){let e=this.getAttribute("min-size");if(null===e)return 0;let t=Number(e);return Number.isNaN(t)?0:t}set minSize(e){this.setAttribute("min-size",null!=e?e.toString():e)}get multiple(){return this.hasAttribute("multiple")}set multiple(e){this.toggleAttribute("multiple",!!e)}get autoFocus(){return this.hasAttribute("auto-focus")}set autoFocus(e){this.toggleAttribute("auto-focus",!!e)}get noStyle(){return this.hasAttribute("no-style")}set noStyle(e){this.toggleAttribute("no-style",!!e)}#i=async e=>{try{this.#h(await N(e))}catch(e){this.dispatchEvent(new CustomEvent(`${q}-error`,{bubbles:!0,composed:!0,detail:{error:e}}))}};#E=()=>{this.disabled||this.dispatchEvent(new Event(`${q}-dragenter`,{bubbles:!0,composed:!0}))};#t=e=>{if(e.preventDefault(),this.disabled){e.dataTransfer.dropEffect="none";return}e.dataTransfer.dropEffect="copy",this.#e&&(this.#e.classList.add("dropzone--dragover"),this.#e.part.add("dropzone--dragover")),this.dispatchEvent(new Event(`${q}-dragover`,{bubbles:!0,composed:!0}))};#s=()=>{this.disabled||(this.#e&&(this.#e.classList.remove("dropzone--dragover"),this.#e.part.remove("dropzone--dragover")),this.dispatchEvent(new Event(`${q}-dragleave`,{bubbles:!0,composed:!0})))};#w=async e=>{if(!this.disabled){e.preventDefault(),this.#e&&(this.#e.classList.remove("dropzone--dragover"),this.#e.part.remove("dropzone--dragover"));try{this.#h(await N(e))}catch(e){this.dispatchEvent(new CustomEvent(`${q}-error`,{bubbles:!0,composed:!0,detail:{error:e}}))}}};#m=()=>{this.disabled||this.#p?.click()};#o=e=>{this.disabled||(" "===e.key||"Enter"===e.key)&&this.#p?.click()};#h(e){if(!Array.isArray(e)||!e.length)return;let t=[],o=[],i=e.length;if(!this.multiple&&i>1)for(let t of e)o.push({file:t,errors:[{code:$,message:"Too many files selected. Only 1 file is allowed."}]});else if(this.multiple&&i>this.maxFiles)for(let t of e)o.push({file:t,errors:[{code:$,message:`Too many files selected. Only ${this.maxFiles} ${this.maxFiles>1?"files are":"file is"} allowed.`}]});else for(let i of e){let e=/*!
 * @georapbox/files-dropzone-element
 * A custom element that creates a drag and drop zone for files
 *
 * @version 2.0.1
 * @homepage https://github.com/georapbox/files-dropzone-element#readme
 * @author George Raptis <georapbox@gmail.com>
 * @license MIT
 */function(e,t=""){if(!t)return!0;let o=[...new Set(t.split(",").map(e=>e.trim()).filter(Boolean))],i=e.type,r=i.replace(/\/.*$/,"");for(let t of o)if("."===t.charAt(0)){if(-1!==e.name.toLowerCase().indexOf(t.toLowerCase(),e.name.length-t.length))return!0}else if(/\/\*$/.test(t)){if(r===t.replace(/\/.*$/,""))return!0}else if(i===t)return!0;return!1}(i,this.accept),r=i.size>this.maxSize,s=i.size<this.minSize;if(!e||r||s){let t=[];e||t.push({code:"INVALID_MIME_TYPE",message:`File type "${i.type}" is not accepted.`}),r&&t.push({code:"FILE_TOO_LARGE",message:`File size ${i.size} exceeds the maximum size of ${this.maxSize}.`}),s&&t.push({code:"FILE_TOO_SMALL",message:`File size ${i.size} is smaller than the minimum size of ${this.minSize}.`}),o.push({file:i,errors:t})}else t.push(i)}this.dispatchEvent(new CustomEvent(`${q}-drop`,{bubbles:!0,composed:!0,detail:{acceptedFiles:t,rejectedFiles:o}})),t.length>0&&this.dispatchEvent(new CustomEvent(`${q}-drop-accepted`,{bubbles:!0,composed:!0,detail:{acceptedFiles:t}})),o.length>0&&this.dispatchEvent(new CustomEvent(`${q}-drop-rejected`,{bubbles:!0,composed:!0,detail:{rejectedFiles:o}})),this.#p&&(this.#p.value=this.#p.defaultValue)}openFileDialog(){this.disabled||this.#p?.click()}#r(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}static defineCustomElement(t=q){"u">typeof window&&!window.customElements.get(t)&&window.customElements.define(t,e)}}).defineCustomElement();/*!
 * @georapbox/resize-observer-element
 * A custom element that offers a declarative interface to the ResizeObserver API.
 *
 * @version 2.0.1
 * @homepage https://github.com/georapbox/resize-observer-element#readme
 * @author George Raptis <georapbox@gmail.com>
 * @license MIT
 */var I=document.createElement("template");I.innerHTML=`
  <style>:host { display: contents; }</style>
  <slot></slot>
`,(class e extends HTMLElement{#e=null;#p=null;#t=[];constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(I.content.cloneNode(!0)),this.#e=this.shadowRoot?.querySelector("slot")??null}static get observedAttributes(){return["disabled"]}attributeChangedCallback(e,t,o){"disabled"===e&&t!==o&&(this.disabled?this.#r():this.#i())}connectedCallback(){this.#m("disabled"),"ResizeObserver"in window&&(this.#p=new ResizeObserver(e=>{this.dispatchEvent(new CustomEvent("resize-observer:resize",{bubbles:!0,composed:!0,detail:{entries:e}}))}),this.disabled||this.#i(),this.#e?.addEventListener("slotchange",this.#s))}disconnectedCallback(){this.#r(),this.#e?.removeEventListener("slotchange",this.#s)}get disabled(){return this.hasAttribute("disabled")}set disabled(e){this.toggleAttribute("disabled",!!e)}#i(){this.#e&&this.#p&&(this.#t.forEach(e=>this.#p?.unobserve(e)),this.#t=[],this.#e.assignedElements().forEach(e=>{this.#p?.observe(e),this.#t.push(e)}))}#r(){this.#p?.disconnect()}#s=()=>{this.disabled||this.#i()};#m(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}static defineCustomElement(t="resize-observer"){"u">typeof window&&!window.customElements.get(t)&&window.customElements.define(t,e)}}).defineCustomElement();/*!
 * @georapbox/modal-element
 * A custom element to create a modal, using the native dialog element under the hood.
 *
 * @version 1.8.0
 * @homepage https://github.com/georapbox/modal-element#readme
 * @author George Raptis <georapbox@gmail.com>
 * @license MIT
 */var B=document.createElement("template"),D=`
  :host {
    --me-width: 32rem;
    --me-height: fit-content;
    --me-border-color: initial;
    --me-border-style: solid;
    --me-border-width: initial;
    --me-border-radius: 0;
    --me-box-shadow: none;
    --me-background-color: canvas;
    --me-color: canvastext;

    --me-header-spacing: 1rem;
    --me-footer-spacing: 1rem;
    --me-header-background-color: transparent;
    --me-header-color: initial;

    --me-body-spacing: 1rem;
    --me-body-background-color: transparent;
    --me-body-color: initial;
    --me-footer-background-color: transparent;
    --me-footer-color: initial;

    --me-close-padding: 0.4375rem;
    --me-close-border: none;
    --me-close-border-radius: 0;
    --me-close-background-color: transparent;
    --me-close-color: inherit;
    --me-close-font-size: 1rem;

    --me-backdrop-background: rgba(0, 0, 0, 0.5);
    --me-backdrop-filter: none;

    display: contents;
    box-sizing: border-box;
  }

  :host *,
  :host *:after,
  :host *:before {
    box-sizing: inherit;
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  /* Dialog */
  .dialog {
    --dialog-placement-margin: calc((2em + 6px) / 2);

    width: var(--me-width);
    height: var(--me-height);
    padding: 0;
    border-color: var(--me-border-color);
    border-style: var(--me-border-style);
    border-width: var(--me-border-width);
    border-radius: var(--me-border-radius);
    box-shadow: var(--me-box-shadow);
    background-color: var(--me-background-color);
    color: var(--me-color);
  }

  .dialog[open] {
    display: flex;
  }

  :host([fullscreen]) .dialog {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
  }

  .dialog::backdrop {
    background: var(--me-backdrop-background, rgba(0, 0, 0, 0.5));
    backdrop-filter: var(--me-backdrop-filter, none);
    opacity: 0;
  }

  .dialog[open]::backdrop {
    opacity: 1;
  }

  /* Dialog placement */
  :host(:not([fullscreen])[placement="top-start"]) .dialog {
    margin-block-start: var(--dialog-placement-margin);
    margin-inline-start: var(--dialog-placement-margin);
  }

  :host(:not([fullscreen])[placement="top-center"]) .dialog {
    margin-block-start: var(--dialog-placement-margin);
  }

  :host(:not([fullscreen])[placement="top-end"]) .dialog {
    margin-block-start: var(--dialog-placement-margin);
    margin-inline-end: var(--dialog-placement-margin);
  }

  :host(:not([fullscreen])[placement="center-start"]) .dialog {
    margin-inline-start: var(--dialog-placement-margin);
  }

  :host(:not([fullscreen])[placement="center"]) .dialog {
    margin: auto;
  }

  :host(:not([fullscreen])[placement="center-end"]) .dialog {
    margin-inline-end: var(--dialog-placement-margin);
  }

  :host(:not([fullscreen])[placement="bottom-start"]) .dialog {
    margin-block-end: var(--dialog-placement-margin);
    margin-inline-start: var(--dialog-placement-margin);
  }

  :host(:not([fullscreen])[placement="bottom-center"]) .dialog {
    margin-block-end: var(--dialog-placement-margin);
  }

  :host(:not([fullscreen])[placement="bottom-end"]) .dialog {
    margin-block-end: var(--dialog-placement-margin);
    margin-inline-end: var(--dialog-placement-margin);
  }

  /* Dialog animations */
  @media (prefers-reduced-motion: no-preference) {
    .dialog:not(.dialog--no-animations),
    .dialog:not(.dialog--no-animations)::backdrop {
      transition: transform 0.3s, opacity 0.3s, display 0.3s allow-discrete, overlay 0.3s allow-discrete;
    }

    /* 1. IS-OPEN STATE */
    .dialog[open] {
      transform: scale(1);
      opacity: 1;
    }

    /* 2. EXIT STATE */
    .dialog {
      transform: scale(0.95);
      opacity: 0;
    }

    /* 0. BEFORE-OPEN STATE */
    @starting-style {
      .dialog[open] {
        transform: scale(0.95);
        opacity: 0;
      }

      .dialog[open]::backdrop {
        opacity: 0;
      }
    }

    .dialog--pulse:not(.dialog--no-animations) {
      animation-name: pulse;
      animation-duration: 300ms;
      animation-timing-function: cubic-bezier(0.2, 0, 0.38, 0.9);
    }

    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.02); }
      100% { transform: scale(1); }
    }
  }

  /* Dialog panel, header, body, footer */
  .dialog__panel {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    width: 100%;
  }

  .dialog__header {
    display: flex;
    align-items: center;
    padding: var(--me-header-spacing);
    column-gap: 0.5rem;
    background-color: var(--me-header-background-color);
    color: var(--me-header-color);
  }

  :host([no-close-button]) .dialog__header {
    column-gap: 0;
  }

  .dialog__title {
    display: block;
    flex: 1 1 auto;
    padding: 0;
    margin: 0;
  }

  .dialog__body {
    display: block;
    flex: 1 1 auto;
    padding: var(--me-body-spacing);
    overflow: auto;
    background-color: var(--me-body-background-color);
    color: var(--me-body-color);
    overscroll-behavior: contain;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: end;
    padding: var(--me-footer-spacing);
    background-color: var(--me-footer-background-color);
    color: var(--me-footer-color);
  }

  .dialog__close {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--me-close-padding);
    border: var(--me-close-border);
    border-radius: var(--me-close-border-radius);
    background-color: var(--me-close-background-color);
    color: var(--me-close-color);
    font-size: var(--me-close-font-size);
  }

  .dialog__close:not(:disabled) {
    cursor: pointer;
  }

  .dialog__close:disabled {
    cursor: not-allowed;
  }
`;B.innerHTML=`
  <style>${D}</style>

  <dialog part="base" class="dialog">
    <div part="panel" class="dialog__panel" aria-labelledby="title">
      <header part="header" class="dialog__header">
        <slot name="header" part="title" class="dialog__title" id="title"></slot>

        <form method="dialog">
          <button type="submit" part="close" class="dialog__close" aria-label="Close">
            <slot name="close">
              <svg part="close-icon" xmlns="http://www.w3.org/2000/svg" width="1.125em" height="1.125em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
              </svg>
            </slot>
          </button>
        </form>
      </header>

      <slot part="body" class="dialog__body"></slot>

      <footer part="footer" class="dialog__footer" hidden>
        <slot name="footer"></slot>
      </footer>
    </div>
  </dialog>
`,(class e extends HTMLElement{#e=null;#i=null;#w=null;#r=void 0;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(B.content.cloneNode(!0)),this.shadowRoot&&(this.#e=this.shadowRoot.querySelector("dialog"),this.#i=this.shadowRoot.querySelector('slot[name="footer"]'),this.#w=this.shadowRoot.querySelector('slot[name="close"]'))}static get observedAttributes(){return["open","no-header","no-animations","no-close-button","close-label"]}attributeChangedCallback(e,t,o){if(null!==this.#e){if("open"===e&&t!==o&&(this.open?(this.#e.showModal(),this.dispatchEvent(new CustomEvent("me-open",{bubbles:!0,composed:!0,detail:{element:this}})),document.body&&!this.preserveOverflow&&(document.body.style.overflow="hidden")):this.#e.close()),"no-header"===e&&t!==o){let e=this.#e.querySelector(".dialog__header");null!==e&&(e.hidden=this.noHeader)}if("no-animations"===e&&t!==o&&this.#e.classList.toggle("dialog--no-animations",this.noAnimations),"no-close-button"===e&&t!==o){let e=this.#e.querySelector(".dialog__close");null!==e&&(e.hidden=this.noCloseButton)}"close-label"===e&&t!==o&&this.#E()}}connectedCallback(){this.#p("open"),this.#p("staticBackdrop"),this.#p("noHeader"),this.#p("noAnimations"),this.#p("noCloseButton"),this.#p("fullscreen"),this.#p("preserveOverflow"),this.#p("placement"),this.#p("closeLabel"),this.#e?.addEventListener("click",this.#c),this.#e?.addEventListener("close",this.#o),this.#e?.addEventListener("cancel",this.#m),this.#e?.querySelector('form[method="dialog"]')?.addEventListener("submit",this.#h),this.#i?.addEventListener("slotchange",this.#d),this.#w?.addEventListener("slotchange",this.#a)}disconnectedCallback(){this.#r&&clearTimeout(this.#r),this.#e?.addEventListener("click",this.#c),this.#e?.removeEventListener("close",this.#o),this.#e?.removeEventListener("cancel",this.#m),this.#e?.querySelector('form[method="dialog"]')?.removeEventListener("submit",this.#h),this.#i?.removeEventListener("slotchange",this.#d),this.#w?.removeEventListener("slotchange",this.#a)}get open(){return this.hasAttribute("open")}set open(e){this.toggleAttribute("open",!!e)}get staticBackdrop(){return this.hasAttribute("static-backdrop")}set staticBackdrop(e){this.toggleAttribute("static-backdrop",!!e)}get noHeader(){return this.hasAttribute("no-header")}set noHeader(e){this.toggleAttribute("no-header",!!e)}get noAnimations(){return this.hasAttribute("no-animations")}set noAnimations(e){this.toggleAttribute("no-animations",!!e)}get noCloseButton(){return this.hasAttribute("no-close-button")}set noCloseButton(e){this.toggleAttribute("no-close-button",!!e)}get fullscreen(){return this.hasAttribute("fullscreen")}set fullscreen(e){this.toggleAttribute("fullscreen",!!e)}get preserveOverflow(){return this.hasAttribute("preserve-overflow")}set preserveOverflow(e){this.toggleAttribute("preserve-overflow",!!e)}get placement(){return this.getAttribute("placement")||"center"}set placement(e){this.setAttribute("placement",null!=e?e.toString():e)}get closeLabel(){return this.getAttribute("close-label")||"Close"}set closeLabel(e){this.setAttribute("close-label",null!=e?e.toString():e)}#E(){if(null===this.#e)return;let e=this.#e.querySelector(".dialog__close");null!==e&&((this.#w?.assignedElements()||[])?.some(e=>e.textContent?.replace(/\s/g,"")!=="")?e.removeAttribute("aria-label"):e.setAttribute("aria-label",this.closeLabel))}#s(){this.#r||(this.#e?.classList.add("dialog--pulse"),this.#r=setTimeout(()=>{this.#e?.classList.remove("dialog--pulse"),clearTimeout(this.#r),this.#r=void 0},300))}#o=()=>{this.open=!1,this.dispatchEvent(new CustomEvent("me-close",{bubbles:!0,composed:!0,detail:{element:this}})),document.body&&!this.preserveOverflow&&(document.body.style.overflow="")};#m=e=>{let t=this.#t("escape-key");this.dispatchEvent(t),t.defaultPrevented&&(e.preventDefault(),this.noAnimations||this.#s())};#h=e=>{let t=this.#t("close-button");this.dispatchEvent(t),t.defaultPrevented&&(e.preventDefault(),this.noAnimations||this.#s())};#c=e=>{let t=e.target;if(t===e.currentTarget){let e=this.#t("backdrop-click");this.dispatchEvent(e),e.defaultPrevented||this.staticBackdrop?this.noAnimations||this.#s():this.hide()}if(t instanceof HTMLElement&&null!==t.closest("[data-me-close]")){let e=this.#t("external-invoker");this.dispatchEvent(e),e.defaultPrevented?this.noAnimations||this.#s():this.hide()}};#d=()=>{if(null===this.#e)return;let e=this.#e.querySelector(".dialog__footer");if(null===e)return;let t=this.#i?.assignedNodes(),o=!!t&&t.length>0;e.hidden=!o};#a=()=>{this.#E()};#t(e){return new CustomEvent("me-request-close",{bubbles:!0,composed:!0,cancelable:!0,detail:{reason:e,element:this}})}#p(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}show(){this.open||(this.open=!0)}hide(){this.open&&(this.open=!1)}static defineCustomElement(t="modal-element"){"u">typeof window&&!window.customElements.get(t)&&window.customElements.define(t,e)}}).defineCustomElement();let F="No barcode detected",P=["image/jpg","image/jpeg","image/png","image/apng","image/gif","image/webp","image/avif"];function j(e){return new Promise(function(t,o){e.oncomplete=e.onsuccess=function(){return t(e.result)},e.onabort=e.onerror=function(){return o(e.error)}})}function V(){if(!t){var e,o,i,r;e="keyval-store",o="keyval",(i=indexedDB.open(e)).onupgradeneeded=function(){return i.result.createObjectStore(o)},r=j(i),t=function(e,t){return r.then(function(i){return t(i.transaction(o,e).objectStore(o))})}}return t}let U="barcode-scanner/",Z="settings",W="history",G=async e=>{try{return[null,await function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:V();return t("readonly",function(t){return j(t.get(e))})}(e)]}catch(e){return[e,void 0]}},Q=async(e,t)=>{try{return await function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:V();return o("readwrite",function(o){return o.put(t,e),j(o.transaction)})}(e,t),[null]}catch(e){return[e]}},K=async()=>G(U+Z),Y=async e=>Q(U+Z,e),J=async()=>G(U+W),X=async e=>Q(U+W,e);function ee(e,t=0,o=!1){let i=null;if("function"!=typeof e)throw TypeError("Expected a function for first argument");return(...r)=>{clearTimeout(i),o&&!i&&e(...r),i=setTimeout(()=>{i=null,o||e(...r)},t)}}let et={0x3d9e7199c:"M306",0x3db183f94:"M307",0x3d9e71424:"M308",0x3d9e71938:"M309",0x3db1843e0:"M310",0x3d9e71b90:"M311",0x3d9e71e4c:"M312",0x3d9e72729:"M313",0x3db18405c:"M334",0x3d9e710e7:"M423","5E131552E":"M333","4M0201994BE":"M400"},eo={M306:"006",M307:"004",M308:"004",M311:"004",M313:"004",M309:"005",M310:"002",M423:"002",M312:"003",M334:"003"},ei={M306:"003",M307:"003",M308:"003",M309:"003",M310:"001",M311:"001",M312:"001",M313:"001",M334:"001",M423:"001"},er=`
  .model-info-container {
    margin-top: 10px;
    font-family: Arial, sans-serif;
  }

  .model-info {
    margin-bottom: 5px;
    padding: 5px;
    font-size: 14px;
    background-color: #343a40;
    border: 1px solid #ddd;
    border-radius: 4px;
    text-align: center;
    color: #fff; /* \u{160}tandardn\xe1 farba textu */
  }

  .model-info.unknown {
    color: #ff4d4f; /* \u{10C}erven\xe1 farba pre nezn\xe1my model */
  }

  .model-info.zgs-unknown {
    color: #ff4d4f; /* \u{10C}erven\xe1 farba pre nezn\xe1my ZGS Stand */
  }

  .model-info.q-unknown {
    color: #ff4d4f; /* \u{10C}erven\xe1 farba pre nezn\xe1my Q-Stand */
  }

  .model-info strong {
    font-weight: bold;
  }
`,es=document.createElement("style");function ea(e){e&&(e.querySelector("bs-result")?.remove(),e.querySelectorAll(".model-info").forEach(e=>e.remove()))}async function en(e,t){if(!e||!t)return;ea(e);let o=function(e){let t="",o="";o=e.includes("PWS130721000001")?et[e.substring(e.length-9)]||"Neznámy model":e.includes("#4M")?et[e.replace(/[^A-Za-z0-9]/g,"")]||"Neznámy model":et[e.substring(0,11)]||"Neznámy model",t+=`Model: ${o}
`;let i=e.substring(11,13),r=e.substring(13,16),s=e.substring(16,21),a=e.substring(21,22),n=e.substring(22,24),l=e.substring(24,27),d=e.substring(27,30),c=e.substring(30,36),h=`20${i}`;"2025"===h?t+=`Rok produkcie: ${h}
`:t+=`Rok produkcie: Nezn\xe1my rok (${h})
`;let u=parseInt(r,10);return u<1||u>365?t+=`De\u{148} v roku: Nezn\xe1my de\u{148} (${r})
`:t+=`De\u{148} v roku v\xfdroby: ${r}
`,/^\d{5}$/.test(s)?t+=`Poradov\xe9 \u{10D}\xedslo kusu: ${s}
`:t+=`Poradov\xe9 \u{10D}\xedslo kusu: Nezn\xe1me poradov\xe9 \u{10D}\xedslo (${s})
`,"0"===a?t+=`L\xednia: ${a}
`:t+=`L\xednia: Nezn\xe1ma l\xednia (${a})
`,"20"===n?t+=`K\xf3d v\xfdrobcu: ${n}
`:t+=`K\xf3d v\xfdrobcu: Nezn\xe1my k\xf3d v\xfdrobcu (${n})
`,l===(eo[o]||"Neznámy ZGS Stand")?t+=`ZGS stand: ${l}
`:t+=`ZGS stand: Nezn\xe1my ZGS Stand (${l})
`,d===(ei[o]||"Neznámy Q-Stand")?t+=`Q-stand: ${d}
`:t+=`Q-stand: Nezn\xe1my Q-Stand (${d})
`,"000000"===c?t+=`Vo\u{13E}n\xe9 poz\xedcie: ${c}
`:t+=`Vo\u{13E}n\xe9 poz\xedcie: Nezn\xe1me vo\u{13E}n\xe9 poz\xedcie (${c})
`,t}(t),i=document.createElement("bs-result");i.setAttribute("value",t),i.setAttribute("model",o),i.setAttribute("role","alert"),i.setAttribute("aria-live","assertive"),i.setAttribute("aria-atomic","true"),e.appendChild(i);let r=document.createElement("div");r.classList.add("model-info-container"),o.split("\n").filter(e=>""!==e.trim()).forEach(e=>{let t=document.createElement("div");t.classList.add("model-info"),(e.includes("Neznámy model")||e.includes("Neznámy rok")||e.includes("Neznámy deň")||e.includes("Neznáme poradové číslo")||e.includes("Neznáma línia")||e.includes("Neznámy kód výrobcu")||e.includes("Neznámy ZGS Stand")||e.includes("Neznámy Q-Stand")||e.includes("Neznáme voľné pozície"))&&t.classList.add("unknown"),t.textContent=e,r.appendChild(t)}),e.appendChild(r)}es.type="text/css",es.innerText=er,document.head.appendChild(es);let el=(()=>{let e=new(window.AudioContext||window.webkitAudioContext||window.audioContext);if(e)return t=>{let{duration:o,frequency:i,volume:r,type:s,onEnded:a}=t,n=e.createOscillator(),l=e.createGain();n.connect(l),l.connect(e.destination),r&&(l.gain.value=r),i&&(n.frequency.value=i),s&&(n.type=s),"function"==typeof a&&(n.onended=a),n.start(e.currentTime),n.stop(e.currentTime+(o||500)/1e3)}})();async function ed(e=0){if("function"==typeof window.navigator.vibrate)try{window.navigator.vibrate(e)}catch{}}async function ec(e={}){let{success:t=!0}=e,[,o]=await K();o&&(o.beep&&el(t?{duration:200,frequency:860,volume:.03,type:"square"}:{duration:300,frequency:200,volume:.05,type:"sawtooth"}),o.vibrate&&ed(t?100:200))}function eh(e,t){if(!e||!t)return;let o=e.getBoundingClientRect();t.style.cssText=`width: ${o.width}px; height: ${o.height}px`}let eu=["aztec","code_128","code_39","code_93","codabar","data_matrix","ean_13","ean_8","itf","pdf417","qr_code","upc_a","upc_e"];class em{static async polyfill(){if(!("BarcodeDetector"in window))try{await s("bkcP3")}catch(e){throw Error("BarcodeDetector API is not supported by your browser.",{cause:e})}}static async getSupportedFormats(){let e=await window.BarcodeDetector.getSupportedFormats()||[];return eu.filter(t=>e.includes(t))}static async create(e){let t=Array.isArray(e)&&e.length>0?e:await em.getSupportedFormats();return new em(t)}static async setup(){try{return await em.polyfill(),{barcodeReaderError:null}}catch(e){return{barcodeReaderError:e}}}constructor(e){this.barcodeReader=new window.BarcodeDetector({formats:e})}async detect(e){if(!this.barcodeReader)throw Error("BarcodeReader is not initialized.");let t=await this.barcodeReader.detect(e);if(Array.isArray(t)&&t.length>0){let e=t[0];return e.rawValue,e.format,e}throw Error("Could not detect barcode from provided source.")}}function ep(e={}){let{el:t,isTorchOn:o}={el:document.getElementById("torchButton"),isTorchOn:!1,...e},i=t.querySelectorAll("svg path");2===i.length&&(i[0].style.display=o?"none":"block",i[1].style.display=o?"block":"none",t.setAttribute("aria-label",`Turn ${o?"off":"on"} flash`))}let eb="video-capture",eg=`
  :host { display: block; box-sizing: border-box; }
  :host *, :host *::before, :host *::after { box-sizing: inherit;}
  :host([hidden]), [hidden], ::slotted([hidden]) { display: none; }
  video { display: block; }
  #output:empty { display: none; }
`,ef=document.createElement("template");ef.innerHTML=`
  <style>${eg}</style>
  <video part="video" playsinline></video>
  <div part="actions-container"><slot name="actions"></slot></div>
  <slot></slot>
`;class ev extends HTMLElement{#C={};#z=null;#L=null;constructor(){super(),this.#C=this.getSupportedConstraints(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(ef.content.cloneNode(!0))}static get observedAttributes(){return["no-image","pan","tilt","zoom","torch"]}attributeChangedCallback(e,t,o){if(!this.isConnected)return;let i=this.getTrackCapabilities();if("zoom"===e&&t!==o&&"zoom"in this.#C){let e=!!("zoom"in i&&i.zoom?.min&&i.zoom?.max)&&this.zoom>=i.zoom.min&&this.zoom<=i.zoom.max;"number"==typeof this.zoom&&e&&this.#S("zoom",this.zoom)}"torch"===e&&t!==o&&"torch"in this.#C&&this.#S("torch",this.torch)}async connectedCallback(){if(this.#T("autoPlay"),this.#T("facingMode"),this.#T("zoom"),this.#T("torch"),this.#L=this.shadowRoot?.querySelector("video")||null,this.#L?.addEventListener("loadedmetadata",this.#_),!ev.isSupported())return this.dispatchEvent(new CustomEvent(`${eb}:error`,{bubbles:!0,composed:!0,detail:{error:{name:"NotSupportedError",message:"Not supported"}}}));this.autoPlay&&this.startVideoStream()}disconnectedCallback(){this.stopVideoStream(),this.#L?.removeEventListener("loadedmetadata",this.#_)}get autoPlay(){return this.hasAttribute("auto-play")}set autoPlay(e){this.toggleAttribute("auto-play",!!e)}get facingMode(){let e=this.getAttribute("facing-mode");return"user"!==e?"environment":e}set facingMode(e){this.setAttribute("facing-mode",e)}get zoom(){return Number(this.getAttribute("zoom"))||1}set zoom(e){this.setAttribute("zoom",null!=e?e.toString():e)}get torch(){return this.hasAttribute("torch")}set torch(e){this.toggleAttribute("torch",!!e)}get loading(){return this.hasAttribute("loading")}#_=e=>{let t=e.target;t.play().then(()=>{this.dispatchEvent(new CustomEvent(`${eb}:video-play`,{bubbles:!0,composed:!0,detail:{video:t}}))}).catch(e=>{this.dispatchEvent(new CustomEvent(`${eb}:error`,{bubbles:!0,composed:!0,detail:{error:e}}))}).finally(()=>{this.removeAttribute("loading")})};#S(e,t){var o,i,r;if(!this.#z)return;let[s]=this.#z.getVideoTracks(),a=this.getTrackCapabilities(),n=this.getTrackSettings(),l="pan"===e||"tilt"===e||"zoom"===e?(o=Number(t),i=a[e]?.min||1,r=a[e]?.max||1,Number.isNaN(i)&&(i=0),Number.isNaN(r)&&(r=0),Math.min(Math.max(o,Math.min(i,r)),Math.max(i,r))):t;e in n&&s.applyConstraints({advanced:[{[e]:l}]}).catch(()=>{})}#T(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}async startVideoStream(e){if(!ev.isSupported()||this.#z)return;this.setAttribute("loading","");let t={video:{facingMode:{ideal:this.facingMode},pan:!0,tilt:!0,zoom:!0,torch:this.torch},audio:!1};if("string"==typeof e&&e.trim().length>0&&(t.video.deviceId={exact:e}),"string"==typeof this.cameraResolution&&this.cameraResolution.trim().length>0){let[e=0,o=0]=this.cameraResolution.split("x").map(e=>Number(e));e>0&&o>0&&(t.video.width=e,t.video.height=o)}try{this.#z=await navigator.mediaDevices.getUserMedia(t),this.#L&&(this.#L.srcObject=this.#z),this.#S("pan",this.pan),this.#S("tilt",this.tilt),this.#S("zoom",this.zoom)}catch(e){this.dispatchEvent(new CustomEvent(`${eb}:error`,{bubbles:!0,composed:!0,detail:{error:e}}))}finally{this.removeAttribute("loading")}}restartVideoStream(e){this.#z&&this.#L&&this.stopVideoStream(),this.startVideoStream(e)}stopVideoStream(){if(!this.#L||!this.#z)return;let[e]=this.#z.getVideoTracks();e?.stop(),this.#L.srcObject=null,this.#z=null}getSupportedConstraints(){return ev.isSupported()&&navigator.mediaDevices.getSupportedConstraints()||{}}getTrackCapabilities(){if(!this.#z)return{};let[e]=this.#z.getVideoTracks();return e&&"function"==typeof e.getCapabilities&&e.getCapabilities()||{}}getTrackSettings(){if(!this.#z)return{};let[e]=this.#z.getVideoTracks();return e&&"function"==typeof e.getSettings&&e.getSettings()||{}}static async getVideoInputDevices(){return navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices?(await navigator.mediaDevices.enumerateDevices()||[]).filter(e=>"videoinput"===e.kind&&!!e.deviceId):[]}static isSupported(){return!!navigator.mediaDevices?.getUserMedia}static defineCustomElement(e=eb){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,ev)}}/*!
 * @georapbox/clipboard-copy-element
 * A custom element that implements the Clipboard API to copy text content from elements or input values to the clipboard.
 *
 * @version 3.0.2
 * @homepage https://github.com/georapbox/clipboard-copy-element#readme
 * @author George Raptis <georapbox@gmail.com>
 * @license MIT
 */var ey="clipboard-copy",ew="success",eE="error",ex=document.createElement("template"),eA=`
  :host([hidden]),
  [hidden],
  ::slotted([hidden]) {
    display: none !important;
  }
`;ex.innerHTML=`
  <style>${eA}</style>
  <button type="button" part="button">
    <slot name="copy">Copy</slot>
    <slot name="success" hidden>Copied!</slot>
    <slot name="error" hidden>Error</slot>
  </button>
`;var ek=class e extends HTMLElement{#e=void 0;#p=null;#t=null;#i=null;#r=null;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(ex.content.cloneNode(!0)),this.shadowRoot&&(this.#p=this.shadowRoot.querySelector("button"),this.#t=this.shadowRoot.querySelector('slot[name="copy"]'),this.#i=this.shadowRoot.querySelector('slot[name="success"]'),this.#r=this.shadowRoot.querySelector('slot[name="error"]'))}static get observedAttributes(){return["disabled"]}attributeChangedCallback(e,t,o){"disabled"===e&&t!==o&&this.#p&&(this.#p.disabled=this.disabled,this.#p.setAttribute("aria-disabled",this.disabled.toString()),this.#p.part.contains("button")&&this.#p.part.toggle("button--disabled",this.disabled))}connectedCallback(){this.#s("value"),this.#s("from"),this.#s("disabled"),this.#s("feedbackDuration"),this.#p?.addEventListener("click",this.#E)}disconnectedCallback(){this.#p?.removeEventListener("click",this.#E),this.#w()}get value(){return this.getAttribute("value")||""}set value(e){this.setAttribute("value",null!=e?e.toString():e)}get from(){return this.getAttribute("from")||""}set from(e){this.setAttribute("from",null!=e?e.toString():e)}get disabled(){return this.hasAttribute("disabled")}set disabled(e){this.toggleAttribute("disabled",!!e)}get feedbackDuration(){return Number(this.getAttribute("feedback-duration"))||1e3}set feedbackDuration(e){this.setAttribute("feedback-duration",null!=e?e.toString():e)}async #m(){if(!(!this.value&&!this.from))try{let e="";if(this.value)e=this.value;else if(this.from){let t="getRootNode"in Element.prototype?this.#p?.getRootNode({composed:!0}):this.#p?.ownerDocument;if(!t||!(t instanceof Document||t instanceof ShadowRoot))return;let o=t.querySelector(this.from);if(!o)return;o instanceof HTMLInputElement||o instanceof HTMLTextAreaElement?e=o.value:o instanceof HTMLAnchorElement&&o.hasAttribute("href")?e=o.href:e=o.textContent||""}await navigator.clipboard.writeText(e),this.#c(ew),this.dispatchEvent(new CustomEvent(`${ey}-success`,{bubbles:!0,composed:!0,detail:{value:e}}))}catch(e){this.#c(eE),this.dispatchEvent(new CustomEvent(`${ey}-error`,{bubbles:!0,composed:!0,detail:{error:e}}))}}#E=e=>{e.preventDefault(),this.disabled||this.#e||this.#m()};#c(e){this.#t&&(this.#t.hidden=!0),this.#i&&(this.#i.hidden=e!==ew),this.#r&&(this.#r.hidden=e!==eE),this.#p?.part.remove("button--success"),this.#p?.part.remove("button--error"),this.#p?.part.add(`button--${e}`),this.#e&&clearTimeout(this.#e),this.#e=setTimeout(()=>{this.#t&&(this.#t.hidden=!1),this.#i&&(this.#i.hidden=!0),this.#r&&(this.#r.hidden=!0),this.#p?.part.remove(`button--${e}`),this.#e=void 0},this.feedbackDuration)}#w(){this.#e&&clearTimeout(this.#e),this.#e=void 0,this.#t&&(this.#t.hidden=!1),this.#i&&(this.#i.hidden=!0),this.#r&&(this.#r.hidden=!0),this.#p?.part.remove("button--success"),this.#p?.part.remove("button--error")}#s(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}static defineCustomElement(t=ey){"u">typeof window&&!window.customElements.get(t)&&window.customElements.define(t,e)}};class eC extends ek{constructor(){super();let e=this.shadowRoot.querySelector('slot[name="copy"]'),t=this.shadowRoot.querySelector('slot[name="success"]'),o=this.shadowRoot.querySelector('slot[name="error"]');e.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="1.125em" height="1.125em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
      </svg>
      <span class="text">Copy</span>
    `,t.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="1.125em" height="1.125em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
        <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
      </svg>
      <span class="text">Copied!</span>
    `,o.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="1.125em" height="1.125em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
        <path fill-rule="evenodd" d="M6.146 7.146a.5.5 0 0 1 .708 0L8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 0 1 0-.708"/>
        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
      </svg>
      <span class="text">Error</span>
    `}static get observedAttributes(){return[...super.observedAttributes,"only-icon"]}attributeChangedCallback(e,t,o){if(super.attributeChangedCallback(e,t,o),"only-icon"===e&&t!==o){let e=this.shadowRoot.querySelector('slot[name="copy"]'),t=this.shadowRoot.querySelector('slot[name="success"]'),o=this.shadowRoot.querySelector('slot[name="error"]'),i=e.querySelector(".text"),r=t.querySelector(".text"),s=o.querySelector(".text");i?.toggleAttribute("hidden",this.onlyIcon),r?.toggleAttribute("hidden",this.onlyIcon),s?.toggleAttribute("hidden",this.onlyIcon)}}get onlyIcon(){return this.hasAttribute("only-icon")}set onlyIcon(e){e?this.setAttribute("only-icon",""):this.removeAttribute("only-icon")}connectedCallback(){super.connectedCallback(),this.#T("onlyIcon"),this.hasAttribute("feedback-duration")||this.setAttribute("feedback-duration","1500")}disconnectedCallback(){super.disconnectedCallback()}#T(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}static defineCustomElement(e="custom-clipboard-copy"){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,eC)}}/*!
 * @georapbox/web-share-element
 * A custom element that implements the Web Share API to share user-defined data.
 *
 * @version 3.1.1
 * @homepage https://github.com/georapbox/web-share-element#readme
 * @author George Raptis <georapbox@gmail.com>
 * @license MIT
 */function ez(e){return null!==e&&"object"==typeof e?"share"in navigator&&"canShare"in navigator&&navigator.canShare(e):"share"in navigator}eC.defineCustomElement();let eL=`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  :host([hidden]),
  [hidden],
  ::slotted([hidden]) {
    display: none !important;
  }

  .result {
    position: relative;
    width: 100%;
    border: 1px solid var(--focus);
    border-radius: 6px;
    margin: 1.5rem 0 0 0;
    padding: 1rem;
    background-color: var(--background-alt);
    text-align: center;
  }

  .result__item {
    word-wrap: break-word;
    word-break: break-word;
  }

  a.result__item {
    color: var(--links);
  }

  .result__item--no-barcode {
    color: var(--error-color);
  }

  .result__actions {
    display: flex;
    align-items: center;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }

  .result web-share button,
  .result custom-clipboard-copy::part(button) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    margin: 0.75rem 0 0 0;
    padding: 0.25rem;
    background-color: transparent;
    border: 0;
    border-radius: var(--border-radius);
    color: inherit;
    line-height: 1;
    font-family: inherit;
    font-size: 0.9rem;
    cursor: pointer;
  }
`,eS=document.createElement("template");eS.innerHTML=`
  <style>${eL}</style>

  <div class="result">
    <div class="result__actions">
      <custom-clipboard-copy></custom-clipboard-copy>

      <web-share>
        <button slot="button" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
          </svg>
          Share
        </button>
      </web-share>
    </div>
  </div>
`;class eT extends HTMLElement{constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(eS.content.cloneNode(!0))}get value(){return this.getAttribute("value")}set value(e){this.setAttribute("value",e)}static get observedAttributes(){return["value"]}attributeChangedCallback(e,t,o){"value"===e&&t!==o&&this.#M(this.value)}connectedCallback(){if(this.#T("value"),!ez()){let e=this.shadowRoot.querySelector("web-share");e&&(e.hidden=!0)}}async #M(e){let t;let o=this.shadowRoot.querySelector(".result"),i=o?.querySelector(".result__actions"),r=o?.querySelector(".result__item");r&&r.remove();try{let[,o]=await K();new URL(e),(t=document.createElement("a")).href=e,window.requestAnimationFrame(()=>t.focus()),o?.openWebPageSameTab||(t.setAttribute("target","_blank"),t.setAttribute("rel","noreferrer noopener")),o?.openWebPage&&t.click()}catch{t=document.createElement("span")}t.className="result__item",t.classList.toggle("result__item--no-barcode",e===F),t.textContent=e,o?.insertBefore(t,i);let s=e!==F,a=o?.querySelector("custom-clipboard-copy"),n=o?.querySelector("web-share");a&&s?(a.setAttribute("value",e),a.hidden=!1):(a.hidden=!0,a.removeAttribute("value")),n&&ez()&&s?(n.setAttribute("share-text",e),n.hidden=!1):(n.hidden=!0,n.removeAttribute("share-text"))}#T(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}static defineCustomElement(e="bs-result"){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,eT)}}eT.defineCustomElement();class e_ extends HTMLElement{#R=null;#N=null;#q=[];#$;constructor(){super()}get supportedFormats(){return this.#q}set supportedFormats(e){this.#q=e,this.#O()}async connectedCallback(){this.#T("supportedFormats"),this.#R=this.querySelector("#formatsList"),this.#N=this.querySelector("form");let[,e]=await K();this.#$=e??{},this.#N?.querySelectorAll('[name="general-settings"]').forEach(e=>{e.checked=this.#$[e.value]})}#O(){if(!this.#R)return;let e=this.#$?.formats;this.#R.replaceChildren(),this.supportedFormats.forEach(t=>{let o=document.createElement("li"),i=document.createElement("label"),r=document.createElement("input");r.type="checkbox",r.name="formats-settings",r.value=t,r.checked=null==e||e.includes(t),i.appendChild(r),i.appendChild(document.createTextNode(t)),o.appendChild(i),this.#R.appendChild(o)})}#T(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}static defineCustomElement(e="bs-settings"){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,e_)}}e_.defineCustomElement();let eM=`
  :host {
    --empty-history-button-color: #ffffff;

    display: block;
    box-sizing: border-box;
  }

  @media (prefers-color-scheme: dark) {
    :host {
      --empty-history-button-color: #000000;
    }
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  :host([hidden]),
  [hidden],
  ::slotted([hidden]) {
    display: none !important;
  }

  ul {
    max-width: 36.25rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  ul li {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem 0.75rem;
    border-bottom: 1px solid var(--border);
    color: var(--text-main);
  }

  ul li:last-of-type {
    border-bottom: none;
  }

  ul li a {
    color: var(--links);
  }

  ul li a,
  ul li span {
    word-break: break-all;
  }

  @supports (-webkit-line-clamp: 1) and (display: -webkit-box) and (-webkit-box-orient: vertical) {
    ul li a,
    ul li span {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    }
  }

  .actions {
    display: flex;
    gap: 0.25rem;
  }

  .actions button,
  .actions custom-clipboard-copy::part(button) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    padding: 0.25rem 0.5rem;
    margin: 0;
    border: 0;
    border-radius: var(--border-radius);
    background-color: transparent !important;
    line-height: 1;
    font-size: 1rem;
    color: var(--text-main);
    cursor: pointer;
  }

  .actions custom-clipboard-copy::part(button--success) {
    color: var(--success-color);
  }

  .actions custom-clipboard-copy::part(button--error) {
    color: var(--error-color);
  }

  .actions .delete-action {
    color: var(--error-color);
    margin-right: -0.5rem;
  }

  footer {
    position: sticky;
    bottom: 0;
    padding: 0.75rem;
    background-color: var(--dialog-background);
  }

  footer > button {
    width: 100%;
    padding: 0.625rem;
    border: 0;
    border-radius: var(--border-radius);
    background-color: var(--error-color);
    color: var(--empty-history-button-color);
    font-size: 1rem;
    cursor: pointer;
  }

  ul:empty + footer > button {
    display: none;
  }

  ul:not(:empty) + footer > div {
    display: none;
  }
`,eR=document.createElement("template");eR.innerHTML=`
  <style>${eM}</style>
  <ul id="historyList"></ul>
  <footer>
    <div>There are no saved items in history.</div>
    <button type="button" id="emptyHistoryBtn">Empty history</button>
  </footer>
`;class eN extends HTMLElement{#H=null;#I=null;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(eR.content.cloneNode(!0))}async connectedCallback(){this.#H=this.shadowRoot?.getElementById("historyList"),this.#I=this.shadowRoot?.getElementById("emptyHistoryBtn"),this.#B((await J())[1]||[]),this.#H?.addEventListener("click",this.#D),this.#I?.addEventListener("click",this.#F)}disconnectedCallback(){this.#H?.removeEventListener("click",this.#D),this.#I?.removeEventListener("click",this.#F)}async add(e){let[,t]=await K();if(!e||!t?.addToHistory)return;let[o,i=[]]=await J();if(!o&&Array.isArray(i)&&!i.find(t=>t===e)){let t=[...i,e],[o]=await X(t);o||this.#H.appendChild(this.#P(e))}}async remove(e){if(!e)return;let[t,o=[]]=await J();if(!t&&Array.isArray(o)){let t=o.filter(t=>t!==e),[i]=await X(t);if(!i){let t=this.#H.querySelector(`li[data-value="${e}"]`);t&&t.remove()}}}async empty(){let[e]=await X([]);e||this.#H.replaceChildren()}#B(e){if(!this.#H)return;this.#H.replaceChildren();let t=document.createDocumentFragment();e.forEach(e=>{t.appendChild(this.#P(e))}),this.#H.appendChild(t)}#P(e){let t;let o=window.crypto&&"function"==typeof window.crypto.randomUUID?window.crypto.randomUUID():Array.from({length:5},()=>Math.random().toString(36).substring(2,8)).join("-"),i=document.createElement("li");i.setAttribute("data-value",e);try{new URL(e),(t=document.createElement("a")).href=e,t.setAttribute("target","_blank"),t.setAttribute("rel","noreferrer noopener")}catch{t=document.createElement("span")}t.textContent=e,t.setAttribute("id",`historyItem-${o}`);let r=document.createElement("div");r.className="actions";let s=document.createElement("custom-clipboard-copy");s.setAttribute("id",`copyHistoryItem-${o}`),s.setAttribute("aria-label","Copy to clipboard"),s.setAttribute("aria-labelledby",`copyHistoryItem-${o} historyItem-${o}`),s.setAttribute("only-icon",""),s.setAttribute("value",e),r.appendChild(s);let a=document.createElement("button");return a.type="button",a.className="delete-action",a.setAttribute("data-action","delete"),a.setAttribute("id",`removeHistoryItem-${o}`),a.setAttribute("aria-label","Remove from history"),a.setAttribute("aria-labelledby",`removeHistoryItem-${o} historyItem-${o}`),a.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="1.125em" height="1.125em" fill="currentColor" viewBox="0 0 16 16">
        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
      </svg>
    `,r.appendChild(a),i.appendChild(t),i.appendChild(r),i}#D=e=>{let t=e.target;if(t.closest('[data-action="delete"]')){let e=t.closest("li").dataset.value;window.confirm(`Delete history item ${e}?`)&&this.remove(e)}};#F=()=>{window.confirm("Empty history? This action cannot be undone.")&&this.empty()};static defineCustomElement(e="bs-history"){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,eN)}}eN.defineCustomElement(),async function(){let e;let t=document.querySelector("a-tab-group"),o=document.querySelector("video-capture"),i=document.querySelector("bs-settings"),r=document.querySelector("bs-history"),s=document.getElementById("cameraPanel"),a=document.getElementById("filePanel"),n=document.getElementById("scanInstructions"),l=document.getElementById("scanBtn"),d=document.getElementById("dropzone"),c=document.querySelector("resize-observer"),h=document.getElementById("scanFrame"),u=document.getElementById("torchButton"),m=document.getElementById("globalActions"),p=document.getElementById("historyBtn"),b=document.getElementById("historyDialog"),g=document.getElementById("settingsBtn"),f=document.getElementById("settingsDialog"),v=document.getElementById("settingsForm"),y=document.getElementById("cameraSelect"),w=!0;"function"==typeof HTMLDialogElement&&(m?.removeAttribute("hidden"),b?.removeAttribute("hidden"),f?.removeAttribute("hidden"));let{barcodeReaderError:E}=await em.setup();if(E){let e=document.getElementById("barcodeReaderError");w=!1,m?.setAttribute("hidden",""),t?.setAttribute("hidden",""),e?.removeAttribute("hidden"),e.textContent=E?.message;return}let x=await em.getSupportedFormats(),[,A]=await K(),k=A?.formats||x,C=await em.create(k);o.addEventListener("video-capture:video-play",_,{once:!0}),o.addEventListener("video-capture:error",function(e){let t=e.detail.error;if("NotFoundError"===t.name)return;let o="NotAllowedError"===t.name?"Permission to use webcam was denied or video Autoplay is disabled. Reload the page to give appropriate permissions to webcam.":t.message;s.innerHTML=`<div class="alert alert-danger" role="alert" style="margin: 0;">${o}</div>`},{once:!0}),ev.defineCustomElement();let z=o?.shadowRoot,L=z?.querySelector("video"),S=z?.querySelector('[part="actions-container"]');async function T(){n?.removeAttribute("hidden");try{let t=await C.detect(L),o=t?.rawValue??"";if(!o)throw Error(F);window.cancelAnimationFrame(e),ea(s),en(s,`${o}`),r?.add(o),n?.setAttribute("hidden",""),l?.removeAttribute("hidden"),h?.setAttribute("hidden",""),S?.setAttribute("hidden",""),ec();return}catch{}w&&(e=window.requestAnimationFrame(()=>T()))}async function _(e){h?.removeAttribute("hidden"),eh(e.detail.video,h),T();let t=e.target.getTrackSettings(),i=e.target.getTrackCapabilities(),r=document.getElementById("zoomLevel");if(i?.torch&&(u?.removeAttribute("hidden"),o.hasAttribute("torch")&&ep({el:u,isTorchOn:!0})),t?.zoom&&i?.zoom){let e=document.getElementById("zoomControls"),s=i?.zoom?.min||0,a=i?.zoom?.max||10,n=t?.zoom||1;e?.removeAttribute("hidden"),r.textContent=n,e.addEventListener("click",e=>{let t=e.target.closest('[data-action="zoom-in"]'),i=e.target.closest('[data-action="zoom-out"]');t&&n<a&&(n+=.5),i&&n>s&&(n-=.5),r.textContent=n,o.zoom=n})}let s=await ev.getVideoInputDevices();s.forEach((e,t)=>{let o=document.createElement("option");o.value=e.deviceId,o.textContent=e.label||`Camera ${t+1}`,y.appendChild(o)}),s.length>1&&y?.removeAttribute("hidden")}async function M(e){e.preventDefault();let t={},o=new FormData(v),i=o.getAll("general-settings"),r=o.getAll("formats-settings");i.forEach(e=>t[e]=!0),t.formats=r,Y(t),"formats-settings"===e.target.name&&(C=await em.create(r))}d.accept=P.join(","),i.supportedFormats=x,l.addEventListener("click",function(){l?.setAttribute("hidden",""),h?.removeAttribute("hidden"),S?.removeAttribute("hidden"),ea(s),T()}),t.addEventListener("a-tab-show",ee(function(e){let t=e.detail.tabId,o=document.querySelector("video-capture");if("cameraTab"===t){if(w=!0,!o)return;let e=null!=s.querySelector("bs-result");if(o.loading||e||(h?.removeAttribute("hidden"),S?.removeAttribute("hidden"),T()),"function"==typeof o.startVideoStream){let e=y?.value||void 0;o.startVideoStream(e)}}else"fileTab"===t&&(w=!1,null!=o&&"function"==typeof o.stopVideoStream&&o.stopVideoStream(),h?.setAttribute("hidden",""),S?.setAttribute("hidden",""))},250)),d.addEventListener("files-dropzone-drop",function(e){!function(e){if(!e)return;let t=new Image,o=new FileReader;o.onload=o=>{let i=o.target.result;t.onload=async()=>{try{let e=await C.detect(t),o=e?.rawValue??"";if(!o)throw Error(F);en(a,o),r?.add(o),ec()}catch(e){en(a,F),ec({success:!1})}},t.src=i,t.alt="Image preview",d.replaceChildren();let s=document.createElement("div");s.className="dropzone-preview",s.setAttribute("aria-hidden","true");let n=document.createElement("div");n.className="dropzone-preview__image-wrapper";let l=document.createElement("div");l.className="dropzone-preview__file-name",l.textContent=e.name,n.appendChild(t),s.appendChild(n),s.appendChild(l),d.prepend(s)},o.readAsDataURL(e)}(e.detail.acceptedFiles[0])}),c.addEventListener("resize-observer:resize",function(){eh(o.shadowRoot.querySelector("video"),h)}),g.addEventListener("click",function(){f.open=!0}),v.addEventListener("change",ee(M,500)),p.addEventListener("click",function(){b.open=!0}),u.addEventListener("click",function(e){o.torch=!o.torch,ep({el:e.currentTarget,isTorchOn:o.hasAttribute("torch")})}),y.addEventListener("change",function(e){if("function"!=typeof o.restartVideoStream)return;let t=e.target.value||void 0;o.restartVideoStream(t)}),document.addEventListener("visibilitychange",function(){if("cameraTab"===t.querySelector("[selected]").getAttribute("id")){if("hidden"===document.visibilityState)w=!1,null!=o&&"function"==typeof o.stopVideoStream&&o.stopVideoStream();else{w=!0;let e=document.querySelector("video-capture");if(!e)return;if(e.loading||s.querySelector("bs-result")||T(),"function"==typeof e.startVideoStream){let t=y?.value||void 0;e.startVideoStream(t)}}}}),document.addEventListener("keydown",function(e){"Escape"===e.key&&function(){let e=t.querySelector("#cameraTab").hasAttribute("selected"),o=!l.hidden,i=f.hasAttribute("open"),r=b.hasAttribute("open");o&&e&&!(i||r)&&l.click()}()})}()}();
//# sourceMappingURL=index.36010530.js.map
