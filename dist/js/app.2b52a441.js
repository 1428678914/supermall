(function(t){function e(e){for(var r,a,c=e[0],u=e[1],s=e[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(r=!1)}r&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},i={app:0},o=[];function c(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-3aaac981":"63bc4e7a","chunk-7ce03156":"39f284e9","chunk-9e349904":"2791ee88","chunk-b05603a6":"d752f048"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-3aaac981":1,"chunk-7ce03156":1,"chunk-9e349904":1,"chunk-b05603a6":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-3aaac981":"35b272e8","chunk-7ce03156":"5cc58965","chunk-9e349904":"d8e6b234","chunk-b05603a6":"7126241b"}[t]+".css",i=u.p+r,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var s=o[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===i))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===i)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[t],p.parentNode.removeChild(p),n(o)},p.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){a[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,n){r=i[t]=[e,n]}));e.push(r[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(t);var f=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}i[t]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"1dad":function(t,e,n){"use strict";n("1f1a")},"1f1a":function(t,e,n){},"31f1":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),n("main-tab-bar")],1)},i=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tab-bar",[r("tab-bar-item",{attrs:{path:"/home"}},[r("img",{attrs:{slot:"item-icon",src:n("c96b"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("d930"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("首页")])]),r("tab-bar-item",{attrs:{path:"/category"}},[r("img",{attrs:{slot:"item-icon",src:n("c48a"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("8ce4"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("分类")])]),r("tab-bar-item",{attrs:{path:"/cart"}},[r("img",{attrs:{slot:"item-icon",src:n("dde1"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("c10d"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("购物车")])]),r("tab-bar-item",{attrs:{path:"/profile"}},[r("img",{attrs:{slot:"item-icon",src:n("fedc"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("fd6e"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("我的")])])],1)},c=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tab-bar"}},[t._t("default")],2)},s=[],l={name:"TabBar"},f=l,p=(n("5ec0"),n("2877")),m=Object(p["a"])(f,u,s,!1,null,"0981820a",null),d=m.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-bar-item",on:{click:t.itemClick}},[t.isActive?n("div",[t._t("item-icon-active")],2):n("div",[t._t("item-icon")],2),n("div",{style:t.activeStyle},[t._t("item-text")],2)])},b=[],v=(n("c975"),n("ac1f"),n("5319"),{name:"TabBarItem",props:{path:String,activeColor:{type:String,default:"var(--color-tint)"}},computed:{isActive:function(){return-1!==this.$route.path.indexOf(this.path)},activeStyle:function(){return this.isActive?{color:this.activeColor}:{}}},methods:{itemClick:function(){this.$router.replace(this.path)["catch"]((function(t){}))}}}),g=v,y=(n("1dad"),Object(p["a"])(g,h,b,!1,null,"0cb0189b",null)),x=y.exports,k={name:"Maintabbar",components:{TabBar:d,TabBarItem:x}},_=k,w=Object(p["a"])(_,o,c,!1,null,"068abb15",null),O=w.exports,j={name:"app",components:{MainTabBar:O}},E=j,S=(n("034f"),Object(p["a"])(E,a,i,!1,null,null,null)),T=S.exports,C=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),P=function(){return n.e("chunk-9e349904").then(n.bind(null,"b3d7"))},A=function(){return n.e("chunk-7ce03156").then(n.bind(null,"bb51"))},B=function(){return n.e("chunk-b05603a6").then(n.bind(null,"c228"))},$=function(){return n.e("chunk-3aaac981").then(n.bind(null,"3b42"))};r["default"].use(C["a"]);var M=[{path:"",redirect:"/home"},{path:"/home",component:P},{path:"/category",component:A},{path:"/cart",component:B},{path:"/profile",component:$}],L=new C["a"]({routes:M,mode:"history"}),N=L;r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(T)},router:N}).$mount("#app")},"5ec0":function(t,e,n){"use strict";n("31f1")},"85ec":function(t,e,n){},"8ce4":function(t,e,n){t.exports=n.p+"img/category-active.37f73268.png"},c10d:function(t,e,n){t.exports=n.p+"img/cart-active.575151dc.png"},c48a:function(t,e,n){t.exports=n.p+"img/category.b02684df.png"},c96b:function(t,e,n){t.exports=n.p+"img/home.a6b94145.png"},d930:function(t,e,n){t.exports=n.p+"img/home-active.e86c05b3.png"},dde1:function(t,e,n){t.exports=n.p+"img/cart.5be95567.png"},fd6e:function(t,e,n){t.exports=n.p+"img/profile-active.cf0ae06c.png"},fedc:function(t,e,n){t.exports=n.p+"img/profile.3f4a2043.png"}});
//# sourceMappingURL=app.2b52a441.js.map