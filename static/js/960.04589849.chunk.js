"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[960],{854:function(e,n,t){var r=t(1413),a=(t(2791),t(8175)),c=t(184),u=function(e){return(0,c.jsxs)(a.ZP,(0,r.Z)((0,r.Z)({viewBox:"0 0 400 160",height:160,width:400,color:"#3f51b5",backgroundColor:"#3f51b5",style:{width:"100%"}},e),{},{children:[(0,c.jsx)("circle",{cx:"150",cy:"86",r:"8"}),(0,c.jsx)("circle",{cx:"194",cy:"86",r:"8"}),(0,c.jsx)("circle",{cx:"238",cy:"86",r:"8"})]}))};u.metadata={name:"RioF",github:"clariokids",description:"Three Dots",filename:"ThreeDots"},n.Z=u},4387:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var r,a=t(5861),c=t(9439),u=t(7757),s=t.n(u),i=t(2791),o=t(4390),f=t(168),p=t(6444).ZP.ul(r||(r=(0,f.Z)(["\n    padding: 16px;\n    max-width: 80%;\n\n\n"]))),l=t(854),h=t(184),d=t(1087).useParams,v=function(){var e=(0,i.useState)([]),n=(0,c.Z)(e,2),t=n[0],r=n[1],u=(0,i.useState)(!1),f=(0,c.Z)(u,2),v=f[0],x=f[1],m=(0,i.useState)(null),w=(0,c.Z)(m,2),g=w[0],Z=w[1],k=d().movieId,y=function(){var e=(0,a.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.prev=1,e.next=4,(0,o.Bt)(n);case 4:if(t=e.sent,console.log("data :>> ",t),t.results.length){e.next=8;break}throw new Error("We don't have any reviews for this movie :(");case 8:r(t.results),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),Z(e.t0);case 14:return e.prev=14,x(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})));return function(n){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){k&&y(k)}),[k]),(0,h.jsxs)(p,{children:[g&&(0,h.jsx)("p",{children:g.message}),v&&(0,h.jsx)(l.Z,{}),t.map((function(e){var n=e.author,t=e.content,r=e.id;return(0,h.jsxs)("li",{children:[(0,h.jsxs)("p",{children:["Author: ",n]}),(0,h.jsx)("p",{children:t})]},r)}))]})}},4390:function(e,n,t){t.d(n,{Bt:function(){return l},Y5:function(){return f},wr:function(){return o},y:function(){return p},z1:function(){return h}});var r=t(5861),a=t(7757),c=t.n(a),u=t(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="db7375c0f22b53ce13cc7eb00cc2cfa1",i="trending/movie/day?api_key=".concat(s),o=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(n,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?api_key=".concat(s,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=960.04589849.chunk.js.map