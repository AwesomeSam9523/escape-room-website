import {CodeData} from "@/data/types";

const codes: CodeData[] = [
  {
    "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << \"Hello, World!\";\n  return 0;\n}",
    "python": "print(\"Hello, World!\")",
    "java": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Hello, World!\");\n  }\n}",
    "c": "#include <stdio.h>\n\nint main() {\n  printf(\"Hello, World!\");\n  return 0;\n}",
    "answer": "Hello, World!"
  }
]

export default codes;
