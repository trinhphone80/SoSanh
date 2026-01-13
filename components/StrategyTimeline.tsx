
import React from 'react';
import { STRATEGY_STAGES } from '../constants';

export const StrategyTimeline: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {STRATEGY_STAGES.map((stage, idx) => (
        <div key={idx} className="relative group">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] shadow-xl border border-slate-200 dark:border-slate-800 h-full flex flex-col hover:border-blue-500 transition-colors">
            <div className="absolute -top-4 left-8 bg-blue-600 text-white px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
              Bước {idx + 1}
            </div>
            <div className="mt-4 mb-6">
              <h4 className="text-2xl font-black text-slate-900 dark:text-white leading-tight uppercase">{stage.title}</h4>
              <span className="text-sm text-blue-600 dark:text-blue-400 font-black uppercase tracking-widest mt-2 block">{stage.duration}</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              {stage.steps.map((step, sIdx) => (
                <li key={sIdx} className="flex gap-3 text-base text-slate-600 dark:text-slate-400 font-bold leading-relaxed">
                  <span className="text-blue-600 dark:text-blue-400 shrink-0 mt-1">•</span>
                  {step}
                </li>
              ))}
            </ul>
            <div className="bg-emerald-50 dark:bg-emerald-500/10 p-5 rounded-2xl border border-emerald-100 dark:border-emerald-500/20">
              <p className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-2">Mục tiêu chiến lược</p>
              <p className="text-base text-emerald-800 dark:text-emerald-200 font-bold leading-snug">{stage.goal}</p>
            </div>
          </div>
          {idx < STRATEGY_STAGES.length - 1 && (
            <div className="hidden md:block absolute top-1/2 -right-4 translate-y-[-50%] z-10">
              <div className="bg-white dark:bg-slate-800 p-2 rounded-full shadow-lg border border-slate-200 dark:border-slate-700">
                <svg className="w-6 h-6 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
