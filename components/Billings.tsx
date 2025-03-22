"use client"

import React, { useState } from 'react';

interface PlanProps {
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  lifetimePrice: string;
  features: string[];
  popular: boolean;
  color: string;
}

const BillingSection = () => {
  const [billingType, setBillingType] = useState<'monthly' | 'yearly' | 'lifetime'>('monthly');
  
  const plans: PlanProps[] = [
    {
      name: 'Basic',
      monthlyPrice: '$9.99',
      yearlyPrice: '$99.99',
      lifetimePrice: '$299.99',
      features: ['100 Images/month', 'Basic identification', 'Export results', 'Email support'],
      popular: false,
      color: 'blue'
    },
    {
      name: 'Pro',
      monthlyPrice: '$19.99',
      yearlyPrice: '$199.99',
      lifetimePrice: '$499.99',
      features: ['Unlimited Images', 'Advanced identification', 'API access', 'Priority support', 'Custom categories'],
      popular: true,
      color: 'purple'
    },
    {
      name: 'Enterprise',
      monthlyPrice: '$49.99',
      yearlyPrice: '$499.99',
      lifetimePrice: '$999.99',
      features: ['Unlimited Images', 'Advanced identification', 'API access', 'Dedicated support', 'Custom categories', 'White labeling', 'Team management'],
      popular: false,
      color: 'indigo'
    }
  ];

  const getPrice = (plan: PlanProps): string => {
    if (billingType === 'monthly') return plan.monthlyPrice;
    if (billingType === 'yearly') return plan.yearlyPrice;
    return plan.lifetimePrice;
  };
  
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Pricing</h2>
        <p className="mt-1 text-3xl sm:text-5xl font-extrabold text-gray-900">Choose the perfect plan</p>
        <p className="max-w-xl mt-4 mx-auto text-lg text-gray-500">Start identifying images with our powerful AI technology today</p>
      </div>

      <div className="mt-10 flex justify-center">
        <div className="relative inline-flex flex-wrap bg-gray-100 rounded-lg p-1">
          {['monthly', 'yearly', 'lifetime'].map(type => (
            <button
              key={type}
              onClick={() => setBillingType(type as 'monthly' | 'yearly' | 'lifetime')}
              className={`py-2 px-4 rounded-md transition-all duration-300 font-medium text-sm focus:outline-none ${
                billingType === type ? 'bg-white shadow-md' : 'bg-transparent'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:max-w-5xl lg:mx-auto">
        {plans.map(plan => (
          <div key={plan.name} className="relative flex flex-col rounded-2xl border border-gray-200 bg-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg z-10">
                Most Popular
              </div>
            )}
            <div className="p-6 flex-1">
              <h3 className="text-2xl font-extrabold text-gray-900">{plan.name}</h3>
              <p className="mt-4 text-gray-900">
                <span className="text-4xl font-extrabold">{getPrice(plan)}</span>
                <span className="ml-1 text-lg font-semibold">
                  {billingType === 'lifetime' ? '' : billingType === 'monthly' ? '/month' : '/year'}
                </span>
              </p>
              <ul className="mt-6 space-y-2">
                {plan.features.map(feature => (
                  <li key={feature} className="flex text-gray-700">
                    ✅ <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 mt-auto">
              <button className="w-full bg-indigo-600 text-white rounded-md py-3 font-medium hover:bg-indigo-700 transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-gray-500">Need a custom plan? <a href="#" className="text-indigo-600 font-medium hover:text-indigo-500">Contact us</a></p>
      </div>
    </div>
  );
};

export default BillingSection;
