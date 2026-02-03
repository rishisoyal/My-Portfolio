export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  company: string | null; // used only for honeypot
}