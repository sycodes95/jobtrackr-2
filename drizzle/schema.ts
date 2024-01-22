import { selectOptions } from '@/app/applications/constants/constants';
import { boolean, date, integer, pgEnum, pgTable, serial, text, timestamp, uniqueIndex, varchar } from 'drizzle-orm/pg-core';

export const applyMethodEnum = pgEnum('apply_method', ['Company Website', 'Job Board', 'Recruiter', 'Referral', 'Email', 'Other', '']);

export const locationEnum = pgEnum('location', ['On Site', 'Remote', 'Hybrid', 'Optional', '']);

export const rejectedEnum = pgEnum('rejected', ['From Response', 'After Interview', 'After Offer', 'Other', '']);


export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  nickname: text('nickname'),
  picture: text('picture'),
  updated_at: timestamp('updated_at'),
  email: text('email').notNull(),
  email_verified: boolean('email_verified').notNull(),
  sub: text('sub').notNull(),
  sid: text('sid')
});

export const applications = pgTable('applications', {
  id: serial('id').primaryKey(),
  company_name: text('company_name').notNull(),
  company_website: text('company_website'),
  favorite: boolean('favorite'),
  apply_date: date('apply_date'),
  apply_method: applyMethodEnum('apply_method'),
  apply_url: text('apply_url'),
  position: text('position'),
  fit_rating: integer('fit_rating'),
  location: locationEnum('location'),
  interview_date: date('interview_date'),
  offer: boolean('offer'),
  offer_amount: integer('offer_amount'),
  offer_accepted: boolean('offer_accepted'),
  rejected: rejectedEnum('rejected'),
  contact_name: text('contact_name'),
  contact_email: text('contact_email'),
  contact_phone: text('contact_phone'),
  notes: text('notes'),
  updated_at: timestamp('updated_at'),
  user_id: integer('user_id').references(()=> users.id)

});



// declaring enum in database
// export const popularityEnum = pgEnum('popularity', ['unknown', 'known', 'popular']);


// export const countries = pgTable('countries', {
  // id: serial('id').primaryKey(),
  // name: varchar('name', { length: 256 }),
// }, (countries) => {
  // return {
    // nameIndex: uniqueIndex('name_idx').on(countries.name),
  // }
// });
// 
// export const cities = pgTable('cities', {
  // id: serial('id').primaryKey(),
  // name: varchar('name', { length: 256 }),
  // countryId: integer('country_id').references(() => countries.id),
  // popularity: popularityEnum('popularity'),
// });
// 