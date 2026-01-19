
export interface DamageReport {
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
  summary: string;
  recommendedActions: string[];
  estimatedUrgency: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  address: string;
  damageType: string;
  isEmergency: boolean;
}
