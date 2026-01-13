
export type StatusType = 'success' | 'warning' | 'danger' | 'info';

export interface ComparisonPoint {
  criteria: string;
  autoNuoi: string;
  minSoftware: string;
  remark: string;
  isMinBetter?: boolean;
  status?: StatusType;
}

export interface ScoreData {
  name: string;
  AutoNuoi: number;
  MinSoftware: number;
  fill?: string;
}

export interface StrategyStage {
  title: string;
  duration: string;
  steps: string[];
  goal: string;
}

export interface TechnicalDetail {
  feature: string;
  description: string;
  impact: string;
  level: 'High' | 'Medium' | 'Low';
}

export interface CostAnalysis {
  item: string;
  type: 'Phát sinh' | 'Vận hành';
  autoNuoiEst: string;
  minSoftwareEst: string;
  importance: 'Cao' | 'Trung bình' | 'Thấp';
}

export interface InfraCard {
  title: string;
  items: {
    label: string;
    description: string;
    price?: string;
    color?: string;
  }[];
}

export interface InvestmentRow {
  item: string;
  unitPrice: string;
  quantity: string;
  total: string;
  isImportant?: boolean;
}
