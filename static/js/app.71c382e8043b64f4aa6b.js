webpackJsonp([5,3],{0:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var o=n(3),i=s(o),a=n(106),r=s(a);n(85);var u=n(99),l=s(u),c=n(183);n(198);var f=n(151),d=s(f),v=n(205),p=s(v),_=n(203),h=s(_);n(96),(0,c.sync)(p.default,h.default),i.default.use(r.default),l.default.attach(document.body),new i.default(i.default.util.extend({router:h.default,store:p.default},d.default)).$mount("#app")},21:function(t,e,n){t.exports=n.p+"static/img/ued-icon.42f1208.png"},85:function(t,e){},87:function(t,e){},89:function(t,e){},91:function(t,e){},96:function(t,e){},151:function(t,e,n){var s,o;n(87),s=n(207);var i=n(163);o=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(o=s=s.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,t.exports=s},156:function(t,e,n){var s,o;n(89),s=n(211);var i=n(165);o=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(o=s=s.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,t.exports=s},158:function(t,e,n){var s,o;n(91),s=n(212);var i=n(167);o=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(o=s=s.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,t.exports=s},163:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("top-nav"),t._v(" "),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view",{staticClass:"app-content"})],1),t._v(" "),n("main-footer")],1)},staticRenderFns:[]}},165:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"main-footer"},[n("div",{staticClass:"container"},[t._m(0),t._v("\n    Copyright © 2016 "),n("router-link",{attrs:{to:"http://meiqiu.me"}},[t._v("meiqiu.me")]),t._v(".\n    All rights reserved.\n  ")],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pull-right"},[n("b",[t._v("Version")]),t._v(" 1.0.0\n    ")])}]}},167:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("div",{staticClass:"container"},[n("div",{staticClass:"top-logo"},[n("router-link",{attrs:{to:"/"}},[n("h1",{staticClass:"logo"},[t._v("Live Logo")])])],1),t._v(" "),n("el-menu",{staticClass:"top-nav",attrs:{mode:"horizontal",router:!0}},[n("el-menu-item",{class:"/"===t.$route.path?"is-active":"",attrs:{index:"1",route:{path:"/"}}},[t._v("首页")]),t._v(" "),n("el-menu-item",{class:"/all"===t.$route.path?"is-active":"",attrs:{index:"2",route:{path:"/all"}}},[t._v("直播")]),t._v(" "),n("el-menu-item",{attrs:{index:"3",route:{path:"/bbs"}}},[t._v("社区")])],1),t._v(" "),n("div",{staticClass:"top-user"},[n("el-input",{staticClass:"top-search-input",attrs:{placeholder:"搜房间号/房间名",icon:"search"},on:{click:t.handleSearch}}),t._v(" "),n("ul",[t._m(0),t._v(" "),n("li",{staticClass:"o-follow"},[n("router-link",{attrs:{to:"/"}},[n("i",{staticClass:"el-icon-star-on"},[t._v(" 我的关注")])])],1)]),t._v(" "),n("div",{class:t.isProfile?"user-profile open":"user-profile out"},[n("img",{attrs:{src:"http://uc.qietv.douyucdn.cn/avatar.php?uid=6417930&size=small"},on:{click:t.openProfile,mouseenter:t.openProfile,mouseleave:t.closeProfile}}),t._v(" "),n("div",{staticClass:"user-menu",on:{mouseenter:t.focusProfile,mouseleave:t.closeProfile}},[n("i"),t._v(" "),n("div",{staticClass:"user-info"},[n("img",{attrs:{src:"http://uc.qietv.douyucdn.cn/avatar.php?uid=6417930&size=small",alt:""}}),t._v(" "),t._m(1),t._v(" "),n("router-link",{staticClass:"logout",attrs:{to:"/logout"}},[t._v("退出")])],1),t._v(" "),n("ul",{staticClass:"user-set"},[n("li",[n("router-link",{attrs:{to:"/"}},[n("i",{staticClass:"liveicon liveicon-profile"}),n("span",[t._v("个人中心")])])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/"}},[n("i",{staticClass:"liveicon liveicon-follow"}),n("span",[t._v("我的关注")])])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/"}},[n("i",{staticClass:"liveicon liveicon-setting"}),n("span",[t._v("直播设置")])])],1)])])])],1)],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"o-history"},[n("a",{attrs:{href:"javascript:;"}},[n("i",{staticClass:"el-icon-time"}),t._v(" 历史")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-name"},[n("strong",{staticClass:"name"},[t._v("小明")]),t._v(" "),n("span",{staticClass:"info"},[t._v("你们啊你们")])])}]}},203:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),i=s(o),a=n(173),r=s(a);i.default.use(r.default),e.default=new r.default({mode:"history",scrollBehavior:function(){return{y:0}},routes:[{path:"/",component:function(t){return n.e(1,function(e){var n=[e(160)];t.apply(null,n)}.bind(this))}},{path:"/all",component:function(t){return n.e(2,function(e){var n=[e(159)];t.apply(null,n)}.bind(this))}},{path:"/live/:id",component:function(t){return n.e(0,function(e){var n=[e(161)];t.apply(null,n)}.bind(this))}}]})},204:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(206);e.default={fetchChannels:function(){return s.ChannelResource.get().then(function(t){return t.data})}}},205:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),i=s(o),a=n(174),r=s(a),u=n(204);s(u);i.default.use(r.default);var l=new r.default.Store({state:{},actions:{},mutations:{},getters:{}});e.default=l},206:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.UserResource=e.ChannelResource=void 0;var o=n(3),i=s(o),a=n(98),r=s(a);i.default.use(r.default),i.default.http.options.crossOrigin=!0,i.default.http.options.credentials=!0;var u="http://localhost:3000/api/";e.ChannelResource=i.default.resource(u+"channels"),e.UserResource=i.default.resource(u+"users")},207:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(158),i=s(o),a=n(156),r=s(a);e.default={name:"app",components:{TopNav:i.default,MainFooter:r.default}}},211:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"MainFooter"}},212:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"TopNav",data:function(){return{isProfile:!1,timer:""}},methods:{handleSearch:function(t){console.log(t)},openProfile:function(){this.isProfile=!0},closeProfile:function(){var t=this;this.timer=setTimeout(function(){t.isProfile=!1},1e3)},focusProfile:function(){clearInterval(this.timer)}}}},217:function(t,e){}});
//# sourceMappingURL=app.71c382e8043b64f4aa6b.js.map