import React from 'react';
import { Play } from 'lucide-react';

export default function VideoBlogs() {
  const videos = [
    {
      id: 1,
      title: "The Power of Prayer",
      description: "Learn how prayer can transform your life and deepen your relationship with God.",
      thumbnail: "https://images.unsplash.com/photo-1585858229735-cd08d8cb510d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      date: "2024-02-15"
    },
    {
      id: 2,
      title: "Understanding God's Love",
      description: "Discover the depth and breadth of God's unconditional love for you.",
      thumbnail: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      date: "2024-02-08"
    },
    {
      id: 3,
      title: "Walking in Faith",
      description: "Practical steps to strengthen your faith and trust in God's promises.",
      thumbnail: "https://images.unsplash.com/photo-1535132011086-b8818f016104?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      date: "2024-02-01"
    }
    // Add more videos as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Video Blogs</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-50 transition-opacity">
                  <Play className="h-12 w-12 text-white" />
                </button>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{video.title}</h2>
                <p className="text-gray-600 mb-4">{video.description}</p>
                <p className="text-sm text-gray-500">
                  {new Date(video.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}