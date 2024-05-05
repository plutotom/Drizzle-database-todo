CREATE TABLE IF NOT EXISTS "edifice_console_dashboard_todos" (
	"id" serial PRIMARY KEY NOT NULL,
	"text" varchar(256),
	"description" text,
	"done" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp,
	"person" varchar(256),
	"date" date
);
