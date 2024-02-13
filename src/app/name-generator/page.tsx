"use client";

import React, { useState, ChangeEvent } from "react";
import { History } from 'lucide-react'; 
import { Gem } from 'lucide-react';
import {
  fonts,
  strikeThrough,
  tildeStrikeThrough,
  underline,
  doubleUnderline,
  slashThrough,
  stinky,
  heartsBetween,
  arrowBelow,
  crossAboveBelow,
} from "./data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "../../components/ui/input";

const combinedCharMap: any = {
  ...fonts,
  strikeThrough: strikeThrough,
  tildeStrikeThrough: tildeStrikeThrough,
  underline: underline,
  doubleUnderline: doubleUnderline,
  slashThrough: slashThrough,
  stinky: stinky,
  heartsBetween: heartsBetween,
  arrowBelow: arrowBelow,
  crossAboveBelow: crossAboveBelow,
};

interface FancyTextContainerProps {
  charMap: any;
  inputText: string;
  fontName: string;
}

const FancyTextGenerator: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [visibleFonts, setVisibleFonts] = useState<number>(12);

  const handleShowMoreFonts = () => {
    setVisibleFonts((prevVisibleFonts) => prevVisibleFonts + 12);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };
  const displayedText = inputText.trim() || "VIPs Combo";
  return (
    <div className="px-4 mt-4 mb-3">
      <div className="border border-zinc-200 shadow-md bg-transparent p-4 mb-3 rounded-2xl pt-8 gap-2 flex flex-col text-center justify-center">
        <p className="text-3xl md:text-4xl font-normal text-[#7b33f1] text-center">
          Fancy Text Generator for Elegant and Formal Fonts
        </p>
        <p className="text-sm font-normal text-center text-[#5F5F5F] dark:text-white">
          An assortment of fancy text fonts to class up your content for any
          audience.
        </p>
        <div className="flex gap-2 justify-center items-center">
          <div className="flex flex-row gap-0.5 text-center">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className="star-with-partial-fill-root-0-2-168"
            >
              <defs>
                <linearGradient id="qt_star_gradient_-1">
                  <stop offset="80%" stop-color="var(--x-accent-1-1)"></stop>
                  <stop offset="80%" stop-color="white" stop-opacity="1"></stop>
                </linearGradient>
              </defs>
              <path
                d="M5.40625 5.48438C5.52083 5.46354 5.61979 5.42188 5.70312 5.35938C5.79688 5.28646 5.86979 5.20312 5.92188 5.10938L7.54688 1.625C7.64062 1.42708 7.79167 1.32812 8 1.32812C8.20833 1.32812 8.35938 1.42708 8.45312 1.625L10.0781 5.10938C10.1302 5.20312 10.1979 5.28646 10.2812 5.35938C10.375 5.42188 10.4792 5.46354 10.5938 5.48438L14.2344 6.03125C14.4427 6.0625 14.5781 6.18229 14.6406 6.39062C14.7031 6.59896 14.6615 6.77604 14.5156 6.92188L11.8594 9.64062C11.7865 9.71354 11.7344 9.80208 11.7031 9.90625C11.6719 10.0104 11.6615 10.1146 11.6719 10.2188L12.2969 14.0469C12.3385 14.2656 12.276 14.4375 12.1094 14.5625C11.9427 14.6875 11.7656 14.7031 11.5781 14.6094L8.32812 12.8125C8.22396 12.75 8.11458 12.7188 8 12.7188C7.88542 12.7188 7.77604 12.75 7.67188 12.8125L4.42188 14.6094C4.23438 14.7031 4.05729 14.6875 3.89062 14.5625C3.72396 14.4375 3.66146 14.2656 3.70312 14.0469L4.32812 10.2188C4.34896 10.1146 4.34375 10.0104 4.3125 9.90625C4.28125 9.80208 4.22396 9.71354 4.14062 9.64062L1.48438 6.92188C1.33854 6.77604 1.29688 6.59896 1.35938 6.39062C1.42188 6.18229 1.55729 6.0625 1.76562 6.03125L5.40625 5.48438Z"
                fill="#c209c1"
                stroke-width="1"
                stroke="var(--x-accent-1-1)"
              ></path>
            </svg>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className="star-with-partial-fill-root-0-2-168"
            >
              <defs>
                <linearGradient id="qt_star_gradient_-1">
                  <stop offset="80%" stop-color="var(--x-accent-1-1)"></stop>
                  <stop offset="80%" stop-color="white" stop-opacity="1"></stop>
                </linearGradient>
              </defs>
              <path
                d="M5.40625 5.48438C5.52083 5.46354 5.61979 5.42188 5.70312 5.35938C5.79688 5.28646 5.86979 5.20312 5.92188 5.10938L7.54688 1.625C7.64062 1.42708 7.79167 1.32812 8 1.32812C8.20833 1.32812 8.35938 1.42708 8.45312 1.625L10.0781 5.10938C10.1302 5.20312 10.1979 5.28646 10.2812 5.35938C10.375 5.42188 10.4792 5.46354 10.5938 5.48438L14.2344 6.03125C14.4427 6.0625 14.5781 6.18229 14.6406 6.39062C14.7031 6.59896 14.6615 6.77604 14.5156 6.92188L11.8594 9.64062C11.7865 9.71354 11.7344 9.80208 11.7031 9.90625C11.6719 10.0104 11.6615 10.1146 11.6719 10.2188L12.2969 14.0469C12.3385 14.2656 12.276 14.4375 12.1094 14.5625C11.9427 14.6875 11.7656 14.7031 11.5781 14.6094L8.32812 12.8125C8.22396 12.75 8.11458 12.7188 8 12.7188C7.88542 12.7188 7.77604 12.75 7.67188 12.8125L4.42188 14.6094C4.23438 14.7031 4.05729 14.6875 3.89062 14.5625C3.72396 14.4375 3.66146 14.2656 3.70312 14.0469L4.32812 10.2188C4.34896 10.1146 4.34375 10.0104 4.3125 9.90625C4.28125 9.80208 4.22396 9.71354 4.14062 9.64062L1.48438 6.92188C1.33854 6.77604 1.29688 6.59896 1.35938 6.39062C1.42188 6.18229 1.55729 6.0625 1.76562 6.03125L5.40625 5.48438Z"
                fill="#c209c1"
                stroke-width="1"
                stroke="var(--x-accent-1-1)"
              ></path>
            </svg>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className="star-with-partial-fill-root-0-2-168"
            >
              <defs>
                <linearGradient id="qt_star_gradient_-1">
                  <stop offset="80%" stop-color="var(--x-accent-1-1)"></stop>
                  <stop offset="80%" stop-color="white" stop-opacity="1"></stop>
                </linearGradient>
              </defs>
              <path
                d="M5.40625 5.48438C5.52083 5.46354 5.61979 5.42188 5.70312 5.35938C5.79688 5.28646 5.86979 5.20312 5.92188 5.10938L7.54688 1.625C7.64062 1.42708 7.79167 1.32812 8 1.32812C8.20833 1.32812 8.35938 1.42708 8.45312 1.625L10.0781 5.10938C10.1302 5.20312 10.1979 5.28646 10.2812 5.35938C10.375 5.42188 10.4792 5.46354 10.5938 5.48438L14.2344 6.03125C14.4427 6.0625 14.5781 6.18229 14.6406 6.39062C14.7031 6.59896 14.6615 6.77604 14.5156 6.92188L11.8594 9.64062C11.7865 9.71354 11.7344 9.80208 11.7031 9.90625C11.6719 10.0104 11.6615 10.1146 11.6719 10.2188L12.2969 14.0469C12.3385 14.2656 12.276 14.4375 12.1094 14.5625C11.9427 14.6875 11.7656 14.7031 11.5781 14.6094L8.32812 12.8125C8.22396 12.75 8.11458 12.7188 8 12.7188C7.88542 12.7188 7.77604 12.75 7.67188 12.8125L4.42188 14.6094C4.23438 14.7031 4.05729 14.6875 3.89062 14.5625C3.72396 14.4375 3.66146 14.2656 3.70312 14.0469L4.32812 10.2188C4.34896 10.1146 4.34375 10.0104 4.3125 9.90625C4.28125 9.80208 4.22396 9.71354 4.14062 9.64062L1.48438 6.92188C1.33854 6.77604 1.29688 6.59896 1.35938 6.39062C1.42188 6.18229 1.55729 6.0625 1.76562 6.03125L5.40625 5.48438Z"
                fill="#c209c1"
                stroke-width="1"
                stroke="var(--x-accent-1-1)"
              ></path>
            </svg>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className="star-with-partial-fill-root-0-2-168"
            >
              <defs>
                <linearGradient id="qt_star_gradient_-1">
                  <stop offset="80%" stop-color="var(--x-accent-1-1)"></stop>
                  <stop offset="80%" stop-color="white" stop-opacity="1"></stop>
                </linearGradient>
              </defs>
              <path
                d="M5.40625 5.48438C5.52083 5.46354 5.61979 5.42188 5.70312 5.35938C5.79688 5.28646 5.86979 5.20312 5.92188 5.10938L7.54688 1.625C7.64062 1.42708 7.79167 1.32812 8 1.32812C8.20833 1.32812 8.35938 1.42708 8.45312 1.625L10.0781 5.10938C10.1302 5.20312 10.1979 5.28646 10.2812 5.35938C10.375 5.42188 10.4792 5.46354 10.5938 5.48438L14.2344 6.03125C14.4427 6.0625 14.5781 6.18229 14.6406 6.39062C14.7031 6.59896 14.6615 6.77604 14.5156 6.92188L11.8594 9.64062C11.7865 9.71354 11.7344 9.80208 11.7031 9.90625C11.6719 10.0104 11.6615 10.1146 11.6719 10.2188L12.2969 14.0469C12.3385 14.2656 12.276 14.4375 12.1094 14.5625C11.9427 14.6875 11.7656 14.7031 11.5781 14.6094L8.32812 12.8125C8.22396 12.75 8.11458 12.7188 8 12.7188C7.88542 12.7188 7.77604 12.75 7.67188 12.8125L4.42188 14.6094C4.23438 14.7031 4.05729 14.6875 3.89062 14.5625C3.72396 14.4375 3.66146 14.2656 3.70312 14.0469L4.32812 10.2188C4.34896 10.1146 4.34375 10.0104 4.3125 9.90625C4.28125 9.80208 4.22396 9.71354 4.14062 9.64062L1.48438 6.92188C1.33854 6.77604 1.29688 6.59896 1.35938 6.39062C1.42188 6.18229 1.55729 6.0625 1.76562 6.03125L5.40625 5.48438Z"
                fill="#c209c1"
                stroke-width="1"
                stroke="var(--x-accent-1-1)"
              ></path>
            </svg>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className="star-with-partial-fill-root-0-2-168"
            >
              <defs>
                <linearGradient id="qt_star_gradient_-1">
                  <stop offset="80%" stop-color="var(--x-accent-1-1)"></stop>
                  <stop offset="80%" stop-color="white" stop-opacity="1"></stop>
                </linearGradient>
              </defs>
              <path
                d="M5.40625 5.48438C5.52083 5.46354 5.61979 5.42188 5.70312 5.35938C5.79688 5.28646 5.86979 5.20312 5.92188 5.10938L7.54688 1.625C7.64062 1.42708 7.79167 1.32812 8 1.32812C8.20833 1.32812 8.35938 1.42708 8.45312 1.625L10.0781 5.10938C10.1302 5.20312 10.1979 5.28646 10.2812 5.35938C10.375 5.42188 10.4792 5.46354 10.5938 5.48438L14.2344 6.03125C14.4427 6.0625 14.5781 6.18229 14.6406 6.39062C14.7031 6.59896 14.6615 6.77604 14.5156 6.92188L11.8594 9.64062C11.7865 9.71354 11.7344 9.80208 11.7031 9.90625C11.6719 10.0104 11.6615 10.1146 11.6719 10.2188L12.2969 14.0469C12.3385 14.2656 12.276 14.4375 12.1094 14.5625C11.9427 14.6875 11.7656 14.7031 11.5781 14.6094L8.32812 12.8125C8.22396 12.75 8.11458 12.7188 8 12.7188C7.88542 12.7188 7.77604 12.75 7.67188 12.8125L4.42188 14.6094C4.23438 14.7031 4.05729 14.6875 3.89062 14.5625C3.72396 14.4375 3.66146 14.2656 3.70312 14.0469L4.32812 10.2188C4.34896 10.1146 4.34375 10.0104 4.3125 9.90625C4.28125 9.80208 4.22396 9.71354 4.14062 9.64062L1.48438 6.92188C1.33854 6.77604 1.29688 6.59896 1.35938 6.39062C1.42188 6.18229 1.55729 6.0625 1.76562 6.03125L5.40625 5.48438Z"
                fill="#c209c1"
                stroke-width="1"
                stroke="var(--x-accent-1-1)"
              ></path>
            </svg>
          </div>
          <p>4.8</p>
          <p className="text-[#5F5F5F] text-[12.5px] mt-0.5">(1,284)</p>
        </div>

        <Input
          className="text-black  dark:text-white border-[#888888] focus:border-[#7b33f1] border-2 mt-2 rounded-xl text-md placeholder:text-[#5F5F5F] py-7 form-control fancytext mb-1 px-4"
          name="text"
          placeholder="Type or paste text here.."
          value={inputText}
          onChange={handleInputChange}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-2 md:gap-10">
        <div className="">
          <p className="font-bold">Select a font style</p>
          <div className="mt-3 flex flex-row md:flex-col flex-wrap gap-y-2 font-bold">
          <div className="bg-white border border-zinc-400 shadow-md flex px-6 py-2 text-black gap-2 rounded-full">
          <History />  Recent
            </div>
              <div className="bg-white border border-zinc-400 shadow-md flex px-6 py-2 text-black gap-2 rounded-full">
              All
            </div>
              <div className="bg-white border border-zinc-400 shadow-md flex px-6 py-2 text-black gap-2 rounded-full">
              Cool
            </div>
              <div className="bg-white border border-zinc-400 shadow-md flex px-6 py-2 text-black gap-2 rounded-full">
              <Gem /> Fancy
            </div>
              <div className="bg-white border border-zinc-400 shadow-md flex px-6 py-2 text-black gap-2 rounded-full">
              Cursive
            </div>
               <div className="bg-white border border-zinc-400 shadow-md flex px-6 py-2 text-black gap-2 rounded-full">
              Small
            </div>
              <div className="bg-white border border-zinc-400 shadow-md flex px-6 py-2 text-black gap-2 rounded-full">
              Bold
            </div>
              <div className="bg-white border border-zinc-400 shadow-md flex px-6 py-2 text-black gap-2 rounded-full">
              Glitch
            </div>
              <div className="bg-white border border-zinc-400 shadow-md flex px-6 py-2 text-black gap-2 rounded-full">
              letter cases
            </div>
              <div className="bg-white border border-zinc-400 shadow-md flex px-6 py-2 text-black gap-2 rounded-full">
              Symbol text
            </div>
              <div className="bg-white border border-zinc-400 shadow-md flex px-6 py-2 text-black gap-2 rounded-full">
              Text art
            </div>
            </div>
        </div>
        <div className="w-full col-span-5">
          {Object.entries(combinedCharMap)
            .slice(0, visibleFonts)
            .map(([fontName, fontMap]) => (
              <FancyTextContainer
                key={fontName}
                charMap={fontMap}
                inputText={displayedText}
                fontName={fontName}
              />
            ))}
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        {visibleFonts < Object.keys(combinedCharMap).length && (
          <button
            className="text-white font-bold rounded-xl px-4 py-2 bg-[#c209c1] mt-4"
            onClick={handleShowMoreFonts}
          >
            Load More Fonts
          </button>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

// FancyTextContainer component
const FancyTextContainer: React.FC<FancyTextContainerProps> = ({
  charMap,
  inputText,
  fontName,
}) => {
  // Function to generate fancy text
  const generateFancyText = (text: string): string => {
    if (typeof charMap === "function") {
      return charMap(text);
    } else {
      return text
        .split("")
        .map((char, index) => {
          const lowercaseChar = char.toLowerCase();
          if (charMap[lowercaseChar]) {
            return text[index].toUpperCase() === char
              ? charMap[lowercaseChar].toUpperCase()
              : charMap[lowercaseChar];
          } else {
            return char;
          }
        })
        .join("");
    }
  };

  const fancyText = generateFancyText(inputText);
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(fancyText);
    setIsCopied(true);

    // Reset the copy status after a certain duration
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);

    toast.success("Copied to clipboard!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div
      onClick={handleCopy}
      className="copy-container items-center dark:text-white cursor-pointer flex justify-between bg-transparent  border-[#dfdfdf] border-b py-3 pr-3 pl-1 rounded w-full"
    >
      <h2 className="text-2xl font-bold truncate w-[73rem]">{fancyText}</h2>
      <div>
        <button className="text-white font-bold rounded-xl px-4 py-2 bg-[#c209c1]">
          {isCopied ? (
            <div className="copied-message text-white">Copied!</div>
          ) : (
            <button className="text-white">Copy</button>
          )}
        </button>
      </div>
    </div>
  );
};

export default FancyTextGenerator;
