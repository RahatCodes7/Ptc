import{l as y,g,a as w}from"./i18n-rE1JQKOk.js";const h=n=>w(g(),n);let m=null;const k=`
.toast-host{position:fixed;right:24px;bottom:24px;z-index:99999;display:flex;flex-direction:column;gap:10px;pointer-events:none;}
.toast{pointer-events:auto;min-width:220px;max-width:360px;padding:13px 16px;border-radius:14px;font:500 14px/1.4 "Poppins",system-ui,sans-serif;color:#fff;background:#18181c;border:1px solid rgba(255,255,255,.1);box-shadow:0 18px 40px rgba(0,0,0,.5);opacity:0;transform:translateY(10px);transition:opacity .3s ease,transform .3s ease;}
.toast.show{opacity:1;transform:none;}
.toast-success{border-color:rgba(0,255,163,.4);box-shadow:0 18px 40px rgba(0,0,0,.5),0 0 0 1px rgba(0,255,163,.15);}
.toast-error{border-color:rgba(255,90,90,.45);}
.toast-info{border-color:rgba(242,56,180,.4);}

.fx-ovl{position:fixed;inset:0;z-index:100000;display:flex;align-items:center;justify-content:center;padding:20px;background:rgba(5,5,8,.62);-webkit-backdrop-filter:blur(7px);backdrop-filter:blur(7px);opacity:0;transition:opacity .25s ease;}
.fx-ovl.show{opacity:1;}
.fx-modal{width:100%;max-width:430px;border-radius:20px;padding:24px;background:linear-gradient(160deg,rgba(255,255,255,.06),rgba(255,255,255,.015)),rgba(16,16,22,.97);border:1px solid rgba(255,255,255,.12);box-shadow:0 44px 110px -30px rgba(0,0,0,.85),inset 0 1px 0 rgba(255,255,255,.12),0 0 70px -22px rgba(253,0,244,.35);transform:translateY(16px) scale(.98);opacity:0;transition:transform .32s cubic-bezier(.16,1,.3,1),opacity .32s;}
.fx-ovl.show .fx-modal{transform:none;opacity:1;}
.fx-modal-head{display:flex;align-items:center;gap:13px;}
.fx-modal-ic{width:42px;height:42px;border-radius:12px;display:flex;align-items:center;justify-content:center;flex:0 0 auto;background:rgba(253,0,244,.14);color:#ff7ad6;box-shadow:inset 0 0 0 1px rgba(253,0,244,.25);}
.fx-modal-ic svg{width:20px;height:20px;}
.fx-modal h3{font:600 19px/1.2 "Poppins",system-ui,sans-serif;color:#fff;}
.fx-modal-sub{font:400 14px/1.45 "Poppins",system-ui,sans-serif;color:rgba(255,255,255,.55);margin:12px 0 16px;overflow-wrap:anywhere;}
.fx-modal-input{width:100%;padding:14px 16px;border-radius:12px;font:500 16px "Poppins",system-ui,sans-serif;color:#fff;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.14);outline:none;transition:border-color .2s,box-shadow .2s;letter-spacing:.01em;}
.fx-modal-input::placeholder{color:rgba(255,255,255,.32);}
.fx-modal-input:focus{border-color:rgba(253,0,244,.6);box-shadow:0 0 0 3px rgba(253,0,244,.16);}
.fx-modal-actions{display:flex;gap:10px;margin-top:18px;}
.fx-modal-actions button{flex:1;padding:12px;border-radius:12px;font:500 15px "Poppins",system-ui,sans-serif;cursor:pointer;transition:transform .2s,filter .2s,background .2s,border-color .2s;}
.fx-modal-cancel{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);color:#fff;}
.fx-modal-cancel:hover{background:rgba(255,255,255,.1);}
.fx-modal-ok{background:linear-gradient(180deg,#ff37f6,#d400d0);color:#fff;box-shadow:0 10px 26px -8px rgba(253,0,244,.6);}
.fx-modal-ok:hover{transform:translateY(-1px);filter:brightness(1.06);}
.fx-code-modal{position:relative;max-width:400px;padding:22px;border-radius:24px;background:#100e18;border:1px solid rgba(255,255,255,.09);box-shadow:0 24px 70px rgba(0,0,0,.45);}
.fx-code-modal .fx-modal-head{gap:10px;padding-right:28px;}
.fx-code-modal .fx-modal-ic{width:34px;height:34px;border-radius:10px;background:rgba(253,0,244,.08);box-shadow:none;color:#f58ce3;}
.fx-code-modal h3{font:600 18px/1.3 var(--sans,system-ui,sans-serif);}
.fx-code-modal .fx-modal-sub{font:400 13px/1.55 var(--sans,system-ui,sans-serif);margin:14px 0 18px;color:rgba(255,255,255,.5);}
.fx-code-modal .fx-modal-input{padding:12px 14px;border-radius:12px;font:400 16px/1.4 var(--sans,system-ui,sans-serif);background:rgba(255,255,255,.025);border-color:rgba(255,255,255,.12);letter-spacing:0;}
.fx-code-modal .fx-modal-input:focus{border-color:rgba(253,0,244,.5);box-shadow:none;}
.fx-code-modal .fx-modal-actions{gap:10px;margin-top:20px;}
.fx-code-modal .fx-modal-actions button{min-height:42px;padding:10px 16px;border-radius:64px;font:500 14px/1.4 var(--sans,system-ui,sans-serif);}
.fx-code-modal .fx-modal-cancel{background:transparent;border-color:rgba(255,255,255,.12);color:rgba(255,255,255,.7);}
.fx-code-modal .fx-modal-cancel:hover{background:rgba(255,255,255,.04);}
.fx-code-modal .fx-modal-ok{background:#FD00F4;border:0;box-shadow:none;}
.fx-modal-close{position:absolute;top:18px;right:16px;display:grid;place-items:center;width:28px;height:28px;padding:0;border:0;border-radius:50%;background:transparent;color:rgba(255,255,255,.5);cursor:pointer;}
.fx-modal-close svg{width:16px;height:16px;}.fx-modal-close:hover{color:#fff;background:rgba(255,255,255,.05);}
@media(max-width:460px){.fx-code-modal{padding:20px;}}

.fx-pop{position:absolute;z-index:100001;min-width:170px;padding:6px;border-radius:14px;background:linear-gradient(160deg,rgba(255,255,255,.06),rgba(255,255,255,.02)),rgba(14,14,19,.98);border:1px solid rgba(255,255,255,.12);box-shadow:0 26px 60px -24px rgba(0,0,0,.8);opacity:0;transform:translateY(-6px) scale(.98);transform-origin:top;transition:opacity .18s ease,transform .18s ease;}
.fx-pop.show{opacity:1;transform:none;}
.fx-pop button{display:flex;align-items:center;gap:10px;width:100%;padding:10px 12px;border-radius:10px;font:500 15px "Poppins",system-ui,sans-serif;color:rgba(255,255,255,.75);cursor:pointer;transition:background .15s,color .15s;}
.fx-pop button:hover,.fx-pop button.active{background:rgba(255,255,255,.07);color:#fff;}
.fx-pop button .ic{width:22px;height:22px;border-radius:50%;flex:0 0 auto;overflow:hidden;display:flex;}
.fx-pop button .ic svg,.fx-pop button .ic img{width:22px;height:22px;}
.wallet-menu{width:300px;max-width:calc(100vw - 24px);box-sizing:border-box;padding:8px;border-radius:18px;background:linear-gradient(145deg,#202027,#101016);}
.wallet-menu-row{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:12px 10px;}
.wallet-menu-row+.wallet-menu-row{border-top:1px solid rgba(255,255,255,.07);}
.wallet-menu-network{display:flex;align-items:center;gap:7px;color:#fff;font-size:13px;font-weight:600;}
.wallet-menu-network:before{content:'';width:6px;height:6px;border-radius:50%;background:#20e5aa;box-shadow:0 0 8px #20e5aa44;}
.wallet-menu-address{display:block;margin-top:5px;font-size:12px;line-height:1.4;color:rgba(255,255,255,.6);white-space:nowrap;}
.wallet-menu button{width:auto;flex:none;justify-content:center;padding:8px 10px;font-size:12px;border:1px solid rgba(255,110,215,.18);background:rgba(255,90,209,.07);color:#ff8edc;border-radius:9px;}
.wallet-menu button:hover{border-color:rgba(255,110,215,.4);background:rgba(255,90,209,.14);color:#ffb4e8;}
.wallet-menu button:disabled{opacity:.5;cursor:wait;}
.wallet-menu button.wallet-menu-disconnect{width:100%;margin-top:8px;padding:12px;font-size:13px;box-sizing:border-box;}
`;function f(){if(!document.getElementById("fundera-ui-css")){const n=document.createElement("style");n.id="fundera-ui-css",n.textContent=k,document.head.appendChild(n)}return m||(m=document.createElement("div"),m.className="toast-host",document.body.appendChild(m)),m}function u(n,i="info"){const e=document.createElement("div");e.className=`toast toast-${i}`,e.textContent=y(n,g()),f().appendChild(e),e.offsetWidth,e.classList.add("show"),setTimeout(()=>{e.classList.remove("show"),setTimeout(()=>e.remove(),300)},2600)}async function L(n,i="Copied to clipboard"){try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(n);else{const e=document.createElement("textarea");e.value=n,e.style.cssText="position:fixed;opacity:0",document.body.appendChild(e),e.select(),document.execCommand("copy"),e.remove()}return u(i,"success"),!0}catch{return u("Could not copy — copy it manually","error"),!1}}function E({title:n="Enter value",subtitle:i="",placeholder:e="",value:l="",confirmText:a="Apply",icon:r="",appearance:o=""}={}){return f(),new Promise(d=>{const t=document.createElement("div");t.className="fx-ovl",t.innerHTML=`
      <div class="fx-modal${o==="code"?" fx-code-modal":""}" role="dialog" aria-modal="true">
        ${o==="code"?'<button class="fx-modal-close" type="button" aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m6 6 12 12M18 6 6 18"/></svg></button>':""}
        <div class="fx-modal-head">
          ${r?`<span class="fx-modal-ic">${r}</span>`:""}
          <h3>${n}</h3>
        </div>
        ${i?`<p class="fx-modal-sub">${i}</p>`:'<div style="height:14px"></div>'}
        <input class="fx-modal-input" placeholder="${e}" />
        <div class="fx-modal-actions">
          <button class="fx-modal-cancel" type="button">Cancel</button>
          <button class="fx-modal-ok" type="button">${a}</button>
        </div>
      </div>`,document.body.appendChild(t),h(t);const s=t.querySelector(".fx-modal-input");s.value=l,requestAnimationFrame(()=>{t.classList.add("show"),s.focus(),s.select()});let b=!1;const x=c=>{b||(b=!0,t.classList.remove("show"),setTimeout(()=>t.remove(),260),d(c))};t.querySelector(".fx-modal-ok").onclick=()=>x(s.value.trim()||null),t.querySelector(".fx-modal-cancel").onclick=()=>x(null);const p=t.querySelector(".fx-modal-close");p&&(p.onclick=()=>x(null)),t.addEventListener("mousedown",c=>{c.target===t&&x(null)}),s.addEventListener("keydown",c=>{c.key==="Enter"?x(s.value.trim()||null):c.key==="Escape"&&x(null)})})}function $({title:n="Confirm",subtitle:i="Are you sure?",confirmText:e="OK",icon:l=""}={}){return f(),new Promise(a=>{const r=document.createElement("div");r.className="fx-ovl",r.innerHTML=`
      <div class="fx-modal" role="dialog" aria-modal="true">
        <div class="fx-modal-head">
          ${l?`<span class="fx-modal-ic">${l}</span>`:""}
          <h3>${n}</h3>
        </div>
        ${i?`<p class="fx-modal-sub">${i}</p>`:'<div style="height:14px"></div>'}
        <div class="fx-modal-actions">
          <button class="fx-modal-cancel" type="button">Cancel</button>
          <button class="fx-modal-ok" type="button">${e}</button>
        </div>
      </div>`,document.body.appendChild(r),h(r),requestAnimationFrame(()=>{r.classList.add("show")});let o=!1;const d=t=>{o||(o=!0,r.classList.remove("show"),setTimeout(()=>r.remove(),260),a(t))};r.querySelector(".fx-modal-ok").onclick=()=>d(!0),r.querySelector(".fx-modal-cancel").onclick=()=>d(!1),r.addEventListener("mousedown",t=>{t.target===r&&d(!1)})})}function T(n,i=[],e=""){return f(),new Promise(l=>{const a=document.createElement("div");a.className=`fx-pop ${e}`,a.innerHTML=i.map(s=>`<button type="button" data-v="${s.value}" class="${s.active?"active":""}">${s.icon?`<span class="ic">${s.icon}</span>`:""}<span>${s.label}</span></button>`).join(""),document.body.appendChild(a),h(a);const r=n.getBoundingClientRect();a.style.left=Math.round(Math.max(12,Math.min(r.left,window.innerWidth-a.offsetWidth-12))+window.scrollX)+"px",a.style.top=Math.round(r.bottom+window.scrollY+8)+"px",requestAnimationFrame(()=>a.classList.add("show"));let o=!1;const d=s=>{o||(o=!0,a.classList.remove("show"),setTimeout(()=>a.remove(),200),document.removeEventListener("mousedown",t,!0),l(s))},t=s=>{!a.contains(s.target)&&s.target!==n&&d(null)};a.querySelectorAll("button").forEach(s=>s.onclick=()=>d(s.dataset.v)),setTimeout(()=>document.addEventListener("mousedown",t,!0),0)})}async function S(n,i){f();const e=["eip155","solana","tron"].map(r=>({namespace:r,address:i.getAddress(r)})).filter(r=>r.address);if(!e.length)return;const l=y("Disconnect",g()),a=r=>String(r).replace(/[&<>"']/g,o=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[o]);return new Promise(r=>{const o=document.createElement("div");o.className="fx-pop wallet-menu",o.setAttribute("role","dialog"),o.setAttribute("aria-label",y("Disconnect Wallet",g())),o.innerHTML=e.map(({namespace:p,address:c})=>`<div class="wallet-menu-row"><div><span class="wallet-menu-network">${p==="eip155"?"EVM":p==="tron"?"TRON":"SOL"}</span><span class="wallet-menu-address" translate="no" title="${a(c)}">${a(c.slice(0,6))}…${a(c.slice(-4))}</span></div></div>`).join("")+`<button type="button" class="wallet-menu-disconnect" data-v="all">${a(l)}</button>`,document.body.appendChild(o);const d=n.getBoundingClientRect();o.style.left=Math.round(Math.max(12,Math.min(d.right-o.offsetWidth,innerWidth-o.offsetWidth-12))+scrollX)+"px",o.style.top=Math.round(d.bottom+scrollY+8)+"px",requestAnimationFrame(()=>o.classList.add("show"));let t=!1;const s=()=>{t||(t=!0,document.removeEventListener("pointerdown",b,!0),document.removeEventListener("keydown",x),o.remove(),r())},b=p=>{!o.contains(p.target)&&!n.contains(p.target)&&s()},x=p=>{p.key==="Escape"&&(s(),n.focus())};document.addEventListener("pointerdown",b,!0),document.addEventListener("keydown",x),o.querySelectorAll("button").forEach(p=>p.onclick=async()=>{o.querySelectorAll("button").forEach(c=>c.disabled=!0);try{await i.disconnect(p.dataset.v),u("Wallet disconnected","success"),s()}catch(c){u(c.message||"Connection failed","error"),o.querySelectorAll("button").forEach(v=>v.disabled=!1)}})})}function q({address:n}){return f(),new Promise(i=>{const e=document.createElement("div");e.className="fx-ovl",e.innerHTML=`
      <div class="fx-modal" role="dialog" aria-modal="true" style="text-align:center; max-width:440px; width:100%; position:relative; z-index:100001;">
        <div class="fx-modal-head" style="justify-content:center; margin-bottom:16px;">
          <h3 style="font-size:22px; margin:0;">Bitcoin Deposit</h3>
        </div>
        <p style="color:rgba(245,245,247,0.7); font-size:14px; line-height:1.6; margin:0 0 24px;">
          Send the desired amount of BTC to the address below. Once sent, paste your <strong style="color:#fff;">Transaction Hash (TxID)</strong> to verify.
        </p>
        <div style="background:#fff; padding:10px; border-radius:16px; display:inline-block; margin-bottom:24px; box-shadow:0 4px 20px rgba(0,0,0,0.2);">
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=bitcoin:${n}" style="display:block; width:160px; height:160px; border-radius:8px;" alt="QR" />
        </div>
        <div id="btc-copy-wrap" style="margin-bottom:24px; cursor:pointer; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.12); padding:12px 16px; border-radius:14px; transition:background .2s;">
          <div style="font-family:monospace; font-size:12px; color:#fff; word-break:break-all; line-height:1.5; margin-bottom:6px; pointer-events:none;">${n}</div>
          <div style="font-size:12px; color:#FD00F4; pointer-events:none;">📋 Click to copy address</div>
        </div>
        <div style="text-align:left; margin-bottom:24px;">
          <label style="display:block; font-size:13px; color:rgba(245,245,247,0.65); margin-bottom:8px; font-weight:500;">Transaction Hash (TxID)</label>
          <input type="text" id="btc-txhash-inp" autocomplete="off" placeholder="Paste your TxHash here..." style="width:100%; box-sizing:border-box; padding:13px 16px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.18); border-radius:12px; color:#fff; font-size:14px; font-family:inherit; outline:none; transition:border-color .2s, box-shadow .2s;" />
        </div>
        <div style="display:flex; gap:12px;">
          <button id="btc-close" style="flex:1; padding:13px 0; border-radius:14px; font:500 15px 'Poppins',system-ui,sans-serif; cursor:pointer; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.14); color:#fff; transition:background .2s, transform .15s;">Cancel</button>
          <button id="btc-verify" style="flex:1; padding:13px 0; border-radius:14px; font:500 15px 'Poppins',system-ui,sans-serif; cursor:pointer; background:linear-gradient(180deg,#ff37f6,#c900c9); border:none; color:#fff; box-shadow:0 8px 24px -8px rgba(253,0,244,0.6); transition:transform .15s, filter .2s;">Verify Payment</button>
        </div>
      </div>
    `,document.body.appendChild(e),h(e),e.offsetWidth,e.classList.add("show");const l=e.querySelector("#btc-close"),a=e.querySelector("#btc-verify"),r=e.querySelector("#btc-copy-wrap"),o=e.querySelector("#btc-txhash-inp"),d=(t=null)=>{e.classList.remove("show"),setTimeout(()=>e.remove(),300),i(t)};l.onmouseenter=()=>{l.style.background="rgba(255,255,255,0.11)"},l.onmouseleave=()=>{l.style.background="rgba(255,255,255,0.06)"},a.onmouseenter=()=>{a.style.transform="translateY(-1px)",a.style.filter="brightness(1.1)"},a.onmouseleave=()=>{a.style.transform="",a.style.filter=""},o.onfocus=()=>{o.style.borderColor="rgba(253,0,244,0.6)",o.style.boxShadow="0 0 0 3px rgba(253,0,244,0.16)"},o.onblur=()=>{o.style.borderColor="rgba(255,255,255,0.18)",o.style.boxShadow=""},e.addEventListener("click",t=>{t.target===e&&d(null)}),l.addEventListener("click",()=>d(null)),r.addEventListener("click",()=>{if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(n).then(()=>u("Address copied","success")).catch(()=>{});else{const t=document.createElement("textarea");t.value=n,t.style.cssText="position:fixed;opacity:0",document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove(),u("Address copied","success")}}),a.addEventListener("click",()=>{const t=o.value.trim();if(!t){u("Please enter your transaction hash","error"),o.style.borderColor="rgba(255,90,90,0.6)",o.style.boxShadow="0 0 0 3px rgba(255,90,90,0.16)",o.focus();return}d(t)})})}export{q as btcCheckoutModal,$ as confirmModal,L as copyText,E as inputModal,T as popoverMenu,u as toast,S as walletMenu};
