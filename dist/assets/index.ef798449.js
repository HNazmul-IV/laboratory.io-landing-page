const yt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const m of i)if(m.type==="childList")for(const g of m.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&l(g)}).observe(document,{childList:!0,subtree:!0});function r(i){const m={};return i.integrity&&(m.integrity=i.integrity),i.referrerpolicy&&(m.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?m.credentials="include":i.crossorigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function l(i){if(i.ep)return;i.ep=!0;const m=r(i);fetch(i.href,m)}};yt();function E(){}function ht(o){return o()}function gt(){return Object.create(null)}function rt(o){o.forEach(ht)}function zt(o){return typeof o=="function"}function H(o,t){return o!=o?t==t:o!==t||o&&typeof o=="object"||typeof o=="function"}let it;function M(o,t){return it||(it=document.createElement("a")),it.href=t,o===it.href}function jt(o){return Object.keys(o).length===0}function a(o,t){o.appendChild(t)}function q(o,t,r){o.insertBefore(t,r||null)}function N(o){o.parentNode.removeChild(o)}function _t(o,t){for(let r=0;r<o.length;r+=1)o[r]&&o[r].d(t)}function n(o){return document.createElement(o)}function vt(o){return document.createTextNode(o)}function x(){return vt(" ")}function Et(o,t,r,l){return o.addEventListener(t,r,l),()=>o.removeEventListener(t,r,l)}function e(o,t,r){r==null?o.removeAttribute(t):o.getAttribute(t)!==r&&o.setAttribute(t,r)}function Mt(o){return Array.from(o.childNodes)}function $t(o,t){t=""+t,o.wholeText!==t&&(o.data=t)}function bt(o,t,r){o.classList[r?"add":"remove"](t)}let et;function tt(o){et=o}function wt(){if(!et)throw new Error("Function called outside component initialization");return et}function Tt(o){wt().$$.on_mount.push(o)}function Nt(o){wt().$$.on_destroy.push(o)}const Q=[],ot=[],dt=[],ft=[],qt=Promise.resolve();let pt=!1;function At(){pt||(pt=!0,qt.then(kt))}function ct(o){dt.push(o)}const st=new Set;let nt=0;function kt(){const o=et;do{for(;nt<Q.length;){const t=Q[nt];nt++,tt(t),Lt(t.$$)}for(tt(null),Q.length=0,nt=0;ot.length;)ot.pop()();for(let t=0;t<dt.length;t+=1){const r=dt[t];st.has(r)||(st.add(r),r())}dt.length=0}while(Q.length);for(;ft.length;)ft.pop()();pt=!1,st.clear(),tt(o)}function Lt(o){if(o.fragment!==null){o.update(),rt(o.before_update);const t=o.dirty;o.dirty=[-1],o.fragment&&o.fragment.p(o.ctx,t),o.after_update.forEach(ct)}}const mt=new Set;let P;function Ct(){P={r:0,c:[],p:P}}function Ft(){P.r||rt(P.c),P=P.p}function L(o,t){o&&o.i&&(mt.delete(o),o.i(t))}function C(o,t,r,l){if(o&&o.o){if(mt.has(o))return;mt.add(o),P.c.push(()=>{mt.delete(o),l&&(r&&o.d(1),l())}),o.o(t)}}function B(o){o&&o.c()}function F(o,t,r,l){const{fragment:i,on_mount:m,on_destroy:g,after_update:d}=o.$$;i&&i.m(t,r),l||ct(()=>{const c=m.map(ht).filter(zt);g?g.push(...c):rt(c),o.$$.on_mount=[]}),d.forEach(ct)}function S(o,t){const r=o.$$;r.fragment!==null&&(rt(r.on_destroy),r.fragment&&r.fragment.d(t),r.on_destroy=r.fragment=null,r.ctx=[])}function St(o,t){o.$$.dirty[0]===-1&&(Q.push(o),At(),o.$$.dirty.fill(0)),o.$$.dirty[t/31|0]|=1<<t%31}function R(o,t,r,l,i,m,g,d=[-1]){const c=et;tt(o);const b=o.$$={fragment:null,ctx:null,props:m,update:E,not_equal:i,bound:gt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:gt(),dirty:d,skip_bound:!1,root:t.target||c.$$.root};g&&g(b.root);let f=!1;if(b.ctx=r?r(o,t.props||{},(s,u,...w)=>{const z=w.length?w[0]:u;return b.ctx&&i(b.ctx[s],b.ctx[s]=z)&&(!b.skip_bound&&b.bound[s]&&b.bound[s](z),f&&St(o,s)),u}):[],b.update(),f=!0,rt(b.before_update),b.fragment=l?l(b.ctx):!1,t.target){if(t.hydrate){const s=Mt(t.target);b.fragment&&b.fragment.l(s),s.forEach(N)}else b.fragment&&b.fragment.c();t.intro&&L(o.$$.fragment),F(o,t.target,t.anchor,t.customElement),kt()}tt(c)}class U{$destroy(){S(this,1),this.$destroy=E}$on(t,r){const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(r),()=>{const i=l.indexOf(r);i!==-1&&l.splice(i,1)}}$set(t){this.$$set&&!jt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var Bt="/assets/Logo_White.2f2a96af.svg";function Ot(o){let t,r,l,i,m,g,d,c,b,f;return{c(){t=n("nav"),r=n("div"),l=n("a"),i=n("img"),g=x(),d=n("button"),d.innerHTML='<span class="navbar-toggler-icon"></span>',c=x(),b=n("div"),f=n("ul"),f.innerHTML=`<li class="nav-item svelte-1k1wul8"><a class="nav-link active svelte-1k1wul8" href="#top">Top</a></li> 
                <li class="nav-item svelte-1k1wul8"><a class="nav-link svelte-1k1wul8" href="#about">About</a></li> 
                <li class="nav-item svelte-1k1wul8"><a class="nav-link svelte-1k1wul8" href="#nfts">NFT Collections</a></li> 
                <li class="nav-item svelte-1k1wul8"><a class="nav-link svelte-1k1wul8" href="#p2e">Pay2Earn</a></li> 
                <li class="nav-item svelte-1k1wul8"><a class="nav-link svelte-1k1wul8" href="#lab">$LAB</a></li> 
                <li class="nav-item svelte-1k1wul8"><a class="nav-link svelte-1k1wul8" href="#roadmap">Roadmap</a></li>`,M(i.src,m=Bt)||e(i,"src",m),e(i,"alt","..."),e(i,"class","svelte-1k1wul8"),e(l,"class","navbar-brand svelte-1k1wul8"),e(l,"href","#top"),e(d,"class","navbar-toggler"),e(d,"type","button"),e(d,"data-bs-toggle","collapse"),e(d,"data-bs-target","#navbarSupportedContent"),e(d,"aria-controls","navbarSupportedContent"),e(d,"aria-expanded","false"),e(d,"aria-label","Toggle navigation"),e(f,"class","navbar-nav ms-auto my-2 my-lg-0"),e(b,"class","collapse navbar-collapse"),e(b,"id","navbarSupportedContent"),e(r,"class","container-fluid more-horizontal-padding svelte-1k1wul8"),e(t,"id","mainNav"),e(t,"class","navbar navbar-expand-lg navbar-dark fixed-top svelte-1k1wul8"),bt(t,"shrink",o[0])},m(s,u){q(s,t,u),a(t,r),a(r,l),a(l,i),a(r,g),a(r,d),o[3](d),a(r,c),a(r,b),a(b,f),o[4](f)},p(s,[u]){u&1&&bt(t,"shrink",s[0])},i:E,o:E,d(s){s&&N(t),o[3](null),o[4](null)}}}function It(o,t,r){let l=!1,i,m;const g=()=>r(0,l=window.scrollY>0);g(),Tt(()=>{document.addEventListener("scroll",g),document.body.querySelector("#mainNav")&&new bootstrap.ScrollSpy(document.body,{target:"#mainNav",offset:74}),[].slice.call(m.querySelectorAll(".nav-item .nav-link"),0).forEach(s=>{s.addEventListener("click",function(){window.getComputedStyle(i).display!=="none"&&i.click()})})}),Nt(()=>{document.removeEventListener("scroll",g)});function d(b){ot[b?"unshift":"push"](()=>{i=b,r(1,i)})}function c(b){ot[b?"unshift":"push"](()=>{m=b,r(2,m)})}return[l,i,m,d,c]}class Ht extends U{constructor(t){super(),R(this,t,It,Ot,H,{})}}var Rt="/assets/video-thumbnail.99ee7a41.png",Ut="/assets/play-button.00d3ba19.png";function Vt(o){let t,r,l,i,m,g,d,c,b,f,s;return{c(){t=n("section"),r=n("div"),l=n("div"),i=n("img"),g=x(),d=n("div"),c=n("img"),f=x(),s=n("div"),s.innerHTML=`<div class="col-lg-10 mx-auto py-5"><div class="row align-items-center "><div class="col-lg-6 "><h1 class="left-title svelte-mssoj4"><span class="text-green svelte-mssoj4">How</span>  <br/>  <span class="text-green svelte-mssoj4">cronos</span>  <br/>  <span class="text-green svelte-mssoj4">chain</span>  <br/> got <br/> captured?</h1></div> 
                <div class="col-lg-5 right-side svelte-mssoj4"><h4 class="text-green svelte-mssoj4">How to get started?</h4> 
                    <p class="poppins fs-5 fw-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, hic. Omnis in maiores, tempore facilis, modi aperiam porro illum, expedita voluptate corrupti repellat
                        voluptates necessitatibus quos quaerat sed odit totam.</p> 
                    <p class="poppins fs-5 fw-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, dignissimos.</p></div></div></div>`,M(i.src,m=Rt)||e(i,"src",m),e(i,"alt",""),e(i,"srcset",""),e(i,"class","svelte-mssoj4"),e(l,"class","video svelte-mssoj4"),M(c.src,b=Ut)||e(c,"src",b),e(c,"alt",""),e(c,"class","svelte-mssoj4"),e(d,"class","play-button svelte-mssoj4"),e(r,"class","video-wrapper svelte-mssoj4"),e(s,"class","details-wrapper text-white"),e(t,"id","about"),e(t,"class","svelte-mssoj4")},m(u,w){q(u,t,w),a(t,r),a(r,l),a(l,i),a(r,g),a(r,d),a(d,c),a(t,f),a(t,s)},p:E,i:E,o:E,d(u){u&&N(t)}}}class Wt extends U{constructor(t){super(),R(this,t,null,Vt,H,{})}}var Yt="/assets/lab-ribon.1f077c6b.png",Gt="/assets/lab-background.00096435.png",Jt="/assets/mmf-logo.aae38bc4.png",Dt="data:image/webp;base64,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";function Kt(o){let t,r,l,i,m,g,d,c,b,f,s,u,w,z,h,k,p,v,j,$,T,A,y,_,O,I,V,W,Y,J,G,D,K,at;return{c(){t=n("section"),r=n("div"),l=n("img"),m=x(),g=n("div"),d=n("img"),b=x(),f=n("div"),s=n("div"),u=n("div"),u.innerHTML=`<h1 class="headline text-black svelte-3118ro"><span class="large svelte-3118ro">$LAB</span> Token</h1> 
                <h3 class="subtitle text-black svelte-3118ro">Cronos Contact address</h3>`,w=x(),z=n("div"),h=n("div"),k=n("input"),v=x(),j=n("button"),$=vt(o[1]),A=x(),y=n("div"),_=n("button"),_.textContent="LabDEX",O=x(),I=n("button"),V=n("img"),Y=x(),J=n("button"),G=n("img"),M(l.src,i=Yt)||e(l,"src",i),e(l,"alt",""),e(l,"class","svelte-3118ro"),e(r,"class","upper-ribon svelte-3118ro"),M(d.src,c=Gt)||e(d,"src",c),e(d,"alt",""),e(d,"class","svelte-3118ro"),e(g,"class","background svelte-3118ro"),e(u,"class","title svelte-3118ro"),e(k,"type","text"),e(k,"class",p="form-control bg-transparent "+(o[1]==="Copied"?"vanish-select":"")+" border-0 text-white svelte-3118ro"),k.value="0x75f55e718ea51191966f256893bd96db2de9ee94",k.readOnly=!0,e(j,"class",T="input-group-text rounded-pill "+(o[1]==="Copied"?"bg-success text-white":"")+" svelte-3118ro"),e(j,"id","copy-btn"),e(h,"class","input-group rounded-pill mb-3 gap-2 p-3 bg-black svelte-3118ro"),e(z,"class","copy-btn "),e(_,"class","svelte-3118ro"),M(V.src,W=Jt)||e(V,"src",W),e(V,"alt",""),e(V,"class","svelte-3118ro"),e(I,"class","svelte-3118ro"),M(G.src,D=Dt)||e(G,"src",D),e(G,"alt",""),e(G,"class","svelte-3118ro"),e(J,"class","svelte-3118ro"),e(y,"class","all-buttons svelte-3118ro"),e(s,"class","content col-8 offset-lg-3 offset-2 p-5"),e(f,"class","content-wrapper svelte-3118ro"),e(t,"id","lab"),e(t,"class","svelte-3118ro")},m(X,Z){q(X,t,Z),a(t,r),a(r,l),a(t,m),a(t,g),a(g,d),a(t,b),a(t,f),a(f,s),a(s,u),a(s,w),a(s,z),a(z,h),a(h,k),o[3](k),a(h,v),a(h,j),a(j,$),a(s,A),a(s,y),a(y,_),a(y,O),a(y,I),a(I,V),a(y,Y),a(y,J),a(J,G),K||(at=Et(j,"click",o[2]),K=!0)},p(X,[Z]){Z&2&&p!==(p="form-control bg-transparent "+(X[1]==="Copied"?"vanish-select":"")+" border-0 text-white svelte-3118ro")&&e(k,"class",p),Z&2&&$t($,X[1]),Z&2&&T!==(T="input-group-text rounded-pill "+(X[1]==="Copied"?"bg-success text-white":"")+" svelte-3118ro")&&e(j,"class",T)},i:E,o:E,d(X){X&&N(t),o[3](null),K=!1,at()}}}function Xt(o,t,r){let l,i="Copy ";const m=()=>{l.select(),l.setSelectionRange(0,99999),document.execCommand("copy"),r(1,i="Copied"),setTimeout(()=>{r(1,i="Copy"),document.getSelection().removeAllRanges()},2e3)};function g(d){ot[d?"unshift":"push"](()=>{l=d,r(0,l)})}return[l,i,m,g]}class Pt extends U{constructor(t){super(),R(this,t,Xt,Kt,H,{})}}var Zt="/assets/nft-section-ribon.baef6fbb.png",Qt="/assets/nft-slide-one.2a05acea.png",te="/assets/nft-slide-one.2a05acea.png",ee="/assets/logo-dark-prod.524cb599.svg";function oe(o){let t,r,l,i,m,g,d,c,b,f,s,u,w,z,h,k,p,v,j,$,T,A,y,_,O,I,V,W,Y,J,G,D;return{c(){t=n("section"),r=n("div"),l=n("div"),i=n("img"),g=x(),d=n("div"),c=n("img"),f=x(),s=n("div"),u=n("img"),z=x(),h=n("div"),h.innerHTML=`<h1 class="text-green prime svelte-vpkubh">Play to earn with NFT collection on cronos.</h1> 
            <h3 class="text-light second svelte-vpkubh">NFT collection packed with utilities. NFT collection packed with utilities.</h3>`,k=x(),p=n("div"),v=n("div"),j=n("div"),$=n("div"),$.innerHTML='<div class="crazy-card text-center svelte-vpkubh"><h1 class="svelte-vpkubh"><span class="text-green svelte-vpkubh">Creazy</span>  <br/>  <span class="large-text text-white svelte-vpkubh">5555</span>  <br/>  <span class="text-green svelte-vpkubh">Scientists</span></h1></div>',T=x(),A=n("div"),y=n("div"),_=n("h1"),_.textContent="Mint:",O=x(),I=n("button"),I.textContent="Sold Out",V=x(),W=n("button"),Y=n("img"),G=x(),D=n("div"),D.innerHTML=`<p class="mb-0">Buy it on</p> 
                                <p class="mb-0 fs-2">Ebisu&#39;s Bay</p>`,M(i.src,m=Zt)||e(i,"src",m),e(i,"alt",""),e(i,"class","svelte-vpkubh"),e(l,"class","ribon svelte-vpkubh"),M(c.src,b=Qt)||e(c,"src",b),e(c,"alt",""),e(c,"class","svelte-vpkubh"),e(d,"class","slide-one svelte-vpkubh"),M(u.src,w=te)||e(u,"src",w),e(u,"alt",""),e(u,"class","svelte-vpkubh"),e(s,"class","slide-two svelte-vpkubh"),e(h,"class","nft-slide-text svelte-vpkubh"),e(r,"class","nft-showcase-wrapper"),e($,"class","col-lg-7"),e(_,"class","text-light mint-text svelte-vpkubh"),e(I,"class","green-button svelte-vpkubh"),M(Y.src,J=ee)||e(Y,"src",J),e(Y,"alt",""),e(Y,"class","svelte-vpkubh"),e(D,"class","text text-start svelte-vpkubh"),e(W,"class","green-button second d-flex svelte-vpkubh"),e(y,"class","mint-area d-flex flex-column  svelte-vpkubh"),e(A,"class","col-lg-5 col-md-10 py-5 py-lg-0"),e(j,"class","row align-items-center justify-content-center"),e(v,"class","container py-lg-5"),e(p,"class","mint-area-wrapper p-0 py-5"),e(t,"id","nfts"),e(t,"class","svelte-vpkubh")},m(K,at){q(K,t,at),a(t,r),a(r,l),a(l,i),a(r,g),a(r,d),a(d,c),a(r,f),a(r,s),a(s,u),a(r,z),a(r,h),a(t,k),a(t,p),a(p,v),a(v,j),a(j,$),a(j,T),a(j,A),a(A,y),a(y,_),a(y,O),a(y,I),a(y,V),a(y,W),a(W,Y),a(W,G),a(W,D)},p:E,i:E,o:E,d(K){K&&N(t)}}}class re extends U{constructor(t){super(),R(this,t,null,oe,H,{})}}var ae="/assets/play2earn-upper.2f777491.png",ie="/assets/p2e-nft.23e5b4ba.png",ne="/assets/p2e-mobile.711ec862.png";function le(o){let t,r,l,i,m,g,d,c,b,f,s,u,w,z,h,k,p,v,j,$;return{c(){t=n("section"),r=n("div"),l=n("div"),i=n("img"),g=x(),d=n("div"),c=n("div"),b=n("div"),f=n("div"),s=n("img"),w=x(),z=n("div"),h=n("div"),k=n("div"),p=n("img"),j=x(),$=n("div"),$.innerHTML=`<div class="wrapper text-center col-lg-8 mx-auto svelte-176v2tb"><h3 class="text-green svelte-176v2tb">About game</h3> 
                            <p class="text-white svelte-176v2tb">NFT collection packed with utilities NFT collection packed with utilities NFT collection packed with utilities NFT collection packed</p> 
                            <button class="green-button svelte-176v2tb">Play Now !</button></div>`,M(i.src,m=ae)||e(i,"src",m),e(i,"alt",""),e(i,"class","svelte-176v2tb"),e(l,"class","p2e-upper-image svelte-176v2tb"),e(r,"class","section-wrapper py-3 py-lg-5"),M(s.src,u=ie)||e(s,"src",u),e(s,"alt",""),e(s,"class","svelte-176v2tb"),e(f,"class","character svelte-176v2tb"),e(b,"class","col-md-5"),M(p.src,v=ne)||e(p,"src",v),e(p,"class","w-100 svelte-176v2tb"),e(p,"alt",""),e(k,"class","phone-img w-100  svelte-176v2tb"),e($,"class","details mt-5 pt-4 svelte-176v2tb"),e(h,"class","wrapper d-flex flex-column w-100"),e(z,"class","col-md-7"),e(c,"class","row align-items-center"),e(d,"class","down-section-wrapper svelte-176v2tb"),e(t,"id","p2e"),e(t,"class","svelte-176v2tb")},m(T,A){q(T,t,A),a(t,r),a(r,l),a(l,i),a(t,g),a(t,d),a(d,c),a(c,b),a(b,f),a(f,s),a(c,w),a(c,z),a(z,h),a(h,k),a(k,p),a(h,j),a(h,$)},p:E,i:E,o:E,d(T){T&&N(t)}}}class de extends U{constructor(t){super(),R(this,t,null,le,H,{})}}function me(o){let t,r,l,i,m;return{c(){t=n("article"),r=n("div"),r.innerHTML='<h3 class="svelte-1fmqtss">Phase 1</h3>',l=x(),i=n("div"),i.innerHTML='<p class="svelte-1fmqtss">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptas molestiae itaque iste cupiditate libero, quae labore assumenda est porro!</p>',e(r,"class","card-header svelte-1fmqtss"),e(i,"class","card-body"),e(t,"class",m="roadmap-card "+(o[0].shadow?"shadow":o[0].outline?"outline":"pure")+" svelte-1fmqtss")},m(g,d){q(g,t,d),a(t,r),a(t,l),a(t,i)},p(g,[d]){d&1&&m!==(m="roadmap-card "+(g[0].shadow?"shadow":g[0].outline?"outline":"pure")+" svelte-1fmqtss")&&e(t,"class",m)},i:E,o:E,d(g){g&&N(t)}}}function se(o,t,r){let{conf:l={outline:!1,shadow:!1}}=t;return o.$$set=i=>{"conf"in i&&r(0,l=i.conf)},[l]}class pe extends U{constructor(t){super(),R(this,t,se,me,H,{conf:0})}}function ut(o,t,r){const l=o.slice();return l[1]=t[r],l}function xt(o){let t,r,l,i;return r=new pe({props:{conf:o[1]}}),{c(){t=n("div"),B(r.$$.fragment),l=x(),e(t,"class","col")},m(m,g){q(m,t,g),F(r,t,null),a(t,l),i=!0},p:E,i(m){i||(L(r.$$.fragment,m),i=!0)},o(m){C(r.$$.fragment,m),i=!1},d(m){m&&N(t),S(r)}}}function ce(o){let t,r,l,i,m,g,d=o[0],c=[];for(let f=0;f<d.length;f+=1)c[f]=xt(ut(o,d,f));const b=f=>C(c[f],1,1,()=>{c[f]=null});return{c(){t=n("section"),r=n("div"),r.innerHTML='<h1 class="display-1 fw-bold text-center text-white">Roadmap</h1>',l=x(),i=n("div"),m=n("div");for(let f=0;f<c.length;f+=1)c[f].c();e(r,"class","title py-5"),e(m,"class","row row-cols-1 row-cols-md-3 g-5"),e(i,"class","roadmap-content-wrapper p-5"),e(t,"id","roadmap"),e(t,"class","py-5")},m(f,s){q(f,t,s),a(t,r),a(t,l),a(t,i),a(i,m);for(let u=0;u<c.length;u+=1)c[u].m(m,null);g=!0},p(f,[s]){if(s&1){d=f[0];let u;for(u=0;u<d.length;u+=1){const w=ut(f,d,u);c[u]?(c[u].p(w,s),L(c[u],1)):(c[u]=xt(w),c[u].c(),L(c[u],1),c[u].m(m,null))}for(Ct(),u=d.length;u<c.length;u+=1)b(u);Ft()}},i(f){if(!g){for(let s=0;s<d.length;s+=1)L(c[s]);g=!0}},o(f){c=c.filter(Boolean);for(let s=0;s<c.length;s+=1)C(c[s]);g=!1},d(f){f&&N(t),_t(c,f)}}}function ge(o){return[[{shadow:!1,outline:!1},{shadow:!0,outline:!1},{shadow:!1,outline:!0}]]}class be extends U{constructor(t){super(),R(this,t,ge,ce,H,{})}}var fe="/assets/header-nft.b6953836.png",ue="/assets/header-mash-bg.744f8b3f.png",xe="/assets/header-cros.fe3dfd55.png",he="/assets/creazy-text.50ca1f90.png",ve="/assets/chain-text.805a82f9.png",we="/assets/header-ribon.92358ee3.png";function ke(o){let t,r,l,i,m,g,d,c,b,f,s,u,w,z,h,k,p,v,j,$,T,A,y,_;return{c(){t=n("header"),r=n("div"),l=n("img"),m=x(),g=n("div"),d=n("img"),b=x(),f=n("div"),s=n("img"),w=x(),z=n("div"),h=n("img"),p=x(),v=n("div"),j=n("img"),T=x(),A=n("div"),y=n("img"),e(l,"class","header-smoke svelte-51u90r"),M(l.src,i=ue)||e(l,"src",i),e(l,"alt","background"),M(d.src,c=fe)||e(d,"src",c),e(d,"alt",""),e(d,"class","svelte-51u90r"),e(g,"class","nft svelte-51u90r"),M(s.src,u=xe)||e(s,"src",u),e(s,"alt",""),e(s,"class","svelte-51u90r"),e(f,"class","cros svelte-51u90r"),M(h.src,k=he)||e(h,"src",k),e(h,"alt",""),e(h,"class","svelte-51u90r"),e(z,"class","creazy-text header-text svelte-51u90r"),M(j.src,$=ve)||e(j,"src",$),e(j,"alt",""),e(j,"class","svelte-51u90r"),e(v,"class","chain-text header-text  svelte-51u90r"),M(y.src,_=we)||e(y,"src",_),e(y,"alt",""),e(y,"class","svelte-51u90r"),e(A,"class","header-ribon svelte-51u90r"),e(r,"class","header-wrapper svelte-51u90r"),e(t,"id","top"),e(t,"class","svelte-51u90r")},m(O,I){q(O,t,I),a(t,r),a(r,l),a(r,m),a(r,g),a(g,d),a(r,b),a(r,f),a(f,s),a(r,w),a(r,z),a(z,h),a(r,p),a(r,v),a(v,j),a(r,T),a(r,A),a(A,y)},p:E,i:E,o:E,d(O){O&&N(t)}}}class ye extends U{constructor(t){super(),R(this,t,null,ke,H,{})}}var ze="/assets/utilities-character.7c898ac1.png",je="/assets/utilities-card-image.b6d7dc84.png";function _e(o){let t,r,l,i,m,g,d;return{c(){t=n("div"),r=n("div"),l=n("div"),i=n("img"),g=x(),d=n("div"),d.innerHTML=`<h2 class="text-white svelte-xfehtm">Utilies</h2> 
            <p class="text-green svelte-xfehtm">NFT collection packed with utilities NFT collection packed with utilities</p>`,e(i,"class"," svelte-xfehtm"),M(i.src,m=je)||e(i,"src",m),e(i,"alt",""),e(l,"class","image flex-shrink-0 me-5 svelte-xfehtm"),e(d,"class","details svelte-xfehtm"),e(r,"class","card-wrapper d-flex align-items-center"),e(t,"class","utilities-card  svelte-xfehtm")},m(c,b){q(c,t,b),a(t,r),a(r,l),a(l,i),a(r,g),a(r,d)},p:E,i:E,o:E,d(c){c&&N(t)}}}class lt extends U{constructor(t){super(),R(this,t,null,_e,H,{})}}var Ee="/assets/utility-section-ribon.de1753a2.png";function Me(o){let t,r,l,i,m,g,d,c,b,f,s,u,w,z,h,k,p,v,j,$,T,A,y;return d=new lt({}),b=new lt({}),s=new lt({}),w=new lt({}),{c(){t=n("section"),r=n("div"),r.innerHTML='<h1 class="svelte-1i7nmgj">Utilities</h1>',l=x(),i=n("div"),m=n("div"),g=n("div"),B(d.$$.fragment),c=x(),B(b.$$.fragment),f=x(),B(s.$$.fragment),u=x(),B(w.$$.fragment),z=x(),h=n("div"),k=n("div"),p=n("img"),j=x(),$=n("div"),T=n("img"),e(r,"class","title text-center"),e(g,"class","col-md-6 offset-1"),M(p.src,v=ze)||e(p,"src",v),e(p,"alt",""),e(p,"class","svelte-1i7nmgj"),e(k,"class","character-nft svelte-1i7nmgj"),e(h,"class","col-md-5 d-none d-md-block"),e(m,"class","row align-items-center"),M(T.src,A=Ee)||e(T,"src",A),e(T,"alt",""),e(T,"class","svelte-1i7nmgj"),e($,"class","section-ribon svelte-1i7nmgj"),e(i,"class","utilities-wrapper"),e(t,"id","utilites"),e(t,"class","svelte-1i7nmgj")},m(_,O){q(_,t,O),a(t,r),a(t,l),a(t,i),a(i,m),a(m,g),F(d,g,null),a(g,c),F(b,g,null),a(g,f),F(s,g,null),a(g,u),F(w,g,null),a(m,z),a(m,h),a(h,k),a(k,p),a(i,j),a(i,$),a($,T),y=!0},p:E,i(_){y||(L(d.$$.fragment,_),L(b.$$.fragment,_),L(s.$$.fragment,_),L(w.$$.fragment,_),y=!0)},o(_){C(d.$$.fragment,_),C(b.$$.fragment,_),C(s.$$.fragment,_),C(w.$$.fragment,_),y=!1},d(_){_&&N(t),S(d),S(b),S(s),S(w)}}}class $e extends U{constructor(t){super(),R(this,t,null,Me,H,{})}}function Te(o){let t,r,l,i,m,g,d,c,b,f,s,u,w,z,h,k;return t=new Ht({}),l=new ye({}),m=new Wt({}),d=new re({}),b=new $e({}),s=new de({}),w=new Pt({}),h=new be({}),{c(){B(t.$$.fragment),r=x(),B(l.$$.fragment),i=x(),B(m.$$.fragment),g=x(),B(d.$$.fragment),c=x(),B(b.$$.fragment),f=x(),B(s.$$.fragment),u=x(),B(w.$$.fragment),z=x(),B(h.$$.fragment)},m(p,v){F(t,p,v),q(p,r,v),F(l,p,v),q(p,i,v),F(m,p,v),q(p,g,v),F(d,p,v),q(p,c,v),F(b,p,v),q(p,f,v),F(s,p,v),q(p,u,v),F(w,p,v),q(p,z,v),F(h,p,v),k=!0},p:E,i(p){k||(L(t.$$.fragment,p),L(l.$$.fragment,p),L(m.$$.fragment,p),L(d.$$.fragment,p),L(b.$$.fragment,p),L(s.$$.fragment,p),L(w.$$.fragment,p),L(h.$$.fragment,p),k=!0)},o(p){C(t.$$.fragment,p),C(l.$$.fragment,p),C(m.$$.fragment,p),C(d.$$.fragment,p),C(b.$$.fragment,p),C(s.$$.fragment,p),C(w.$$.fragment,p),C(h.$$.fragment,p),k=!1},d(p){S(t,p),p&&N(r),S(l,p),p&&N(i),S(m,p),p&&N(g),S(d,p),p&&N(c),S(b,p),p&&N(f),S(s,p),p&&N(u),S(w,p),p&&N(z),S(h,p)}}}function Ne(o){return[]}class qe extends U{constructor(t){super(),R(this,t,Ne,Te,H,{})}}new qe({target:document.getElementById("app")});
