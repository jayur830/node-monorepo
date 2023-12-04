(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[695],{99362:function(e,t,n){"use strict";var r=n(2351),o=n(33643),i=n(90799),u=n(85438),l=n(76225);let html=(e,t)=>(0,r.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode}),body=e=>(0,r.Z)({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),styles=(e,t=!1)=>{var n;let o={};t&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([t,n])=>{var r;o[e.getColorSchemeSelector(t).replace(/\s*&/,"")]={colorScheme:null==(r=n.palette)?void 0:r.mode}});let i=(0,r.Z)({html:html(e,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,r.Z)({margin:0},body(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},o),u=null==(n=e.components)||null==(n=n.MuiCssBaseline)?void 0:n.styleOverrides;return u&&(i=[i,u]),i};t.ZP=function(e){let t=(0,i.Z)({props:e,name:"MuiCssBaseline"}),{children:n,enableColorScheme:r=!1}=t;return(0,l.jsxs)(o.Fragment,{children:[(0,l.jsx)(u.Z,{styles:e=>styles(e,r)}),n]})}},85438:function(e,t,n){"use strict";var r=n(2351);n(33643);var o=n(80942),i=n(35562),u=n(68869),l=n(76225);t.Z=function(e){return(0,l.jsx)(o.Z,(0,r.Z)({},e,{defaultTheme:i.Z,themeId:u.Z}))}},75388:function(e,t,n){"use strict";n.d(t,{Z:function(){return ThemeProvider}});var r=n(2351),o=n(94304);n(33643);var i=n(8791),u=n(68869),l=n(76225);let c=["theme"];function ThemeProvider(e){let{theme:t}=e,n=(0,o.Z)(e,c),s=t[u.Z];return(0,l.jsx)(i.Z,(0,r.Z)({},n,{themeId:s?u.Z:void 0,theme:s||t}))}},58979:function(e,t,n){"use strict";var r=n(33643);let o=r.createContext(null);t.Z=o},38467:function(e,t,n){"use strict";n.d(t,{Z:function(){return useTheme}});var r=n(33643),o=n(58979);function useTheme(){let e=r.useContext(o.Z);return e}},99337:function(e,t,n){"use strict";n.d(t,{Z:function(){return GlobalStyles}}),n(33643);var r=n(75958),o=n(76225);function GlobalStyles(e){let{styles:t,defaultTheme:n={}}=e,i="function"==typeof t?e=>t(null==e||0===Object.keys(e).length?n:e):t;return(0,o.jsx)(r.xB,{styles:i})}},80942:function(e,t,n){"use strict";n(33643);var r=n(99337),o=n(70766),i=n(76225);t.Z=function({styles:e,themeId:t,defaultTheme:n={}}){let u=(0,o.Z)(n),l="function"==typeof e?e(t&&u[t]||u):e;return(0,i.jsx)(r.Z,{styles:l})}},8791:function(e,t,n){"use strict";n.d(t,{Z:function(){return esm_ThemeProvider_ThemeProvider}});var r=n(2351),o=n(33643),i=n(38467),u=n(58979);let l="function"==typeof Symbol&&Symbol.for;var c=l?Symbol.for("mui.nested"):"__THEME_NESTED__",s=n(76225),ThemeProvider_ThemeProvider=function(e){let{children:t,theme:n}=e,l=(0,i.Z)(),a=o.useMemo(()=>{let e=null===l?n:function(e,t){if("function"==typeof t){let n=t(e);return n}return(0,r.Z)({},e,t)}(l,n);return null!=e&&(e[c]=null!==l),e},[n,l]);return(0,s.jsx)(u.Z.Provider,{value:a,children:t})},a=n(68142),d=n(3856);let f={};function useThemeScoping(e,t,n,i=!1){return o.useMemo(()=>{let o=e&&t[e]||t;if("function"==typeof n){let u=n(o),l=e?(0,r.Z)({},t,{[e]:u}):u;return i?()=>l:l}return e?(0,r.Z)({},t,{[e]:n}):(0,r.Z)({},t,n)},[e,t,n,i])}var esm_ThemeProvider_ThemeProvider=function(e){let{children:t,theme:n,themeId:r}=e,o=(0,d.Z)(f),u=(0,i.Z)()||f,l=useThemeScoping(r,o,n),c=useThemeScoping(r,u,n,!0);return(0,s.jsx)(ThemeProvider_ThemeProvider,{theme:c,children:(0,s.jsx)(a.T.Provider,{value:l,children:t})})}},14754:function(e,t,n){Promise.resolve().then(n.bind(n,90908))},90908:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return AuthLayout}});var r=n(76225),o=n(90083),i=n(70123);function AuthLayout(e){let{children:t}=e;return(0,r.jsx)(o.Lv,{theme:i.Z,children:(0,r.jsx)(o.uZ,{children:t})})}n(14355)},38291:function(e,t,n){"use strict";n.r(t),n.d(t,{useAlert:function(){return useAlert}});var r=n(76225),o=n(33643),i=n(25372),u=n(68292),l=n(35996),c=n(2554),s=n(35299),a=n.n(s),d=n(21725);let{Provider:f,useContext:h}=(0,i.createProvider)(function(){var e,t,n,i;let[c,s]=(0,o.useState)(null),a=(0,o.useCallback)(e=>{s(e)},[]),d=(0,o.useCallback)((e,t)=>{"clickaway"!==t&&s(e=>({...e,open:!1}))},[]);return{snackbarProps:{...c,anchorOrigin:{vertical:null!==(n=null==c?void 0:null===(e=c.anchorOrigin)||void 0===e?void 0:e.vertical)&&void 0!==n?n:"top",horizontal:null!==(i=null==c?void 0:null===(t=c.anchorOrigin)||void 0===t?void 0:t.horizontal)&&void 0!==i?i:"center"},action:(0,r.jsxs)(r.Fragment,{children:[null==c?void 0:c.action,(0,r.jsx)(l.Z,{color:"inherit",onClick:d,children:(0,r.jsx)(u.Z,{})})]}),onClose:d},openAlert:a}});function useAlert(){return a()(h(),"openAlert")}t.default=(0,d.b)(f,function(e){let{children:t}=e,n=h("snackbarProps");return(0,r.jsxs)(r.Fragment,{children:[t,(0,r.jsx)(c.Z,{...n})]})})},88468:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ThemeRegistry}});var r=n(76225),o=n(33643),i=n(84054),u=n(21069),l=n(68142);function ThemeRegistry(e){let{options:t,children:n}=e,[{cache:c,flush:s}]=(0,o.useState)(()=>{let e=(0,u.Z)(t),n=[];return{cache:{...e,compat:!0,insert(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];let[,i]=r;return void 0===e.inserted[i.name]&&n.push(i.name),e.insert(...r)}},flush(){let e=n;return n=[],e}}});return(0,i.useServerInsertedHTML)(()=>{let e=s();if(0===e.length)return null;let n=e.reduce((e,t)=>e+c.inserted[t],"");return(0,r.jsx)("style",{"data-emotion":"".concat(c.key," ").concat(e.join(" ")),dangerouslySetInnerHTML:{__html:t.prepend?"@layer emotion {".concat(n,"}"):n}},c.key)}),(0,r.jsx)(l.C,{value:c,children:n})}},90083:function(e,t,n){"use strict";n.d(t,{uZ:function(){return r.default},Lv:function(){return MuiProvider}});var r=n(38291),o=n(76225),i=n(75388),u=n(99362);function MuiProvider(e){let{children:t,theme:n}=e;return(0,o.jsxs)(i.Z,{theme:n,children:[(0,o.jsx)(u.ZP,{}),t]})}n(88468)},70123:function(e,t,n){"use strict";var r=n(48842),o=n(70417),i=n.n(o);let u=(0,r.Z)({typography:{fontFamily:i().style.fontFamily}});t.Z=u},21725:function(e,t,n){"use strict";n.d(t,{e:function(){return createState},b:function(){return utils_nest}});var r=n(81983),o=n(33162),i=n(60986);function createState(e,t){return(0,r.Ue)((0,o.mW)((0,o.tJ)((0,i.n)(e),{name:(null==t?void 0:t.name)||e.name,partialize:e=>(null==t?void 0:t.whitelist)?Object.entries(e).reduce((e,n)=>{let[r,o]=n;return((null==t?void 0:t.whitelist)||[]).includes(r)||"function"==typeof o?{...e,[r]:o}:e},{}):(null==t?void 0:t.blacklist)?Object.entries(e).reduce((e,n)=>{let[r,o]=n;return((null==t?void 0:t.blacklist)||[]).includes(r)&&"function"!=typeof o?e:{...e,[r]:o}},{}):e})))}var u=n(33643),utils_nest=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>t.reduceRight((t,n)=>(0,u.createElement)(n,e,t),e.children)}},14355:function(){},70417:function(e){e.exports={style:{fontFamily:"'__fonts_7e949b', '__fonts_Fallback_7e949b'"},className:"__className_7e949b"}},84054:function(e,t,n){e.exports=n(15621)}},function(e){e.O(0,[856,884,950,609,123,17,744],function(){return e(e.s=14754)}),_N_E=e.O()}]);