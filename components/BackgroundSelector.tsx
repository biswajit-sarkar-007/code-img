"use client";
import React from "react";
import { ChevronDown } from "lucide-react";
import { backgrounds } from "@/utils/utilities";
import OutsideClickHandler from "react-outside-click-handler";

interface BackgroundSelectorProps {
  background: string;
  setBackground: (background: string) => void;
}

function BackgroundSelector({
  background,
  setBackground,
}: BackgroundSelectorProps) {
  const [showDropdown, setShowDropdown] = React.useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleBackgroundChange = (newBackground: string) => {
    setBackground(newBackground);
    setShowDropdown(false); // Close dropdown after selection
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
      <div
        className="bg-selector relative flex flex-col items-center"
        onClick={toggleDropdown}
      >
        <p className="py-2 text-sm font-medium">Theme Selector</p>
        <div className="dropdown-title flex items-center gap-2 p-2 rounded-lg border border-gray-300 cursor-pointer">
          <div
            className="rounded-full w-6 h-6"
            style={{ background }}
          ></div>
          <ChevronDown className="w-4 h-4" />
        </div>
        {showDropdown && (
          <div className="dropdown-menu absolute top-12 left-0 bg-white p-2 shadow-md rounded-lg flex flex-wrap gap-2 w-max min-w-[80px] max-w-[150px]">
            {backgrounds.map((bg, i) => (
              <div
                key={i}
                onClick={() => handleBackgroundChange(bg)}
                className="w-6 h-6 rounded-full cursor-pointer border border-gray-200 hover:scale-110 transition"
                style={{ background: bg }}
              ></div>
            ))}
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
}

export default BackgroundSelector;
