import React from 'react';
import { Code, Smartphone, Zap } from 'lucide-react';

const WebDevelopment: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Web <span className="text-[#FF7E28]">Development</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building modern, responsive, and scalable web applications
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Web Development Services</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            We specialize in creating custom web solutions that are tailored to your business needs. 
            Our experienced team uses the latest technologies to build fast, secure, and user-friendly websites.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            From simple landing pages to complex web applications, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#FF7E28] rounded-lg flex items-center justify-center mb-4">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Custom Development</h3>
            <p className="text-gray-600">
              Tailored solutions built specifically for your business requirements
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#FF7E28] rounded-lg flex items-center justify-center mb-4">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Responsive Design</h3>
            <p className="text-gray-600">
              Websites that look great on all devices, from desktop to mobile
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#FF7E28] rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Performance</h3>
            <p className="text-gray-600">
              Lightning-fast loading times and optimized performance
            </p>
          </div>
        </div>

        <div className="mt-12 bg-[#FF7E28] rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8">Let's build something amazing together</p>
          <button className="bg-white text-[#FF7E28] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;