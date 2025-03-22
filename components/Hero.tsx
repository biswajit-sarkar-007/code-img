import React from 'react';

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({
  title = "Identify Any Image in Seconds",
  subtitle = "Our AI-powered technology accurately recognizes objects, scenes, and concepts in your images with industry-leading precision.",
  ctaText = "Upload Image",
  onCtaClick = () => console.log("CTA clicked"),
}) => {
  return (
    <div className="w-full px-6 md:px-12 lg:px-20 relative bg-gradient-to-r from-blue-600 to-indigo-200 overflow-hidden flex flex-col-reverse lg:flex-row items-center">
      <div className="max-w-7xl mx-auto text-center lg:text-left py-12 md:py-16 lg:py-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
          <span className="block">{title}</span>
        </h1>
        <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-300 max-w-lg mx-auto lg:mx-0">
          {subtitle}
        </p>
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center sm:justify-center lg:justify-start">
          <button
            onClick={onCtaClick}
            className="w-full sm:w-auto flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-50 md:py-4 md:px-8 shadow"
          >
            {ctaText}
          </button>
          <button
            onClick={() => console.log("Secondary CTA clicked")}
            className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-4 flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:px-8 shadow"
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center h-64 sm:h-72 md:h-96 lg:h-full">
        <div className="w-full h-full bg-indigo-700 opacity-80 flex items-center justify-center">
          <svg
            className="w-16 h-16 sm:w-24 sm:h-24 text-white opacity-50"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;