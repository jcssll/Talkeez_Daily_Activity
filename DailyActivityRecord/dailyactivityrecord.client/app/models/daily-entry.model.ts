export interface DailyEntry {
  id?: number;
  childId: number;
  submittedByUserId: number;
  date: string;
  mood: string;
  behaviors: Behavior[];
  pottyRecords: PottyRecord[];
  meals: Meal[];
  schedule: string[];
  notes: string;
  needs: string[];
  customFields: CustomField[];
}

export interface Behavior {
  type: string;
  reason: string;
}

export interface PottyRecord {
  time: string;
  status: string[];
}

export interface Meal {
  type: string;
  time: string;
  amount: string;
}

export interface CustomField {
  label: string;
  value: string;
}
