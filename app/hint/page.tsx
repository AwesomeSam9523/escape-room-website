import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />

      <div className="flex flex-col h-full m-4 grow">
        <div className="w-full bg-red-600 text-white p-4 mb-0 text-center font-semibold text-xl py-2 rounded">
          HINT
        </div>
        <div className="flex flex-col bg-darkBlack rounded-xl w-full h-full mt-4 border-[1px] border-white">

        </div>
      </div>
    </div>
  );
}
