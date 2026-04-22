"use client";

import { useState } from 'react';
import { Search, Plus, Edit, Trash2, Eye, X, CheckCircle2, AlertCircle, ExternalLink, Instagram, Youtube, UserCheck, ShieldCheck, Briefcase, FileCheck2, Link as LinkIcon, ArrowUpDown } from 'lucide-react';
import Image from 'next/image';

interface CreatorData {
  id: string;
  full_name: string;
  stage_name: string;
  birth_city: string;
  birth_date: string;
  address: string;
  whatsapp_number: string;
  email: string;
  main_job: string;
  social_platform: string;
  main_social_link: string;
  instagram_followers: string;
  tiktok_followers: string;
  content_niche: string;
  portfolio_link: string;
  creator_experience: string;
  technical_skills: string;
  has_brand_collaboration: boolean;
  brand_collaboration_detail: string;
  join_motivation: string;
  contribution: string;
  ethics_commitment: boolean;
  program_commitment: boolean;
  ktp_photo: string;
  profile_photo: string;
  social_media_screenshot: string;
  follow_akki: boolean;
  membership_type: string;
  payment_method: string;
  status: "Verified" | "Pending";
}

const mockCreators: CreatorData[] = [
  {
    id: "1", full_name: "Willie Salim", stage_name: "Willie Salim", birth_city: "Jakarta", birth_date: "2002-12-15", address: "Jl. Sudirman No 42, Jakarta", whatsapp_number: "081234567890", email: "contact@williesalim.com", main_job: "Content Creator", social_platform: "TikTok, YouTube", main_social_link: "https://tiktok.com/@willie_27", instagram_followers: "12M", tiktok_followers: "56M", content_niche: "Entertainment", portfolio_link: "williesalim.com", creator_experience: "5+ Tahun", technical_skills: "Video Editing", has_brand_collaboration: true, brand_collaboration_detail: "Tokopedia, Shopee", join_motivation: "Meningkatkan relasi", contribution: "Mentor", ethics_commitment: true, program_commitment: true, ktp_photo: "ktp-willie.jpg", profile_photo: "https://picsum.photos/seed/willie/200/200", social_media_screenshot: "screenshot_willie.jpg", follow_akki: true, membership_type: "Premium", payment_method: "BCA", status: "Verified"
  },
  {
    id: "2", full_name: "Ibnu Wardani", stage_name: "Ibnu Wardani", birth_city: "Bandung", birth_date: "1998-05-20", address: "Jl. Braga No 12, Bandung", whatsapp_number: "081987654321", email: "business@ibnuwardani.id", main_job: "Creator", social_platform: "TikTok, Instagram", main_social_link: "https://instagram.com/ibnuwardani", instagram_followers: "8M", tiktok_followers: "27M", content_niche: "Lifestyle, Family", portfolio_link: "ibnuwardani.id", creator_experience: "4 Tahun", technical_skills: "Storytelling", has_brand_collaboration: true, brand_collaboration_detail: "Traveloka", join_motivation: "Kontribusi asosiasi", contribution: "Regional Leader", ethics_commitment: true, program_commitment: true, ktp_photo: "ktp-ibnu.jpg", profile_photo: "https://picsum.photos/seed/ibnu/200/200", social_media_screenshot: "screenshot-ibnu.jpg", follow_akki: true, membership_type: "Standard", payment_method: "GoPay", status: "Verified"
  },
  {
    id: "3", full_name: "Budi Santoso", stage_name: "Budi Santuy", birth_city: "Surabaya", birth_date: "2000-08-10", address: "Jl. Pahlawan, Surabaya", whatsapp_number: "085612341234", email: "budi.santuy@gmail.com", main_job: "Mahasiswa", social_platform: "YouTube", main_social_link: "https://youtube.com/@budisantuy", instagram_followers: "50K", tiktok_followers: "120K", content_niche: "Automotive", portfolio_link: "notion.so/budisantuy", creator_experience: "1.5 Tahun", technical_skills: "Mechanic", has_brand_collaboration: false, brand_collaboration_detail: "-", join_motivation: "Mentorship", contribution: "Aktif forum", ethics_commitment: true, program_commitment: true, ktp_photo: "ktp-budi.jpg", profile_photo: "https://picsum.photos/seed/budi/200/200", social_media_screenshot: "screenshot-budi.jpg", follow_akki: false, membership_type: "Basic", payment_method: "OVO", status: "Pending"
  },
  {
    id: "4", full_name: "Ria Yunita", stage_name: "Ria Ricis", birth_city: "Batam", birth_date: "1995-07-01", address: "Jakarta Selatan", whatsapp_number: "08111222333", email: "management@ricisofficial.com", main_job: "Content Creator", social_platform: "YouTube", main_social_link: "https://youtube.com/ricisofficial", instagram_followers: "30M", tiktok_followers: "40M", content_niche: "Lifestyle, Family", portfolio_link: "ricisofficial.com", creator_experience: "8 Tahun", technical_skills: "Directing", has_brand_collaboration: true, brand_collaboration_detail: "Banyak Brand Nasional", join_motivation: "Networking", contribution: "Speaker", ethics_commitment: true, program_commitment: true, ktp_photo: "ktp.jpg", profile_photo: "https://picsum.photos/seed/ricis/200/200", social_media_screenshot: "ss.jpg", follow_akki: true, membership_type: "Premium", payment_method: "BCA", status: "Verified"
  },
  {
    id: "5", full_name: "Jerome Polin Sijabat", stage_name: "Jerome Polin", birth_city: "Surabaya", birth_date: "1998-05-02", address: "Jakarta", whatsapp_number: "089988887777", email: "business@mantappu.com", main_job: "Entrepreneur", social_platform: "YouTube, Instagram", main_social_link: "https://youtube.com/nihongomantappu", instagram_followers: "7M", tiktok_followers: "5M", content_niche: "Education, Vlogs", portfolio_link: "mantappu.com", creator_experience: "6 Tahun", technical_skills: "Vlogging, Math", has_brand_collaboration: true, brand_collaboration_detail: "Ruangguru, Zenius", join_motivation: "Edukasi Kreator Baru", contribution: "Edukator", ethics_commitment: true, program_commitment: true, ktp_photo: "ktp.jpg", profile_photo: "https://picsum.photos/seed/jerome/200/200", social_media_screenshot: "ss.jpg", follow_akki: true, membership_type: "Premium", payment_method: "BCA", status: "Verified"
  },
  {
    id: "6", full_name: "Fadil Jaidi", stage_name: "Fadil Jaidi", birth_city: "Jakarta", birth_date: "1994-10-17", address: "Jakarta Barat", whatsapp_number: "085544443333", email: "info@fadiljaidi.com", main_job: "Content Creator", social_platform: "Instagram, YouTube", main_social_link: "https://instagram.com/fadiljaidi", instagram_followers: "10M", tiktok_followers: "9M", content_niche: "Comedy, Lifestyle", portfolio_link: "-", creator_experience: "5 Tahun", technical_skills: "Acting, Comedy", has_brand_collaboration: true, brand_collaboration_detail: "Gojek, Tokopedia", join_motivation: "Dukungan Asosiasi", contribution: "Promotor", ethics_commitment: true, program_commitment: true, ktp_photo: "ktp.jpg", profile_photo: "https://picsum.photos/seed/fadil/200/200", social_media_screenshot: "ss.jpg", follow_akki: true, membership_type: "Premium", payment_method: "Mandiri", status: "Verified"
  },
  {
    id: "7", full_name: "Najwa Shihab", stage_name: "Najwa Shihab", birth_city: "Makassar", birth_date: "1977-09-16", address: "Jakarta", whatsapp_number: "08110001112", email: "business@narasi.tv", main_job: "Journalist", social_platform: "Instagram, YouTube", main_social_link: "https://instagram.com/najwashihab", instagram_followers: "22M", tiktok_followers: "8M", content_niche: "News, Talkshow", portfolio_link: "narasi.tv", creator_experience: "20 Tahun", technical_skills: "Journalism, Interview", has_brand_collaboration: true, brand_collaboration_detail: "Corporate", join_motivation: "Standar Etika Konten", contribution: "Penasehat Etik", ethics_commitment: true, program_commitment: true, ktp_photo: "ktp.jpg", profile_photo: "https://picsum.photos/seed/najwa/200/200", social_media_screenshot: "ss.jpg", follow_akki: true, membership_type: "Standard", payment_method: "BCA", status: "Verified"
  },
  {
    id: "8", full_name: "Junior Rorimpandey", stage_name: "Chef Juna", birth_city: "Manado", birth_date: "1975-07-20", address: "Jakarta", whatsapp_number: "082211112222", email: "juna@chef.id", main_job: "Chef", social_platform: "Instagram", main_social_link: "https://instagram.com/junarorimpandeyofficial", instagram_followers: "2M", tiktok_followers: "1M", content_niche: "Culinary", portfolio_link: "-", creator_experience: "10 Tahun", technical_skills: "Cooking, Show", has_brand_collaboration: true, brand_collaboration_detail: "F&B Brands", join_motivation: "Networking", contribution: "F&B Expert", ethics_commitment: true, program_commitment: false, ktp_photo: "ktp.jpg", profile_photo: "https://picsum.photos/seed/juna/200/200", social_media_screenshot: "ss.jpg", follow_akki: false, membership_type: "Basic", payment_method: "BNI", status: "Pending"
  },
  {
    id: "9", full_name: "Tobias Justin", stage_name: "Jess No Limit", birth_city: "Jakarta", birth_date: "1996-02-05", address: "Jakarta", whatsapp_number: "088899990000", email: "biz@jessnolimit.com", main_job: "Gamer", social_platform: "YouTube, TikTok", main_social_link: "https://youtube.com/jessnolimit", instagram_followers: "11M", tiktok_followers: "20M", content_niche: "Gaming", portfolio_link: "jessnolimit.com", creator_experience: "8 Tahun", technical_skills: "Gaming, Live Stream", has_brand_collaboration: true, brand_collaboration_detail: "Esports, Tech", join_motivation: "Ekosistem Game", contribution: "Esports Mentor", ethics_commitment: true, program_commitment: true, ktp_photo: "ktp.jpg", profile_photo: "https://picsum.photos/seed/jess/200/200", social_media_screenshot: "ss.jpg", follow_akki: true, membership_type: "Premium", payment_method: "BCA", status: "Verified"
  },
  {
    id: "10", full_name: "Tasya Farasya", stage_name: "Tasya Farasya", birth_city: "Jakarta", birth_date: "1992-05-25", address: "Jakarta", whatsapp_number: "087766665555", email: "collab@tasyafarasya.com", main_job: "Beauty Vlogger", social_platform: "Instagram, YouTube", main_social_link: "https://instagram.com/tasyafarasya", instagram_followers: "6M", tiktok_followers: "3M", content_niche: "Beauty, Fashion", portfolio_link: "motherofpearl.id", creator_experience: "7 Tahun", technical_skills: "Makeup, Review", has_brand_collaboration: true, brand_collaboration_detail: "Beauty Brands", join_motivation: "Standarisasi Rate Card", contribution: "Beauty Expert", ethics_commitment: true, program_commitment: true, ktp_photo: "ktp.jpg", profile_photo: "https://picsum.photos/seed/tasya/200/200", social_media_screenshot: "ss.jpg", follow_akki: true, membership_type: "Standard", payment_method: "BCA", status: "Verified"
  }
];

