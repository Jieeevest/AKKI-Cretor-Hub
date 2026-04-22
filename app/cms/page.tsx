import { Users, TrendingUp, Download, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function CMSDashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900">Dashboard Overview</h2>
          <p className="text-[10px] uppercase tracking-widest text-slate-500 mt-2 font-bold">Welcome back, here's what's happening today.</p>
        </div>
        <button className="glass px-6 py-3 rounded-full text-[10px] uppercase font-bold tracking-widest hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 border-slate-200 text-slate-700 shadow-sm">
           <Download className="w-4 h-4" />
           Export Report
        </button>
      </div>

      {/* STATS CARDS */}
      <div className="bg-white rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-around gap-6 sm:gap-0 mt-2 border border-slate-200 shadow-sm">
        <div className="text-center w-full sm:w-auto">
          <p className="text-4xl font-extrabold text-[#960022]">2,481</p>
          <p className="text-[10px] uppercase text-slate-500 tracking-widest mt-1 font-bold">Total Creators</p>
        </div>
        <div className="w-full h-[1px] sm:w-[1px] sm:h-16 bg-slate-200"></div>
        <div className="text-center w-full sm:w-auto">
          <p className="text-4xl font-extrabold text-slate-800">342</p>
          <p className="text-[10px] uppercase text-slate-500 tracking-widest mt-1 font-bold">Active Campaigns</p>
        </div>
        <div className="w-full h-[1px] sm:w-[1px] sm:h-16 bg-slate-200"></div>
        <div className="text-center w-full sm:w-auto">
          <p className="text-4xl font-extrabold text-slate-800">124k</p>
          <p className="text-[10px] uppercase text-slate-500 tracking-widest mt-1 font-bold">Platform Visits</p>
        </div>
        <div className="w-full h-[1px] sm:w-[1px] sm:h-16 bg-slate-200"></div>
        <div className="text-center w-full sm:w-auto">
          <p className="text-4xl font-extrabold text-green-600">Rp4.2B</p>
          <p className="text-[10px] uppercase text-slate-500 tracking-widest mt-1 font-bold">Transactions</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-2">
        {/* RECENT ADDED CREATORS */}
        <div className="bg-white border border-slate-200 shadow-sm rounded-2xl overflow-hidden lg:col-span-2 flex flex-col">
           <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-sm uppercase tracking-widest font-bold text-slate-800">Recently Added</h3>
              <Link href="/cms/creators" className="text-[10px] font-bold text-[#960022] hover:underline uppercase tracking-widest">View All</Link>
           </div>
           <div className="overflow-x-auto">
             <table className="w-full text-left text-sm">
               <thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-500 border-b border-slate-100">
                 <tr>
                   <th className="p-4 px-6 font-bold">Creator Name</th>
                   <th className="p-4 px-6 font-bold">Category</th>
                   <th className="p-4 px-6 font-bold">Platform</th>
                   <th className="p-4 px-6 text-right font-bold">Status</th>
                 </tr>
               </thead>
               <tbody className="text-slate-700 font-medium">
                 {[
                   { name: "John Doe", cat: "Lifestyle", plat: "TikTok", status: "Live" },
                   { name: "Siti Nur", cat: "Beauty", plat: "Instagram", status: "Live" },
                   { name: "Budi Santoso", cat: "Automotive", plat: "YouTube", status: "Draft" },
                   { name: "Anita K.", cat: "Chef", plat: "TikTok", status: "Queued" },
                 ].map((c, i) => (
                   <tr key={i} className="border-b border-slate-100 hover:bg-slate-50/80 transition-colors">
                     <td className="p-4 px-6 font-bold text-slate-900">{c.name}</td>
                     <td className="p-4 px-6 text-slate-500">{c.cat}</td>
                     <td className="p-4 px-6 text-slate-500">{c.plat}</td>
                     <td className="p-4 px-6 text-right">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] uppercase font-bold tracking-wider ${
                           c.status === 'Live' ? 'bg-green-100 text-green-700' : 
                           c.status === 'Draft' ? 'bg-orange-100 text-orange-700' : 
                           'bg-blue-100 text-blue-700'
                        }`}>
                           {c.status === 'Live' && <CheckCircle2 className="w-3 h-3" />}
                           {c.status === 'Draft' && <AlertCircle className="w-3 h-3" />}
                           {c.status === 'Queued' && <Clock className="w-3 h-3" />}
                           {c.status}
                        </span>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
        </div>

        {/* QUICK ACTIONS */}
        <div className="bg-white rounded-2xl flex flex-col p-6 gap-4 border border-slate-200 shadow-sm">
           <h3 className="text-sm uppercase tracking-widest font-bold mb-2 text-slate-800">Quick Actions</h3>
           
           <Link href="/cms/creators" className="bg-white border border-slate-100 p-4 rounded-2xl flex items-center gap-4 hover:border-[#960022]/30 hover:bg-red-50 transition-colors group shadow-sm">
             <div className="p-3 bg-slate-100 text-slate-500 rounded-xl group-hover:bg-[#960022] group-hover:text-white transition-colors">
               <Users className="w-5 h-5" />
             </div>
             <div>
               <p className="text-[10px] font-bold uppercase tracking-widest mb-1 text-slate-900 group-hover:text-[#960022]">Add Creator</p>
               <p className="text-sm text-slate-500 font-medium">Manually onboard talent</p>
             </div>
           </Link>
           
           <button className="bg-white border border-slate-100 p-4 rounded-2xl flex items-center gap-4 hover:border-[#960022]/30 hover:bg-red-50 transition-colors group text-left w-full shadow-sm">
             <div className="p-3 bg-slate-100 text-slate-500 rounded-xl group-hover:bg-[#960022] group-hover:text-white transition-colors">
               <TrendingUp className="w-5 h-5" />
             </div>
             <div>
               <p className="text-[10px] font-bold uppercase tracking-widest mb-1 text-slate-900 group-hover:text-[#960022]">New Campaign</p>
               <p className="text-sm text-slate-500 font-medium">Start a new brand deal</p>
             </div>
           </button>
           
           <div className="flex-1 min-h-[2rem]"></div>
           
           <div className="p-4 rounded-2xl bg-white border border-slate-100 flex items-center gap-3 shadow-sm">
             <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.5)]"></div>
             <p className="text-[10px] uppercase tracking-widest text-slate-600 font-bold">Systems Nominal</p>
           </div>
        </div>
      </div>
    </div>
  );
}
