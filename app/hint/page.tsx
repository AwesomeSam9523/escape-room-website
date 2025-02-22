import NavBar from "@/components/NavBar";
import AnatomyImage from "@/public/anatomy.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />

      <div className="flex flex-col h-full m-4 grow">
        <div className="w-full bg-red-600 text-white p-4 mb-0 text-center font-semibold text-xl py-2 rounded">
          HINT
        </div>
        <div className="flex flex-col items-center py-1 bg-darkBlack rounded-xl w-full h-full mt-4 border-[1px] border-white">
          <Image src={AnatomyImage} alt={"Anatomy Image"} />
        </div>
      </div>
    </div>
  );
}
