import React from 'react';
import { AlertCircle, ChevronRight } from 'lucide-react';
import Header from './Header';
import SuccessMessage from './SuccessMessage';
import FormField from './FormField';
import { formFields } from '../config/formFields';
import useForm from '../hooks/useForm';

export default function RegistrationForm() {
  const { formData, submitted, handleChange, handleSubmit } = useForm();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Header />

        {submitted ? (
          <SuccessMessage />
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-xl p-8">
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {formFields.slice(0, 6).map(field => (
                  <FormField
                    key={field.name}
                    {...field}
                    value={formData[field.name]}
                    onChange={handleChange}
                  />
                ))}
              </div>

              {formFields.slice(6).map(field => (
                <FormField
                  key={field.name}
                  {...field}
                  value={formData[field.name]}
                  onChange={handleChange}
                />
              ))}

              <div className="bg-yellow-50 p-4 rounded-md">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <AlertCircle className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-yellow-800">Important Notice</h3>
                    <div className="mt-2 text-sm text-yellow-700">
                      <p>Please ensure all information provided is accurate. You will be contacted for an interview after submission.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  Submit Application
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}