
import React from 'react';
import { ComparisonPoint, StatusType } from '../types';
import { Sparkles, ArrowRight, ShieldAlert, CheckCircle, Info } from 'lucide-react';

interface ComparisonGridProps {
  title: string;
  data: ComparisonPoint[];
  icon: React.ReactNode;
}

const getStatusTheme = (status?: StatusType) => {
  switch (status) {
    case 'success': return { border: 'border-emerald-500', bg: 'bg-emerald-500/10', text: 'text-emerald-600 dark:text-emerald-400', icon: <CheckCircle className="text-emerald-500" /> };
    case 'warning': return { border: 'border-amber-500', bg: 'bg-amber-500/10', text: 'text-amber-600 dark:text-amber-400', icon: <ShieldAlert className="text-amber-500" /> };
    case 'danger': return { border: 'border-rose-500', bg: 'bg-rose-500/10', text: 'text-rose-600 dark:text-rose-400', icon: <ShieldAlert className="text-rose-500" /> };
    default: return { border: 'border-blue-500', bg: 'bg-blue-500/10', text: 'text-blue-600 dark:text-blue-400', icon: <Info className="text-blue-500" /> };
  }
};

export const ComparisonGrid: React.FC<ComparisonGridProps> = ({ title, data, icon }) => {
  return (
    <div className="mb-20">
      <div className="flex items-center gap-5 mb-10">
        <div className="p-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700">
          {icon}
        </div>
        <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight uppercase italic">{title}</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {data.map((item, idx) => {
          const theme = getStatusTheme(item.status);
          return (
            <div key={idx} className={`group bg-white dark:bg-slate-900/60 backdrop-blur-xl rounded-[2rem] border-2 ${theme.border} overflow-hidden hover-scale transition-all flex flex-col shadow-lg dark:shadow-none`}>
              <div className={`p-6 border-b-2 ${theme.border} ${theme.bg} flex justify-between items-center`}>
                <h4 className="text-xl font-black uppercase tracking-tight text-slate-900 dark:text-white">{item.criteria}</h4>
                {theme.icon}
              </div>
              
              <div className="p-6 space-y-8 flex-grow">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-400 dark:text-slate-500">AutoNuoi</span>
                  <p className="text-lg text-slate-700 dark:text-slate-300 font-bold leading-relaxed">{item.autoNuoi}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="h-[1px] flex-grow bg-slate-200 dark:bg-slate-800"></div>
                  <ArrowRight size={16} className="text-slate-400 dark:text-slate-600" />
                  <div className="h-[1px] flex-grow bg-slate-200 dark:bg-slate-800"></div>
                </div>

                <div className={`space-y-3 p-6 rounded-2xl border-2 ${item.isMinBetter ? 'border-emerald-500/50 bg-emerald-500/5' : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/50'}`}>
                  <div className="flex justify-between items-center">
                    <span className={`text-[10px] uppercase tracking-[0.3em] font-black ${item.isMinBetter ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-500'}`}>MinSoftware</span>
                    {item.isMinBetter && <Sparkles size={16} className="text-emerald-600 dark:text-emerald-400" />}
                  </div>
                  <p className="text-xl font-black text-slate-900 dark:text-white leading-tight">{item.minSoftware}</p>
                </div>
                
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex gap-3 items-start">
                  <div className="w-2.5 h-2.5 rounded-full bg-orange-500 shrink-0 mt-1 glow-orange"></div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 italic leading-relaxed">{item.remark}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
