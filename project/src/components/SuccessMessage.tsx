import React from 'react';
import { Send } from 'lucide-react';

export default function SuccessMessage() {
  return (
    <div className="bg-white rounded-lg shadow-xl p-8 text-center">
      <div className="flex justify-center mb-4">
        <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
          <Send className="h-8 w-8 text-green-600" />
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Registration Submitted!</h3>
      <p className="text-gray-600">Thank you for registering. We will contact you shortly.</p>
    </div>
  );
}