if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let f={};const o=e=>n(e,c),t={module:{uri:c},exports:f,require:o};i[c]=Promise.all(s.map((e=>t[e]||o(e)))).then((e=>(r(...e),f)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-25cd6434.css",revision:null},{url:"assets/index-8dc544a8.js",revision:null},{url:"index.html",revision:"25ca104998a876c9c9245cb00fb0ae28"},{url:"registerSW.js",revision:"781001db74ac3c3fb7da9a0e232d6435"},{url:"maskable-icon-512x512.png",revision:"e64753e1124eafbbfd1546ebbde5e80d"},{url:"pwa-192x192.png",revision:"2ccbf69c6beda0b1a5e5429fbc3e57bf"},{url:"pwa-512x512.png",revision:"7604fbc574e16f976780bb5ff71590f1"},{url:"pwa-64x64.png",revision:"4cbfa24dd6f3dec682acbe2d0b7bf8c7"},{url:"manifest.webmanifest",revision:"275818ddbf45d37914a160092ff8b27a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
