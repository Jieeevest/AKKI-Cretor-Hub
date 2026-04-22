import Link from 'next/link';
import { 
  HeartHandshake, 
  LayoutDashboard, 
  Users, 
  FolderOpen, 
  Settings, 
  LogOut,
  Menu
} from 'lucide-react';
import UserDropdown from '../../components/UserDropdown';

export default function CMSLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full flex flex-col md:flex-row overflow-hidden font-sans bg-slate-50 text-slate-900">
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b border-slate-200 p-4 flex items-center justify-between shrink-0 sticky top-0 z-20">
         <div className="flex items-center gap-2 font-bold text-xl">
             AKKI CreatorHub
         </div>
         <button className="p-2 text-slate-600">
            <Menu className="w-6 h-6" />
         </button>
      </div>

      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col h-full shrink-0">
        <div className="h-20 flex items-center px-6 shrink-0">
           <Link href="/" className="flex items-center gap-3">
             <div className="w-8 h-8 bg-[#960022] rounded flex items-center justify-center text-white shrink-0">
               <span className="font-bold text-lg leading-none">A</span>
             </div>
             <span className="font-bold text-xl tracking-tight text-slate-900">AKKI <span className="font-light opacity-60">Hub</span></span>
           </Link>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-1 hide-scrollbar">
          <p className="px-3 text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-3 mt-2">Internal Tools</p>
          
          <Link href="/cms" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#960022]/10 text-[#960022] font-bold text-sm transition-colors">
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </Link>
          
          <Link href="/cms/creators" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium text-sm transition-colors">
            <Users className="w-5 h-5" />
            Data Creators
          </Link>
          
          <Link href="/cms/categories" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium text-sm transition-colors">
            <FolderOpen className="w-5 h-5" />
            Categories
          </Link>

          <Link href="/cms/campaigns" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium text-sm transition-colors">
            <HeartHandshake className="w-5 h-5" />
            Campaigns
          </Link>

          <div className="mt-8">
             <p className="px-3 text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-3">Settings</p>
             <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium text-sm transition-colors">
               <Settings className="w-5 h-5" />
               Platform Config
             </Link>
          </div>
        </div>

        <div className="p-4 border-t border-slate-200 shrink-0">
           <Link href="/login" className="flex items-center justify-center w-full gap-3 px-4 py-3 rounded-lg text-slate-500 hover:text-red-600 hover:bg-red-50 font-medium transition-colors text-sm">
               <LogOut className="w-5 h-5 flex-shrink-0" />
               Keluar
           </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full min-w-0 bg-slate-50/50">
         <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0 hidden md:flex sticky top-0 z-10 w-full">
             <h1 className="text-sm uppercase tracking-widest font-bold flex items-center gap-3 text-slate-700">
                <LayoutDashboard className="w-5 h-5 text-slate-400" /> CMS Panel
             </h1>
             
             <div className="flex items-center gap-6">
                <div className="flex gap-2 items-center px-4">
                  <span className="bg-green-500 w-2.5 h-2.5 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.4)]"></span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">System Online</span>
                </div>
                
                <div className="w-[1px] h-8 bg-slate-200"></div>
                
                <UserDropdown 
                  user={{
                    name: "Sarah Jenkins",
                    role: "Admin",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
                  }} 
                  type="cms" 
                />
             </div>
         </header>
         
         <div className="flex-1 overflow-y-auto w-full hide-scrollbar p-6 lg:p-8">
           {children}
         </div>
      </main>
    </div>
  );
}
