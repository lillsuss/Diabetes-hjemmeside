import { pgTable, serial, text, integer, date } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
	id: serial('id').primaryKey(),
	username: text('username').notNull().unique(),
	password: text('password').notNull()
});

export const diaryPost = pgTable('diary_post', {
	id: serial('id').primaryKey(),
	title: text('title').notNull(),
	content: text('content').notNull(),
	created_at: date('created_at').notNull().defaultNow(),
	updated_at: date('updated_at'),
	user_id: integer('user_id')
		.notNull()
		.references(() => user.id, { onDelete: 'cascade' }) // Cascade delete if user is deleted
});
