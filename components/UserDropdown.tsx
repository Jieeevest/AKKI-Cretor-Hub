"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Megaphone, Send, User, LogOut, LayoutDashboard } from "lucide-react";

export default function UserDropdown({ user, type = "public" }: { user: any, type?: "public" | "cms" }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const publicMenu = [
    { label: "Daftar Campaign", icon: Megaphone, href: "#" },
    { label: "Request Rate Card", icon: Send, href: "#" },
    { label: "Profil Saya", icon: User, href: "#" },
  ];

  const cmsMenu = [
    { label: "Profil Admin", icon: User, href: "#" },
    { label: "Portal Publik", icon: LayoutDashboard, href: "/" },
  ];

  const menu = type === "public" ? publicMenu : cmsMenu;

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger */}
      <div 
        className="flex items-center gap-3 cursor-pointer group"
        onClick={() => setIsOpen(!isOpen)}
      >
         <div className="text-right hidden sm:block">
           <p className="text-[10px] opacity-60 uppercase tracking-widest text-slate-500 font-bold">{user.role}</p>
           <div className="flex items-center gap-2 justify-end">
             <p className="text-sm font-semibold text-slate-600 uppercase tracking-wide group-hover:text-[#960022] transition-colors whitespace-nowrap">{user.name}</p>
             <ChevronDown className={`w-4 h-4 text-slate-400 group-hover:text-[#960022] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
           </div>
         </div>
         <div className="w-10 h-10 rounded-full border-2 border-slate-200 overflow-hidden shadow-sm shrink-0">
            <Image src={user.avatar} alt="User Authed" width={40} height={40} className="w-full h-full object-cover" unoptimized />
         </div>
      </div>
      
      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-5 w-56 bg-white rounded-xl shadow-[0_4px_24px_-8px_rgba(0,0,0,0.15)] border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
           {/* Arrow pointer */}
           <div className="absolute -top-1.5 right-6 w-3 h-3 bg-white border-t border-l border-slate-200 rotate-45"></div>
           
           <div className="relative bg-white z-10 flex flex-col">
             {menu.map((item, idx) => (
               <Link 
                 key={idx} 
                 href={item.href}
                 className="flex items-center gap-4 px-5 py-3 text-sm font-medium text-[#334155] hover:text-[#960022] hover:bg-slate-50 transition-colors"
                 onClick={() => setIsOpen(false)}
               >
                 <item.icon className="w-4 h-4 text-slate-500" />
                 {item.label}
               </Link>
             ))}
             
             <div className="h-[1px] bg-slate-100 w-full my-2"></div>
             
             <Link 
               href="/login"
               className="flex items-center gap-4 px-5 py-2.5 text-sm font-medium text-[#334155] hover:text-red-600 hover:bg-red-50 transition-colors"
               onClick={() => setIsOpen(false)}
             >
               <LogOut className="w-4 h-4 text-slate-500" />
               Keluar
             </Link>
           </div>
        </div>
      )}
    </div>
  );
}
