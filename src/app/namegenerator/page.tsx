'use client'

import React, { useState, ChangeEvent } from "react";
import { fonts } from "./data";

interface FancyTextContainerProps {
  charMap: { [key: string]: string };
  inputText: string;
  fontName: string;
}

const FancyTextGenerator: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

    const displayedText = inputText.trim() || "VIPs Combo";


  return (
    <div className="mx-auto max-w-6xl px-4">
      <h1 className="text-3xl mb-6">Fancy Font Generator</h1>
      <input
        className="text-black form-control fancytext mb-6 w-full px-4 py-2 rounded"
        name="text"
        placeholder="Type or paste text here.."
        value={inputText}
        onChange={handleInputChange}
      />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {Object.entries(fonts).map(([fontName, fontMap]) => (
         <FancyTextContainer
            key={fontName}
            charMap={fontMap}
            inputText={displayedText} // Pass displayedText instead of inputText
            fontName={fontName}
          />
        ))}
      </div>
    </div>
  );
};

const FancyTextContainer: React.FC<FancyTextContainerProps> = ({
  charMap,
  inputText,
  fontName,
}) => {
 const generateFancyText = (text: string, charMap: { [key: string]: string }) => {
  return text
    .split("")
    .map((char, index) => {
      const lowercaseChar = char.toLowerCase();
      if (charMap[lowercaseChar]) {
        return text[index].toUpperCase() === char ? charMap[lowercaseChar].toUpperCase() : charMap[lowercaseChar];
      } else {
        return char;
      }
    })
    .join("");
};


  const fancyText = generateFancyText(inputText, charMap);

  const handleCopy = () => {
    navigator.clipboard.writeText(fancyText);
  };

  return (
    <div className="copy-container bg-gray-100 p-4 rounded">
      <h2 className="text-xl mb-2 font-bold">{fontName}</h2>
      <div className="copyable-text text-lg mb-4">{fancyText}</div>
      <div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleCopy}
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default FancyTextGenerator;
