(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(4),s=c.n(a),r=c(2),i=c(3),o=function(e){return e.items},u=function(e){return e.searchedData},j=c(14),b=c(1),l=function(e){var t=Object(r.d)(),c=Object(r.e)(o,r.c),a=Object(n.useState)(""),s=Object(i.a)(a,2),u=s[0],l=s[1],O=function(){if(0!==u.length){var e=c.filter((function(e){return e.name.match(new RegExp(u,"gi"))}));0===e.length&&j.b.dark("Can't find any movies with this name. Please try some other movies!",{autoClose:3e3}),t({type:"SEARCHED_ITEMS",searchedItems:e})}};return Object(n.useEffect)((function(){e&&(l(""),t({type:"REMOVE_SEARCHED_ITEMS"}))}),[e,t]),Object(b.jsxs)("div",{className:"search_field",children:[Object(b.jsx)("input",{name:"query",value:u,placeholder:"Search movies!",onChange:function(e){return c=e.target.value,l(c),void(0===c.length&&t({type:"REMOVE_SEARCHED_ITEMS"}));var c},onKeyPress:function(e){var t;13!==(t=e).charCode&&13!==t.which&&"Enter"!==t.code||O()}}),Object(b.jsx)("button",{type:"button",onClick:O,children:Object(b.jsx)("img",{className:"search-icon",src:"/myapp/assets/search.png",alt:"Search"})}),Object(b.jsx)(j.a,{})]})},O=Object(n.memo)(l),f=function(){var e=Object(r.e)(u,r.c),t=Object(n.useState)(!1),c=Object(i.a)(t,2),a=c[0],s=c[1],o=Object(n.useState)(!1),j=Object(i.a)(o,2),l=j[0],f=j[1];Object(n.useEffect)((function(){e.length>0?s(!0):s(!1)}),[e]);return Object(b.jsxs)("div",{className:"nav-bar",children:[Object(b.jsx)("div",{className:"back-button-container",children:Object(b.jsx)("img",{src:"/myapp/assets/Back.png",alt:"back",className:"back-button ".concat(!a&&"blur"),onClick:function(){if(!a)return!1;f(!0)}})}),Object(b.jsx)(O,{handleBack:l})]})},d=Object(n.memo)(f),h=c(13),m=c(12),p=(c(24),Object(m.trackWindowScroll)((function(e){return Object(b.jsxs)("div",{className:"item",children:[Object(b.jsx)(m.LazyLoadImage,{alt:e.name,height:"196px",effect:"blur",scrollPosition:e.scrollPosition,src:"posterthatismissing.jpg"===e["poster-image"]?"".concat("/myapp","/assets/placeholder_for_missing_posters.png"):"".concat("/myapp","/assets/").concat(e["poster-image"])}),Object(b.jsx)("p",{className:"title",children:e.name})]})}))),E=function(){var e=Object(n.useState)(1),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(r.e)(o,r.c),j=Object(r.e)(u),l=Object(n.useRef)({});l.current=c;var O=Object(r.d)(),f=Object(n.useState)(!1),d=Object(i.a)(f,2),m=d[0],E=d[1],v=Object(n.useCallback)((function(e){e.preventDefault();var t=e.target;t.body.scrollHeight-window.pageYOffset===t.documentElement.clientHeight&&l.current<3&&(a(l.current+1),g())}),[]),g=function(){fetch("API/CONTENTLISTINGPAGE-PAGE".concat(l.current,".json"),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){O(function(e){return{type:"ADD_ITEMS",items:e}}(e.page["content-items"].content))}))};return Object(n.useEffect)((function(){g()}),[]),Object(n.useEffect)((function(){E(!0)}),[j]),Object(n.useEffect)((function(){return window.addEventListener("scroll",v),function(){window.removeEventListener("scroll",v)}}),[v]),Object(b.jsxs)("div",{className:"item-list",children:[m&&j.map((function(e,t){return Object(b.jsx)(p,Object(h.a)({},e),t)})),s.map((function(e,t){return Object(b.jsx)(p,Object(h.a)({},e),t)}))]})},v=Object(n.memo)(E),g=Object(r.b)()((function(e){e.dispatch;return Object(b.jsxs)("div",{children:[Object(b.jsx)(d,{}),Object(b.jsx)(v,{})]})})),S=c(6),x=c(5),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ITEMS":return[].concat(Object(x.a)(e),Object(x.a)(t.items));default:return e}},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCHED_ITEMS":return Object(x.a)(t.searchedItems);case"REMOVE_SEARCHED_ITEMS":return Object(x.a)(e.searchedItems=[]);default:return e}},w=Object(S.b)({items:y,searchedData:_}),I=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||S.c;var C=Object(S.d)(w,I(Object(S.a)((function(e){var t=e.dispatch,c=e.getState;return function(e){return function(n){return"function"===typeof n?n(t,c):e(n)}}}))));c(25),c(26);s.a.render(Object(b.jsx)(r.a,{store:C,children:Object(b.jsx)("div",{className:"wrapper",children:Object(b.jsx)(g,{})})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.c0e0d969.chunk.js.map