webpackJsonp([5,3],{0:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var i=n(6),a=o(i),s=n(102),r=o(s);n(84);var u=n(98),l=o(u),c=n(180);n(195);var f=n(148),d=o(f),p=n(202),v=o(p),h=n(200),m=o(h);n(95),(0,c.sync)(v.default,m.default),a.default.use(r.default),l.default.attach(document.body),new a.default(a.default.util.extend({router:m.default,store:v.default},d.default)).$mount("#app")},20:function(t,e,n){t.exports=n.p+"static/img/ued-icon.42f1208.png"},84:function(t,e){},86:function(t,e){},88:function(t,e){},90:function(t,e){},95:function(t,e){},148:function(t,e,n){var o,i;n(86),o=n(204);var a=n(160);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=o},153:function(t,e,n){var o,i;n(88),o=n(208);var a=n(162);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=o},155:function(t,e,n){var o,i;n(90),o=n(209);var a=n(164);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=o},160:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._c;return e("div",{attrs:{id:"app"}},[e("top-nav")," ",e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view",{staticClass:"app-content"})])," ",e("main-footer")])},staticRenderFns:[]}},162:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._c;return e("footer",{staticClass:"main-footer"},[e("div",{staticClass:"container"},[t._m(0),"\n    Copyright © 2016 ",e("router-link",{attrs:{to:"http://meiqiu.me"}},["meiqiu.me"]),".\n    All rights reserved.\n  "])," "])},staticRenderFns:[function(){var t=this,e=t.$createElement;t._c;return e("div",{staticClass:"pull-right"},[e("b",["Version"])," 1.0.0\n    "])}]}},164:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._c;return e("header",{staticClass:"header"},[e("div",{staticClass:"container"},[e("div",{staticClass:"top-logo"},[e("router-link",{attrs:{to:"/"}},[e("h1",{staticClass:"logo"},["Live Logo"])])])," ",e("el-menu",{staticClass:"top-nav",attrs:{mode:"horizontal",router:!0}},[e("el-menu-item",{class:"/"===t.$route.path?"is-active":"",attrs:{index:"1",route:{path:"/"}}},["首页"])," ",e("el-menu-item",{class:"/all"===t.$route.path?"is-active":"",attrs:{index:"2",route:{path:"/all"}}},["直播"])," ",e("el-menu-item",{attrs:{index:"3",route:{path:"/bbs"}}},["社区"])])," ",e("div",{staticClass:"top-user"},[e("el-input",{staticClass:"top-search-input",attrs:{placeholder:"搜房间号/房间名",icon:"search"},on:{click:t.handleSearch}})," ",e("ul",[t._m(0)," ",e("li",{staticClass:"o-follow"},[e("router-link",{attrs:{to:"/"}},[e("i",{staticClass:"el-icon-star-on"},[" 我的关注"])])])])," ",e("div",{class:t.isProfile?"user-profile open":"user-profile out"},[e("img",{attrs:{src:"http://uc.qietv.douyucdn.cn/avatar.php?uid=6417930&size=small"},on:{click:t.openProfile,mouseenter:t.openProfile,mouseleave:t.closeProfile}})," ",e("div",{staticClass:"user-menu",on:{mouseenter:t.focusProfile,mouseleave:t.closeProfile}},[e("i")," ",e("div",{staticClass:"user-info"},[e("img",{attrs:{src:"http://uc.qietv.douyucdn.cn/avatar.php?uid=6417930&size=small",alt:""}})," ",t._m(1)," ",e("router-link",{staticClass:"logout",attrs:{to:"/logout"}},["退出"])])," "," ",e("ul",{staticClass:"user-set"},[e("li",[e("router-link",{attrs:{to:"/"}},[e("i",{staticClass:"liveicon liveicon-profile"}),e("span",["个人中心"])])])," ",e("li",[e("router-link",{attrs:{to:"/"}},[e("i",{staticClass:"liveicon liveicon-follow"}),e("span",["我的关注"])])])," ",e("li",[e("router-link",{attrs:{to:"/"}},[e("i",{staticClass:"liveicon liveicon-setting"}),e("span",["直播设置"])])])])])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement;t._c;return e("li",{staticClass:"o-history"},[e("a",{attrs:{href:"javascript:;"}},[e("i",{staticClass:"el-icon-time"})," 历史"])])},function(){var t=this,e=t.$createElement;t._c;return e("div",{staticClass:"user-name"},[e("strong",{staticClass:"name"},["小明"])," ",e("span",{staticClass:"info"},["你们啊你们"])])}]}},200:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(6),a=o(i),s=n(171),r=o(s);a.default.use(r.default),e.default=new r.default({mode:"history",scrollBehavior:function(){return{y:0}},routes:[{path:"/",component:function(t){return n.e(1,function(e){var n=[e(157)];t.apply(null,n)}.bind(this))}},{path:"/all",component:function(t){return n.e(2,function(e){var n=[e(156)];t.apply(null,n)}.bind(this))}},{path:"/live/:id",component:function(t){return n.e(0,function(e){var n=[e(158)];t.apply(null,n)}.bind(this))}}]})},201:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(203);e.default={fetchChannels:function(){return o.ChannelResource.get().then(function(t){return t.data})}}},202:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(6),a=o(i),s=n(170),r=o(s),u=n(201);o(u);a.default.use(r.default);var l=new r.default.Store({state:{},actions:{},mutations:{},getters:{}});e.default=l},203:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.UserResource=e.ChannelResource=void 0;var i=n(6),a=o(i),s=n(97),r=o(s);a.default.use(r.default),a.default.http.options.crossOrigin=!0,a.default.http.options.credentials=!0;var u="http://localhost:3000/api/";e.ChannelResource=a.default.resource(u+"channels"),e.UserResource=a.default.resource(u+"users")},204:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(155),a=o(i),s=n(153),r=o(s);e.default={name:"app",components:{TopNav:a.default,MainFooter:r.default}}},208:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"MainFooter"}},209:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"TopNav",data:function(){return{isProfile:!1,timer:""}},methods:{handleSearch:function(t){console.log(t)},openProfile:function(){this.isProfile=!0},closeProfile:function(){var t=this;this.timer=setTimeout(function(){t.isProfile=!1},1e3)},focusProfile:function(){clearInterval(this.timer)}}}},214:function(t,e){}});
//# sourceMappingURL=app.3f68d693f2028b85d1a1.js.map