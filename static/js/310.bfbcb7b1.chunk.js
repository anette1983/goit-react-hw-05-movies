"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[310],{854:function(n,e,r){var t=r(1413),a=(r(2791),r(8175)),c=r(184),i=function(n){return(0,c.jsxs)(a.ZP,(0,t.Z)((0,t.Z)({viewBox:"0 0 400 160",height:160,width:400,color:"#3f51b5",backgroundColor:"#3f51b5",style:{width:"100%"}},n),{},{children:[(0,c.jsx)("circle",{cx:"150",cy:"86",r:"8"}),(0,c.jsx)("circle",{cx:"194",cy:"86",r:"8"}),(0,c.jsx)("circle",{cx:"238",cy:"86",r:"8"})]}))};i.metadata={name:"RioF",github:"clariokids",description:"Three Dots",filename:"ThreeDots"},e.Z=i},1077:function(n,e,r){r.d(e,{l:function(){return c}});var t,a=r(168),c=r(6444).ZP.div(t||(t=(0,a.Z)(["\npadding: 16px;\n\nul {\n    list-style: inside;\n\n\n    \n}\nli {\n    margin-bottom: 8px;\n}\n\na {\n    color: inherit;\n    font-size: 18px;\n    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),transform 250ms cubic-bezier(0.4, 0, 0.2, 1),-webkit-transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    &:hover, &:focus, &:active {\n        color: red;\n        \n    }\n}\n\n"])))},5310:function(n,e,r){r.r(e),r.d(e,{default:function(){return h}});var t,a=r(5861),c=r(9439),i=r(7757),u=r.n(i),o=r(2791),s=r(1087),p=r(4390),l=r(1077),f=r(168),d=r(6444).ZP.form(t||(t=(0,f.Z)(["\npadding: 16px;\ninput {\n    padding: 8px 32px 8px 8px;\n  border-radius: 4px;\n  font: inherit;\n}\nbutton {\n    padding: 8px 32px;\n    border-radius: 4px;\n    font: inherit;\n    margin-left: 4px;\n    background-color: transparent;\n    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),transform 250ms cubic-bezier(0.4, 0, 0.2, 1),-webkit-transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    &:hover, &:focus, &:active {\n        color: orangered;\n}\n\n}\n\n"]))),v=r(854),m=r(184),h=function(){var n,e=(0,o.useState)([]),r=(0,c.Z)(e,2),t=r[0],i=r[1],f=(0,o.useState)(!1),h=(0,c.Z)(f,2),b=h[0],x=h[1],g=(0,o.useState)(null),k=(0,c.Z)(g,2),y=k[0],w=k[1],Z=(0,s.useSearchParams)(),j=(0,c.Z)(Z,2),_=j[0],z=j[1],S=null!==(n=_.get("movieQuery"))&&void 0!==n?n:"",C=function(){var n=(0,a.Z)(u().mark((function n(e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return x(!0),n.prev=1,n.next=4,(0,p.z1)(e);case 4:if((r=n.sent).results.length){n.next=7;break}throw new Error("There is no movies on your query! :( ");case 7:console.log("data.total_results :>> ",r.total_results),i(r.results),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),w(n.t0);case 14:return n.prev=14,x(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[1,11,14,17]])})));return function(e){return n.apply(this,arguments)}}();return(0,o.useEffect)((function(){S&&C(S)}),[S]),(0,m.jsxs)(l.l,{children:[(0,m.jsxs)(d,{onSubmit:function(n){n.preventDefault();var e=n.target;z({movieQuery:e.elements.search.value.trim()}),i([]),w(!1),e.reset()},children:[(0,m.jsx)("input",{name:"search",type:"text",placeholder:"Search movies...",autoComplete:"off",autoFocus:!0}),(0,m.jsx)("button",{type:"submit",children:"SEARCH"})]}),y&&(0,m.jsxs)("p",{children:[y.message," Please try again!"]}),b&&(0,m.jsx)(v.Z,{}),(0,m.jsx)("ul",{children:null===t||void 0===t?void 0:t.map((function(n){var e=n.id,r=n.title;return(0,m.jsx)("li",{children:(0,m.jsx)(s.Link,{to:"/movies/".concat(e),state:{from:"/movies?movieQuery=".concat(S)},children:r})},e)}))})]})}},4390:function(n,e,r){r.d(e,{Bt:function(){return f},Y5:function(){return p},wr:function(){return s},y:function(){return l},z1:function(){return d}});var t=r(5861),a=r(7757),c=r.n(a),i=r(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="db7375c0f22b53ce13cc7eb00cc2cfa1",o="trending/movie/day?api_key=".concat(u),s=function(){var n=(0,t.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"?api_key=").concat(u,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/reviews?api_key=").concat(u,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?api_key=".concat(u,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=310.bfbcb7b1.chunk.js.map