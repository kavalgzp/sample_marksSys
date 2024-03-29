// // pages/index.js
import Link from "next/link";
import Schoolname from "@/components/Schoolname";


export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center "

    >
      <div className="w-[95%] md:w-full lg:w-full h-[450px] flex flex-col items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/image.jpeg')",
          backgroundColor: "rgba(0, 0, 0, .3)", // Background color with 30% opacity
        }}>

    
      </div>
      <div className="mt-12">
        <Schoolname/>
        <h1 className="text-3xl font-bold text-red-600 p-0  text-center ">
          Examination result Year 2023-24
        </h1>
      </div>
      <Link href="/enrollno">
        <div className="text-xl mt-8 mb-8 animate-color-change text-black hover:text-red-500">
          Click hear to view marks
        </div>
      </Link>
    </div>
  );
}


