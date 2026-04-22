import Image from 'next/image';
import Link from 'next/link';
import { Bell, MessageCircle, Search, MapPin, Star, Instagram, Video, ChevronRight, ChevronLeft, Menu } from 'lucide-react';
import UserDropdown from '../components/UserDropdown';

const categories = [
  { id: 1, name: "Actor & Actress", image: "https://picsum.photos/seed/actor1/400/300" },
  { id: 2, name: "Athlete", image: "https://picsum.photos/seed/athlete/400/300" },
  { id: 3, name: "Automotive Enthusiast", image: "https://picsum.photos/seed/auto/400/300" },
  { id: 4, name: "Beauty & Wellness", image: "https://picsum.photos/seed/beauty/400/300" },
  { id: 5, name: "Chef", image: "https://picsum.photos/seed/chef/400/300" },
];

const exclusiveCreators = [
  {
    id: 1, name: "Willie Salim", image: "https://picsum.photos/seed/willie/400/500", stats: [{ platform: 'tiktok', count: '56 M' }],
    location: "Kota Adm. Jakarta Barat", rating: 5.0, endorseCount: 92, price: "Rp90 Juta",
  },
  {
    id: 2, name: "Ibnu Wardani", image: "https://picsum.photos/seed/ibnu/400/500", stats: [{ platform: 'tiktok', count: '27 M' }],
    location: "Kota Tangerang Selatan", rating: 5.0, endorseCount: 92, price: "Rp158 Juta",
  },
  {
    id: 3, name: "Zaskia Adya Mecca", image: "https://picsum.photos/seed/zaskia/400/500", stats: [{ platform: 'youtube', count: '523 K' }, { platform: 'instagram', count: '23 M' }],
    location: "Kota Adm. Jakarta Selatan", rating: 5.0, endorseCount: 92, price: "Rp18 Juta",
  },
  {
    id: 4, name: "Raditya Dika", image: "https://picsum.photos/seed/radit/400/500", stats: [{ platform: 'instagram', count: '22 M' }],
    location: "Kota Adm. Jakarta Selatan", rating: 5.0, endorseCount: 92, price: "Rp132 Juta",
  },
];

const popularCreators = [
  {
    id: 5, name: "Bernard Sinarta", image: "https://picsum.photos/seed/bernard/400/500", stats: [{ platform: 'tiktok', count: '3 K' }],
    location: "Kota Adm. Jakarta Pusat", rating: 4.8, endorseCount: 149, price: "Rp138 Ribu",
  },
  {
    id: 6, name: "Azaria Desfiani", image: "https://picsum.photos/seed/azaria/400/500", stats: [{ platform: 'instagram', count: '106 K' }, { platform: 'tiktok', count: '41 K' }],
    location: "Kota Depok", rating: 5.0, endorseCount: 269, price: "Rp2 Juta",
  },
  {
    id: 7, name: "Adinda Indah", image: "https://picsum.photos/seed/adinda/400/500", stats: [{ platform: 'instagram', count: '385 K' }, { platform: 'tiktok', count: '384 K' }],
    location: "Kota Bandung", rating: 5.0, endorseCount: 269, price: "Rp11 Juta",
  },
  {
    id: 8, name: "Kinderjoyyx", image: "https://picsum.photos/seed/kinder/400/500", stats: [{ platform: 'tiktok', count: '59 K' }],
    location: "Kota Adm. Jakarta Selatan", rating: 4.9, endorseCount: 371, price: "Rp1 Juta",
  },
];

