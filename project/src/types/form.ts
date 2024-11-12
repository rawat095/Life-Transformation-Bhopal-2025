export interface FormData {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  churchBackground: string;
  programChoice: string;
  emergencyContact: string;
  spiritualBackground: string;
}

export type FormField = {
  name: keyof FormData;
  label: string;
  type: string;
  placeholder?: string;
  options?: { value: string; label: string; }[];
  rows?: number;
};