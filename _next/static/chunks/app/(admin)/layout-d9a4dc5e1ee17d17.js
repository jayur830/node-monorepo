(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[480],{6935:function(e,n,t){Promise.resolve().then(t.bind(t,15433))},15433:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return AdminLayout}});var r=t(76225),i=t(33643),u=t(84054),a=t(53524),l=t(49061),o=t(19875),c=t(86549),s=t(83836),d=t(44191),f=t(16469),h=t(76244),p=t(65805),v=t(83316),m=t(90083),y=t(52316),g=t(94967),j=t(70123);function AdminLayout(e){let{children:n}=e,{auth:t}=(0,y.Z)(),c=(0,u.useRouter)(),s=(0,g.q)(e=>e.isDarkMode);(0,i.useLayoutEffect)(()=>{(0,h.Aj)((0,h.v0)(),async e=>{if(e){let n=await e.getIdToken(!0);console.log(n)}else c.replace("/login")})},[c]);let Z=(0,i.useMemo)(()=>(0,l.Z)({...j.Z,palette:{mode:s?"dark":"light"}}),[s]),x=(0,i.useCallback)(async()=>{await (0,h.w7)(t),c.push("/login")},[c,t]);return(0,r.jsx)(m.Lv,{theme:Z,children:(0,r.jsx)(d._,{dateAdapter:f.y,children:(0,r.jsxs)(m.uZ,{children:[(0,r.jsx)(p.h4,{navigations:v.c,extra:(0,r.jsxs)(o.ZP,{container:!0,justifyContent:"flex-end",alignItems:"center",gap:2,children:[(0,r.jsx)(b,{onClick:x,children:(0,r.jsx)(a.Z,{})}),(0,r.jsx)(p.pZ,{})]})}),(0,r.jsx)(o.ZP,{container:!0,justifyContent:"center",minHeight:"calc(100% - 48px)",padding:3,children:n})]})})})}t(14355);let b=(0,c.ZP)(s.Z)({fontSize:16,color:"black"})},78543:function(e,n,t){"use strict";t.d(n,{O:function(){return l},q:function(){return u}});var r=t(91147),i=t(76244);t(18692);let u={apiKey:"AIzaSyB2FFrhWmR3vbh83AAo45_9jyNkipXKRbM",authDomain:"jayur830-81c71.firebaseapp.com",projectId:"jayur830-81c71",storageBucket:"jayur830-81c71.appspot.com",messagingSenderId:"474003620889",appId:"1:474003620889:web:233c4ad0d47d0ec99dd688",measurementId:"G-R54QHPGYJX"},a=(0,r.ZF)(u),l=(0,i.v0)(a)},83316:function(e,n,t){"use strict";t.d(n,{J:function(){return r},c:function(){return i}});let r=[{label:"블로그",path:"/blog"},{label:"이력서",path:"/resume"}],i=[{label:"블로그",path:"/admin/blog"},{label:"이력서",path:"/admin/resume"}]},38291:function(e,n,t){"use strict";t.r(n),t.d(n,{useAlert:function(){return useAlert}});var r=t(76225),i=t(33643),u=t(25372),a=t(68748),l=t(83836),o=t(81451),c=t(35299),s=t.n(c),d=t(21725);let{Provider:f,useContext:h}=(0,u.createProvider)(function(){var e,n,t,u;let[o,c]=(0,i.useState)(null),s=(0,i.useCallback)(e=>{c(e)},[]),d=(0,i.useCallback)((e,n)=>{"clickaway"!==n&&c(e=>({...e,open:!1}))},[]);return{snackbarProps:{...o,anchorOrigin:{vertical:null!==(t=null==o?void 0:null===(e=o.anchorOrigin)||void 0===e?void 0:e.vertical)&&void 0!==t?t:"top",horizontal:null!==(u=null==o?void 0:null===(n=o.anchorOrigin)||void 0===n?void 0:n.horizontal)&&void 0!==u?u:"center"},action:(0,r.jsxs)(r.Fragment,{children:[null==o?void 0:o.action,(0,r.jsx)(l.Z,{color:"inherit",onClick:d,children:(0,r.jsx)(a.Z,{})})]}),onClose:d},openAlert:s}});function useAlert(){return s()(h(),"openAlert")}n.default=(0,d.b)(f,function(e){let{children:n}=e,t=h("snackbarProps");return(0,r.jsxs)(r.Fragment,{children:[n,(0,r.jsx)(o.Z,{...t})]})})},88468:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ThemeRegistry}});var r=t(76225),i=t(33643),u=t(84054),a=t(21069),l=t(68142);function ThemeRegistry(e){let{options:n,children:t}=e,[{cache:o,flush:c}]=(0,i.useState)(()=>{let e=(0,a.Z)(n),t=[];return{cache:{...e,compat:!0,insert(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];let[,u]=r;return void 0===e.inserted[u.name]&&t.push(u.name),e.insert(...r)}},flush(){let e=t;return t=[],e}}});return(0,u.useServerInsertedHTML)(()=>{let e=c();if(0===e.length)return null;let t=e.reduce((e,n)=>e+o.inserted[n],"");return(0,r.jsx)("style",{"data-emotion":"".concat(o.key," ").concat(e.join(" ")),dangerouslySetInnerHTML:{__html:n.prepend?"@layer emotion {".concat(t,"}"):t}},o.key)}),(0,r.jsx)(l.C,{value:o,children:t})}},90083:function(e,n,t){"use strict";t.d(n,{uZ:function(){return r.default},Lv:function(){return MuiProvider}});var r=t(38291),i=t(76225),u=t(1227),a=t(95476);function MuiProvider(e){let{children:n,theme:t}=e;return(0,i.jsxs)(u.Z,{theme:t,children:[(0,i.jsx)(a.ZP,{}),n]})}t(88468)},52316:function(e,n,t){"use strict";t.d(n,{Z:function(){return useFirebase}});var r=t(91147),i=t(76244),u=t(78543);function useFirebase(){let e=(0,r.C6)().length?(0,r.Mq)():(0,r.ZF)(u.q);return{auth:(0,i.v0)(e)}}},70123:function(e,n,t){"use strict";var r=t(49061),i=t(70417),u=t.n(i);let a=(0,r.Z)({typography:{fontFamily:u().style.fontFamily}});n.Z=a},14355:function(){}},function(e){e.O(0,[617,584,875,863,596,894,346,648,336,572,805,123,17,744],function(){return e(e.s=6935)}),_N_E=e.O()}]);