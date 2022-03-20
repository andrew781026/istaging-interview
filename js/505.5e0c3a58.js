(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[505],{5743:function(t){!function(e,r){t.exports=r()}(0,(function(){"use strict";var t=1e3,e=6e4,r=36e5,n="millisecond",s="second",o="minute",i="hour",a="day",c="week",u="month",l="quarter",f="year",d="date",p="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},g=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},v={s:g,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),s=r%60;return(e<=0?"+":"-")+g(n,2,"0")+":"+g(s,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),s=e.clone().add(n,u),o=r-s<0,i=e.clone().add(n+(o?-1:1),u);return+(-(n+(r-s)/(o?s-i:i-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:f,w:c,d:a,D:d,h:i,m:o,s:s,ms:n,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",b={};b[$]=y;var j=function(t){return t instanceof k},w=function t(e,r,n){var s;if(!e)return $;if("string"==typeof e){var o=e.toLowerCase();b[o]&&(s=o),r&&(b[o]=r,s=o);var i=e.split("-");if(!s&&i.length>1)return t(i[0])}else{var a=e.name;b[a]=e,s=a}return!n&&s&&($=s),s||!n&&$},S=function(t,e){if(j(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new k(r)},O=v;O.l=w,O.i=j,O.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var k=function(){function y(t){this.$L=w(t.locale,null,!0),this.parse(t)}var g=y.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(h);if(n){var s=n[2]-1||0,o=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return O},g.isValid=function(){return!(this.$d.toString()===p)},g.isSame=function(t,e){var r=S(t);return this.startOf(e)<=r&&r<=this.endOf(e)},g.isAfter=function(t,e){return S(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<S(t)},g.$g=function(t,e,r){return O.u(t)?this[e]:this.set(r,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var r=this,n=!!O.u(e)||e,l=O.p(t),p=function(t,e){var s=O.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return n?s:s.endOf(a)},h=function(t,e){return O.w(r.toDate()[t].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},m=this.$W,y=this.$M,g=this.$D,v="set"+(this.$u?"UTC":"");switch(l){case f:return n?p(1,0):p(31,11);case u:return n?p(1,y):p(0,y+1);case c:var $=this.$locale().weekStart||0,b=(m<$?m+7:m)-$;return p(n?g-b:g+(6-b),y);case a:case d:return h(v+"Hours",0);case i:return h(v+"Minutes",1);case o:return h(v+"Seconds",2);case s:return h(v+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var r,c=O.p(t),l="set"+(this.$u?"UTC":""),p=(r={},r[a]=l+"Date",r[d]=l+"Date",r[u]=l+"Month",r[f]=l+"FullYear",r[i]=l+"Hours",r[o]=l+"Minutes",r[s]=l+"Seconds",r[n]=l+"Milliseconds",r)[c],h=c===a?this.$D+(e-this.$W):e;if(c===u||c===f){var m=this.clone().set(d,1);m.$d[p](h),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else p&&this.$d[p](h);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[O.p(t)]()},g.add=function(n,l){var d,p=this;n=Number(n);var h=O.p(l),m=function(t){var e=S(p);return O.w(e.date(e.date()+Math.round(t*n)),p)};if(h===u)return this.set(u,this.$M+n);if(h===f)return this.set(f,this.$y+n);if(h===a)return m(1);if(h===c)return m(7);var y=(d={},d[o]=e,d[i]=r,d[s]=t,d)[h]||1,g=this.$d.getTime()+n*y;return O.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||p;var n=t||"YYYY-MM-DDTHH:mm:ssZ",s=O.z(this),o=this.$H,i=this.$m,a=this.$M,c=r.weekdays,u=r.months,l=function(t,r,s,o){return t&&(t[r]||t(e,n))||s[r].substr(0,o)},f=function(t){return O.s(o%12||12,t,"0")},d=r.meridiem||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:l(r.monthsShort,a,u,3),MMMM:l(u,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:l(r.weekdaysMin,this.$W,c,2),ddd:l(r.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(o),HH:O.s(o,2,"0"),h:f(1),hh:f(2),a:d(o,i,!0),A:d(o,i,!1),m:String(i),mm:O.s(i,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:s};return n.replace(m,(function(t,e){return e||h[t]||s.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(n,d,p){var h,m=O.p(d),y=S(n),g=(y.utcOffset()-this.utcOffset())*e,v=this-y,$=O.m(this,y);return $=(h={},h[f]=$/12,h[u]=$,h[l]=$/3,h[c]=(v-g)/6048e5,h[a]=(v-g)/864e5,h[i]=v/r,h[o]=v/e,h[s]=v/t,h)[m]||v,p?$:O.a($)},g.daysInMonth=function(){return this.endOf(u).$D},g.$locale=function(){return b[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=w(t,e,!0);return n&&(r.$L=n),r},g.clone=function(){return O.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},y}(),M=k.prototype;return S.prototype=M,[["$ms",n],["$s",s],["$m",o],["$H",i],["$W",a],["$M",u],["$y",f],["$D",d]].forEach((function(t){M[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,k,S),t.$i=!0),S},S.locale=w,S.isDayjs=j,S.unix=function(t){return S(1e3*t)},S.en=b[$],S.Ls=b,S.p={},S}))},2386:function(t,e,r){"use strict";r(1703);var n="%[a-f0-9]{2}",s=new RegExp(n,"gi"),o=new RegExp("("+n+")+","gi");function i(t,e){try{return decodeURIComponent(t.join(""))}catch(s){}if(1===t.length)return t;e=e||1;var r=t.slice(0,e),n=t.slice(e);return Array.prototype.concat.call([],i(r),i(n))}function a(t){try{return decodeURIComponent(t)}catch(n){for(var e=t.match(s),r=1;r<e.length;r++)t=i(e,r).join(""),e=t.match(s);return t}}function c(t){var e={"%FE%FF":"��","%FF%FE":"��"},r=o.exec(t);while(r){try{e[r[0]]=decodeURIComponent(r[0])}catch(u){var n=a(r[0]);n!==r[0]&&(e[r[0]]=n)}r=o.exec(t)}e["%C2"]="�";for(var s=Object.keys(e),i=0;i<s.length;i++){var c=s[i];t=t.replace(new RegExp(c,"g"),e[c])}return t}t.exports=function(t){if("string"!==typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return c(t)}}},6970:function(t){"use strict";t.exports=function(t,e){for(var r={},n=Object.keys(t),s=Array.isArray(e),o=0;o<n.length;o++){var i=n[o],a=t[i];(s?-1!==e.indexOf(i):e(i,a,t))&&(r[i]=a)}return r}},4782:function(t,e,r){"use strict";r(1703);const n=r(9069),s=r(2386),o=r(6189),i=r(6970),a=t=>null===t||void 0===t,c=Symbol("encodeFragmentIdentifier");function u(t){switch(t.arrayFormat){case"index":return e=>(r,n)=>{const s=r.length;return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:null===n?[...r,[d(e,t),"[",s,"]"].join("")]:[...r,[d(e,t),"[",d(s,t),"]=",d(n,t)].join("")]};case"bracket":return e=>(r,n)=>void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:null===n?[...r,[d(e,t),"[]"].join("")]:[...r,[d(e,t),"[]=",d(n,t)].join("")];case"colon-list-separator":return e=>(r,n)=>void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:null===n?[...r,[d(e,t),":list="].join("")]:[...r,[d(e,t),":list=",d(n,t)].join("")];case"comma":case"separator":case"bracket-separator":{const e="bracket-separator"===t.arrayFormat?"[]=":"=";return r=>(n,s)=>void 0===s||t.skipNull&&null===s||t.skipEmptyString&&""===s?n:(s=null===s?"":s,0===n.length?[[d(r,t),e,d(s,t)].join("")]:[[n,d(s,t)].join(t.arrayFormatSeparator)])}default:return e=>(r,n)=>void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:null===n?[...r,d(e,t)]:[...r,[d(e,t),"=",d(n,t)].join("")]}}function l(t){let e;switch(t.arrayFormat){case"index":return(t,r,n)=>{e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===n[t]&&(n[t]={}),n[t][e[1]]=r):n[t]=r};case"bracket":return(t,r,n)=>{e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"colon-list-separator":return(t,r,n)=>{e=/(:list)$/.exec(t),t=t.replace(/:list$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"comma":case"separator":return(e,r,n)=>{const s="string"===typeof r&&r.includes(t.arrayFormatSeparator),o="string"===typeof r&&!s&&p(r,t).includes(t.arrayFormatSeparator);r=o?p(r,t):r;const i=s||o?r.split(t.arrayFormatSeparator).map((e=>p(e,t))):null===r?r:p(r,t);n[e]=i};case"bracket-separator":return(e,r,n)=>{const s=/(\[\])$/.test(e);if(e=e.replace(/\[\]$/,""),!s)return void(n[e]=r?p(r,t):r);const o=null===r?[]:r.split(t.arrayFormatSeparator).map((e=>p(e,t)));void 0!==n[e]?n[e]=[].concat(n[e],o):n[e]=o};default:return(t,e,r)=>{void 0!==r[t]?r[t]=[].concat(r[t],e):r[t]=e}}}function f(t){if("string"!==typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function d(t,e){return e.encode?e.strict?n(t):encodeURIComponent(t):t}function p(t,e){return e.decode?s(t):t}function h(t){return Array.isArray(t)?t.sort():"object"===typeof t?h(Object.keys(t)).sort(((t,e)=>Number(t)-Number(e))).map((e=>t[e])):t}function m(t){const e=t.indexOf("#");return-1!==e&&(t=t.slice(0,e)),t}function y(t){let e="";const r=t.indexOf("#");return-1!==r&&(e=t.slice(r)),e}function g(t){t=m(t);const e=t.indexOf("?");return-1===e?"":t.slice(e+1)}function v(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"===typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function $(t,e){e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e),f(e.arrayFormatSeparator);const r=l(e),n=Object.create(null);if("string"!==typeof t)return n;if(t=t.trim().replace(/^[?#&]/,""),!t)return n;for(const s of t.split("&")){if(""===s)continue;let[t,i]=o(e.decode?s.replace(/\+/g," "):s,"=");i=void 0===i?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?i:p(i,e),r(p(t,e),i,n)}for(const s of Object.keys(n)){const t=n[s];if("object"===typeof t&&null!==t)for(const r of Object.keys(t))t[r]=v(t[r],e);else n[s]=v(t,e)}return!1===e.sort?n:(!0===e.sort?Object.keys(n).sort():Object.keys(n).sort(e.sort)).reduce(((t,e)=>{const r=n[e];return Boolean(r)&&"object"===typeof r&&!Array.isArray(r)?t[e]=h(r):t[e]=r,t}),Object.create(null))}e.extract=g,e.parse=$,e.stringify=(t,e)=>{if(!t)return"";e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e),f(e.arrayFormatSeparator);const r=r=>e.skipNull&&a(t[r])||e.skipEmptyString&&""===t[r],n=u(e),s={};for(const i of Object.keys(t))r(i)||(s[i]=t[i]);const o=Object.keys(s);return!1!==e.sort&&o.sort(e.sort),o.map((r=>{const s=t[r];return void 0===s?"":null===s?d(r,e):Array.isArray(s)?0===s.length&&"bracket-separator"===e.arrayFormat?d(r,e)+"[]":s.reduce(n(r),[]).join("&"):d(r,e)+"="+d(s,e)})).filter((t=>t.length>0)).join("&")},e.parseUrl=(t,e)=>{e=Object.assign({decode:!0},e);const[r,n]=o(t,"#");return Object.assign({url:r.split("?")[0]||"",query:$(g(t),e)},e&&e.parseFragmentIdentifier&&n?{fragmentIdentifier:p(n,e)}:{})},e.stringifyUrl=(t,r)=>{r=Object.assign({encode:!0,strict:!0,[c]:!0},r);const n=m(t.url).split("?")[0]||"",s=e.extract(t.url),o=e.parse(s,{sort:!1}),i=Object.assign(o,t.query);let a=e.stringify(i,r);a&&(a=`?${a}`);let u=y(t.url);return t.fragmentIdentifier&&(u=`#${r[c]?d(t.fragmentIdentifier,r):t.fragmentIdentifier}`),`${n}${a}${u}`},e.pick=(t,r,n)=>{n=Object.assign({parseFragmentIdentifier:!0,[c]:!1},n);const{url:s,query:o,fragmentIdentifier:a}=e.parseUrl(t,n);return e.stringifyUrl({url:s,query:i(o,r),fragmentIdentifier:a},n)},e.exclude=(t,r,n)=>{const s=Array.isArray(r)?t=>!r.includes(t):(t,e)=>!r(t,e);return e.pick(t,s,n)}},6189:function(t,e,r){"use strict";r(1703),t.exports=(t,e)=>{if("string"!==typeof t||"string"!==typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];const r=t.indexOf(e);return-1===r?[t]:[t.slice(0,r),t.slice(r+e.length)]}},9069:function(t){"use strict";t.exports=t=>encodeURIComponent(t).replace(/[!'()*]/g,(t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`))},6451:function(t,e,r){"use strict";r.d(e,{Z:function(){return d}});var n=r(4782);let s,o=window.localStorage;class i{static fetchGet({url:t,params:e,resolve:r,reject:n,timeout:s,accept:o}){return a({url:t,resolve:r,reject:n,method:"GET",params:e,timeout:s,accept:o})}static fetchPost({url:t,params:e,jsonBody:r,resolve:n,reject:s,timeout:o,accept:i}){return a({url:t,resolve:n,reject:s,method:"POST",params:e,data:r,timeout:o,accept:i})}static fetchPut({url:t,params:e,jsonBody:r,resolve:n,reject:s,timeout:o,accept:i}){return a({url:t,resolve:n,reject:s,method:"PUT",params:e,data:r,timeout:o,accept:i})}static fetchPatch({url:t,params:e,jsonBody:r,resolve:n,reject:s,timeout:o,accept:i}){return a({url:t,resolve:n,reject:s,method:"PATCH",params:e,data:r,timeout:o,accept:i})}static fetchDelete({url:t,params:e,jsonBody:r,resolve:n,reject:s,timeout:o,accept:i}){return a({url:t,resolve:n,reject:s,method:"DELETE",params:e,data:r,timeout:o,accept:i})}static getApiUrl(){return"https://cors-anywhere-dot-vr-cam-161603.uc.r.appspot.com/https://demo.api-platform.com"}static setAPIToken(t){s=t,o.setItem("accessToken",t)}static clearAPIToken(){s=void 0,o.removeItem("accessToken")}static getAPIToken(){return s}}async function a({url:t,method:e,params:r,data:s,optionHeaders:o={},resolve:i,reject:a,accept:l="application/json"}){let f=e?{method:e}:{};f=s?Object.assign(f,{body:JSON.stringify(s)}):f,f.headers={...o,...u(),accept:l,"Content-Type":"application/json"};try{const e=n.stringify(r),s=r?`${t}?${e}`:t;let o=await fetch(s,f);if(c(o.status))if(204===o.status)i({});else try{let t=await o.json();i(t)}catch(d){console.error(d),a(d)}else try{let t=await o.json();a({...t,status:o.status})}catch(d){console.error(d),a({status:o.status})}}catch(d){console.error(d),a(d)}}function c(t){return t>=200&&t<300}function u(){return{Authorization:s}}var l=i;const f={list:function(t=1){return new Promise(((e,r)=>l.fetchGet({url:`${l.getApiUrl()}/books`,accept:"application/ld+json",params:{page:t},resolve:e,reject:r})))},get:function(t){return new Promise(((e,r)=>l.fetchGet({url:`${l.getApiUrl()}/books/${t}`,resolve:e,reject:r})))},add:function(t){return new Promise(((e,r)=>l.fetchPost({url:`${l.getApiUrl()}/books`,jsonBody:t,resolve:e,reject:r})))},update:function(t,e){return new Promise(((r,n)=>l.fetchPatch({url:`${l.getApiUrl()}/books/${t}`,jsonBody:e,resolve:r,reject:n})))}};var d=f},5505:function(t,e,r){"use strict";r.d(e,{CQ:function(){return m},Md:function(){return u},Pi:function(){return f},QR:function(){return a},ZN:function(){return c},cB:function(){return h},nR:function(){return d},xP:function(){return p}});var n=r(4870),s=r(3396),o=r(6451),i=r(5743);const a=(0,n.iH)({}),c=(0,n.iH)([]),u=(0,n.iH)(1),l=(0,n.iH)(!1),f=(0,n.iH)(null),d=(0,n.iH)(null),p=t=>{const e=i(t.publicationDate).format("YYYY/MM/DD HH:mm");a.value={published:e,...t}},h=()=>{l.value=!0,o.Z.list(u.value).then((t=>{c.value=[...c.value||[],...t["hydra:member"]],u.value++,l.value=!1})).catch(console.error)},m=()=>{(0,s.bv)((()=>{console.log("onMounted"),h(),f.value=new IntersectionObserver((t=>{t.forEach((t=>{!0===t.isIntersecting&&!1===l.value&&console.log("isIntersecting")}))})),f.value.observe(d.value)})),(0,s.Jd)((()=>{f.value instanceof IntersectionObserver&&(f.value.unobserve(d.value),f.value.disconnect())}))}}}]);
//# sourceMappingURL=505.5e0c3a58.js.map