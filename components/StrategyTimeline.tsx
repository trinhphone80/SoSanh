
import React from 'react';
import { STRATEGY_STAGES } from '../constants';

export const StrategyTimeline: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {STRATEGY_STAGES.map((stage, idx) => (
        <div key={idx} className="relative group">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 h-full flex flex-col hover:border-blue-300 transition-colors">
            <div className="absolute -top-4 left-6 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
              Bước {idx + 1}
            </div>
            <div className="mt-4 mb-4">
              <h4 className="text-xl font-bold text-slate-800">{stage.title}</h4>
              <span className="text-sm text-blue-500 font-medium">{stage.duration}</span>
            </div>
            <ul className="space-y-3 mb-6 flex-grow">
              {stage.steps.map((step, sIdx) => (
                <li key={sIdx} className="flex gap-2 text-sm text-slate-600">
                  <span className="text-blue-500 font-bold">•</span>
                  {step}
                </li>
              ))}
            </ul>
            <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-100">
              <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">Mục tiêu</p>
              <p className="text-sm text-emerald-800">{stage.goal}</p>
            </div>
          </div>
          {idx < STRATEGY_STAGES.length - 1 && (
            <div className="hidden md:block absolute top-1/2 -right-4 translate-y-[-50%] z-10">
              <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
