'use client';
import Shell from '@/components/Shell';
import {useEffect,useState} from 'react';
export default function Billing(){
 const [plan,setPlan]=useState('pro'); const plans:any={starter:['Starter','29 ريال شهرياً',2900],pro:['Pro','59 ريال شهرياً',5900],business:['Business','99 ريال شهرياً',9900]};
 useEffect(()=>{const css=document.createElement('link');css.rel='stylesheet';css.href='https://cdn.moyasar.com/mpf/1.14.0/moyasar.css';document.head.appendChild(css);const s=document.createElement('script');s.src='https://cdn.moyasar.com/mpf/1.14.0/moyasar.js';document.body.appendChild(s)},[]);
 return <Shell><div className="card"><h1>الباقات والدفع</h1><div className="kpis">{Object.keys(plans).map(k=><div className="card" onClick={()=>setPlan(k)} style={{border:plan==k?'2px solid #0E9AAF':''}}><h2>{plans[k][0]}</h2><div className="kpi-num">{plans[k][1]}</div><p>✓ إدارة الحجوزات<br/>✓ صفحة حجز<br/>✓ دعم الدفع</p></div>)}</div><div className="notice">ضع مفاتيح Moyasar في Vercel لتفعيل نموذج الدفع مباشرة.</div><div className="mysr-form"></div></div></Shell>
}
