"use client";
import React, { useState, useRef } from "react";
import CodeEditor from "@/components/CodeEditor";
import { backgrounds, languages, themes } from "@/utils/utilities";
import LanguageSelector from "@/components/LanguageSelector";
import ThemeSelector from "@/components/ThemeSelector";
import BackgroundSelector from "@/components/BackgroundSelector";
import PaddingSelector from "@/components/PaddingSelector";
import { Download } from "lucide-react";
import HeroSection from "../components/HeroSection";
import Footer from "@/components/Footer";
import html2canvas from "html2canvas";
import Main from "@/components/Main";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonial";
import BillingSection from "@/components/Billings";
import FAQ from "@/components/FAQ";

export default function Home() {
  const editorRef = useRef(null);

  const [language, setLanguage] = useState(languages[0].name);
  const [theme, setTheme] = useState(themes[0]);
  const [background, setBackground] = useState(backgrounds[0]);
  const [activeIcon, setActiveIcon] = useState(languages[0].icon);
  const [paddings, setPaddings] = useState(["1rem", "2rem", "3rem", "4rem"]);
  const [currentPadding, setCurrentPadding] = useState(paddings[2]);

  const exportPng = async () => {
    const editorElem = editorRef.current;

    if (editorElem) {
      //hide elemnets
      const handleElems = document.querySelectorAll(".handle") as any;
      const cursorElem = document.querySelector(".ace_cursor") as any;
      const codetitle = document.querySelector(".code-title") as any;
      const codeEditor = document.querySelector(".ace_editor") as any;

      handleElems.forEach((elem: any) => {
        elem.style.display = "none";
      });
      cursorElem.style.display = "none";
      codetitle.style.boxShadow = "none";
      codeEditor.style.boxShadow = "none";

      const canvas = await html2canvas(editorElem);
      const image = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");

      const link = document.createElement("a");
      link.download = "code.png";
      link.href = image;
      link.click();

      //show elements
      handleElems.forEach((elem: any) => {
        elem.style.display = "block";
      });
      cursorElem.style.display = "block";
      codetitle.style.boxShadow = "0 3px 10px rgba(0, 0, 0, 0.2)";
      codeEditor.style.boxShadow = "2px 3px 10px rgba(0, 0, 0, 0.2)";
    }
  };

  return (
    <main className=" h-[100vh] w-[100vw] flex flex-col items-center justify-between">
      <div className="h-[70vh] w-[80vw]">
        <HeroSection />

        <header
          className="mt-6 flex flex-wrap gap-4 md:gap-6 w-full max-w-[940px] p-3 md:p-5 top-0 left-1/2 transform -translate-x-1/2
   z-10 bg-[#c7e1dd] rounded border border-[#eababa] shadow-md ml-[50%]"
        >
          <LanguageSelector
            language={language}
            setLanguage={setLanguage}
            seActiveIcon={setActiveIcon}
          />
          <ThemeSelector theme={theme} setTheme={setTheme} />
          <BackgroundSelector
            background={background}
            setBackground={setBackground}
          />
          <PaddingSelector
            paddings={paddings}
            currentPadding={currentPadding}
            setCurrentPadding={setCurrentPadding}
          />

          <div className="export-btn self-center ml-auto w-full sm:w-auto">
            <button
              className="flex items-center justify-center gap-3 py-2 px-3 bg-blue-400 rounded-md text-sm text-blue-400 
        font-medium bg-opacity-10 hover:bg-opacity-80 hover:text-slate-50 transition-all duration-300 w-full sm:w-auto"
              onClick={exportPng}
            >
              <Download />
              Export PNG
            </button>
          </div>
        </header>

        <div
          className="code-editor-ref mr-24 mt-32 md:mt-56 mb-20 w-[80%]"
          ref={editorRef}
        >
          <CodeEditor
            language={language}
            theme={theme}
            background={background}
            icon={activeIcon}
            currentPadding={currentPadding}
          />
        </div>

        <Hero />

        <Main />

        <Testimonials />
        <BillingSection />
        <FAQ />

        <Footer />
      </div>
    </main>
  );
}
