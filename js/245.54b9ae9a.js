"use strict";(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[245],{1245:function(t,e,o){o.r(e),o.d(e,{default:function(){return P}});var r=o(3396);const s={class:"list"},a={class:"book-list"},n={class:"load-more",ref:"loadMore"},i=(0,r.Uk)("LOAD MORE");function c(t,e,o,c,l,u){const d=(0,r.up)("Card"),b=(0,r.up)("PrimaryButton");return(0,r.wg)(),(0,r.iD)("div",s,[(0,r._)("div",a,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.bookList,(e=>((0,r.wg)(),(0,r.j4)(d,{key:e.isbn,book:e,onClick:o=>t.viewDetail(e)},null,8,["book","onClick"])))),128))]),(0,r._)("div",n,[(0,r.Wm)(b,{type:"primary",onClick:t.getMoreBooks},{default:(0,r.w5)((()=>[i])),_:1},8,["onClick"])],512)])}var l=o(7139);const u={class:"card"},d={class:"info"},b=["title"],p=["title"];function k(t,e,o,s,a,n){const i=(0,r.up)("LazyImage");return(0,r.wg)(),(0,r.iD)("div",u,[(0,r.Wm)(i,{isbn:t.book.isbn},null,8,["isbn"]),(0,r._)("div",d,[(0,r._)("h3",{class:"title",title:t.book.title},(0,l.zw)(t.book.title),9,b),(0,r._)("h4",{class:"author",title:t.book.author},(0,l.zw)(t.book.author),9,p)])])}const m=["data-src"];function v(t,e,o,s,a,n){return(0,r.wg)(),(0,r.iD)("img",{ref:"imageRef",src:"https://fakeimg.pl/800x600/","data-src":`https://picsum.photos/800/600/?random=${o.isbn}`,alt:"圖片"},null,8,m)}var g=o(4870);const f=new IntersectionObserver((t=>{t.forEach((t=>{!0===t.isIntersecting&&(t.target.src=t.target.dataset.src),t.isIntersecting}))})),h=t=>((0,r.bv)((()=>{f.observe(t.value)})),(0,r.Jd)((()=>{f.unobserve(t.value)})),f);var w={name:"LazyImage",props:{isbn:String},setup(){const t=(0,g.iH)(null);return h(t),{imageRef:t}}},C=o(89);const _=(0,C.Z)(w,[["render",v]]);var y=_,I=(0,r.aZ)({name:"PureCard",props:{book:Object},components:{LazyImage:y}});const D=(0,C.Z)(I,[["render",k],["__scopeId","data-v-46b28748"]]);var L=D,Z=o(7687),M=o(3535),z=(0,r.aZ)({name:"ListView",setup(){return(0,M.CQ)(),{observer:M.Pi,loadMore:M.nR,bookList:M.ZN,page:M.Md}},components:{Card:L,PrimaryButton:Z.Z},methods:{getMoreBooks:M.cB,viewDetail(t){(0,M.xP)(t),this.$router.push({name:"detail",params:{id:t["@id"].replace("/books/","")}})}}});const B=(0,C.Z)(z,[["render",c],["__scopeId","data-v-0a806881"]]);var P=B}}]);
//# sourceMappingURL=245.54b9ae9a.js.map