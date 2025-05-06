CREATE TABLE "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"password" text NOT NULL,
	CONSTRAINT "user_username_unique" UNIQUE("username")
);
