import { type EnrollmentRequest, type InsertEnrollmentRequest, type ContactMessage, type InsertContactMessage } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createEnrollmentRequest(request: InsertEnrollmentRequest): Promise<EnrollmentRequest>;
  getEnrollmentRequests(): Promise<EnrollmentRequest[]>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private enrollmentRequests: Map<string, EnrollmentRequest>;
  private contactMessages: Map<string, ContactMessage>;

  constructor() {
    this.enrollmentRequests = new Map();
    this.contactMessages = new Map();
  }

  async createEnrollmentRequest(insertRequest: InsertEnrollmentRequest): Promise<EnrollmentRequest> {
    const id = randomUUID();
    const request: EnrollmentRequest = {
      ...insertRequest,
      id,
      createdAt: new Date(),
      message: insertRequest.message || null,
      parentEmail: insertRequest.parentEmail || null,
      interests: insertRequest.interests || null,
    };
    this.enrollmentRequests.set(id, request);
    return request;
  }

  async getEnrollmentRequests(): Promise<EnrollmentRequest[]> {
    return Array.from(this.enrollmentRequests.values());
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = {
      ...insertMessage,
      id,
      createdAt: new Date(),
      subject: insertMessage.subject || null,
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }
}

export const storage = new MemStorage();
