"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff, Lock, Mail, ArrowRight, ShieldCheck, UserCheck, Star } from "lucide-react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
       if (email.includes("admin")) {
          router.push("/cms");
       } else {
          router.push("/");
       }
    }, 1200);
  };

  const setDummy = (type: "admin" | "brand" | "creator") => {
    setPassword("password123");
    if (type === "admin") setEmail("admin@akki.id");
    if (type === "brand") setEmail("marketing@brand.com");
    if (type === "creator") setEmail("hello@creator.com");
  };

  return (
     <div className="min-h-screen flex items-center justify-center bg-[#fcfcfc] p-4 relative overflow-hidden font-sans">
        {/* Background elements */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#960022]/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-slate-200/50 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-4xl w-full grid md:grid-cols-2 gap-0 glass rounded-[2.5rem] shadow-2xl border border-slate-200/60 overflow-hidden relative z-10">
           
           {/* Left Side: Login Form */}
           <div className="p-8 md:p-12 flex flex-col justify-center bg-white/70">
              <div className="mb-10">
                 <Link href="/" className="inline-flex items-center gap-2 mb-8">
                    <div className="w-8 h-8 bg-[#960022] rounded flex items-center justify-center text-white shrink-0 shadow-sm shadow-red-900/20">
                      <span className="font-bold text-lg leading-none">A</span>
                    </div>
                    <span className="font-bold text-xl tracking-tight text-slate-900">AKKI <span className="font-light opacity-60">CreatorHub</span></span>
                 </Link>
                 <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Selamat Datang Masuk!</h1>
                 <p className="text-slate-500 font-medium text-sm">Masuk untuk mengelola campaign, mencari creator, atau memantau panel CMS Anda.</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                   <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-2">Email Address</label>
                   <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#960022]/20 focus:border-[#960022] transition-all text-slate-900 placeholder-slate-400 font-medium shadow-sm"
                        placeholder="nama@email.com"
                      />
                   </div>
                </div>
                <div>
                   <div className="flex items-center justify-between mb-2">
                     <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-500">Password</label>
                     <Link href="#" className="text-[10px] uppercase font-bold text-[#960022] hover:underline">Lupa Password?</Link>
                   </div>
                   <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input 
                        type={showPassword ? "text" : "password"} 
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-12 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#960022]/20 focus:border-[#960022] transition-all text-slate-900 font-medium shadow-sm"
                        placeholder="••••••••"
                      />
                      <button 
                        type="button" 
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                         {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                   </div>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-[#960022] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-lg shadow-red-900/20 transition-transform active:scale-95 disabled:opacity-70 mt-6"
                >
                  {isLoading ? "Memverifikasi..." : "Masuk Ke Dashboard"} {!isLoading && <ArrowRight className="w-4 h-4 ml-1" />}
                </button>
              </form>
           </div>

           {/* Right Side: Dummy Credentials Info */}
           <div className="bg-slate-50 p-8 md:p-12 flex flex-col justify-center border-l border-slate-200/60 z-0">
              <div className="mb-8">
                 <h3 className="text-sm uppercase tracking-widest font-extrabold text-slate-900 mb-2">Simulasi Akses (Testing)</h3>
                 <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    Gunakan tombol di bawah ini untuk mengisi kredensial dummy secara otomatis ke dalam form, kemudian klik Masuk.
                 </p>
              </div>
              
              <div className="space-y-4">
                 <button 
                    onClick={() => setDummy("admin")}
                    className="w-full flex items-center p-4 bg-white border border-slate-200 rounded-2xl hover:border-blue-400 hover:shadow-md transition-all text-left group"
                 >
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors shrink-0">
                       <ShieldCheck className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                       <p className="font-bold text-slate-900 text-sm group-hover:text-blue-700 transition-colors">Admin AKKI Server</p>
                       <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mt-0.5">Akses ke Dashboard CMS</p>
                    </div>
                 </button>
                 
                 <button 
                    onClick={() => setDummy("brand")}
                    className="w-full flex items-center p-4 bg-white border border-slate-200 rounded-2xl hover:border-orange-400 hover:shadow-md transition-all text-left group"
                 >
                    <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center mr-4 group-hover:bg-orange-500 transition-colors shrink-0">
                       <Star className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                       <p className="font-bold text-slate-900 text-sm group-hover:text-orange-600 transition-colors">Agensi / Brand</p>
                       <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mt-0.5">Akses Akun Pemasang Iklan</p>
                    </div>
                 </button>

                 <button 
                    onClick={() => setDummy("creator")}
                    className="w-full flex items-center p-4 bg-white border border-slate-200 rounded-2xl hover:border-green-400 hover:shadow-md transition-all text-left group"
                 >
                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mr-4 group-hover:bg-green-600 transition-colors shrink-0">
                       <UserCheck className="w-5 h-5 text-green-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                       <p className="font-bold text-slate-900 text-sm group-hover:text-green-700 transition-colors">Talent Kreator</p>
                       <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mt-0.5">Akses Profil Talent</p>
                    </div>
                 </button>
              </div>
           </div>
        </div>
     </div>
  );
}
