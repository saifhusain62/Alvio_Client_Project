import React from 'react';
import { Smartphone, AppWindow, Layers } from 'lucide-react';

const MobileApps: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Mobile <span className="text-[#FF7E28]">Apps</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Creating powerful mobile experiences for iOS and Android
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Mobile App Development</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            We develop native and cross-platform mobile applications that deliver exceptional user experiences. 
            Our apps are designed to be intuitive, fast, and reliable.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Whether you need an iOS app, Android app, or both, we have the expertise to bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#FF7E28] rounded-lg flex items-center justify-center mb-4">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Native Apps</h3>
            <p className="text-gray-600">
              Platform-specific apps for optimal performance and user experience
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#FF7E28] rounded-lg flex items-center justify-center mb-4">
              <AppWindow className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Cross-Platform</h3>
            <p className="text-gray-600">
              Single codebase for both iOS and Android platforms
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#FF7E28] rounded-lg flex items-center justify-center mb-4">
              <Layers className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">App Maintenance</h3>
            <p className="text-gray-600">
              Ongoing support and updates to keep your app running smoothly
            </p>
          </div>
        </div>

        <div className="mt-12 bg-[#FF7E28] rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Let's Build Your App</h2>
          <p className="text-xl mb-8">Transform your idea into a reality</p>
          <button className="bg-white text-[#FF7E28] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileApps;