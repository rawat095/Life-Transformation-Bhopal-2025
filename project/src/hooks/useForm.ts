import { useState } from 'react';
import { FormData } from '../types/form';

const initialFormData: FormData = {
  fullName: '',
  email: '',
  phone: '',
  dateOfBirth: '',
  gender: '',
  address: '',
  churchBackground: '',
  programChoice: '',
  emergencyContact: '',
  spiritualBackground: '',
};

export default function useForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // In a real application, this would be an API call to your MongoDB backend
      console.log('Form submitted:', formData);
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return {
    formData,
    submitted,
    handleChange,
    handleSubmit
  };
}