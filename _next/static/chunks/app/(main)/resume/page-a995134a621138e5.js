(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[321],{23706:function(e,t,n){Promise.resolve().then(n.bind(n,70091))},70091:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var i=n(57437),a=n(89120),d=n(49721),l=n(33037),o=n(83719),r=n(60335),s=n(2265),c=n(99101),x=n(59701),p=n(2645),h=n(3221),m=n(84380),g=n(6674),f=n(26428),u=n(99295),j=n(44711),Z=n(2397),y=n(32804),b=n(70270),k=n(62737),w=n.n(k),D=n(66648),S=n(33306),v=n(63742),W=n(87138);function z(e){let{href:t,label:n,icon:a,svgProps:d,backgroundColor:l,textColor:o}=e;return(0,i.jsx)(W.default,{href:t,target:"_blank",children:(0,i.jsx)(v.Z,{icon:(0,i.jsx)(a,{...d}),label:n,"background-color":l,"text-color":o,sx:{backgroundColor:l,borderRadius:"3px",color:null!=o?o:"common.white",fontSize:{xs:10,md:12},fontWeight:400,height:{xs:18,md:22},cursor:"pointer",".MuiChip-icon":{paddingLeft:"3px"},".MuiChip-label":{paddingLeft:"12px"}}})})}let L=Object.entries(n(60202).H).reduce((e,t)=>{let[n,a]=t;return{...e,[n]:()=>(0,i.jsx)(z,{...a})}},{});function C(e){var t;let{data:n}=e,a=(0,y.Z)(e=>e.breakpoints.down("sm"));return(0,i.jsxs)(b.Z,{variant:"outlined",sx:e=>({width:"100%",maxWidth:1e3,borderColor:"dark"===e.palette.mode?e.palette.grey["700"]:e.palette.grey["400"],borderRadius:"10px",padding:{xs:2,md:4},transition:"background-color 0.3s ease"}),children:[(0,i.jsxs)(l.ZP,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[(0,i.jsxs)(l.ZP,{display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:{xs:"flex-start",md:"flex-end"},gap:3,children:[n.logo&&(0,i.jsx)(D.default,{...n.logo,height:a?30:50,alt:"".concat(n.companyName," logo"),style:{width:"auto"}}),(0,i.jsxs)(l.ZP,{display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:{xs:"flex-start",md:"flex-end"},gap:{xs:0,md:1},children:[(0,i.jsx)(o.Z,{fontWeight:700,fontSize:{xs:18,md:24},letterSpacing:-1,children:n.companyName}),(0,i.jsx)(o.Z,{fontWeight:700,fontSize:{xs:14,md:20},letterSpacing:-1,color:e=>"dark"===e.palette.mode?e.palette.grey["400"]:e.palette.grey["700"],children:"(".concat(n.startDate," ~ ").concat(null!==(t=n.endDate)&&void 0!==t?t:"재직 중",", ").concat(function(e,t){let n=w()(null!=t?t:void 0).endOf("month").diff(e,"month")+1;return n>=12?n%12==0?"".concat(n/12,"년"):"".concat(Math.floor(n/12),"년 ").concat(n%12,"개월"):"".concat(n,"개월")}(n.startDate,n.endDate),")")})]})]}),n.website&&(0,i.jsx)(r.Z,{href:n.website,target:"_blank",children:(0,i.jsx)(c.Z,{sx:e=>({fill:"dark"===e.palette.mode?e.palette.grey["400"]:e.palette.grey["900"]})})})]}),n.description&&(0,i.jsx)(l.ZP,{paddingY:{xs:3,md:5},children:(0,i.jsx)(o.Z,{fontWeight:400,fontSize:{xs:13,md:18},letterSpacing:-1,children:n.description})}),n.projectList.map((e,t)=>(0,i.jsxs)(s.Fragment,{children:[(0,i.jsx)(o.Z,{fontWeight:700,fontSize:{xs:18,md:22},letterSpacing:-1,children:e.groupName}),(0,i.jsx)(p.Z,{sx:{display:"flex",justifyContent:"flex-start",paddingLeft:0,paddingRight:0,["& .".concat(h.Z.root,":before")]:{flex:0,padding:0}},children:e.list.map((t,n)=>(0,i.jsxs)(m.Z,{children:[(0,i.jsx)(g.Z,{whiteSpace:"pre-line",sx:e=>({display:{xs:"none",md:"block"},fontSize:{xs:12,md:14},color:"dark"===e.palette.mode?e.palette.grey["300"]:e.palette.grey["700"],flex:{xs:.25,md:.1},minWidth:75,paddingTop:0,paddingLeft:0}),children:t.endDate?"".concat(t.startDate,"\n~ ").concat(t.endDate,"\n(").concat(w()(t.endDate).diff(w()(t.startDate),"month"),"개월)"):"".concat(t.startDate," ~\n(").concat(w()().diff(w()(t.startDate),"month"),"개월)")}),(0,i.jsxs)(f.Z,{children:[t.endDate?(0,i.jsx)(u.Z,{variant:"outlined",color:"primary",sx:{width:14,height:14,margin:"2px 6px"}}):(0,i.jsx)(u.Z,{variant:"outlined",sx:{width:24,height:24,border:"none",margin:"0 1px",padding:0},children:(0,i.jsx)(x.Z,{})}),n<e.list.length-1&&(0,i.jsx)(j.Z,{})]}),(0,i.jsxs)(Z.Z,{whiteSpace:"pre-line",sx:{paddingTop:0,paddingBottom:5},children:[(0,i.jsx)(o.Z,{fontWeight:700,fontSize:{xs:16,md:20},letterSpacing:-1,children:t.title}),(0,i.jsx)(o.Z,{display:{xs:"block",md:"none"},sx:e=>({color:"dark"===e.palette.mode?e.palette.grey["300"]:e.palette.grey["700"],fontSize:12,margin:"2px 0 14px"}),children:"".concat(t.startDate," ~ ").concat(t.endDate," (").concat(w()(t.endDate).diff(w()(t.startDate),"month"),"개월)")}),t.techList&&t.techList.length>0&&(0,i.jsx)(l.ZP,{display:"flex",gap:1,flexWrap:"wrap",marginTop:1,marginBottom:3,children:t.techList.map((e,t)=>{let n=L[e];return(0,i.jsx)(n,{},t)})}),t.description&&(0,i.jsx)(S.U,{className:"markdown",children:t.description})]})]},n))})]},t))]})}var P=n(86210),_=n(3573),N=n.n(_);function I(){var e;let t=(0,P.ut)(),{data:n,loading:c}=(0,a.a)(N(),{variables:{userId:"8X2YS1znLjZCEtC4PMW59N6s7qy1"}}),x=(0,s.useMemo)(()=>n?n.resume:null,[n]);return(0,s.useEffect)(()=>(t(c),()=>{t(!1)}),[t,c]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(l.ZP,{display:"flex",alignItems:"flex-start",paddingX:{xs:2,md:6},paddingTop:2,paddingBottom:4,gap:2,children:[(0,i.jsx)(o.Z,{fontSize:{xs:26,md:36},fontWeight:700,children:null==x?void 0:x.title}),(null==x?void 0:x.github)&&(0,i.jsx)(r.Z,{href:null==x?void 0:x.github,target:"_blank",children:(0,i.jsx)(d.Z,{color:"action",sx:e=>({width:{xs:25,md:40},height:{xs:25,md:40},fill:"dark"===e.palette.mode?e.palette.common.white:e.palette.common.black})})})]}),(0,i.jsx)(l.ZP,{display:"flex",flexDirection:"column",alignItems:"center",gap:6,paddingX:{xs:2,md:6},paddingTop:2,paddingBottom:20,children:(null!==(e=null==x?void 0:x.companyList)&&void 0!==e?e:[]).map((e,t)=>(0,i.jsx)(C,{data:e},t))})]})}}},function(e){e.O(0,[248,447,357,876,871,173,471,571,971,23,744],function(){return e(e.s=23706)}),_N_E=e.O()}]);