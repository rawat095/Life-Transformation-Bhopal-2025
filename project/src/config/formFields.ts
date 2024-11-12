import { FormField } from '../types/form';

export const formFields: FormField[] = [
  { name: 'fullName', label: 'Full Name', type: 'text' },
  { name: 'email', label: 'Email Address', type: 'email' },
  { name: 'phone', label: 'Phone Number', type: 'tel' },
  { name: 'dateOfBirth', label: 'Date of Birth', type: 'date' },
  {
    name: 'gender',
    label: 'Gender',
    type: 'select',
    options: [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
      { value: 'other', label: 'Prefer not to say' }
    ]
  },
  {
    name: 'programChoice',
    label: 'Program Choice',
    type: 'select',
    options: [
      { value: 'biblical-studies', label: 'Biblical Studies' },
      { value: 'ministry-leadership', label: 'Ministry Leadership' },
      { value: 'worship-ministry', label: 'Worship Ministry' },
      { value: 'pastoral-care', label: 'Pastoral Care' }
    ]
  },
  {
    name: 'address',
    label: 'Address',
    type: 'textarea',
    rows: 3
  },
  {
    name: 'churchBackground',
    label: 'Church Background',
    type: 'textarea',
    placeholder: 'Please share your church background and current involvement',
    rows: 3
  },
  {
    name: 'spiritualBackground',
    label: 'Spiritual Background',
    type: 'textarea',
    placeholder: 'Please share your spiritual journey and what led you to apply',
    rows: 4
  },
  {
    name: 'emergencyContact',
    label: 'Emergency Contact',
    type: 'text',
    placeholder: 'Name and phone number'
  }
];