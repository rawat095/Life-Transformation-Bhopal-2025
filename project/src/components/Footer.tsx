import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Life Transformation Ministries</h3>
            <p className="text-gray-400">Transforming lives through the power of faith and community in Bhopal.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                Bhopal, Madhya Pradesh, India
              </p>
              <p className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                +91 XXXXXXXXXX
              </p>
              <p className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                contact@lifetransformation.org
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Service Times</h3>
            <div className="text-gray-400">
              <p>Sunday Service: 10:00 AM</p>
              <p>Bible Study: Wednesday 6:30 PM</p>
              <p>Prayer Meeting: Friday 7:00 PM</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Life Transformation Ministries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}