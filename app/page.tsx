import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-24">
      <div className="relative">
        <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-white to-violet-800 opacity-75 blur"></div>
        <div className="relative flex flex-col items-center bg-black rounded-lg p-5">
          <p className="text-4xl sm:text-6xl md:text-7xl text-gray-500 leading-none text-center mb-3">
            SOMETHING IS
          </p>
          <p className="text-5xl sm:text-7xl md:text-8xl text-gray-500 font-bold leading-none text-center">
            COOKING...
          </p>
        </div>
      </div>
    </main>
  );
}