export default function Home() {
  return (
    <main className="flex-1 w-full relative bg-[#fcfcfc]">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#960022]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-[40%] text-left-0 w-[500px] h-[500px] bg-slate-200/50 rounded-full blur-[100px] pointer-events-none"></div>

      {/* TOP BAR */}
      <div className="w-full glass text-[10px] uppercase tracking-widest border-b border-black/5 text-slate-500 py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-slate-900 transition-colors flex items-center gap-2">
              <span className="w-3 h-4 bg-slate-300 rounded-[2px]" /> Download Aplikasi AKKI
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-slate-900 transition-colors">Ikuti Instagram AKKI</Link>
            <Link href="#" className="hover:text-slate-900 transition-colors">Tentang Kami</Link>
            <Link href="#" className="hover:text-slate-900 transition-colors">Artikel AKKI</Link>
            <div className="flex items-center gap-1 cursor-pointer">
               <span className="w-4 h-3 bg-[#960022] inline-block mr-1 flex-shrink-0" /> IDR
            </div>
            <Link href="/cms" className="block font-bold text-[#960022] hover:opacity-80">
               Login CMS &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <header className="w-full glass border-b border-black/5 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-3">
              <span className="font-bold text-2xl tracking-tight text-slate-900">AKKI <span className="font-light opacity-60">CreatorHub</span></span>
            </Link>

            <div className="hidden lg:flex items-center bg-black/5 rounded-full px-4 py-2 w-80 border border-black/5">
               <Search className="w-4 h-4 text-slate-400 mr-2" />
               <input type="text" placeholder="Cari Creator Favorit" className="bg-transparent border-none outline-none text-sm w-full text-slate-900 placeholder-slate-400" />
            </div>
          </div>

          <div className="flex items-center gap-4">
             <button className="p-2 rounded-full hover:bg-black/5 transition-colors hidden md:block">
               <Bell className="w-5 h-5 text-slate-600" />
             </button>
             <button className="p-2 rounded-full hover:bg-black/5 transition-colors hidden md:block">
               <MessageCircle className="w-5 h-5 text-slate-600" />
             </button>
             <button className="bg-[#960022] text-white px-6 py-2 rounded-full font-bold uppercase text-[10px] tracking-widest accent-glow hidden md:block transition-transform hover:scale-105">
               Buat Campaign
             </button>
             
             <div className="h-8 w-[1px] bg-black/10 mx-2 hidden md:block"></div>
             
             <UserDropdown 
               user={{
                 name: "Aji M. Iqbal Fadhilah",
                 role: "Creator",
                 avatar: "https://picsum.photos/seed/user/100/100"
               }} 
               type="public" 
             />
             
             <button className="md:hidden p-2 text-slate-900">
                <Menu className="w-6 h-6" />
             </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="w-full relative py-20 px-4">
        <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
            Temukan Creator<br/><span className="text-slate-400">Terpopuler Hari Ini.</span>
          </h1>
          <p className="text-sm uppercase tracking-widest text-slate-500 mb-8 max-w-lg font-medium">
            Siapa yang kamu cari untuk brandmu?
          </p>
          
          <div className="w-full max-w-2xl glass rounded-full flex items-center px-4 py-2 shadow-lg border border-slate-200">
            <Search className="w-5 h-5 text-slate-400 mr-3 ml-2 shrink-0" />
            <input 
              type="text" 
              placeholder="Ex: Thariq Halilintar" 
              className="w-full bg-transparent border-none outline-none text-base text-slate-900 placeholder-slate-400"
            />
            <button className="bg-[#960022] text-white px-8 py-3 rounded-full font-bold uppercase text-[10px] tracking-widest accent-glow shrink-0 ml-2 hidden sm:block transition-transform hover:scale-105">
              Cari
            </button>
          </div>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-12 relative z-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-sm uppercase tracking-widest font-bold text-slate-900">Kategori Pilihan</h2>
          <Link href="#" className="font-bold text-[10px] uppercase tracking-widest text-[#960022] hover:opacity-80">Lihat Semua</Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 overflow-x-auto pb-4 hide-scrollbar">
          {categories.map((cat) => (
            <Link href="#" key={cat.id} className="relative rounded-2xl overflow-hidden aspect-[4/3] group min-w-[200px] lg:min-w-0 flex-shrink-0 cursor-pointer block border border-black/5 shadow-sm hover:shadow-md transition-shadow">
              <Image src={cat.image} alt={cat.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-white font-bold text-sm md:text-base leading-tight drop-shadow-md">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* EXCLUSIVE CREATORS */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-8 relative z-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-sm uppercase tracking-widest font-bold text-slate-900">Creator Eksklusif AKKI</h2>
          <Link href="#" className="font-bold text-[10px] uppercase tracking-widest text-[#960022] hover:opacity-80">Lihat Semua</Link>
        </div>
        
        <div className="relative">
          <button className="absolute -left-5 top-1/2 -translate-y-1/2 w-12 h-12 glass rounded-full shadow-md flex items-center justify-center z-10 text-slate-600 hover:text-[#960022] hover:bg-slate-50 transition-colors lg:flex hidden border border-slate-200">
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex gap-4 lg:gap-6 overflow-x-auto pb-6 snap-x hide-scrollbar">
             {exclusiveCreators.map((creator) => (
               <CreatorCard key={creator.id} creator={creator} />
             ))}
          </div>

          <button className="absolute -right-5 top-1/2 -translate-y-1/2 w-12 h-12 glass rounded-full shadow-md flex items-center justify-center z-10 text-slate-600 hover:text-[#960022] hover:bg-slate-50 transition-colors lg:flex hidden border border-slate-200">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* POPULAR CREATORS */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-8 relative z-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-sm uppercase tracking-widest font-bold text-slate-900 flex items-center gap-2">
            Populer Saat Ini <span className="text-xl">🔥</span>
          </h2>
          <Link href="#" className="font-bold text-[10px] uppercase tracking-widest text-[#960022] hover:opacity-80">Lihat Semua</Link>
        </div>
        
        <div className="relative">
           <button className="absolute -left-5 top-1/2 -translate-y-1/2 w-12 h-12 glass rounded-full shadow-md flex items-center justify-center z-10 text-slate-600 hover:text-[#960022] hover:bg-slate-50 transition-colors lg:flex hidden border border-slate-200">
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex gap-4 lg:gap-6 overflow-x-auto pb-6 snap-x hide-scrollbar">
             {popularCreators.map((creator) => (
               <CreatorCard key={creator.id} creator={creator} />
             ))}
          </div>

           <button className="absolute -right-5 top-1/2 -translate-y-1/2 w-12 h-12 glass rounded-full shadow-md flex items-center justify-center z-10 text-slate-600 hover:text-[#960022] hover:bg-slate-50 transition-colors lg:flex hidden border border-slate-200">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full glass border-t border-black/5 mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <span className="font-bold text-2xl tracking-tight text-slate-900">AKKI <span className="font-light opacity-60">CreatorHub</span></span>
              <p className="text-sm text-slate-500 mt-4 leading-relaxed">
                Platform marketplace resmi Asosiasi Konten Kreator Indonesia untuk menemukan dan berkolaborasi dengan kreator terpercaya.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-widest text-[10px]">Untuk Brand</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><Link href="#" className="hover:text-[#960022] transition-colors">Cari Creator</Link></li>
                <li><Link href="#" className="hover:text-[#960022] transition-colors">Buat Campaign</Link></li>
                <li><Link href="#" className="hover:text-[#960022] transition-colors">Harga & Layanan</Link></li>
                <li><Link href="#" className="hover:text-[#960022] transition-colors">Studi Kasus</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-widest text-[10px]">Untuk Creator</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><Link href="#" className="hover:text-[#960022] transition-colors">Bergabung ke AKKI</Link></li>
                <li><Link href="#" className="hover:text-[#960022] transition-colors">Download Aplikasi</Link></li>
                <li><Link href="#" className="hover:text-[#960022] transition-colors">Panduan Creator</Link></li>
                <li><Link href="#" className="hover:text-[#960022] transition-colors">Manajemen Kontrak</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-widest text-[10px]">Perusahaan</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><Link href="#" className="hover:text-[#960022] transition-colors">Tentang AKKI</Link></li>
                <li><Link href="#" className="hover:text-[#960022] transition-colors">Berita & Artikel</Link></li>
                <li><Link href="#" className="hover:text-[#960022] transition-colors">Syarat & Ketentuan</Link></li>
                <li><Link href="#" className="hover:text-[#960022] transition-colors">Kebijakan Privasi</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 mt-12 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-400">
              &copy; {new Date().getFullYear()} Asosiasi Konten Kreator Indonesia (AKKI). All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-600 hover:text-[#960022] hover:bg-slate-50 transition-all border border-slate-200">
                <Instagram className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

// Reusable component
function CreatorCard({ creator }: { creator: any }) {
  return (
    <div className="w-[80vw] sm:w-[280px] lg:w-[290px] flex-shrink-0 snap-start relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group cursor-pointer border border-slate-100 aspect-[4/5] sm:aspect-[3/4]">
      {/* Background Image */}
      <Image 
        src={creator.image} 
        alt={creator.name} 
        fill 
        className="object-cover group-hover:scale-110 transition-transform duration-700" 
        unoptimized
      />
      
      {/* Dark overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Initial state: Just show a small subtle name at the bottom so it's not entirely blank, fades out on hover */}
      <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-500">
        <h3 className="font-extrabold text-xl text-white truncate drop-shadow-md">{creator.name}</h3>
      </div>

      {/* Hover state content that slides up */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <h3 className="font-extrabold text-2xl text-white mb-3 truncate drop-shadow-md" title={creator.name}>{creator.name}</h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {creator.stats.map((stat: any, idx: number) => (
            <div key={idx} className="flex items-center gap-1.5 px-2.5 py-1 bg-white/20 backdrop-blur-sm border border-white/10 flex-none rounded-md">
              {stat.platform === 'tiktok' && <Video className="w-3.5 h-3.5 text-white" />}
              {stat.platform === 'instagram' && <Instagram className="w-3.5 h-3.5 text-white" />}
              {stat.platform === 'youtube' && <Video className="w-3.5 h-3.5 text-red-500" />}
              <span className="text-xs font-bold text-white drop-shadow-sm">{stat.count}</span>
            </div>
          ))}
        </div>

        <div className="space-y-2 mb-5 mt-auto text-white/80">
          <div className="flex items-start gap-2">
            <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5 text-white/70" />
            <span className="text-xs line-clamp-1 font-medium drop-shadow-sm" title={creator.location}>{creator.location}</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400 shrink-0" />
            <span className="font-bold text-white drop-shadow-sm">{creator.rating}</span>
            <span className="opacity-50">|</span>
            <span className="font-medium text-white/80 drop-shadow-sm">Diendorse {creator.endorseCount} Kali</span>
          </div>
        </div>

        <div className="pt-4 border-t border-white/20 flex items-end justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-white/60 font-bold mb-1">Mulai dari</p>
            <p className="font-extrabold text-white text-lg drop-shadow-md">{creator.price}</p>
          </div>
          <button className="bg-[#960022] text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg hover:scale-105 transition-transform">
             Detail
          </button>
        </div>
      </div>
    </div>
  )
}
