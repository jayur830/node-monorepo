"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[173],{76261:function(t,e,r){r.d(e,{x:function(){return s}});var n=r(17143),o=r(2265),i=r(54312);function s(t){var e=o.useContext((0,i.K)()),r=t||e.client;return(0,n.kG)(!!r,49),r}},9173:function(t,e,r){r.d(e,{a:function(){return P}});var n=r(50044),o=r(17143),i=r(2265),s=r.t(i,2),u=r(38191),a=!1,l=s.useSyncExternalStore||function(t,e,r){var n=e();!1===globalThis.__DEV__||a||n===e()||(a=!0,!1!==globalThis.__DEV__&&o.kG.error(58));var s=i.useState({inst:{value:n,getSnapshot:e}}),l=s[0].inst,h=s[1];return u.JC?i.useLayoutEffect(function(){Object.assign(l,{value:n,getSnapshot:e}),c(l)&&h({inst:l})},[t,n,e]):Object.assign(l,{value:n,getSnapshot:e}),i.useEffect(function(){return c(l)&&h({inst:l}),t(function(){c(l)&&h({inst:l})})},[t]),n};function c(t){var e=t.value,r=t.getSnapshot;try{return e!==r()}catch(t){return!0}}var h=r(36510),p=r(17466),f=r(54312),y=r(17205),d=r(12274),b=r(31617),v=r(76261),g=r(68859),O=r(18865),k=r(72619),w=Object.prototype.hasOwnProperty;function P(t,e){var r,n,o;return void 0===e&&(e=Object.create(null)),(r=(0,v.x)(e.client),(n=i.useRef()).current&&r===n.current.client&&t===n.current.query||(n.current=new m(r,t,n.current)),(o=n.current).forceUpdateState=i.useReducer(function(t){return t+1},0)[1],o).useQuery(e)}var m=function(){function t(t,e,r){var n=this;this.client=t,this.query=e,this.forceUpdate=function(){return n.forceUpdateState()},this.ssrDisabledResult=(0,g.J)({loading:!0,data:void 0,error:void 0,networkStatus:d.Ie.loading}),this.skipStandbyResult=(0,g.J)({loading:!1,data:void 0,error:void 0,networkStatus:d.Ie.ready}),this.toQueryResultCache=new(u.mr?WeakMap:Map),(0,b.Vp)(e,b.n_.Query);var o=r&&r.result,i=o&&o.data;i&&(this.previousData=i)}return t.prototype.forceUpdateState=function(){!1!==globalThis.__DEV__&&o.kG.warn(50)},t.prototype.executeQuery=function(t){var e,r=this;t.query&&Object.assign(this,{query:t.query}),this.watchQueryOptions=this.createWatchQueryOptions(this.queryHookOptions=t);var n=this.observable.reobserveAsConcast(this.getObsQueryOptions());return this.previousData=(null===(e=this.result)||void 0===e?void 0:e.data)||this.previousData,this.result=void 0,this.forceUpdate(),new Promise(function(t){var e;n.subscribe({next:function(t){e=t},error:function(){t(r.toQueryResult(r.observable.getCurrentResult()))},complete:function(){t(r.toQueryResult(e))}})})},t.prototype.useQuery=function(t){var e=this;this.renderPromises=i.useContext((0,f.K)()).renderPromises,this.useOptions(t);var r=this.useObservableQuery(),n=l(i.useCallback(function(t){if(e.renderPromises)return function(){};e.forceUpdate=t;var n=function(){var t=e.result,n=r.getCurrentResult();t&&t.loading===n.loading&&t.networkStatus===n.networkStatus&&(0,h.D)(t.data,n.data)||e.setResult(n)},o=function(t){if(i.unsubscribe(),i=r.resubscribeAfterError(n,o),!w.call(t,"graphQLErrors"))throw t;var s=e.result;(!s||s&&s.loading||!(0,h.D)(t,s.error))&&e.setResult({data:s&&s.data,error:t,loading:!1,networkStatus:d.Ie.error})},i=r.subscribe(n,o);return function(){setTimeout(function(){return i.unsubscribe()}),e.forceUpdate=function(){return e.forceUpdateState()}}},[r,this.renderPromises,this.client.disableNetworkFetches]),function(){return e.getCurrentResult()},function(){return e.getCurrentResult()});return this.unsafeHandlePartialRefetch(n),this.toQueryResult(n)},t.prototype.useOptions=function(e){var r,n=this.createWatchQueryOptions(this.queryHookOptions=e),o=this.watchQueryOptions;!(0,h.D)(n,o)&&(this.watchQueryOptions=n,o&&this.observable&&(this.observable.reobserve(this.getObsQueryOptions()),this.previousData=(null===(r=this.result)||void 0===r?void 0:r.data)||this.previousData,this.result=void 0)),this.onCompleted=e.onCompleted||t.prototype.onCompleted,this.onError=e.onError||t.prototype.onError,(this.renderPromises||this.client.disableNetworkFetches)&&!1===this.queryHookOptions.ssr&&!this.queryHookOptions.skip?this.result=this.ssrDisabledResult:this.queryHookOptions.skip||"standby"===this.watchQueryOptions.fetchPolicy?this.result=this.skipStandbyResult:(this.result===this.ssrDisabledResult||this.result===this.skipStandbyResult)&&(this.result=void 0)},t.prototype.getObsQueryOptions=function(){var t=[],e=this.client.defaultOptions.watchQuery;return e&&t.push(e),this.queryHookOptions.defaultOptions&&t.push(this.queryHookOptions.defaultOptions),t.push((0,O.o)(this.observable&&this.observable.options,this.watchQueryOptions)),t.reduce(p.J)},t.prototype.createWatchQueryOptions=function(t){void 0===t&&(t={});var e,r=t.skip,o=Object.assign((t.ssr,t.onCompleted,t.onError,t.defaultOptions,(0,n._T)(t,["skip","ssr","onCompleted","onError","defaultOptions"])),{query:this.query});if(this.renderPromises&&("network-only"===o.fetchPolicy||"cache-and-network"===o.fetchPolicy)&&(o.fetchPolicy="cache-first"),o.variables||(o.variables={}),r){var i=o.fetchPolicy,s=void 0===i?this.getDefaultFetchPolicy():i,u=o.initialFetchPolicy;Object.assign(o,{initialFetchPolicy:void 0===u?s:u,fetchPolicy:"standby"})}else o.fetchPolicy||(o.fetchPolicy=(null===(e=this.observable)||void 0===e?void 0:e.options.initialFetchPolicy)||this.getDefaultFetchPolicy());return o},t.prototype.getDefaultFetchPolicy=function(){var t,e;return(null===(t=this.queryHookOptions.defaultOptions)||void 0===t?void 0:t.fetchPolicy)||(null===(e=this.client.defaultOptions.watchQuery)||void 0===e?void 0:e.fetchPolicy)||"cache-first"},t.prototype.onCompleted=function(t){},t.prototype.onError=function(t){},t.prototype.useObservableQuery=function(){var t=this.observable=this.renderPromises&&this.renderPromises.getSSRObservable(this.watchQueryOptions)||this.observable||this.client.watchQuery(this.getObsQueryOptions());this.obsQueryFields=i.useMemo(function(){return{refetch:t.refetch.bind(t),reobserve:t.reobserve.bind(t),fetchMore:t.fetchMore.bind(t),updateQuery:t.updateQuery.bind(t),startPolling:t.startPolling.bind(t),stopPolling:t.stopPolling.bind(t),subscribeToMore:t.subscribeToMore.bind(t)}},[t]);var e=!(!1===this.queryHookOptions.ssr||this.queryHookOptions.skip);return this.renderPromises&&e&&(this.renderPromises.registerSSRObservable(t),t.getCurrentResult().loading&&this.renderPromises.addObservableQueryPromise(t)),t},t.prototype.setResult=function(t){var e=this.result;e&&e.data&&(this.previousData=e.data),this.result=t,this.forceUpdate(),this.handleErrorOrCompleted(t,e)},t.prototype.handleErrorOrCompleted=function(t,e){var r=this;if(!t.loading){var n=this.toApolloError(t);Promise.resolve().then(function(){n?r.onError(n):t.data&&(null==e?void 0:e.networkStatus)!==t.networkStatus&&t.networkStatus===d.Ie.ready&&r.onCompleted(t.data)}).catch(function(t){!1!==globalThis.__DEV__&&o.kG.warn(t)})}},t.prototype.toApolloError=function(t){return(0,k.O)(t.errors)?new y.cA({graphQLErrors:t.errors}):t.error},t.prototype.getCurrentResult=function(){return this.result||this.handleErrorOrCompleted(this.result=this.observable.getCurrentResult()),this.result},t.prototype.toQueryResult=function(t){var e=this.toQueryResultCache.get(t);if(e)return e;var r=t.data,o=(t.partial,(0,n._T)(t,["data","partial"]));return this.toQueryResultCache.set(t,e=(0,n.pi)((0,n.pi)((0,n.pi)({data:r},o),this.obsQueryFields),{client:this.client,observable:this.observable,variables:this.observable.variables,called:!this.queryHookOptions.skip,previousData:this.previousData})),!e.error&&(0,k.O)(t.errors)&&(e.error=new y.cA({graphQLErrors:t.errors})),e},t.prototype.unsafeHandlePartialRefetch=function(t){t.partial&&this.queryHookOptions.partialRefetch&&!t.loading&&(!t.data||0===Object.keys(t.data).length)&&"cache-only"!==this.observable.options.fetchPolicy&&(Object.assign(t,{loading:!0,networkStatus:d.Ie.refetch}),this.observable.refetch())},t}()},31617:function(t,e,r){r.d(e,{Vp:function(){return s},n_:function(){return DocumentType}});var DocumentType,DocumentType,n=r(17143);(DocumentType=DocumentType||(DocumentType={}))[DocumentType.Query=0]="Query",DocumentType[DocumentType.Mutation=1]="Mutation",DocumentType[DocumentType.Subscription=2]="Subscription";var o=new Map;function i(t){var e;switch(t){case DocumentType.Query:e="Query";break;case DocumentType.Mutation:e="Mutation";break;case DocumentType.Subscription:e="Subscription"}return e}function s(t,e){var r=function(t){var e,r,i=o.get(t);if(i)return i;(0,n.kG)(!!t&&!!t.kind,59,t);for(var s=[],u=[],a=[],l=[],c=0,h=t.definitions;c<h.length;c++){var p=h[c];if("FragmentDefinition"===p.kind){s.push(p);continue}if("OperationDefinition"===p.kind)switch(p.operation){case"query":u.push(p);break;case"mutation":a.push(p);break;case"subscription":l.push(p)}}(0,n.kG)(!s.length||u.length||a.length||l.length,60),(0,n.kG)(u.length+a.length+l.length<=1,61,t,u.length,l.length,a.length),r=u.length?DocumentType.Query:DocumentType.Mutation,u.length||a.length||(r=DocumentType.Subscription);var f=u.length?u:a.length?a:l;(0,n.kG)(1===f.length,62,t,f.length);var y=f[0];e=y.variableDefinitions||[];var d={name:y.name&&"Name"===y.name.kind?y.name.value:"data",type:r,variables:e};return o.set(t,d),d}(t),s=i(e),u=i(r.type);(0,n.kG)(r.type===e,63,s,s,u)}},50044:function(t,e,r){r.d(e,{Jh:function(){return a},ZT:function(){return o},_T:function(){return s},ev:function(){return l},mG:function(){return u},pi:function(){return i}});var n=function(t,e){return(n=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)};function o(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var i=function(){return(i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function s(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&0>e.indexOf(n)&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)0>e.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]]);return r}function u(t,e,r,n){return new(r||(r=Promise))(function(o,i){function s(t){try{a(n.next(t))}catch(t){i(t)}}function u(t){try{a(n.throw(t))}catch(t){i(t)}}function a(t){var e;t.done?o(t.value):((e=t.value)instanceof r?e:new r(function(t){t(e)})).then(s,u)}a((n=n.apply(t,e||[])).next())})}function a(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(u){return function(a){return function(u){if(r)throw TypeError("Generator is already executing.");for(;i&&(i=0,u[0]&&(s=0)),s;)try{if(r=1,n&&(o=2&u[0]?n.return:u[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,u[1])).done)return o;switch(n=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return s.label++,{value:u[1],done:!1};case 5:s.label++,n=u[1],u=[0];continue;case 7:u=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){s=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){s.label=u[1];break}if(6===u[0]&&s.label<o[1]){s.label=o[1],o=u;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(u);break}o[2]&&s.ops.pop(),s.trys.pop();continue}u=e.call(t,s)}catch(t){u=[6,t],n=0}finally{r=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}}function l(t,e,r){if(r||2==arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))}"function"==typeof SuppressedError&&SuppressedError}}]);