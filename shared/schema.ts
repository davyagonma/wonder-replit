import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const enrollmentRequests = pgTable("enrollment_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  studentFirstName: text("student_first_name").notNull(),
  studentLastName: text("student_last_name").notNull(),
  studentBirthDate: text("student_birth_date").notNull(),
  gradeLevel: text("grade_level").notNull(),
  parentName: text("parent_name").notNull(),
  parentPhone: text("parent_phone").notNull(),
  parentEmail: text("parent_email"),
  interests: text("interests").array().default([]),
  message: text("message"),
  createdAt: timestamp("created_at").default(sql`now()`),
});

export const contactMessages = pgTable("contact_messages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  subject: text("subject"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").default(sql`now()`),
});

export const insertEnrollmentRequestSchema = createInsertSchema(enrollmentRequests).omit({
  id: true,
  createdAt: true,
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({
  id: true,
  createdAt: true,
});

export type InsertEnrollmentRequest = z.infer<typeof insertEnrollmentRequestSchema>;
export type EnrollmentRequest = typeof enrollmentRequests.$inferSelect;

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;
