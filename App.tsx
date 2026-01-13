
import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell
} from 'recharts';
import { 
  DollarSign, ShieldCheck, Zap, Users, Award, 
  ArrowRight, CheckCircle2, AlertTriangle, Building2,
  Cpu, MousePointer2, Smartphone, TrendingUp, Info, Activity, Wallet, Database, Globe, Layers, Star, ExternalLink, ChevronRight, ChevronLeft, ChevronUp, LayoutDashboard, Target, Sun, Moon, PlayCircle, BookOpen, Youtube, Type, Settings, X, Phone, Mail, MapPin, Facebook, MessageCircle, Music
} from 'lucide-react';
import { ComparisonGrid } from './components/ComparisonGrid';
import { StrategyTimeline } from './components/StrategyTimeline';
import { 
  FINANCIAL_DATA, 
  TECHNICAL_DATA, 
  MARKETING_DATA, 
  SCORE_CHART_DATA,
  TECHNICAL_DETAILS,
  COST_ANALYSIS,
  INFRA_DATA,
  INITIAL_INVESTMENT,
  VIDEO_DATA,
  GUIDE_ARTICLES
} from './constants';

type FontSize = 'small' | 'medium' | 'large';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'compare' | 'strategy' | 'infra' | 'guide'>('compare');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [fontSize, setFontSize] = useState<FontSize>('medium');
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showSettings, setShowSettings] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Apply theme
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Apply Font Size Scaling globally
    const fontSizeMap = {
      small: '14px',
      medium: '16px',
      large: '20px'
    };
    root.style.fontSize = fontSizeMap[fontSize];

    return () => window.removeEventListener('scroll', handleScroll);
  }, [theme, fontSize]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const logoUrl = "https://ducphuongmedical.com/yuwell/logo.png";

  return (
    <div className={`min-h-screen transition-all duration-300 ${theme === 'dark' ? 'bg-slate-950 text-slate-200' : 'bg-slate-50 text-slate-800'}`}>
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-emerald-600/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Floating Controls Overlay */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button 
            onClick={scrollToTop}
            className="w-13 h-13 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl shadow-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-center p-3.5 text-orange-600 animate-in fade-in zoom-in duration-300 hover:scale-110 active:scale-95"
            title="Cuộn lên đầu trang"
          >
            <ChevronUp size={28} strokeWidth={3} />
          </button>
        )}

        {/* Toggleable Settings Panel */}
        {showSettings && (
          <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
            {/* Advanced Font Size Switcher */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl p-1.5 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col items-center gap-1">
              <div className="p-1.5 text-slate-400 dark:text-slate-500 mb-1">
                 <Type size={16} />
              </div>
              {[
                { id: 'small', label: 'A', title: 'Cỡ chữ Nhỏ' },
                { id: 'medium', label: 'A', title: 'Cỡ chữ Vừa' },
                { id: 'large', label: 'A', title: 'Cỡ chữ Lớn' }
              ].map((opt) => (
                <button 
                  key={opt.id}
                  onClick={() => setFontSize(opt.id as FontSize)}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold transition-all ${
                    fontSize === opt.id 
                      ? 'bg-orange-500 text-white shadow-lg glow-orange' 
                      : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                  title={opt.title}
                  style={{ fontSize: opt.id === 'small' ? '12px' : opt.id === 'medium' ? '16px' : '20px' }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            
            {/* Theme Toggle Button */}
            <button 
              onClick={toggleTheme}
              className="w-13 h-13 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl shadow-2xl border border-slate-200 dark:border-slate-700 hover:scale-105 transition-transform text-slate-900 dark:text-white flex items-center justify-center p-3.5"
            >
              {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
            </button>
          </div>
        )}

        {/* Master Toggle Button (Icon < / >) */}
        <button 
          onClick={() => setShowSettings(!showSettings)}
          className={`w-13 h-13 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-2xl flex items-center justify-center p-3.5 transition-all hover:scale-110 active:scale-95 ${!showSettings ? 'glow-orange' : ''}`}
          title={showSettings ? "Ẩn thiết lập" : "Hiện thiết lập"}
        >
          {showSettings ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
        </button>
      </div>

      {/* Hero Section */}
      <header className={`relative min-h-[60vh] flex items-center justify-center p-6 z-10 transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto w-full text-center space-y-8">
          <div className="animate-fade-in inline-flex items-center gap-4 bg-slate-100/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-xl px-6 py-3 rounded-full shadow-lg">
            <img src={logoUrl} alt="Đức Phương Logo" className="h-8 md:h-10 object-contain" />
            <div className="h-6 w-[1px] bg-slate-300 dark:bg-white/20"></div>
            <span className="text-xs md:text-sm font-black tracking-[0.4em] uppercase text-slate-900 dark:text-white">Đức Phương Medical</span>
          </div>

          <div className="space-y-4">
             <h1 className="title-responsive font-black text-slate-900 dark:text-white uppercase italic tracking-tighter">
               BÁO CÁO <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-emerald-500 glow-orange">
                 ĐỐI CHIẾU
               </span>
             </h1>
             <p className="text-lg md:text-xl font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">
               Hệ thống Nuôi Nick Facebook
             </p>
          </div>

          <p className="text-sm md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-bold">
            So sánh giải pháp <span className="text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-lg">AutoNuoi</span> và <span className="text-emerald-600 dark:text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-lg">MinSoftware</span> cho doanh nghiệp Y tế.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
             {[
               { icon: <ShieldCheck size={24} />, label: "An Toàn", color: "rose", border: "border-rose-500/20" },
               { icon: <TrendingUp size={24} />, label: "Hiệu Suất", color: "amber", border: "border-amber-500/20" },
               { icon: <Award size={24} />, label: "Uy Tín", color: "emerald", border: "border-emerald-500/20" }
             ].map((item, i) => (
               <div key={i} className={`flex flex-col items-center gap-2 p-4 bg-white dark:bg-slate-900/40 backdrop-blur-3xl rounded-3xl border-2 ${item.border} w-32 md:w-36 hover-scale group transition-all shadow-md dark:shadow-none`}>
                  <div className={`p-3 bg-${item.color}-500/10 rounded-xl text-${item.color}-600 dark:text-${item.color}-500 group-hover:bg-${item.color}-500 group-hover:text-white transition-all`}>
                    {item.icon}
                  </div>
                  <span className="font-black text-[10px] md:text-xs tracking-tight uppercase text-slate-900 dark:text-white">{item.label}</span>
               </div>
             ))}
          </div>
        </div>
      </header>

      {/* Navigation - Enhanced with Floating Logo */}
      <nav className={`sticky top-0 z-50 transition-all duration-500 px-4 ${scrolled ? 'py-3' : 'py-6'}`}>
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-4">
          <div className="bg-white/90 dark:bg-slate-950/90 backdrop-blur-2xl p-2 rounded-full border border-slate-200 dark:border-white/10 shadow-2xl flex items-center gap-3 overflow-hidden transition-all duration-500">
            {/* Nav Logo Container */}
            <div className={`flex items-center gap-2 transition-all duration-500 ${scrolled ? 'pl-4 pr-2' : 'pl-6 pr-3'}`}>
               <img src={logoUrl} alt="Nav Logo" className={`transition-all duration-500 object-contain ${scrolled ? 'h-6 w-auto' : 'h-8 w-auto'}`} />
               <div className="h-5 w-[1px] bg-slate-300 dark:bg-white/20"></div>
            </div>

            {/* Tab Buttons Container */}
            <div className="flex gap-1.5 overflow-x-auto no-scrollbar pr-2">
              {[
                { id: 'compare', icon: <Activity size={16} />, label: 'Phân Tích', color: 'orange' },
                { id: 'strategy', icon: <Target size={16} />, label: 'Chiến Lược', color: 'blue' },
                { id: 'infra', icon: <Database size={16} />, label: 'Hạ Tầng', color: 'emerald' },
                { id: 'guide', icon: <PlayCircle size={16} />, label: 'Hướng Dẫn', color: 'rose' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-5 py-3 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2 shrink-0 ${
                    activeTab === tab.id
                      ? `bg-${tab.id === 'compare' ? 'orange-500' : tab.id === 'strategy' ? 'blue-600' : tab.id === 'infra' ? 'emerald-600' : 'rose-600'} text-white shadow-lg`
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 w-full z-10">
        {activeTab === 'compare' && (
          <div className="space-y-24 animate-fade-in">
            {/* Chart Section */}
            <section className="bg-white dark:bg-slate-900/60 rounded-[3rem] p-8 md:p-12 border-2 border-slate-100 dark:border-slate-800 shadow-xl">
               <div className="flex flex-col xl:flex-row gap-12 items-center">
                  <div className="w-full xl:w-3/5">
                    <div className="mb-8 text-center xl:text-left">
                      <h2 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white mb-2 tracking-tight uppercase italic">Năng Lực Hệ Thống</h2>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-bold">Đỏ: AutoNuoi | Xanh: MinSoftware</p>
                    </div>
                    <div className="h-[350px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={SCORE_CHART_DATA} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={theme === 'dark' ? '#1e293b' : '#f1f5f9'} />
                          <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{fill: theme === 'dark' ? '#94a3b8' : '#64748b', fontSize: 10, fontWeight: 800}}
                          />
                          <YAxis domain={[0, 10]} axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} />
                          <Tooltip
                            contentStyle={{ backgroundColor: theme === 'dark' ? '#0f172a' : '#ffffff', borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                            itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                          />
                          <Legend wrapperStyle={{ paddingTop: '20px', fontSize: '11px', fontWeight: 'bold' }} />
                          <Bar name="AutoNuoi (Thấp hơn)" dataKey="AutoNuoi" fill="#f43f5e" radius={[4, 4, 0, 0]} />
                          <Bar name="MinSoftware (Ưu tiên)" dataKey="MinSoftware" fill="#10b981" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="w-full xl:w-2/5 space-y-6">
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-3xl border-2 border-slate-100 dark:border-slate-800 flex items-center justify-between shadow-sm">
                      <div>
                        <p className="text-slate-400 dark:text-slate-500 text-[8px] font-black uppercase tracking-widest mb-1">AutoNuoi Avg</p>
                        <h4 className="text-4xl font-black text-rose-500">6.5</h4>
                      </div>
                      <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center border border-rose-500/20">
                        <AlertTriangle className="text-rose-500" size={24} />
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 p-8 rounded-[2rem] shadow-xl text-white transform hover:scale-[1.02] transition-all relative overflow-hidden">
                      <div className="relative z-10">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <p className="text-emerald-100 text-[8px] font-black uppercase tracking-widest mb-1">MinSoftware Avg</p>
                            <h4 className="text-5xl font-black tracking-tighter">9.0</h4>
                          </div>
                          <div className="bg-white/20 p-3 rounded-xl backdrop-blur-xl border border-white/30">
                            <Award className="text-white" size={28} />
                          </div>
                        </div>
                        <p className="text-sm font-bold text-emerald-50 leading-tight italic border-l-4 border-emerald-400 pl-4 py-2 uppercase tracking-wide">
                          Khuyên dùng cho Y tế
                        </p>
                      </div>
                    </div>
                  </div>
               </div>
            </section>

            <ComparisonGrid title="So Sánh Tài Chính" data={FINANCIAL_DATA} icon={<DollarSign size={20} />} />
            <ComparisonGrid title="Marketing & Seeding" data={MARKETING_DATA} icon={<Zap size={20} />} />
          </div>
        )}

        {activeTab === 'strategy' && (
          <div className="space-y-16 animate-fade-in">
             <div className="text-center max-w-4xl mx-auto space-y-4 mb-16">
                <div className="inline-block px-6 py-1.5 bg-blue-600 text-white rounded-full text-[9px] font-black uppercase tracking-widest shadow-xl">
                  Implementation Guide
                </div>
                <h2 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight uppercase italic">Chiến Lược Triển Khai</h2>
                <p className="text-base text-slate-500 dark:text-slate-400 font-bold max-w-2xl mx-auto leading-relaxed">
                  Lộ trình 3 giai đoạn khai thác 500 nick Facebook chuyên nghiệp.
                </p>
             </div>
             <StrategyTimeline />
          </div>
        )}

        {activeTab === 'infra' && (
          <div className="space-y-20 animate-fade-in">
            <div className="text-center max-w-4xl mx-auto space-y-4 mb-16">
              <div className="inline-block px-6 py-1.5 bg-emerald-600 text-white rounded-full text-[9px] font-black uppercase tracking-widest shadow-xl">
                Technical Setup
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight uppercase italic">Hạ Tầng & Dự Toán</h2>
            </div>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {INFRA_DATA.map((card, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border-2 border-slate-100 dark:border-slate-800 shadow-lg hover:border-emerald-500 transition-all">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center shadow-lg glow-green">
                      {idx === 0 ? <Users size={24} /> : idx === 1 ? <Globe size={24} /> : <Layers size={24} />}
                    </div>
                    <h4 className="text-base font-black text-slate-900 dark:text-white leading-tight uppercase tracking-tight">{card.title}</h4>
                  </div>
                  <div className="space-y-6">
                    {card.items.map((item, iIdx) => (
                      <div key={iIdx} className="space-y-1">
                        <div className="flex justify-between items-center">
                          <span className={`text-[10px] font-black uppercase tracking-widest ${item.color || 'text-slate-900 dark:text-white'}`}>{item.label}</span>
                          {item.price && <span className="text-[8px] font-black bg-slate-100 dark:bg-white text-slate-950 px-2.5 py-1 rounded-full uppercase">{item.price}</span>}
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug font-bold">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          </div>
        )}

        {activeTab === 'guide' && (
          <div className="space-y-20 animate-fade-in">
             <div className="text-center max-w-4xl mx-auto space-y-4 mb-16">
                <div className="inline-block px-6 py-1.5 bg-rose-600 text-white rounded-full text-[9px] font-black uppercase tracking-widest shadow-xl">
                  Instructional Hub
                </div>
                <h2 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight uppercase italic">Hướng Dẫn & Video</h2>
             </div>

             {/* Video Gallery */}
             <section className="space-y-10">
                <div className="flex items-center gap-4 border-l-4 border-rose-600 pl-4">
                   <div className="p-2.5 bg-rose-600 text-white rounded-xl shadow-lg glow-red">
                      <Youtube size={24} />
                   </div>
                   <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Kênh Video Hướng Dẫn</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                   {VIDEO_DATA.map((video) => (
                      <a
                        key={video.id}
                        href={`https://www.youtube.com/watch?v=${video.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-white dark:bg-slate-900 rounded-[1.5rem] overflow-hidden border-2 border-slate-100 dark:border-slate-800 shadow-md hover-scale transition-all"
                      >
                         <div className="relative aspect-video overflow-hidden">
                            <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                               <PlayCircle size={32} className="text-white" />
                            </div>
                            <div className="absolute bottom-1.5 right-1.5 bg-black/80 px-2 py-0.5 rounded text-[8px] font-bold text-white">
                               {video.duration}
                            </div>
                         </div>
                         <div className="p-4 space-y-2">
                            <h4 className="text-sm font-black text-slate-900 dark:text-white leading-tight line-clamp-2 uppercase group-hover:text-rose-600 transition-colors">{video.title}</h4>
                            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed line-clamp-2">{video.description}</p>
                         </div>
                      </a>
                   ))}
                </div>
             </section>

             {/* Articles Section */}
             <section className="space-y-10 pb-16">
                <div className="flex items-center gap-4 border-l-4 border-blue-600 pl-4">
                   <div className="p-2.5 bg-blue-600 text-white rounded-xl shadow-lg">
                      <BookOpen size={24} />
                   </div>
                   <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Cẩm Nang MaxCare</h3>
                </div>

                <div className="space-y-4">
                   {GUIDE_ARTICLES.map((article, idx) => (
                      <a
                        key={idx}
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-5 bg-white dark:bg-slate-900 p-6 rounded-[1.5rem] border-2 border-slate-100 dark:border-slate-800 shadow-md hover:border-blue-500 hover:bg-blue-50/10 transition-all group"
                      >
                         <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                            <Database size={24} />
                         </div>
                         <div className="flex-grow space-y-1">
                            <div className="flex items-center gap-3">
                               <span className="text-[8px] font-black bg-blue-100 dark:bg-blue-600 text-blue-700 dark:text-white px-2 py-0.5 rounded-full uppercase tracking-wider">{article.tag}</span>
                               <h4 className="text-base font-black text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">{article.title}</h4>
                            </div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-bold leading-relaxed line-clamp-1">{article.summary}</p>
                         </div>
                         <ChevronRight size={20} className="text-slate-300 dark:text-slate-600 group-hover:text-blue-500 transition-all" />
                      </a>
                   ))}
                </div>
             </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className={`transition-colors duration-500 pt-20 pb-12 px-6 border-t-8 border-orange-600 ${theme === 'dark' ? 'bg-black text-slate-200' : 'bg-slate-50 text-slate-800'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Column 1: Logo & Company Name */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-white p-2 rounded-xl shadow-lg border border-slate-200">
                  <img src={logoUrl} alt="Đức Phương Logo" className="h-14 w-auto object-contain" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white leading-tight tracking-tighter uppercase italic">
                    ĐỨC PHƯƠNG MEDICAL
                  </h2>
                  <p className="text-orange-600 font-black tracking-widest text-[8px] uppercase mt-1">CÔNG TY TNHH THIẾT BỊ Y TẾ ĐỨC PHƯƠNG</p>
                </div>
              </div>
              <p className="text-sm font-bold text-slate-500 dark:text-slate-400 leading-relaxed italic border-l-4 border-orange-500 pl-4 py-2">
                "Tiên phong trong việc cung cấp các giải pháp công nghệ Marketing hiện đại cho ngành thiết bị y tế tại Việt Nam."
              </p>
              
              {/* Social Media Links */}
              <div className="flex flex-wrap gap-3 pt-2">
                 {[
                   { icon: <Youtube size={20} />, link: "https://www.youtube.com/@ducphuongmedical", color: "hover:bg-red-600", title: "Youtube" },
                   { icon: <Facebook size={20} />, link: "https://www.facebook.com/ducphuongnguyenphuoctay", color: "hover:bg-blue-600", title: "Facebook" },
                   { icon: <Music size={20} />, link: "https://www.tiktok.com/@ducphuongmedical", color: "hover:bg-slate-950", title: "Tiktok" },
                   { icon: <MessageCircle size={20} />, link: "https://zalo.me/0938.062.808", color: "hover:bg-blue-500", title: "Zalo" }
                 ].map((social, i) => (
                   <a 
                     key={i} 
                     href={social.link} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className={`w-10 h-10 rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:text-white ${social.color}`}
                     title={social.title}
                   >
                     {social.icon}
                   </a>
                 ))}
              </div>
            </div>

            {/* Column 2: Address & Showroom */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 flex items-center gap-2">
                   <MapPin size={14} className="text-orange-600" /> Vị trí & Showroom
                </h4>
                <div className="space-y-4">
                  <div className="flex gap-4 group">
                    <div className="shrink-0 w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-600 transition-colors group-hover:bg-orange-600 group-hover:text-white">
                      1
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase">Trụ sở chính</p>
                      <p className="text-sm font-bold leading-relaxed">340 Âu Dương Lân, Phường Chánh Hưng, TP.HCM</p>
                    </div>
                  </div>
                  <div className="flex gap-4 group">
                    <div className="shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      2
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase">Showroom trưng bày</p>
                      <p className="text-sm font-bold leading-relaxed">12 Đông Hồ, Phường Tân Hòa, TP.HCM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Contact Details */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 flex items-center gap-2">
                   <Phone size={14} className="text-orange-600" /> Thông tin liên hệ
                </h4>
                <div className="space-y-4">
                  <a href="tel:0938062808" className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-orange-500 transition-all group">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase">Hotline kinh doanh</p>
                      <p className="text-base font-black">0938.062.808 - 0937.043.808</p>
                    </div>
                  </a>
                  <a href="mailto:ducphuongmedical@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-orange-500 transition-all group">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase">Email hỗ trợ</p>
                      <p className="text-sm font-black">ducphuongmedical@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-black text-slate-500 gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="uppercase tracking-widest text-center">© 2024 DUC PHUONG MEDICAL CO., LTD. ALL RIGHTS RESERVED.</p>
              <div className="h-4 w-[1px] bg-slate-300 dark:bg-white/10 hidden md:block"></div>
              <p className="text-orange-600 uppercase">Powered by Gemini AI Technology</p>
            </div>
            <div className="flex gap-6 opacity-60">
              <span className="flex items-center gap-2"><Sun size={12} /> THEME READY</span>
              <span className="flex items-center gap-2"><Smartphone size={14} /> OPTIMIZED</span>
              <span className="flex items-center gap-2"><ShieldCheck size={14} /> SECURE</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
