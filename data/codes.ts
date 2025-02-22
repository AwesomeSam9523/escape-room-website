import {CodeData} from "@/data/types";

const codes: CodeData[] = [
  {
    "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 1; i <= 3; i++) {\n        for (int j = i; j <= 3; j++) {\n            cout << i * j << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}",
    "python": "for i in range(1, 4):\n    for j in range(i, 4):\n        print(i * j, end=\" \")\n    print()",
    "java": "public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 3; i++) {\n            for (int j = i; j <= 3; j++) {\n                System.out.print(i * j + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "c": "#include <stdio.h>\n\nint main() {\n    int i, j;\n    for (i = 1; i <= 3; i++) {\n        for (j = i; j <= 3; j++) {\n            printf(\"%d \", i * j);\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}",
    "answer": "1 2 3\n2 4 6\n3 6"
  }
]

export default codes;
