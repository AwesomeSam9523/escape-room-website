"use client";

import hljs from 'highlight.js/lib/core';
import cpp from 'highlight.js/lib/languages/cpp';
import c from "highlight.js/lib/languages/c";
import python from "highlight.js/lib/languages/python";
import java from "highlight.js/lib/languages/java";
import React, {useEffect} from 'react';

hljs.registerLanguage('cpp', cpp);
hljs.registerLanguage('c', c);
hljs.registerLanguage('python', python);
hljs.registerLanguage('java', java);

export default function CodeBlock({code, language} : {code: string, language: string}) {
  const lineNumbers = code.split("\n").length;
  const lines = Array.from({length: lineNumbers}, (_, i) => i + 1);
  useEffect(() => {
    document.getElementById("codeblock")?.removeAttribute("data-highlighted");
    hljs.highlightAll();
  }, [language]);
  return (
    <pre className={"flex flex-row *:select-none"}>
      <code className={`  text-[#ABABAB]`}>{lines.join("\n")}</code>
      <code className={language} id={"codeblock"}>{code}</code>
    </pre>
  )
}
