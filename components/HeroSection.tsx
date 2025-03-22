"use client";
import React from 'react';
import codeToImg from '../public/icons/code-img.png'

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen w-[100%] flex relative overflow-hidden">
      <div className="absolute w-full h-2 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 top-0 left-0 z-10"></div>
      
      <nav className="absolute top-0 left-0 w-full py-8 px-16 flex justify-between items-center z-20">
        <div className="font-bold text-2xl tracking-tight text-gray-900">CodeImg</div>
        <div className="hidden md:flex gap-8">
          <a href="#" className="text-sm text-gray-600 font-medium hover:text-gray-900 transition-colors">Features</a>
          <a href="#" className="text-sm text-gray-600 font-medium hover:text-gray-900 transition-colors">Solutions</a>
          <a href="#" className="text-sm text-gray-600 font-medium hover:text-gray-900 transition-colors">Pricing</a>
          <a href="#" className="text-sm text-gray-600 font-medium hover:text-gray-900 transition-colors">Resources</a>
        </div>
        <a 
          href="#" 
          className="text-sm bg-gradient-to-r from-indigo-600 to-indigo-500 text-white py-2 px-3 rounded font-medium tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-200"
        >
          Started
        </a>
      </nav>
      
      <div className="w-full flex flex-col lg:flex-row z-10">
        <div className="flex-1 px-8 lg:px-16 py-24 lg:py-16 flex flex-col justify-center">
          <div className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-50 to-indigo-100 text-indigo-600 border border-indigo-200 mb-6">
            NEW RELEASE
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-gray-900 mb-6">
            Your only code snippt
          </h1>
          
          <p className="text-lg leading-relaxed text-gray-600 mb-8 max-w-xl">
             Make your code more professional for general purspose of use case share it with other
          </p>
          
          <div className="flex gap-4 mt-2">
            <button 
              className="text-sm bg-gradient-to-r from-indigo-600 to-indigo-500 text-white py-3 px-6 rounded font-medium tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-200"
            >
              Start Free Trial
            </button>
            <button 
              className="text-sm bg-white bg-opacity-80 backdrop-blur-lg border border-gray-200 text-gray-800 py-3 px-6 rounded font-medium transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-md hover:shadow-gray-100"
            >
              See Demo
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 mt-16">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-gray-900 tracking-tight">98%</span>
              <span className="text-sm text-gray-600 mt-1">Customer satisfaction</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-gray-900 tracking-tight">10k+</span>
              <span className="text-sm text-gray-600 mt-1">Active users</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-gray-900 tracking-tight">24/7</span>
              <span className="text-sm text-gray-600 mt-1">Expert support</span>
            </div>
          </div>
        </div>
        
        <div className="flex-1 relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-50 to-indigo-50">
          <div className="absolute w-64 h-64 rounded-full bg-indigo-400 opacity-40 filter blur-3xl -bottom-12 -right-12"></div>
          <div className="absolute w-52 h-52 rounded-full bg-purple-400 opacity-20 filter blur-3xl top-1/5 right-1/3"></div>
          <div className="absolute w-48 h-48 rounded-full bg-indigo-600 opacity-15 filter blur-3xl bottom-1/4 left-1/10"></div>
          
          <img 
            src={codeToImg.src}
            alt="Dashboard Preview" 
            className="w-4/5 h-auto rounded-lg shadow-2xl transform transition-transform duration-500 perspective-1000 rotate-y-minus-15 hover:rotate-y-minus-5 hover:-translate-y-2 z-10"
            style={{
              transform: "perspective(1000px) rotateY(-15deg)", 
              transition: "transform 0.5s ease"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "perspective(1000px) rotateY(-5deg) translateY(-10px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "perspective(1000px) rotateY(-15deg)";
            }}
          />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;