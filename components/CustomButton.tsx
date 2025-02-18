import {Language} from "@/data/types";
import React from "react";

function capitalizeFirstLetter(string: string) {
  if (string === "cpp") {
    return "C++";
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function CustomButton(
  {language, selectedLanguage, setSelectedLanguage}:
  {language: Language, selectedLanguage: Language, setSelectedLanguage: React.Dispatch<React.SetStateAction<Language>>}
) {
  return (
    <button
      className={`text-white w-20 border-white border-[1px] rounded ${selectedLanguage === language ? "bg-red-600 " : "bg-customBlack"}`}
      onClick={() => setSelectedLanguage(language)}
    >{capitalizeFirstLetter(language)}</button>
  );
}