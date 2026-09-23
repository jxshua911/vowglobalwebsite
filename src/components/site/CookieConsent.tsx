import { useEffect, useState } from "react";

const KEY="vow-cookie-consent";
const setConsent=(v:string)=>{localStorage.setItem(KEY,v);document.cookie=`vow_cookie_consent=${v}; Max-Age=31536000; Path=/; SameSite=Lax`;};

export function CookieConsent(){
 const [choice,setChoice]=useState<"accepted"|"necessary"|null>(null);
 useEffect(()=>{const v=localStorage.getItem(KEY);if(v==="accepted"||v==="necessary")setChoice(v);},[]);
 if(choice)return null;
 const save=(v:"accepted"|"necessary")=>{setConsent(v);setChoice(v);};
 return <aside className="fixed inset-x-4 bottom-4 z-[80] mx-auto max-w-3xl border border-vow-border bg-vow-bg p-5 shadow-2xl sm:inset-x-auto sm:right-6 sm:left-auto">
  <p className="vow-label">Cookies</p><h2 className="mt-2 font-sans text-lg font-semibold tracking-tight">A small choice about cookies.</h2>
  <p className="mt-2 max-w-2xl text-sm leading-6 text-vow-muted">VOW uses necessary cookies to keep the site working. With your permission, analytics cookies help us understand anonymous site usage and improve the experience.</p>
  <div className="mt-4 flex flex-wrap gap-3"><button onClick={()=>save("accepted")} className="vow-btn-primary">Accept analytics</button><button onClick={()=>save("necessary")} className="vow-btn-ghost">Necessary only</button></div>
 </aside>;
}
