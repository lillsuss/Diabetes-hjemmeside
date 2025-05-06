ALTER TABLE "diary_post" ALTER COLUMN "created_at" SET DATA TYPE date;--> statement-breakpoint
ALTER TABLE "diary_post" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "diary_post" ALTER COLUMN "updated_at" SET DATA TYPE date;--> statement-breakpoint
ALTER TABLE "diary_post" ALTER COLUMN "updated_at" DROP NOT NULL;