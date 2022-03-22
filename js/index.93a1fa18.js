(function(){"use strict";var e={1949:function(e,t,n){var o=n(9242),r=n(3396);function a(e,t,n,a,i,s){const l=(0,r.up)("nav-bar"),u=(0,r.up)("router-view"),c=(0,r.up)("Dialog"),d=(0,r.up)("LoadingMask");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(l),(0,r._)("main",null,[(0,r.Wm)(u,null,{default:(0,r.w5)((({Component:e})=>[(0,r.Wm)(o.uT,{name:"fade",mode:"out-in"},{default:(0,r.w5)((()=>[((0,r.wg)(),(0,r.j4)((0,r.LL)(e)))])),_:2},1024)])),_:1})]),(0,r.Wm)(c),(0,r.Wm)(d)],64)}var i=n(7139);const s=e=>((0,r.dD)("data-v-9f7af0b4"),e=e(),(0,r.Cn)(),e),l={class:"nav"},u=s((()=>(0,r._)("h1",{class:"nav-title"},"The Book Shelf",-1))),c=s((()=>(0,r._)("i",{class:"icon icon-add"},null,-1))),d=s((()=>(0,r._)("span",{class:"text"},"Create",-1))),p=[c,d],g=s((()=>(0,r._)("i",{class:"icon icon-back"},null,-1))),f=s((()=>(0,r._)("span",{class:"text"},"Back",-1))),m=[g,f],v={class:"nav-title"},h=s((()=>(0,r._)("i",{class:"icon icon-edit"},null,-1))),b=s((()=>(0,r._)("span",{class:"text"},"Edit",-1))),y=[h,b];function k(e,t,n,o,a,s){return(0,r.wg)(),(0,r.iD)("nav",l,["list"===e.$route.name?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[u,(0,r._)("div",{class:"icon-wrap",onClick:t[0]||(t[0]=(...t)=>e.openDialog&&e.openDialog(...t))},p)],64)):((0,r.wg)(),(0,r.iD)(r.HY,{key:1},[(0,r._)("div",{class:"icon-wrap",onClick:t[1]||(t[1]=(...t)=>e.toListPage&&e.toListPage(...t))},m),(0,r._)("h1",v,(0,i.zw)(e.singleBook.title),1),(0,r._)("div",{class:"icon-wrap",onClick:t[2]||(t[2]=t=>e.openDialog(e.singleBook,e.$route.params.id,"edit"))},y)],64))])}var w=n(3535),_=(0,r.aZ)({name:"NavBar",props:{header_str:{type:String,default:"The Book Shelf"}},setup(){return{singleBook:w.QR}},methods:{toListPage(){this.$router.push({name:"list"})},openDialog:w.G3}}),j=n(89);const B=(0,j.Z)(_,[["render",k],["__scopeId","data-v-9f7af0b4"]]);var D=B;const C=e=>((0,r.dD)("data-v-aef14b56"),e=e(),(0,r.Cn)(),e),P={class:"pop-up-container-root"},T={class:"pop-up-box"},H={class:"pop-up-title flex justifyContent"},I={class:"pop-up-content"},S={class:"form-group"},O={class:"pop-up-action"},M=C((()=>(0,r._)("i",{class:"icon icon-save"},null,-1))),A=(0,r.Uk)(" Save ");function L(e,t,n,a,s,l){const u=(0,r.up)("FormItem"),c=(0,r.up)("Datepicker"),d=(0,r.up)("PrimaryButton");return(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",{class:(0,i.C_)(["pop-up-container",[s.closing&&"closing",s.opening&&"opening"]])},[(0,r._)("div",P,[(0,r._)("div",T,[(0,r._)("div",H,[(0,r._)("i",{class:"icon icon-close close",onClick:t[0]||(t[0]=e=>a.closeDialog())})]),(0,r._)("div",I,[(0,r._)("div",S,[(0,r.Wm)(u,{label:"Name",required:!0,"error-msg":s.errMsg.title},{default:(0,r.w5)((()=>[(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>a.dialogBook.title=e),onInput:t[2]||(t[2]=e=>l.singleValidate("title",e.target.value))},null,544),[[o.nr,a.dialogBook.title]])])),_:1},8,["error-msg"]),(0,r.Wm)(u,{label:"Author",required:!0,"error-msg":s.errMsg.author},{default:(0,r.w5)((()=>[(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>a.dialogBook.author=e),onInput:t[4]||(t[4]=e=>l.singleValidate("author",e.target.value))},null,544),[[o.nr,a.dialogBook.author]])])),_:1},8,["error-msg"]),(0,r.Wm)(u,{label:"Pub date",required:!0,"error-msg":s.errMsg.publicationDate},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{modelValue:a.dialogBook.publicationDate,"onUpdate:modelValue":t[5]||(t[5]=e=>a.dialogBook.publicationDate=e),onInput:t[6]||(t[6]=e=>l.singleValidate("publicationDate",e.target.value))},null,8,["modelValue"])])),_:1},8,["error-msg"]),(0,r.Wm)(u,{label:"ISBN",required:!0,"error-msg":s.errMsg.isbn},{default:(0,r.w5)((()=>[(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":t[7]||(t[7]=e=>a.dialogBook.isbn=e),onInput:t[8]||(t[8]=e=>l.singleValidate("isbn",e.target.value))},null,544),[[o.nr,a.dialogBook.isbn]])])),_:1},8,["error-msg"]),(0,r.Wm)(u,{label:"Description",required:!0,"error-msg":s.errMsg.description},{default:(0,r.w5)((()=>[(0,r.wy)((0,r._)("textarea",{"onUpdate:modelValue":t[9]||(t[9]=e=>a.dialogBook.description=e),onInput:t[10]||(t[10]=e=>l.singleValidate("description",e.target.value))},null,544),[[o.nr,a.dialogBook.description]])])),_:1},8,["error-msg"])])]),(0,r._)("div",O,[(0,r.Wm)(d,{type:"primary",onClick:t[11]||(t[11]=e=>l.save(a.dialogBook))},{default:(0,r.w5)((()=>[M,A])),_:1})])])])],2)),[[o.F8,s.show]])}var q=n(7687);const E={class:"row"},x={class:"input-block"},$={key:0,class:"error-block"};function N(e,t,n,o,a,s){return(0,r.wg)(),(0,r.iD)("div",E,[(0,r._)("label",{class:(0,i.C_)([n.required&&"required"])},(0,i.zw)(n.label),3),(0,r._)("div",x,[(0,r.WI)(e.$slots,"default"),n.errorMsg?((0,r.wg)(),(0,r.iD)("div",$,(0,i.zw)(n.errorMsg),1)):(0,r.kq)("",!0)])])}var W={name:"FormItem",props:{label:String,errorMsg:String,required:Boolean}};const U=(0,j.Z)(W,[["render",N]]);var V=U,Z=n(5776),F=n(2042);const G=(e,t)=>0!==e&&e?null:t,Y=(e,t,n,o)=>{const r=e[t];let a="";const i=r.filter((e=>!o||e.trigger===o));for(const s of i)if(s.required?a=G(n,s.message):s.validator&&(a=s.validator(n)),a)return{attr:t,msg:a};return{attr:t,msg:a}};var z={name:"MyDialog",setup(){return{dialogShow:w.Ob,dialogBook:w.p3,dialogType:w.nL,closeDialog:w.gk}},components:{PrimaryButton:q.Z,FormItem:V,Datepicker:Z.Z},data(){const e=e=>(0,F.G)(e)?null:"格式不正確，請輸入 ISBN-10 或 ISBN-13",t={title:[{required:!0,message:"書名為必填欄位",trigger:"change"}],author:[{required:!0,message:"作者為必填欄位",trigger:"change"}],publicationDate:[{required:!0,message:"發行日期為必填欄位",trigger:"change"}],isbn:[{required:!0,message:"ISBN為必填欄位",trigger:"change"},{validator:e,trigger:"change"}],description:[{required:!0,message:"描述為必填欄位",trigger:"change"}]};return{closing:!1,opening:!1,show:!1,errMsg:{},rules:t}},watch:{dialogShow(e,t){e!==t&&(e?(this.show=!0,this.opening=!0,setTimeout((()=>this.opening=!1),600)):(this.closing=!0,setTimeout((()=>{this.show=!1,this.closing=!1}),600)))}},methods:{singleValidate(e,t){const n=Y(this.rules,e,t,"change");this.errMsg[e]=n.msg},validate(){const e=Object.keys(this.rules).map((e=>Y(this.rules,e,this.dialogBook[e])));return e.forEach((e=>this.errMsg[e.attr]=e.msg)),e.map((({msg:e})=>e)).join("")},save(){const e={title:this.dialogBook.title,author:this.dialogBook.author,publicationDate:this.dialogBook.publicationDate,isbn:this.dialogBook.isbn,description:this.dialogBook.description},t=!this.validate();t&&"create"===this.dialogType?(0,w.$x)(e,this.$router):t&&"edit"===this.dialogType&&(0,w.t2)(this.dialogBook.id,e)}}};const Q=(0,j.Z)(z,[["render",L],["__scopeId","data-v-aef14b56"]]);var R=Q;const J=e=>((0,r.dD)("data-v-71f2b55a"),e=e(),(0,r.Cn)(),e),K={key:0,class:"mask"},X=J((()=>(0,r._)("div",{class:"loader"},"Loading...",-1))),ee=[X];function te(e,t,n,o,a,i){return o.isLoading?((0,r.wg)(),(0,r.iD)("div",K,ee)):(0,r.kq)("",!0)}var ne={name:"LoadingMask",setup(){return{isLoading:w.hg}}};const oe=(0,j.Z)(ne,[["render",te],["__scopeId","data-v-71f2b55a"]]);var re=oe,ae={name:"BookList",components:{"nav-bar":D,Dialog:R,LoadingMask:re}};const ie=(0,j.Z)(ae,[["render",a]]);var se=ie,le=n(678);const ue=[{path:"/",name:"list",component:()=>n.e(245).then(n.bind(n,1245)),meta:{title:"Tree 圖書館 🏛"}},{path:"/detail/:id",name:"detail",component:()=>n.e(308).then(n.bind(n,6308)),meta:{title:"單本書籍"}}],ce=(0,le.p7)({history:(0,le.PO)("/istaging-interview/"),routes:ue});ce.beforeEach(((e,t,n)=>{"string"===typeof e.meta.title&&(window.document.title=e.meta.title),n()}));var de=ce,pe=n(65),ge=(0,pe.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});const fe=(0,o.ri)(se);fe.use(ge),fe.use(de),fe.mount("#app")},3535:function(e,t,n){n.d(t,{$x:function(){return A},ZN:function(){return j},gk:function(){return T},p3:function(){return _},Ob:function(){return h},nL:function(){return b},cB:function(){return L},gM:function(){return O},hg:function(){return y},nR:function(){return C},Pi:function(){return D},G3:function(){return P},Md:function(){return B},xP:function(){return S},QR:function(){return w},t2:function(){return M},CQ:function(){return q}});var o=n(4870),r=n(3396),a=n(4782);let i;const s=window.localStorage;class l{static fetchGet({url:e,params:t,resolve:n,reject:o,timeout:r,optionHeaders:a}){return u({url:e,resolve:n,reject:o,method:"GET",params:t,timeout:r,optionHeaders:a})}static fetchPost({url:e,params:t,jsonBody:n,resolve:o,reject:r,timeout:a,optionHeaders:i}){return u({url:e,resolve:o,reject:r,method:"POST",params:t,data:n,timeout:a,optionHeaders:i})}static fetchPut({url:e,params:t,jsonBody:n,resolve:o,reject:r,timeout:a,optionHeaders:i}){return u({url:e,resolve:o,reject:r,method:"PUT",params:t,data:n,timeout:a,optionHeaders:i})}static fetchPatch({url:e,params:t,jsonBody:n,resolve:o,reject:r,timeout:a,optionHeaders:i}){return u({url:e,resolve:o,reject:r,method:"PATCH",params:t,data:n,timeout:a,optionHeaders:i})}static fetchDelete({url:e,params:t,jsonBody:n,resolve:o,reject:r,timeout:a,optionHeaders:i}){return u({url:e,resolve:o,reject:r,method:"DELETE",params:t,data:n,timeout:a,optionHeaders:i})}static getApiUrl(){return"https://cors-anywhere-dot-vr-cam-161603.uc.r.appspot.com/https://demo.api-platform.com"}static setAPIToken(e){i=e,s.setItem("accessToken",e)}static clearAPIToken(){i="",s.removeItem("accessToken")}static getAPIToken(){return i}}async function u({url:e,method:t,params:n,data:o,optionHeaders:r={},resolve:i,reject:s}){let l=t?{method:t}:{};l=o?Object.assign(l,{body:JSON.stringify(o)}):l,l.headers={accept:"application/json","Content-Type":"application/json",...d(),...r};try{const t=a.stringify(n||{}),o=n?`${e}?${t}`:e,r=await fetch(o,l);if(c(r.status))if(204===r.status)i({});else try{const e=await r.json();i(e)}catch(u){console.error(u),s(u)}else try{const e=await r.json();s({...e,status:r.status})}catch(u){console.error(u),s({status:r.status})}}catch(u){console.error(u),s(u)}}function c(e){return e>=200&&e<300}function d(){return{Authorization:i}}var p=l;const g={list:function(e=1){return new Promise(((t,n)=>p.fetchGet({url:`${p.getApiUrl()}/books`,params:{page:e},resolve:t,reject:n,optionHeaders:{accept:"application/ld+json"}})))},get:function(e){return new Promise(((t,n)=>p.fetchGet({url:`${p.getApiUrl()}/books/${e}`,resolve:t,reject:n})))},add:function(e){return new Promise(((t,n)=>p.fetchPost({url:`${p.getApiUrl()}/books`,jsonBody:e,resolve:t,reject:n,optionHeaders:{"Content-Type":"application/ld+json",accept:"application/ld+json"}})))},update:function(e,t){return new Promise(((n,o)=>p.fetchPatch({url:`${p.getApiUrl()}/books/${e}`,jsonBody:t,resolve:n,reject:o,optionHeaders:{"Content-Type":"application/merge-patch+json",accept:"application/ld+json"}})))}};var f=g,m=n(5743),v=n(678);const h=(0,o.iH)(!1),b=(0,o.iH)(""),y=(0,o.iH)(!1),k=(0,o.iH)(!1),w=(0,o.iH)({}),_=(0,o.iH)({}),j=(0,o.iH)([]),B=(0,o.iH)(1),D=(0,o.iH)(null),C=(0,o.iH)(null),P=(e,t,n="create")=>{b.value=n,_.value="edit"===n?{...e,id:t}:{},h.value=!0},T=()=>h.value=!1,H=()=>y.value=!0,I=()=>y.value=!1,S=e=>{const t=m(e.publicationDate).format("YYYY/MM/DD HH:mm");w.value={published:t,...e}},O=async(e,t)=>{H();const n=t.value&&t.value.id===e;n||S(await f.get(e)),I()},M=(e,t)=>{H(),f.update(e,t).then((e=>{w.value=e,T()})).catch(console.error).finally((()=>I()))},A=(e,t)=>{H(),f.add(e).then((e=>{w.value=e,t.push({name:"detail",params:{id:e["@id"].replace("/books/","")}}),T()})).catch(console.error).finally((()=>I()))},L=()=>{H(),f.list(B.value).then((e=>{e["hydra:member"].length>0&&(j.value=[...j.value||[],...e["hydra:member"]],k.value||B.value++)})).catch(console.error).finally((()=>I()))},q=()=>{(0,r.bv)((()=>{k.value=(0,v.yj)().query.isInfinite,L(),D.value=new IntersectionObserver((e=>{e.forEach((e=>{!0===e.isIntersecting&&!1===y.value&&L(k.value)}))})),D.value.observe(C.value)})),(0,r.Jd)((()=>{D.value instanceof IntersectionObserver&&(D.value.unobserve(C.value),D.value.disconnect())}))}},7687:function(e,t,n){n.d(t,{Z:function(){return u}});var o=n(3396),r=n(7139);function a(e,t,n,a,i,s){return(0,o.wg)(),(0,o.iD)("button",{class:(0,r.C_)(["btn",{"btn-primary":"primary"===n.type,"is-round":n.round}])},[(0,o.WI)(e.$slots,"default",{},void 0,!0)],2)}var i={name:"PrimaryButton",props:{type:String,round:Boolean}},s=n(89);const l=(0,s.Z)(i,[["render",a],["__scopeId","data-v-02c3fe18"]]);var u=l}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],a=e[c][2];for(var s=!0,l=0;l<o.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{245:"54b9ae9a",308:"bfe739d9"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{245:"1eb04be4",308:"9c0901ff"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="front:";n.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var s,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=o),e[o]=[r];var p=function(t,n){s.onerror=s.onload=null,clearTimeout(g);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},g=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/istaging-interview/"}(),function(){var e=function(e,t,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=function(a){if(r.onerror=r.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,r.parentNode.removeChild(r),o(l)}};return r.onerror=r.onload=a,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===t)return r}},o=function(o){return new Promise((function(r,a){var i=n.miniCssF(o),s=n.p+i;if(t(i,s))return r();e(o,s,r,a)}))},r={826:0};n.f.miniCss=function(e,t){var n={245:1,308:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={826:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(t),s=new Error,l=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};n.l(i,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],s=o[1],l=o[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(l)var c=l(n)}for(t&&t(o);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},o=self["webpackChunkfront"]=self["webpackChunkfront"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(1949)}));o=n.O(o)})();
//# sourceMappingURL=index.93a1fa18.js.map