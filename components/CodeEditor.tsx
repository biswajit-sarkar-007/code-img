"use client";
import React, { useEffect } from "react";
import { Resizable } from "re-resizable";
import AceEditor from "react-ace";
 
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-typescript";

 
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-twilight";
import { getExtension, initialCode } from "@/utils/utilities";

interface CodeEditorProps {
  language: string;
  theme: string;
  icon: string;
  background?: string;
  currentPadding?: string;
}

function CodeEditor({
  language,
  theme,
  icon,
  background,
  currentPadding,
}: CodeEditorProps) {
  const [width, setWidth] = React.useState(1000);
  const [height, setHeight] = React.useState<number | null>(500);
  const [title, setTitle] = React.useState("App");
  const [code, setCode] = React.useState(initialCode);

  const [extension, setExtension] = React.useState(".js");

  useEffect(() => {
    // Update the extension when the language changes
    setExtension(getExtension(language));
  }, [language]);

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Extract the title without the extension
    const newTitle = e.target.value.split(".")[0];
    setTitle(newTitle);
  };

  // @ts-ignore
  const handleResize = (evt, direction, ref, pos) => {
    const newHeight = ref.style.height;
    setHeight(parseInt(newHeight, 10));
  };

  const updateSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <Resizable
    minHeight={300}
    minWidth="100%"
    maxWidth="80%"
    defaultSize={{
      width: "80%",
      height: height || 500,
    }}
    onResize={handleResize}
    className="resize-container relative w-full"
    style={{
      background: background,
    }}
  >
    <div
      className="code-block"
      style={{
        padding: currentPadding,
      }}
    >
      <div
        className="code-title h-[48px] px-2 md:px-4 flex items-center justify-between
        bg-black bg-opacity-80"
      >
        <div className="dots flex items-center gap-1">
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5656]"></div>
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ffbc6a]"></div>
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#67f772]"></div>
        </div>
  
        <div className="input-control w-full">
          <input
            type="text"
            value={`${title}${extension}`}
            onChange={(e) => handleTitleChange(e)}
            className="w-full text-[hsla(0,0%,100%,.6)] outline-none font-medium 
            text-center bg-transparent text-sm md:text-base"
            style={{
              lineHeight: "1.8rem",
            }}
          />
        </div>
  
        <div
          className="icon flex justify-center items-center p-1 bg-black
          bg-opacity-30 rounded-sm w-7 h-7 md:w-9 md:h-9"
        >
          <img src={icon} className="w-[22px] md:w-[33px]" alt="" />
        </div>
      </div>
  
      <AceEditor
        value={code}
        name="uniq_id_of_div"
        fontSize={14}
        theme={theme}
        mode={language.toLocaleLowerCase()}
        showGutter={false}
        wrapEnabled={true}
        height={`calc(${height}px - ${currentPadding} - ${currentPadding} - 48px)`}
        showPrintMargin={false}
        highlightActiveLine={false}
        editorProps={{ $blockScrolling: true }}
        className="ace-editor-container w-full"
        onChange={handleCodeChange}
      />
    </div>
  </Resizable>
  
  );
}

export default CodeEditor;
