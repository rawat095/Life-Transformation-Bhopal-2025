import React from 'react';
import { School } from 'lucide-react';

export default function Header() {
  return (
    <div className="text-center mb-12">
      <div className="flex justify-center items-center gap-3 mb-4">
        <School className="h-12 w-12 text-purple-600" />
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-2">School of Power Ministries</h1>
      <h2 className="text-2xl text-gray-600">Registration Form - January 2025</h2>
    </div>
  );
}