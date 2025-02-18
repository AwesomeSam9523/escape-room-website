enum Language {
  cpp = "cpp",
  c = "c",
  python = "python",
  java = "java",
}

interface CodeData {
  cpp: string;
  python: string;
  java: string;
  c: string;
  answer: string;
}

export type {
  CodeData,
};

export {
  Language
}
