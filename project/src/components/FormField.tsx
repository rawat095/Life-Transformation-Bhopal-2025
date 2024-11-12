import React from 'react';
import { FormField as FormFieldType } from '../types/form';

interface FormFieldProps extends FormFieldType {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

export default function FormField({ 
  name, 
  label, 
  type, 
  placeholder, 
  options, 
  rows,
  value,
  onChange 
}: FormFieldProps) {
  const baseClassName = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500";
  
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      
      {type === 'select' ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required
          className={baseClassName}
        >
          <option value="">{placeholder || `Select ${label}`}</option>
          {options?.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          rows={rows || 3}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
          className={baseClassName}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
          className={baseClassName}
        />
      )}
    </div>
  );
}