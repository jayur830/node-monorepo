(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[489],{64841:function(e,n,r){Promise.resolve().then(r.bind(r,77885))},77885:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return AppTemplate}});var t=r(35046),o=r(68866),i=r(54318),a=r(8870),u=r(85592),s=r(3284),c=r(61849),d=r(10125),p=r(69302),h=r(899),l=r(73996),f=r(76922),A=r(77114);let I=new a.i((e,n)=>f.O.currentUser?(0,u.p)(f.O.currentUser.getIdToken().then(r=>(e.setContext(e=>({...e,headers:{...null==e?void 0:e.headers,Authorization:"Bearer ".concat(r)}})),(0,s.V)(n(e))))):n(e)),O=(0,l.q)(e=>{let{graphQLErrors:n,networkError:r,operation:t,forward:o}=e;if(n&&n.length>0)for(let e of n){if(e.extensions.code===A.n.AuthorizationExpired)return(0,u.p)(f.O.currentUser.getIdToken(!0).then(e=>(t.setContext(n=>({...n,headers:{...null==n?void 0:n.headers,Authorization:"Bearer ".concat(e)}})),(0,s.V)(o(t)))));console.error(e)}return r&&console.error(r),o(t)}),T=new c.u({uri:"https://jayur830-github-io-server-nestjs.fly.dev/api/graphql"}),m=new d.f({ssrMode:!0,link:(0,p.D)([I,O,T]),cache:new h.h});var v=r(92178);function AppTemplate(e){let{children:n}=e,r=(0,v.q)(e=>e.loading);return(0,t.jsxs)(o.e,{client:m,children:[n,r?(0,t.jsx)(i.gb,{}):(0,t.jsx)(t.Fragment,{})]})}},76922:function(e,n,r){"use strict";r.d(n,{O:function(){return u},q:function(){return i}});var t=r(78889),o=r(20217);r(82809);let i={apiKey:"AIzaSyB2FFrhWmR3vbh83AAo45_9jyNkipXKRbM",authDomain:"jayur830-81c71.firebaseapp.com",projectId:"jayur830-81c71",storageBucket:"jayur830-81c71.appspot.com",messagingSenderId:"474003620889",appId:"1:474003620889:web:233c4ad0d47d0ec99dd688",measurementId:"G-R54QHPGYJX"},a=(0,t.ZF)(i),u=(0,o.v0)(a)},77114:function(e,n,r){"use strict";var t,o;r.d(n,{n:function(){return t}}),(o=t||(t={})).Unauthorization="UNAUTHORIZATION",o.InvalidToken="INVALID_TOKEN",o.NotAdministrator="NOT_ADMINISTRATOR",o.AuthorizationExpired="AUTHORIZATION_EXPIRED"}},function(e){e.O(0,[775,516,140,894,854,138,530,759,422,174,933,318,788,152,744],function(){return e(e.s=64841)}),_N_E=e.O()}]);