(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[346],{94207:function(e,t,r){"use strict";r.d(t,{Z:function(){return _}});var n=r(76712),i=r(37161),o=r(33643),a=r(98370),l=r(36511),u=r(4115),s=r(86549),d=r(59397),c=r(35988),f=r(70895),p=r(44807);function getTypographyUtilityClass(e){return(0,p.Z)("MuiTypography",e)}(0,f.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var g=r(76225);let m=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],useUtilityClasses=e=>{let{align:t,gutterBottom:r,noWrap:n,paragraph:i,variant:o,classes:a}=e,l={root:["root",o,"inherit"!==e.align&&`align${(0,c.Z)(t)}`,r&&"gutterBottom",n&&"noWrap",i&&"paragraph"]};return(0,u.Z)(l,getTypographyUtilityClass,a)},h=(0,s.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.variant&&t[r.variant],"inherit"!==r.align&&t[`align${(0,c.Z)(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>(0,i.Z)({margin:0},"inherit"===t.variant&&{font:"inherit"},"inherit"!==t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},transformDeprecatedColors=e=>b[e]||e,v=o.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiTypography"}),o=transformDeprecatedColors(r.color),u=(0,l.Z)((0,i.Z)({},r,{color:o})),{align:s="inherit",className:c,component:f,gutterBottom:p=!1,noWrap:b=!1,paragraph:v=!1,variant:_="body1",variantMapping:w=y}=u,S=(0,n.Z)(u,m),C=(0,i.Z)({},u,{align:s,color:o,className:c,component:f,gutterBottom:p,noWrap:b,paragraph:v,variant:_,variantMapping:w}),P=f||(v?"p":w[_]||y[_])||"span",x=useUtilityClasses(C);return(0,g.jsx)(h,(0,i.Z)({as:P,ref:t,ownerState:C,className:(0,a.Z)(x.root,c)},S))});var _=v},57539:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return m}});let n=r(68517),i=r(53388),o=i._(r(33643)),a=n._(r(46703)),l=n._(r(12897)),u=r(61864),s=r(71385),d=r(28882);r(28379);let c=r(72934),f=n._(r(99589)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function handleLoading(e,t,r,n,i,o){let a=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===a)return;e["data-loaded-src"]=a;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}})}function getDynamicProps(e){let[t,r]=o.version.split("."),n=parseInt(t,10),i=parseInt(r,10);return n>18||18===n&&i>=3?{fetchPriority:e}:{fetchpriority:e}}let g=(0,o.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:a,width:l,decoding:u,className:s,style:d,fetchPriority:c,placeholder:f,loading:p,unoptimized:g,fill:m,onLoadRef:h,onLoadingCompleteRef:y,setBlurComplete:b,setShowAltText:v,onLoad:_,onError:w,...S}=e;return o.default.createElement("img",{...S,...getDynamicProps(c),loading:p,width:l,height:a,decoding:u,"data-nimg":m?"fill":"1",className:s,style:d,sizes:i,srcSet:n,src:r,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(w&&(e.src=e.src),e.complete&&handleLoading(e,f,h,y,b,g))},[r,f,h,y,b,w,g,t]),onLoad:e=>{let t=e.currentTarget;handleLoading(t,f,h,y,b,g)},onError:e=>{v(!0),"empty"!==f&&b(!0),w&&w(e)}})});function ImagePreload(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...getDynamicProps(r.fetchPriority)};return t&&a.default.preload?(a.default.preload(r.src,n),null):o.default.createElement(l.default,null,o.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...n}))}let m=(0,o.forwardRef)((e,t)=>{let r=(0,o.useContext)(c.RouterContext),n=(0,o.useContext)(d.ImageConfigContext),i=(0,o.useMemo)(()=>{let e=p||n||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:a,onLoadingComplete:l}=e,m=(0,o.useRef)(a);(0,o.useEffect)(()=>{m.current=a},[a]);let h=(0,o.useRef)(l);(0,o.useEffect)(()=>{h.current=l},[l]);let[y,b]=(0,o.useState)(!1),[v,_]=(0,o.useState)(!1),{props:w,meta:S}=(0,u.getImgProps)(e,{defaultLoader:f.default,imgConf:i,blurComplete:y,showAltText:v});return o.default.createElement(o.default.Fragment,null,o.default.createElement(g,{...w,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:m,onLoadingCompleteRef:h,setBlurComplete:b,setShowAltText:_,ref:t}),S.priority?o.default.createElement(ImagePreload,{isAppRouter:!r,imgAttributes:w}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},82308:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return o}});let n=r(68517),i=n._(r(33643)),o=i.default.createContext({})},81283:function(e,t){"use strict";function isInAmpMode(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return isInAmpMode}})},61864:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return getImgProps}}),r(28379);let n=r(93578),i=r(71385);function isStaticRequire(e){return void 0!==e.default}function getInt(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function getImgProps(e,t){var r;let o,a,l,{src:u,sizes:s,unoptimized:d=!1,priority:c=!1,loading:f,className:p,quality:g,width:m,height:h,fill:y=!1,style:b,onLoad:v,onLoadingComplete:_,placeholder:w="empty",blurDataURL:S,fetchPriority:C,layout:P,objectFit:x,objectPosition:j,lazyBoundary:O,lazyRoot:E,...I}=e,{imgConf:M,showAltText:z,blurComplete:R,defaultLoader:k}=t,A=M||i.imageConfigDefault;if("allSizes"in A)o=A;else{let e=[...A.deviceSizes,...A.imageSizes].sort((e,t)=>e-t),t=A.deviceSizes.sort((e,t)=>e-t);o={...A,allSizes:e,deviceSizes:t}}let D=I.loader||k;delete I.loader,delete I.srcSet;let B="__next_img_default"in D;if(B){if("custom"===o.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=D;D=t=>{let{config:r,...n}=t;return e(n)}}if(P){"fill"===P&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];e&&(b={...b,...e});let t={responsive:"100vw",fill:"100vw"}[P];t&&!s&&(s=t)}let L="",U=getInt(m),Z=getInt(h);if("object"==typeof(r=u)&&(isStaticRequire(r)||void 0!==r.src)){let e=isStaticRequire(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,l=e.blurHeight,S=S||e.blurDataURL,L=e.src,!y){if(U||Z){if(U&&!Z){let t=U/e.width;Z=Math.round(e.height*t)}else if(!U&&Z){let t=Z/e.height;U=Math.round(e.width*t)}}else U=e.width,Z=e.height}}let T=!c&&("lazy"===f||void 0===f);(!(u="string"==typeof u?u:L)||u.startsWith("data:")||u.startsWith("blob:"))&&(d=!0,T=!1),o.unoptimized&&(d=!0),B&&u.endsWith(".svg")&&!o.dangerouslyAllowSVG&&(d=!0),c&&(C="high");let W=getInt(g),N=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:x,objectPosition:j}:{},z?{}:{color:"transparent"},b),F=R||"empty"===w?null:"blur"===w?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:U,heightInt:Z,blurWidth:a,blurHeight:l,blurDataURL:S||"",objectFit:N.objectFit})+'")':'url("'+w+'")',G=F?{backgroundSize:N.objectFit||"cover",backgroundPosition:N.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:F}:{},H=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:a,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:u,kind:s}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let o=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:o,kind:"x"}}(t,i,a),d=u.length-1;return{sizes:a||"w"!==s?a:"100vw",srcSet:u.map((e,n)=>l({config:t,src:r,quality:o,width:e})+" "+("w"===s?e:n+1)+s).join(", "),src:l({config:t,src:r,quality:o,width:u[d]})}}({config:o,src:u,unoptimized:d,width:U,quality:W,sizes:s,loader:D}),q={...I,loading:T?"lazy":f,fetchPriority:C,width:U,height:Z,decoding:"async",className:p,style:{...N,...G},sizes:H.sizes,srcSet:H.srcSet,src:H.src},V={unoptimized:d,priority:c,placeholder:w,fill:y};return{props:q,meta:V}}},12897:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return defaultHead},default:function(){return _default}});let n=r(68517),i=r(53388),o=i._(r(33643)),a=n._(r(17349)),l=r(82308),u=r(34430),s=r(81283);function defaultHead(e){void 0===e&&(e=!1);let t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function onlyReactElement(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(28379);let d=["name","httpEquiv","charSet","itemProp"];function reduceComponents(e,t){let{inAmpMode:r}=t;return e.reduce(onlyReactElement,[]).reverse().concat(defaultHead(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let o=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=d.length;e<t;e++){let t=d[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!a)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:n})})}let _default=function(e){let{children:t}=e,r=(0,o.useContext)(l.AmpStateContext),n=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:reduceComponents,headManager:n,inAmpMode:(0,s.isInAmpMode)(r)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},93578:function(e,t){"use strict";function getImageBlurSvg(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:a}=e,l=n?40*n:t,u=i?40*i:r,s=l&&u?"viewBox='0 0 "+l+" "+u+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return getImageBlurSvg}})},28882:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return a}});let n=r(68517),i=n._(r(33643)),o=r(71385),a=i.default.createContext(o.imageConfigDefault)},71385:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},55956:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{unstable_getImgProps:function(){return unstable_getImgProps},default:function(){return u}});let n=r(68517),i=r(61864),o=r(28379),a=r(57539),l=n._(r(99589)),unstable_getImgProps=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,i.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},u=a.Image},99589:function(e,t){"use strict";function defaultLoader(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),defaultLoader.__next_img_default=!0;let r=defaultLoader},72934:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return o}});let n=r(68517),i=n._(r(33643)),o=i.default.createContext(null)},17349:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return SideEffect}});let n=r(33643),i=n.useLayoutEffect,o=n.useEffect;function SideEffect(e){let{headManager:t,reduceComponentsToState:r}=e;function emitChange(){if(t&&t.mountedInstances){let i=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(i,e))}}return i(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),i(()=>(t&&(t._pendingUpdate=emitChange),()=>{t&&(t._pendingUpdate=emitChange)})),o(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},28379:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return warnOnce}});let warnOnce=e=>{}},23476:function(e,t,r){e.exports=r(55956)}}]);