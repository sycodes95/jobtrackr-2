DO $$ BEGIN
 CREATE TYPE "apply_method" AS ENUM('Company Website', 'Job Board', 'Recruiter', 'Referral', 'Email', 'Other', '');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "location" AS ENUM('On Site', 'Remote', 'Hybrid', 'Optional', '');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "rejected" AS ENUM('From Response', 'After Interview', 'After Offer', 'Other', '');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "applications" (
	"id" serial PRIMARY KEY NOT NULL,
	"company_name" text NOT NULL,
	"company_website" text,
	"favorite" boolean,
	"apply_date" date,
	"apply_method" "apply_method",
	"apply_url" text,
	"position" text,
	"fit_rating" integer,
	"location" "location",
	"interview_date" date,
	"offer_amount" integer,
	"rejected" "rejected",
	"contact_name" text,
	"contact_email" text,
	"contact_phone" text,
	"notes" text,
	"user_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"nickname" text,
	"picture" text,
	"updated_at" timestamp,
	"email" text NOT NULL,
	"email_verified" boolean NOT NULL,
	"sub" text NOT NULL,
	"sid" text
);
--> statement-breakpoint
DROP TABLE "cities";--> statement-breakpoint
DROP TABLE "countries";--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "applications" ADD CONSTRAINT "applications_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