export default function CreatorsCMSPage() {
  const [selectedCreator, setSelectedCreator] = useState<CreatorData | null>(null);

  // Helper block to render detail items
  const renderDetailItem = (label: string, val: string | boolean) => {
     let content;
     if (typeof val === "boolean") {
        content = val ? 
          <span className="inline-flex items-center gap-1 text-green-600 font-bold text-xs"><CheckCircle2 className="w-3.5 h-3.5" /> Ya</span> : 
          <span className="inline-flex items-center gap-1 text-slate-400 font-bold text-xs"><X className="w-3.5 h-3.5" /> Tidak</span>
     } else {
        content = <span className="font-semibold text-slate-800 break-words">{val || "-"}</span>
     }

     return (
        <div className="flex flex-col gap-1 border-b border-slate-100 pb-3 last:border-0 last:pb-0">
           <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">{label}</span>
           <div className="text-sm">
              {content}
           </div>
        </div>
     );
  };

  return (
    <>
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900">Manage Creators</h2>
            <p className="text-[10px] uppercase tracking-widest text-slate-500 mt-2 font-bold">Data Anggota AKKI CreatorHub</p>
          </div>
          <button className="bg-[#960022] text-white px-6 py-3 rounded-full text-[10px] uppercase font-bold tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2 shadow-none border border-transparent">
             <Plus className="w-4 h-4 text-white" />
             Tambah Kreator Baru
          </button>
        </div>

        {/* Table Container - Removed Shadow */}
        <div className="bg-white border border-slate-200 rounded-2xl flex flex-col mt-2 overflow-hidden shadow-none">
           {/* Filters & Search - Removed Shadow */}
           <div className="p-6 border-b border-slate-100 flex flex-col xl:flex-row justify-between gap-4 items-center">
              <div className="relative max-w-md w-full bg-white leading-none rounded-xl border border-slate-200 shadow-none">
                 <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                 <input 
                   type="text" 
                   placeholder="Cari berdasarkan nama/email..." 
                   className="w-full pl-11 pr-4 py-3 bg-transparent text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
                 />
              </div>
              
              <div className="flex flex-wrap items-center gap-3 w-full xl:w-auto">
                 <select className="bg-white border text-slate-700 border-slate-200 rounded-xl text-xs font-bold uppercase tracking-wider px-4 py-3 focus:outline-none appearance-none min-w-[140px] hover:border-slate-300 transition-colors shadow-none cursor-pointer">
                    <option>Urutkan: Terbaru</option>
                    <option>Nama (A-Z)</option>
                    <option>Followers Terbanyak</option>
                 </select>
                 <select className="bg-white border text-slate-700 border-slate-200 rounded-xl text-xs font-bold uppercase tracking-wider px-4 py-3 focus:outline-none appearance-none min-w-[140px] hover:border-slate-300 transition-colors shadow-none cursor-pointer">
                    <option>Semua Niche</option>
                    <option>Entertainment</option>
                    <option>Lifestyle</option>
                    <option>Automotive</option>
                 </select>
                 <select className="bg-white border text-slate-700 border-slate-200 rounded-xl text-xs font-bold uppercase tracking-wider px-4 py-3 focus:outline-none appearance-none min-w-[140px] hover:border-slate-300 transition-colors shadow-none cursor-pointer">
                    <option>Status: Semua</option>
                    <option>Verified</option>
                    <option>Pending</option>
                 </select>
              </div>
           </div>

           {/* Table content */}
           <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                 <thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-500 border-b border-slate-100">
                   <tr>
                     <th className="p-4 px-6 font-bold whitespace-nowrap">Kreator Info</th>
                     <th className="p-4 px-6 font-bold whitespace-nowrap">Niche & Platform</th>
                     <th className="p-4 px-6 font-bold whitespace-nowrap">Followers</th>
                     <th className="p-4 px-6 font-bold whitespace-nowrap">Membership</th>
                     <th className="p-4 px-6 font-bold whitespace-nowrap">Status</th>
                     <th className="p-4 px-6 text-right font-bold whitespace-nowrap">Aksi</th>
                   </tr>
                 </thead>
                 <tbody className="text-slate-700 font-medium">
                   {mockCreators.map((c) => (
                     <tr key={c.id} className="border-b border-slate-100 hover:bg-slate-50 border-transparent transition-colors">
                       <td className="p-4 px-6">
                          <div className="flex items-center gap-4">
                             <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-200 shrink-0 relative">
                                <Image src={c.profile_photo} alt={c.stage_name} fill className="object-cover" unoptimized />
                             </div>
                             <div>
                                <p className="font-bold text-slate-900 whitespace-nowrap">{c.stage_name}</p>
                                <p className="text-[10px] bg-clip-text font-bold text-slate-500 mt-0.5 max-w-[150px] truncate">{c.email}</p>
                             </div>
                          </div>
                       </td>
                       <td className="p-4 px-6">
                          <p className="font-bold text-slate-800 whitespace-nowrap">{c.content_niche}</p>
                          <p className="text-[10px] uppercase font-bold tracking-widest text-[#960022] mt-0.5">{c.social_platform}</p>
                       </td>
                       <td className="p-4 px-6">
                           <div className="flex flex-col gap-1">
                              <span className="inline-flex gap-2 items-center text-xs text-slate-600"><Instagram className="w-3.5 h-3.5 text-pink-600" /> {c.instagram_followers}</span>
                              <span className="inline-flex gap-2 items-center text-xs text-slate-600"><Youtube className="w-3.5 h-3.5 text-black" /> {c.tiktok_followers}</span>
                           </div>
                       </td>
                       <td className="p-4 px-6">
                          <span className={`px-2.5 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider border ${
                             c.membership_type === 'Premium' ? 'bg-[#960022]/10 text-[#960022] border-[#960022]/20' : 
                             c.membership_type === 'Standard' ? 'bg-blue-50 text-blue-700 border-blue-200' : 
                             'bg-slate-100 text-slate-600 border-slate-200'
                          }`}>
                             {c.membership_type}
                          </span>
                       </td>
                       <td className="p-4 px-6">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider ${
                             c.status === 'Verified' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                          }`}>
                             {c.status === 'Verified' ? <CheckCircle2 className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                             {c.status}
                          </span>
                       </td>
                       <td className="p-4 px-6 text-right">
                          <div className="flex items-center justify-end gap-2">
                             <button onClick={() => setSelectedCreator(c)} className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors border border-transparent shadow-none" title="View Detail">
                                <Eye className="w-4 h-4" />
                             </button>
                             <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors" title="Edit">
                                <Edit className="w-4 h-4" />
                             </button>
                             <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                                <Trash2 className="w-4 h-4" />
                             </button>
                          </div>
                       </td>
                     </tr>
                   ))}
                 </tbody>
              </table>
           </div>

           {/* Pagination with Limit Selector */}
           <div className="p-6 flex flex-col sm:flex-row items-center justify-between text-[10px] uppercase tracking-widest font-bold text-slate-500 border-t border-slate-100 gap-4">
              <div className="flex items-center gap-3">
                 <span>Tampilkan</span>
                 <select className="bg-white border border-slate-200 rounded-lg px-2 py-1.5 focus:outline-none text-slate-700 font-bold cursor-pointer">
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                 </select>
                 <span>dari {mockCreators.length} Baris Data</span>
              </div>
              <div className="flex items-center gap-2">
                 <button className="px-4 py-2 bg-white border border-slate-200 rounded hover:bg-slate-50 disabled:opacity-50 transition-colors text-slate-700">Prev</button>
                 <button className="px-4 py-2 rounded bg-[#960022] text-white font-extrabold focus:outline-none border border-[#960022]">1</button>
                 <button className="px-4 py-2 bg-white border border-slate-200 rounded hover:bg-slate-50 transition-colors text-slate-700">Next</button>
              </div>
           </div>
        </div>
      </div>

      {/* DETAIL MODAL / SLIDE OVER */}
      {selectedCreator && (
         <div className="fixed inset-0 z-50 flex justify-end font-sans">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm animate-in fade-in transition-opacity"
              onClick={() => setSelectedCreator(null)}
            />
            
            {/* Slide over panel */}
            <div className="relative w-full max-w-3xl h-full bg-slate-50 shadow-2xl animate-in slide-in-from-right duration-300 flex flex-col z-10 border-l border-slate-200">
               {/* Modal Header */}
               <div className="bg-white border-b border-slate-200 p-6 flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-4">
                     <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#960022] relative shrink-0">
                        <Image src={selectedCreator.profile_photo} alt={selectedCreator.stage_name} fill className="object-cover" unoptimized />
                     </div>
                     <div>
                        <h3 className="text-xl font-extrabold text-slate-900 leading-tight">{selectedCreator.stage_name}</h3>
                        <p className="text-xs uppercase tracking-widest font-bold text-slate-500">{selectedCreator.main_job}</p>
                     </div>
                  </div>
                  <button 
                    onClick={() => setSelectedCreator(null)}
                    className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex flex-col items-center justify-center text-slate-500 transition-colors border border-transparent shadow-none"
                  >
                     <X className="w-5 h-5" />
                  </button>
               </div>

               {/* Modal Body Container */}
               <div className="flex-1 overflow-y-auto p-6 space-y-6 hide-scrollbar">
                 <div className="bg-sky-50 border border-sky-600/20 text-sky-800 rounded-xl p-4 flex items-start gap-3">
                    <UserCheck className="w-5 h-5 mt-0.5 shrink-0" />
                    <div>
                       <p className="text-sm font-bold">Kelengkapan Data Anggota: Lengkap</p>
                       <p className="text-xs mt-1">Data kreator ini telah memenuhi seluruh isian formulir pendaftaran AKKI Hub.</p>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Block 1: Identitas Pribadi */}
                    <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-4 shadow-none">
                       <h4 className="text-xs uppercase tracking-widest font-extrabold text-slate-800 flex items-center gap-2 mb-4 border-b border-slate-100 pb-3">
                         <ShieldCheck className="w-4 h-4 text-[#960022]" /> Identitas Personal
                       </h4>
                       {renderDetailItem("Nama Lengkap (KTP)", selectedCreator.full_name)}
                       {renderDetailItem("Tempat, Tanggal Lahir", `${selectedCreator.birth_city}, ${selectedCreator.birth_date}`)}
                       {renderDetailItem("Alamat Domisili", selectedCreator.address)}
                       {renderDetailItem("No. WhatsApp", selectedCreator.whatsapp_number)}
                       {renderDetailItem("Email Address", selectedCreator.email)}
                    </div>

                    {/* Block 2: Info Pekerjaan & Kreator */}
                    <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-4 shadow-none">
                       <h4 className="text-xs uppercase tracking-widest font-extrabold text-slate-800 flex items-center gap-2 mb-4 border-b border-slate-100 pb-3">
                         <Briefcase className="w-4 h-4 text-[#960022]" /> Profil Profesi Kreator
                       </h4>
                       {renderDetailItem("Stage Name", selectedCreator.stage_name)}
                       {renderDetailItem("Pekerjaan Utama", selectedCreator.main_job)}
                       {renderDetailItem("Niche / Tipe Konten", selectedCreator.content_niche)}
                       {renderDetailItem("Pengalaman Kreator", selectedCreator.creator_experience)}
                       {renderDetailItem("Technical Skills", selectedCreator.technical_skills)}
                    </div>

                    {/* Block 3: Platform Sosial */}
                    <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-4 md:col-span-2 shadow-none">
                       <h4 className="text-xs uppercase tracking-widest font-extrabold text-slate-800 flex items-center gap-2 mb-4 border-b border-slate-100 pb-3">
                         <LinkIcon className="w-4 h-4 text-[#960022]" /> Reputasi & Jejaring Sosial
                       </h4>
                       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                         {renderDetailItem("Platform Utama", selectedCreator.social_platform)}
                         {renderDetailItem("Instagram Followers", selectedCreator.instagram_followers)}
                         {renderDetailItem("TikTok Followers", selectedCreator.tiktok_followers)}
                         
                         <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                               <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block mb-1">Link Platform Utama</span>
                               <a href={selectedCreator.main_social_link} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-600 hover:underline flex items-center gap-1 break-all">
                                 {selectedCreator.main_social_link} <ExternalLink className="w-3 h-3" />
                               </a>
                            </div>
                            <div>
                               <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block mb-1">Link Portfolio</span>
                               <a href={selectedCreator.portfolio_link} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-600 hover:underline flex items-center gap-1 break-all">
                                 {selectedCreator.portfolio_link} <ExternalLink className="w-3 h-3" />
                               </a>
                            </div>
                         </div>
                       </div>
                    </div>

                    {/* Block 4: Kolaborasi & Komitmen (AKKI) */}
                    <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-4 md:col-span-2 shadow-none">
                       <h4 className="text-xs uppercase tracking-widest font-extrabold text-slate-800 flex items-center gap-2 mb-4 border-b border-slate-100 pb-3">
                         <FileCheck2 className="w-4 h-4 text-[#960022]" /> Profil Kolaborasi & Data AKKI
                       </h4>
                       
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                         {renderDetailItem("Pernah Kerjasama Brand?", selectedCreator.has_brand_collaboration)}
                         {renderDetailItem("Detail Kolaborasi Brand", selectedCreator.brand_collaboration_detail)}
                         {renderDetailItem("Motivasi Bergabung AKKI", selectedCreator.join_motivation)}
                         {renderDetailItem("Rencana Kontribusi", selectedCreator.contribution)}
                         
                         {renderDetailItem("Komitmen Kode Etik", selectedCreator.ethics_commitment)}
                         {renderDetailItem("Komitmen Program", selectedCreator.program_commitment)}
                         
                         {renderDetailItem("Tipe Membership", selectedCreator.membership_type)}
                         {renderDetailItem("Metode Pembayaran", selectedCreator.payment_method)}
                         {renderDetailItem("Sudah Follow Medsos AKKI?", selectedCreator.follow_akki)}
                       </div>
                    </div>
                    
                    {/* Berkas Lampiran */}
                    <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-4 md:col-span-2 shadow-none">
                       <h4 className="text-xs uppercase tracking-widest font-extrabold text-slate-800 flex items-center gap-2 mb-4 border-b border-slate-100 pb-3">
                         File & Lampiran
                       </h4>
                       <div className="flex flex-wrap gap-4">
                          <button className="px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 text-sm font-semibold rounded-lg flex items-center gap-2 transition-colors border border-slate-200 shadow-none">
                             Unduh e-KTP
                          </button>
                          <button className="px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 text-sm font-semibold rounded-lg flex items-center gap-2 transition-colors border border-slate-200 shadow-none">
                             Unduh Bukti Screenshot Follow
                          </button>
                       </div>
                    </div>

                 </div>
               </div>
               
               {/* Footer Action */}
               <div className="bg-white border-t border-slate-200 p-6 shrink-0 flex items-center justify-end gap-3 rounded-bl-3xl">
                  {selectedCreator.status === 'Pending' && (
                     <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-colors shadow-none">
                        Verifikasi Akun
                     </button>
                  )}
                  <button className="px-6 py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold uppercase tracking-widest rounded-xl transition-colors shadow-none" onClick={() => setSelectedCreator(null)}>
                     Tutup Detail
                  </button>
               </div>
            </div>
         </div>
      )}
    </>
  )
}
