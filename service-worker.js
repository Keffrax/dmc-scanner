if(!self.define){let e,i={};const c=(c,d)=>(c=new URL(c+".js",d).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(d,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let a={};const s=e=>c(e,r),b={module:{uri:r},exports:a,require:s};i[r]=Promise.all(d.map((e=>b[e]||s(e)))).then((e=>(n(...e),a)))}}define(["./workbox-1f84e78b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.f40613a5.png",revision:"c072601be92927f395dbed17b09f1e9e"},{url:"camera-scanner.93ba64e0.png",revision:"b656afb2a3e8781e6ac74c4f339e7be3"},{url:"es.b12f2a91.js",revision:"814230043d59d12d91e31dc21be6c450"},{url:"es.b12f2a91.js.map",revision:"6b73094dd8e36c09ac6b29cc64d8eb72"},{url:"es.e43e1904.js",revision:"e478851bb527b302a2b259763b7feac3"},{url:"es.e43e1904.js.map",revision:"65a3fe69af564e19561e4cfc3b9ae2ac"},{url:"favicon.a05bdb0a.ico",revision:"ece89efb9e6bf43b4a1a4bddc3e6c0ee"},{url:"icon-large.d7217ddc.png",revision:"5828d4de36aead7c0dbc6f46e7e1b0a1"},{url:"icon-medium.280ae3e3.png",revision:"8c841831246f8d15574c0310bf18cb4a"},{url:"icon-small.3efe2498.png",revision:"02e36dbc3df860e62bae68d22098bf47"},{url:"image-scanner.ba566f43.png",revision:"dd2f19efb053b88ce0f7ce085ee08e27"},{url:"index.1e9ee4a9.css",revision:"aeda7640432a530a32d7143907e4983a"},{url:"index.1e9ee4a9.css.map",revision:"ed53e20987414d0fdaa55ebb8cebea28"},{url:"index.4f264005.js",revision:"3c71f63bbf6390d5852f3dd3ec8d3a8b"},{url:"index.4f264005.js.map",revision:"345d950296bc982697784c5054e09e01"},{url:"index.98286722.js",revision:"9125a87f36919cb26f654e6599a35cff"},{url:"index.98286722.js.map",revision:"9532edc9413c9e22b3c1c7250ed9b850"},{url:"index.98a7b582.js",revision:"3fa2ad8d96c4c904414f858a549cdb14"},{url:"index.98a7b582.js.map",revision:"e29c490a520ef2f168bb2d8cb4238ee7"},{url:"index.bb1ce697.js",revision:"82f689cbc7405307d1eb42c297e81360"},{url:"index.bb1ce697.js.map",revision:"5b900080e5c21ffc5cf1397dba7de05e"},{url:"index.html",revision:"2aa134517c55d58604887aed8a3e79d1"},{url:"logopass.e245f7ef.png",revision:"f37bf224009984de7eacd3d80b98d930"},{url:"manifest.webmanifest",revision:"4c81efbd9bc6c6f3cad15ba638046986"},{url:"spinner-light.b2a4e25c.svg",revision:"9b5ee885eb78f5b69d5ccb02500f703a"}],{})}));
//# sourceMappingURL=service-worker.js.map
