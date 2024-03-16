var J=(i,t,e)=>{if(!t.has(i))throw TypeError("Cannot "+e)};var s=(i,t,e)=>(J(i,t,"read from private field"),e?e.call(i):t.get(i)),o=(i,t,e)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,e)},u=(i,t,e,r)=>(J(i,t,"write to private field"),r?r.call(i,e):t.set(i,e),e);var f=(i,t,e)=>(J(i,t,"access private method"),e);import{Y as Rt,Z as X,a8 as Ot,a9 as lt,aa as dt,ab as Ct,ac as wt,ad as Qt,ae as ft,a1 as St,af as It,x as Ut,ag as Et,G as Ft,a2 as Dt,U as Mt,j as K,a3 as pt,a4 as xt,a7 as Lt,a5 as Pt,a6 as Tt}from"./entry.gr-FopAl.js";var b,a,j,p,Q,D,O,A,M,x,S,I,w,L,U,T,k,$,V,tt,W,et,_,st,z,it,B,rt,N,nt,G,gt,vt,jt=(vt=class extends Rt{constructor(t,e){super();o(this,U);o(this,k);o(this,V);o(this,W);o(this,_);o(this,z);o(this,B);o(this,N);o(this,G);o(this,b,void 0);o(this,a,void 0);o(this,j,void 0);o(this,p,void 0);o(this,Q,void 0);o(this,D,void 0);o(this,O,void 0);o(this,A,void 0);o(this,M,void 0);o(this,x,void 0);o(this,S,void 0);o(this,I,void 0);o(this,w,void 0);o(this,L,new Set);this.options=e,u(this,b,t),u(this,O,null),this.bindMethods(),this.setOptions(e)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(s(this,a).addObserver(this),bt(s(this,a),this.options)?f(this,U,T).call(this):this.updateResult(),f(this,_,st).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return at(s(this,a),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return at(s(this,a),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,f(this,z,it).call(this),f(this,B,rt).call(this),s(this,a).removeObserver(this)}setOptions(t,e){const r=this.options,h=s(this,a);if(this.options=s(this,b).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");f(this,N,nt).call(this),s(this,a).setOptions(this.options),r._defaulted&&!X(this.options,r)&&s(this,b).getQueryCache().notify({type:"observerOptionsUpdated",query:s(this,a),observer:this});const n=this.hasListeners();n&&yt(s(this,a),h,this.options,r)&&f(this,U,T).call(this),this.updateResult(e),n&&(s(this,a)!==h||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&f(this,k,$).call(this);const c=f(this,V,tt).call(this);n&&(s(this,a)!==h||this.options.enabled!==r.enabled||c!==s(this,w))&&f(this,W,et).call(this,c)}getOptimisticResult(t){const e=s(this,b).getQueryCache().build(s(this,b),t),r=this.createResult(e,t);return kt(this,r)&&(u(this,p,r),u(this,D,this.options),u(this,Q,s(this,a).state)),r}getCurrentResult(){return s(this,p)}trackResult(t,e){const r={};return Object.keys(t).forEach(h=>{Object.defineProperty(r,h,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(h),e==null||e(h),t[h])})}),r}trackProp(t){s(this,L).add(t)}getCurrentQuery(){return s(this,a)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const e=s(this,b).defaultQueryOptions(t),r=s(this,b).getQueryCache().build(s(this,b),e);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,e))}fetch(t){return f(this,U,T).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),s(this,p)))}createResult(t,e){var ct;const r=s(this,a),h=this.options,n=s(this,p),c=s(this,Q),R=s(this,D),F=t!==r?t.state:s(this,j),{state:l}=t;let{error:C,errorUpdatedAt:d,fetchStatus:v,status:g}=l,P=!1,y;if(e._optimisticResults){const m=this.hasListeners(),H=!m&&bt(t,e),mt=m&&yt(t,r,e,h);(H||mt)&&(v=Qt(t.options.networkMode)?"fetching":"paused",l.data===void 0&&(g="pending")),e._optimisticResults==="isRestoring"&&(v="idle")}if(e.select&&l.data!==void 0)if(n&&l.data===(c==null?void 0:c.data)&&e.select===s(this,A))y=s(this,M);else try{u(this,A,e.select),y=e.select(l.data),y=ft(n==null?void 0:n.data,y,e),u(this,M,y),u(this,O,null)}catch(m){u(this,O,m)}else y=l.data;if(e.placeholderData!==void 0&&y===void 0&&g==="pending"){let m;if(n!=null&&n.isPlaceholderData&&e.placeholderData===(R==null?void 0:R.placeholderData))m=n.data;else if(m=typeof e.placeholderData=="function"?e.placeholderData((ct=s(this,x))==null?void 0:ct.state.data,s(this,x)):e.placeholderData,e.select&&m!==void 0)try{m=e.select(m),u(this,O,null)}catch(H){u(this,O,H)}m!==void 0&&(g="success",y=ft(n==null?void 0:n.data,m,e),P=!0)}s(this,O)&&(C=s(this,O),y=s(this,M),d=Date.now(),g="error");const Y=v==="fetching",Z=g==="pending",q=g==="error",ht=Z&&Y,ut=l.data!==void 0;return{status:g,fetchStatus:v,isPending:Z,isSuccess:g==="success",isError:q,isInitialLoading:ht,isLoading:ht,data:y,dataUpdatedAt:l.dataUpdatedAt,error:C,errorUpdatedAt:d,failureCount:l.fetchFailureCount,failureReason:l.fetchFailureReason,errorUpdateCount:l.errorUpdateCount,isFetched:l.dataUpdateCount>0||l.errorUpdateCount>0,isFetchedAfterMount:l.dataUpdateCount>F.dataUpdateCount||l.errorUpdateCount>F.errorUpdateCount,isFetching:Y,isRefetching:Y&&!Z,isLoadingError:q&&!ut,isPaused:v==="paused",isPlaceholderData:P,isRefetchError:q&&ut,isStale:ot(t,e),refetch:this.refetch}}updateResult(t){const e=s(this,p),r=this.createResult(s(this,a),this.options);if(u(this,Q,s(this,a).state),u(this,D,this.options),s(this,Q).data!==void 0&&u(this,x,s(this,a)),X(r,e))return;u(this,p,r);const h={},n=()=>{if(!e)return!0;const{notifyOnChangeProps:c}=this.options,R=typeof c=="function"?c():c;if(R==="all"||!R&&!s(this,L).size)return!0;const E=new Set(R??s(this,L));return this.options.throwOnError&&E.add("error"),Object.keys(s(this,p)).some(F=>{const l=F;return s(this,p)[l]!==e[l]&&E.has(l)})};(t==null?void 0:t.listeners)!==!1&&n()&&(h.listeners=!0),f(this,G,gt).call(this,{...h,...t})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&f(this,_,st).call(this)}},b=new WeakMap,a=new WeakMap,j=new WeakMap,p=new WeakMap,Q=new WeakMap,D=new WeakMap,O=new WeakMap,A=new WeakMap,M=new WeakMap,x=new WeakMap,S=new WeakMap,I=new WeakMap,w=new WeakMap,L=new WeakMap,U=new WeakSet,T=function(t){f(this,N,nt).call(this);let e=s(this,a).fetch(this.options,t);return t!=null&&t.throwOnError||(e=e.catch(Ot)),e},k=new WeakSet,$=function(){if(f(this,z,it).call(this),lt||s(this,p).isStale||!dt(this.options.staleTime))return;const e=Ct(s(this,p).dataUpdatedAt,this.options.staleTime)+1;u(this,S,setTimeout(()=>{s(this,p).isStale||this.updateResult()},e))},V=new WeakSet,tt=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(s(this,a)):this.options.refetchInterval)??!1},W=new WeakSet,et=function(t){f(this,B,rt).call(this),u(this,w,t),!(lt||this.options.enabled===!1||!dt(s(this,w))||s(this,w)===0)&&u(this,I,setInterval(()=>{(this.options.refetchIntervalInBackground||wt.isFocused())&&f(this,U,T).call(this)},s(this,w)))},_=new WeakSet,st=function(){f(this,k,$).call(this),f(this,W,et).call(this,f(this,V,tt).call(this))},z=new WeakSet,it=function(){s(this,S)&&(clearTimeout(s(this,S)),u(this,S,void 0))},B=new WeakSet,rt=function(){s(this,I)&&(clearInterval(s(this,I)),u(this,I,void 0))},N=new WeakSet,nt=function(){const t=s(this,b).getQueryCache().build(s(this,b),this.options);if(t===s(this,a))return;const e=s(this,a);u(this,a,t),u(this,j,t.state),this.hasListeners()&&(e==null||e.removeObserver(this),t.addObserver(this))},G=new WeakSet,gt=function(t){St.batch(()=>{t.listeners&&this.listeners.forEach(e=>{e(s(this,p))}),s(this,b).getQueryCache().notify({query:s(this,a),type:"observerResultsUpdated"})})},vt);function At(i,t){return t.enabled!==!1&&i.state.data===void 0&&!(i.state.status==="error"&&t.retryOnMount===!1)}function bt(i,t){return At(i,t)||i.state.data!==void 0&&at(i,t,t.refetchOnMount)}function at(i,t,e){if(t.enabled!==!1){const r=typeof e=="function"?e(i):e;return r==="always"||r!==!1&&ot(i,t)}return!1}function yt(i,t,e,r){return(i!==t||r.enabled===!1)&&(!e.suspense||i.state.status!=="error")&&ot(i,e)}function ot(i,t){return t.enabled!==!1&&i.isStaleByTime(t.staleTime)}function kt(i,t){return!X(i.getCurrentResult(),t)}function Vt(i=""){if(!It())throw new Error("vue-query hooks can only be used inside setup() function or functions that support injection context.");const t=Et(i),e=Ut(t);if(!e)throw new Error("No 'queryClient' found in Vue context, use 'VueQueryPlugin' to properly initialize the library.");return e}function Wt(i,t,e){const r=e||Vt(),h=Ft(()=>{const d=Dt(t);typeof d.enabled=="function"&&(d.enabled=d.enabled());const v=r.defaultQueryOptions(d);return v._optimisticResults=r.isRestoring.value?"isRestoring":"optimistic",v}),n=new i(r,h.value),c=Mt(n.getCurrentResult());let R=()=>{};K(r.isRestoring,d=>{d||(R(),R=n.subscribe(v=>{pt(c,v)}))},{immediate:!0});const E=()=>{n.setOptions(h.value),pt(c,n.getCurrentResult())};K(h,E),xt(()=>{R()});const F=(...d)=>(E(),c.refetch(...d)),l=()=>new Promise((d,v)=>{let g=()=>{};const P=()=>{if(h.value.enabled!==!1){n.setOptions(h.value);const y=n.getOptimisticResult(h.value);y.isStale?(g(),n.fetchOptimistic(h.value).then(d,v)):(g(),d(y))}};P(),g=K(h,P)});K(()=>c.error,d=>{if(c.isError&&!c.isFetching&&Lt(h.value.throwOnError,[d,n.getCurrentQuery()]))throw d});const C=Pt(Tt(c));for(const d in c)typeof c[d]=="function"&&(C[d]=c[d]);return C.suspense=l,C.refetch=F,C}function Nt(i,t){return Wt(jt,i,t)}export{Vt as a,Nt as u};
