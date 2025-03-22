 
import { GoogleGenerativeAI } from "@google/generative-ai"
import Image from 'next/image'
import { useState } from "react";


export default function Main() {

  

    const [image, setImage] = useState<File | null>(null);
    const [result, setResult] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [keywords, setKeywords] = useState<string[]>([]);
    const [relatedQuestions, setRelatedQuestions] = useState<string[]>([]);
  
    
      const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
          setImage(e.target.files[0]);
        }
      };
    
      const identifyImage = async (additionalPrompt: string = "") => {
        if (!image) return;
    
        setLoading(true);
        const genAI = new GoogleGenerativeAI(
          process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY!
        );
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
        try {
          const imageParts = await fileToGenerativePart(image);
          const result = await model.generateContent([
            `Identify this image and provide its name and important information including a brief explanation about that image. ${additionalPrompt}`,
            imageParts,
          ]);
          const response = await result.response;
          const text = response
            .text()
            .trim()
            .replace(/```/g, "")
            .replace(/\*\*/g, "")
            .replace(/\*/g, "")
            .replace(/-\s*/g, "")
            .replace(/\n\s*\n/g, "\n");
          setResult(text);
          generateKeywords(text);
          await generateRelatedQuestions(text);
        } catch (error) {
          console.error("Error identifying image:", error);
          if (error instanceof Error) {
            setResult(`Error identifying image: ${error.message}`);
          } else {
            setResult("An unknown error occurred while identifying the image.");
          }
        } finally {
          setLoading(false);
        }
      };
    
      const generateKeywords = (text: string) => {
        const words = text.split(/\s+/);
        const keywordSet = new Set<string>();
        words.forEach((word) => {
          if (
            word.length > 4 &&
            !["this", "that", "with", "from", "have"].includes(word.toLowerCase())
          ) {
            keywordSet.add(word);
          }
        });
        setKeywords(Array.from(keywordSet).slice(0, 5));
      };
    
      const regenerateContent = (keyword: string) => {
        identifyImage(`Focus more on aspects related to "${keyword}".`);
      };
    
      const generateRelatedQuestions = async (text: string) => {
        const genAI = new GoogleGenerativeAI(
          process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY!
        );
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
        try {
          const result = await model.generateContent([
            `Based on the following information about an image, generate 5 related questions that someone might ask to learn more about the subject:
    
            ${text}
    
            Format the output as a simple list of questions, one per line.`,
          ]);
          const response = await result.response;
          const questions = response.text().trim().split("\n");
          setRelatedQuestions(questions);
        } catch (error) {
          console.error("Error generating related questions:", error);
          setRelatedQuestions([]);
        }
      };
    
      const askRelatedQuestion = (question: string) => {
        identifyImage(
          `Answer the following question about the image: "${question}"`
        );
      };
    
      async function fileToGenerativePart(file: File): Promise<{
        inlineData: { data: string; mimeType: string };
      }> {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64data = reader.result as string;
            const base64Content = base64data.split(",")[1];
            resolve({
              inlineData: {
                data: base64Content,
                mimeType: file.type,
              },
            });
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      }
 


  return (
    <div>
       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="p-8">
                  <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
                    Identify Your Image
                  </h2>
                  <div className="mb-8">
                    <label
                      htmlFor="image-upload"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Upload an image
                    </label>
                    <input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition duration-150 ease-in-out"
                    />
                  </div>
                  {image && (
                    <div className="mb-8 flex justify-center">
                      <Image
                        src={URL.createObjectURL(image)}
                        alt="Uploaded image"
                        width={300}
                        height={300}
                        className="rounded-lg shadow-md"
                      />
                    </div>
                  )}
                  <button
                    onClick={() => identifyImage()}
                    disabled={!image || loading}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed font-medium text-lg"
                  >
                    {loading ? "Identifying..." : "Identify Image"}
                  </button>
                </div>
      
                {result && (
                  <div className="bg-blue-50 p-8 border-t border-blue-100">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">
                      Image Information:
                    </h3>
                    <div className="prose prose-blue max-w-none">
                      {result.split("\n").map((line, index) => {
                        if (
                          line.startsWith("Important Information:") ||
                          line.startsWith("Other Information:")
                        ) {
                          return (
                            <h4
                              key={index}
                              className="text-xl font-semibold mt-4 mb-2 text-blue-700"
                            >
                              {line}
                            </h4>
                          );
                        } else if (line.match(/^\d+\./) || line.startsWith("-")) {
                          return (
                            <li key={index} className="ml-4 mb-2 text-gray-700">
                              {line}
                            </li>
                          );
                        } else if (line.trim() !== "") {
                          return (
                            <p key={index} className="mb-2 text-gray-800">
                              {line}
                            </p>
                          );
                        }
                        return null;
                      })}
                    </div>
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold mb-2 text-blue-700">
                        Related Keywords:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {keywords.map((keyword, index) => (
                          <button
                            key={index}
                            onClick={() => regenerateContent(keyword)}
                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition duration-150 ease-in-out"
                          >
                            {keyword}
                          </button>
                        ))}
                      </div>
                    </div>
      
                    {relatedQuestions.length > 0 && (
                      <div className="mt-6">
                        <h4 className="text-lg font-semibold mb-2 text-blue-700">
                          Related Questions:
                        </h4>
                        <ul className="space-y-2">
                          {relatedQuestions.map((question, index) => (
                            <li key={index}>
                              <button
                                onClick={() => askRelatedQuestion(question)}
                                className="text-left w-full bg-blue-100 text-blue-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-200 transition duration-150 ease-in-out"
                              >
                                {question}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
      
              
            </main>
      
    </div>
  )
}

 