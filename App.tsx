
import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell
} from 'recharts';
import { 
  DollarSign, ShieldCheck, Zap, Users, Award, 
  ArrowRight, CheckCircle2, AlertTriangle, Building2,
  Cpu, MousePointer2, Smartphone, TrendingUp, Info, Activity, Wallet, Database, Globe, Layers, Star, ExternalLink, ChevronRight, LayoutDashboard, Target
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
  INITIAL_INVESTMENT
} from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'compare' | 'strategy' | 'infra'>('compare');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-slate-200 flex flex-col">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-600/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-emerald-600/5 rounded-full blur-[100px]"></div>
      </div>

      {/* Hero Section */}
      <header className="relative min-h-[85vh] flex items-center justify-center p-6 z-10">
        <div className="max-w-7xl mx-auto w-full text-center space-y-10">
          <div className="animate-fade-in inline-flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-xl px-8 py-3 rounded-full shadow-xl">
            <Building2 size={24} className="text-orange-500 glow-orange" />
            <span className="text-sm md:text-base font-black tracking-[0.4em] uppercase text-white">Đức Phương Medical</span>
          </div>

          <div className="space-y-6">
             <h1 className="title-responsive font-black text-white uppercase italic tracking-tighter">
               BÁO CÁO <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-emerald-500 glow-orange">
                 ĐỐI CHIẾU
               </span>
             </h1>
             <p className="text-xl md:text-3xl font-black text-slate-500 uppercase tracking-widest">
               Hệ thống Nuôi Nick Facebook
             </p>
          </div>

          <p className="text-lg md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed font-bold">
            Phân tích sâu giữa <span className="text-white bg-slate-800 px-3 py-1 rounded-lg">AutoNuoi</span> và <span className="text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-lg">MinSoftware</span>. 
            Giải pháp an toàn cho thương hiệu Y tế.
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10 pt-8">
             {[
               { icon: <ShieldCheck size={36} />, label: "An Toàn", color: "rose", border: "border-rose-500/30" },
               { icon: <TrendingUp size={36} />, label: "Hiệu Suất", color: "amber", border: "border-amber-500/30" },
               { icon: <Award size={36} />, label: "Uy Tín", color: "emerald", border: "border-emerald-500/30" }
             ].map((item, i) => (
               <div key={i} className={`flex flex-col items-center gap-4 p-8 bg-slate-900/40 backdrop-blur-3xl rounded-[2.5rem] border-2 ${item.border} w-48 md:w-56 hover-scale group transition-all`}>
                  <div className={`p-5 bg-${item.color}-500/20 rounded-2xl text-${item.color}-500 group-hover:bg-${item.color}-500 group-hover:text-white transition-all shadow-lg`}>
                    {item.icon}
                  </div>
                  <span className="font-black text-lg tracking-tight uppercase text-white">{item.label}</span>
               </div>
             ))}
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-500 px-4 ${scrolled ? 'py-3' : 'py-6'}`}>
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-950/90 backdrop-blur-2xl p-2 rounded-full border border-white/10 shadow-2xl flex gap-2 overflow-x-auto no-scrollbar">
            {[
              { id: 'compare', icon: <Activity size={20} />, label: 'Phân Tích', color: 'orange' },
              { id: 'strategy', icon: <Target size={20} />, label: 'Chiến Lược', color: 'blue' },
              { id: 'infra', icon: <Database size={20} />, label: 'Hạ Tầng', color: 'emerald' }
            ].map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-4 rounded-full text-sm font-black uppercase tracking-widest transition-all flex items-center gap-3 shrink-0 ${
                  activeTab === tab.id ? `bg-${tab.color}-600 text-white shadow-lg` : 'text-slate-500 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-16 w-full z-10">
        {activeTab === 'compare' && (
          <div className="space-y-32 animate-fade-in">
            
            {/* Chart Section */}
            <section className="bg-slate-900/60 rounded-[3rem] p-10 md:p-20 border-2 border-slate-800 shadow-2xl">
               <div className="flex flex-col xl:flex-row gap-16 items-center">
                  <div className="w-full xl:w-3/5">
                    <div className="mb-12">
                      <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight uppercase italic">Năng Lực Hệ Thống</h2>
                      <p className="text-lg text-slate-500 font-bold">Biểu đồ so sánh các chỉ số vận hành cốt lõi.</p>
                    </div>
                    <div className="h-[400px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={SCORE_CHART_DATA} margin={{ top: 20, right: 30, left: 20, bottom: 0 }}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                          <XAxis 
                            dataKey="name" 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 800}} 
                          />
                          <YAxis domain={[0, 10]} axisLine={false} tickLine={false} tick={{fill: '#475569', fontSize: 12}} />
                          <Tooltip 
                            contentStyle={{ backgroundColor: '#0f172a', borderRadius: '16px', border: '1px solid #334155' }}
                            itemStyle={{ fontSize: '14px', fontWeight: 'bold' }}
                            cursor={{ fill: '#ffffff05' }}
                          />
                          <Bar name="AutoNuoi" dataKey="AutoNuoi" fill="#334155" radius={[8, 8, 0, 0]} />
                          <Bar name="MinSoftware" dataKey="MinSoftware" radius={[8, 8, 0, 0]}>
                            {SCORE_CHART_DATA.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  
                  <div className="w-full xl:w-2/5 space-y-8">
                    <div className="bg-slate-800/50 p-8 rounded-[2rem] border-2 border-slate-800 flex items-center justify-between group">
                      <div>
                        <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">AutoNuoi Score</p>
                        <h4 className="text-5xl font-black text-slate-600">6.5</h4>
                      </div>
                      <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center border border-amber-500/20">
                        <AlertTriangle className="text-amber-500" size={32} />
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 p-10 rounded-[2.5rem] shadow-2xl text-white transform hover:scale-[1.02] transition-all relative overflow-hidden">
                      <div className="relative z-10">
                        <div className="flex justify-between items-start mb-6">
                          <div>
                            <p className="text-emerald-200 text-[10px] font-black uppercase tracking-widest mb-1">MinSoftware Score</p>
                            <h4 className="text-6xl font-black tracking-tighter">9.0</h4>
                          </div>
                          <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-xl border border-white/30">
                            <Award className="text-white" size={36} />
                          </div>
                        </div>
                        <p className="text-lg font-bold text-emerald-50 leading-tight italic border-l-4 border-emerald-400 pl-4 py-2">
                          "Dẫn đầu tuyệt đối về kỹ thuật nuôi nick an toàn cho Đức Phương."
                        </p>
                      </div>
                    </div>
                  </div>
               </div>
            </section>

            {/* Technical Detail Section */}
            <section className="bg-rose-500/5 border-2 border-rose-500/20 p-10 md:p-20 rounded-[3rem]">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                <div className="flex items-center gap-6">
                  <div className="p-5 bg-rose-600 text-white rounded-2xl shadow-xl glow-red">
                    <Cpu size={40} />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase italic">Thông Số Kỹ Thuật</h3>
                    <p className="text-lg text-rose-400 font-bold mt-2">Nền tảng công nghệ giả lập người dùng thật.</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {TECHNICAL_DETAILS.map((detail, idx) => (
                  <div key={idx} className="bg-slate-950/50 p-8 rounded-[2rem] border-2 border-slate-800 shadow-xl hover:border-rose-500 transition-all group">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center text-rose-500 group-hover:bg-rose-600 group-hover:text-white transition-all">
                        <Layers size={24} />
                      </div>
                      <span className="text-[10px] px-3 py-1 rounded-full font-black uppercase tracking-widest bg-rose-500 text-white">
                        {detail.level}
                      </span>
                    </div>
                    <h5 className="font-black text-white text-lg mb-4 tracking-tight uppercase">{detail.feature}</h5>
                    <p className="text-sm text-slate-400 mb-6 font-bold leading-relaxed">{detail.description}</p>
                    <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex gap-3">
                       <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                       <p className="text-[11px] text-white font-black leading-tight uppercase tracking-tighter">{detail.impact}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <ComparisonGrid title="So Sánh Tài Chính" data={FINANCIAL_DATA} icon={<DollarSign size={24} />} />
            <ComparisonGrid title="Marketing & Seeding" data={MARKETING_DATA} icon={<Zap size={24} />} />
            
            {/* Cost Table Section */}
            <section className="bg-orange-600/90 rounded-[3rem] p-10 md:p-20 shadow-2xl text-white relative overflow-hidden">
               <div className="relative z-10 space-y-12">
                  <div className="flex items-center gap-6 mb-12">
                    <div className="p-5 bg-white text-orange-600 rounded-2xl shadow-xl">
                      <LayoutDashboard size={40} />
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-5xl font-black tracking-tight uppercase italic">Quản Trị Chi Phí</h3>
                      <p className="text-lg text-orange-100 font-bold mt-2 italic">Dự toán vận hành hàng tháng cho đội ngũ.</p>
                    </div>
                  </div>

                  <div className="overflow-x-auto rounded-[2.5rem] border-2 border-white/20 bg-slate-950/40 backdrop-blur-xl">
                    <table className="w-full text-left">
                      <thead className="bg-white/10">
                        <tr>
                          <th className="p-6 text-xs font-black uppercase tracking-widest text-orange-200">Hạng mục</th>
                          <th className="p-6 text-xs font-black uppercase tracking-widest text-orange-200">Loại</th>
                          <th className="p-6 text-xs font-black uppercase tracking-widest text-slate-400">AutoNuoi</th>
                          <th className="p-6 text-xs font-black uppercase tracking-widest text-emerald-400">MinSoftware</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        {COST_ANALYSIS.map((row, idx) => (
                          <tr key={idx} className="hover:bg-white/5 transition-all">
                            <td className="p-6">
                              <span className="text-lg font-black tracking-tight">{row.item}</span>
                            </td>
                            <td className="p-6">
                              <span className={`text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest ${
                                row.type === 'Phát sinh' ? 'bg-rose-500 text-white' : 'bg-emerald-500 text-white'
                              }`}>
                                {row.type}
                              </span>
                            </td>
                            <td className="p-6 text-slate-400 text-sm font-bold italic">{row.autoNuoiEst}</td>
                            <td className="p-6 text-white text-xl font-black">{row.minSoftwareEst}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
               </div>
            </section>
          </div>
        )}

        {activeTab === 'strategy' && (
          <div className="space-y-24 animate-fade-in">
             <div className="text-center max-w-4xl mx-auto space-y-6 mb-20">
                <div className="inline-block px-8 py-2 bg-blue-600 text-white rounded-full text-xs font-black uppercase tracking-widest shadow-xl">
                  Implementation Guide
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase italic leading-none">Chiến Lược Triển Khai</h2>
                <p className="text-xl text-slate-400 font-bold max-w-3xl mx-auto leading-relaxed">
                  Chuyển đổi 500 nick Facebook thành dàn cộng tác viên chuyên nghiệp cho thương hiệu.
                </p>
             </div>
             
             <StrategyTimeline />

             <div className="bg-slate-900/80 rounded-[3rem] p-12 md:p-24 border-2 border-slate-800 relative overflow-hidden shadow-2xl">
                <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
                   <div className="lg:w-2/5 space-y-8">
                      <div className="w-20 h-20 bg-orange-600 rounded-2xl flex items-center justify-center shadow-lg glow-orange">
                        <Award size={40} className="text-white" />
                      </div>
                      <h4 className="text-4xl font-black text-white leading-tight uppercase italic">Tâm Thế <br /><span className="text-orange-500">Uy Tín</span></h4>
                      <p className="text-xl text-slate-400 font-light leading-relaxed italic border-l-4 border-orange-600 pl-6 py-2">
                        "Ngành Y là ngành của niềm tin. Hệ thống giả lập phải đạt tới độ chân thực tuyệt đối."
                      </p>
                   </div>
                   <div className="lg:w-3/5 grid grid-cols-1 gap-6">
                      {[
                        { title: "Chuyên Nghiệp", text: "Profile bác sĩ, dược sĩ đầy đủ thông tin tin cậy." },
                        { title: "Tự Nhiên", text: "Tương tác hỏi-đáp thông minh, tránh dùng link spam thô." },
                        { title: "Bền Vững", text: "Xây dựng tài sản dàn nick sống khỏe hàng năm." }
                      ].map((item, i) => (
                        <div key={i} className="p-8 rounded-2xl border border-slate-800 bg-white/5 hover-scale transition-all">
                          <h5 className="text-lg font-black text-white mb-2 uppercase tracking-widest">{item.title}</h5>
                          <p className="text-base text-slate-400 font-bold">{item.text}</p>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        )}

        {activeTab === 'infra' && (
          <div className="space-y-32 animate-fade-in">
            <div className="text-center max-w-4xl mx-auto space-y-6 mb-20">
              <div className="inline-block px-8 py-2 bg-emerald-600 text-white rounded-full text-xs font-black uppercase tracking-widest shadow-xl">
                Technical Setup
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase italic leading-none">Hạ Tầng & Dự Toán</h2>
              <p className="text-xl text-slate-400 font-bold italic">Nguồn lực sẵn sàng cho chiến dịch phủ sóng.</p>
            </div>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {INFRA_DATA.map((card, idx) => (
                <div key={idx} className="bg-slate-900/80 p-10 rounded-[2.5rem] border-2 border-slate-800 shadow-xl hover:border-emerald-500 transition-all">
                  <div className="flex items-center gap-5 mb-10">
                    <div className="w-16 h-16 bg-emerald-500 text-white rounded-2xl flex items-center justify-center shadow-xl glow-green">
                      {idx === 0 ? <Users size={32} /> : idx === 1 ? <Globe size={32} /> : <Layers size={32} />}
                    </div>
                    <h4 className="text-xl font-black text-white leading-tight uppercase tracking-tight">{card.title}</h4>
                  </div>
                  <div className="space-y-8">
                    {card.items.map((item, iIdx) => (
                      <div key={iIdx} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className={`text-sm font-black uppercase tracking-widest ${item.color || 'text-white'}`}>{item.label}</span>
                          {item.price && <span className="text-[10px] font-black bg-white text-slate-950 px-3 py-1 rounded-full uppercase">{item.price}</span>}
                        </div>
                        <p className="text-base text-slate-400 leading-snug font-bold">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            <section className="bg-emerald-950 rounded-[3rem] p-12 md:p-24 relative overflow-hidden shadow-2xl border-b-8 border-emerald-500">
               <div className="relative z-10 space-y-16">
                  <div className="flex flex-col xl:flex-row justify-between items-center gap-10">
                    <div className="space-y-4 text-center xl:text-left">
                      <h3 className="text-4xl md:text-6xl font-black tracking-tight uppercase italic leading-none">Tổng Đầu Tư</h3>
                      <p className="text-xl text-emerald-300 font-bold italic">Ngân sách dự kiến giai đoạn khởi chạy 200 Nick VIA.</p>
                    </div>
                    <div className="bg-white text-slate-950 p-10 rounded-[3rem] shadow-huge text-center hover-scale transition-all">
                      <p className="text-xs uppercase font-black tracking-widest text-slate-500 mb-2">Gói Ngân Sách Đề Xuất</p>
                      <p className="text-5xl md:text-7xl font-black tracking-tighter tabular-nums">18.000.000 <span className="text-2xl uppercase">đ</span></p>
                    </div>
                  </div>

                  <div className="overflow-x-auto rounded-[2rem] border-2 border-white/10 bg-slate-950/40 backdrop-blur-xl">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-white/10 bg-white/5">
                          <th className="p-8 text-xs font-black uppercase tracking-widest text-emerald-400">Hạng Mục</th>
                          <th className="p-8 text-xs font-black uppercase tracking-widest text-emerald-400 text-center">SL</th>
                          <th className="p-8 text-xs font-black uppercase tracking-widest text-emerald-400 text-right">Thành Tiền</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {INITIAL_INVESTMENT.map((row, idx) => (
                          <tr key={idx} className="hover:bg-white/5 transition-all group">
                            <td className="p-8">
                              <div className="flex items-center gap-4">
                                {row.isImportant && <div className="w-3 h-3 rounded-full bg-orange-500 glow-orange"></div>}
                                <span className="text-xl font-extrabold">{row.item}</span>
                              </div>
                            </td>
                            <td className="p-8 text-center text-lg text-emerald-100 font-bold">{row.quantity}</td>
                            <td className="p-8 text-right text-2xl font-black text-white">{row.total}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
               </div>
            </section>
          </div>
        )}
      </main>

      <footer className="bg-black pt-24 pb-16 px-6 text-white border-t-8 border-orange-600">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-white text-black rounded-2xl flex items-center justify-center shadow-xl">
                <Building2 size={32} />
              </div>
              <div>
                <span className="font-black text-3xl tracking-tighter uppercase italic">Đức Phương</span>
                <p className="text-orange-500 font-black tracking-widest text-[10px] uppercase mt-1">Medical Equipment</p>
              </div>
            </div>
            <p className="text-xl text-slate-500 font-bold max-w-sm text-center md:text-left">
              Đột phá công nghệ Marketing ngành Thiết bị Y tế.
            </p>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs font-black text-slate-600 gap-6">
            <p className="uppercase tracking-widest text-center">© 2024 Duc Phuong Medical Device Co. All rights reserved.</p>
            <div className="flex gap-8 opacity-50">
              <span className="flex items-center gap-2"><Smartphone size={16} /> MOBILE OPTIMIZED</span>
              <span className="flex items-center gap-2"><ShieldCheck size={16} /> SECURE DATA</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
