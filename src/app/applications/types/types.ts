export interface ApplicationDetails {
  company_name: FieldDetails<string>;
  company_website: FieldDetails<string>;
  favorite: FieldDetails<boolean>;
  apply_date: FieldDetails<Date | undefined>;
  apply_method: FieldDetails<'Company Website' | 'Job Board' | 'Recruiter' | 'Referral' | 'Email' | 'Other' | ''>;
  apply_URL: FieldDetails<string>;
  position: FieldDetails<string>;
  fit_rating: FieldDetails<number | null>;
  location: FieldDetails<'On Site' | 'Remote' | 'Hybrid' | 'Optional' | ''>;
  interview_date: FieldDetails<Date | undefined>;
  offer: FieldDetails<boolean>;
  offer_amount: FieldDetails<number | undefined>;
  offer_accepted: FieldDetails<boolean>;
  rejected: FieldDetails<'From Response' | 'After Interview' | 'After Offer' | 'Other' | ''>;
  contact_name: FieldDetails<string>;
  contact_email: FieldDetails<string>;
  contact_phone: FieldDetails<string>;
  notes: FieldDetails<string>;
}

export interface FieldDetails<T> {
  value: T;
  label: string;
  type: FieldType;
}

export type FieldType =
| 'inputText'
| 'checkbox'
| 'date'
| 'select'
| 'rating'
| 'inputNumber'
| 'textArea'