import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60">
          <div className="max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Welcome to Life Transformation Ministries
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Transforming Lives Through Faith, Hope, and Love in Bhopal
              </p>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition-colors"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="text-xl font-bold mb-4">Sunday Service</h3>
              <p className="text-gray-600">Join us every Sunday at 10:00 AM for worship and the Word.</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-bold mb-4">Bible Study</h3>
              <p className="text-gray-600">Deepen your understanding through our Wednesday Bible studies.</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-bold mb-4">Prayer Meeting</h3>
              <p className="text-gray-600">Come together for powerful prayer sessions every Friday.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Sermons */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Video Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-1585858229735-cd08d8cb510d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80`}
                  alt="Sermon thumbnail"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">Sunday Message #{item}</h3>
                  <p className="text-gray-600 mb-4">Experience the transformative power of God's word through our latest message.</p>
                  <Link
                    to="/blogs"
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                  >
                    Watch Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}