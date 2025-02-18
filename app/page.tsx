"use client";

import NavBar from "@/components/NavBar";
import CodeBlock from "@/components/CodeBlock";
import Script from 'next/script'
import Head from "next/head";
import React, {useState} from "react";
import Link from "next/link";
import CustomButton from "@/components/CustomButton";
import codes from "@/data/codes";
import {Language} from "@/data/types";
import { useRouter } from 'next/navigation'

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState(Language.cpp);
  const [value, setValue] = useState("");
  const [answerState, setAnswerState] = useState<"correct" | "incorrect" | "unattempted">("unattempted");
  const languages = [Language.cpp, Language.c, Language.python, Language.java];
  const index = 0;
  const lines = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const router = useRouter();

  function checkAnswer() {
    const actualAnswer = codes[index].answer;
    if (value === actualAnswer) {
      setAnswerState("correct");
    } else {
      setAnswerState("incorrect");
    }
  }

  return (
    <div className="flex flex-col h-screen">
      <React.Fragment>
        <Head>
          <Link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css"
          />
        </Head>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/highlight.min.js"/>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/languages/c.min.js" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/languages/cpp.min.js" />
      </React.Fragment>
      <NavBar />

      <div className="flex flex-row h-full">
        <div className="flex flex-col bg-darkBlack m-4 rounded-xl w-1/2">
          <div className="flex flex-row gap-4 py-4 px-8">
            {languages.map((language, index) => (
              <CustomButton key={index} setSelectedLanguage={setSelectedLanguage} selectedLanguage={selectedLanguage} language={language} />
            ))}
          </div>
          <CodeBlock code={codes[index][selectedLanguage]} language={selectedLanguage} />
        </div>
        <div className="flex flex-col my-4 grow gap-4">
          <div className="flex flex-col bg-darkBlack p-4 rounded-xl h-full">
            <div className="text-white border-white border-[1px] rounded
            bg-customBlack text-center text-xl px-2 py-1 w-32">
              Output
            </div>
            <div className="mt-4 flex flex-row h-fit">
              <code className={`text-[#ABABAB] w-7`}>{lines.join("\n")}</code>
              <textarea
                className="resize-none w-full h-full bg-customBlack text-white outline-0 rounded font-code
                border-white border-[1px] px-1"
                placeholder={"Type your output here."}
                value={value}
                onInput={(e) => setValue(e.currentTarget.value)}
              ></textarea>
            </div>
          </div>
          <div className="flex flex-col bg-darkBlack p-4 rounded-xl h-full relative">
            <div className={`text-white text-center text-xl m-2 px-2 font-bold absolute
            ${answerState === "correct" ? "bg-accepted" : (answerState === "incorrect" ? "bg-rejected" : "bg-customBlack")}\``}>
              Result
            </div>
            <div
              className={`resize-none w-full h-full text-white outline-0 rounded font-custom
              border-white border-[1px] px-1 text-4xl text-center content-center font-semibold
              ${answerState === "correct" ? "bg-accepted" : (answerState === "incorrect" ? "bg-rejected" : "bg-customBlack")}`}
            >{
              answerState === "correct" ? "Accepted" : (answerState === "incorrect" ? "Incorrect Answer" : "-")
            }</div>
            <div className="*:text-white flex flex-row w-full *:grow *:p-3 *:rounded-xl
            mt-4 *:border-white *:border-[1px] gap-4">
              <button
                disabled={answerState === "correct"}
                className={`${answerState !== "correct" ? "bg-red-600 opacity-100" : "opacity-30"}`}
                onClick={checkAnswer}
              >Check Answer</button>
              <button
                disabled={answerState !== "correct"}
                className={`${answerState === "correct" ? "bg-red-600 opacity-100" : "opacity-30"}`}
                onClick={() => router.push('/hint')}
              >Show Clue</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
