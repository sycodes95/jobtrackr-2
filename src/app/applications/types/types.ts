

export interface ApplicationDetails {
  app_id?: number;
  user_id?: number;
  company_name: string;
  company_website: string;
  favorite: boolean;
  apply_date: string | Date | undefined;
  apply_method: 'Company Website' | 'Job Board' | 'Recruiter' | 'Referral' | 'Email' | 'Other' | '';
  apply_url: string;
  position: string;
  fit_rating: number | null;
  location: 'On Site' | 'Remote' | 'Hybrid' | 'Optional' | '';
  interview_date: Date | undefined | string;
  offer_amount: number | null;
  rejected: 'From Response' | 'After Interview' | 'After Offer' | 'Other' | '';
  contact_name: string;
  contact_email: string;
  contact_phone: string;
  notes: string;
}

