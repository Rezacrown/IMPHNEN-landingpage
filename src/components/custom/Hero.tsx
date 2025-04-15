"use client";
import FryingPan from "./FryingPan";

export default function Hero() {
  return (
    <section className=" min-h-screen bg-gradient-to-br from-[#eff6ff] to-[#dbeafe]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 py-12">
        {/* Left Column - Text Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-800">
            <span className="text-[#3b82f6]">Ingin Menjadi</span>
            <br />
            Programmer Handal
            <br />
            <span className="text-[#3b82f6]">Namun Enggan Ngoding?</span>
          </h1>
          <p className="text-xl text-slate-600">
            IMPHNEN solusinya! Belajar programming tanpa coding dengan metode
            unik kami.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#3b82f6] text-white px-8 py-3 rounded-full font-bold hover:bg-[#2563eb] transition-all transform hover:scale-105 shadow-lg">
              Mulai Sekarang
            </button>
            <button className="bg-transparent border-2 border-[#3b82f6] text-[#3b82f6] px-8 py-3 rounded-full font-bold hover:bg-[#3b82f6] hover:text-white transition-all">
              Pelajari Lebih
            </button>
          </div>
        </div>

        {/* Right Column - Frying Pan Animation */}
        <div className="md:w-1/2 flex items-center justify-center h-[500px]">
          <div className="relative w-full h-full">
            <FryingPan />
            <div className="absolute bottom-4 left-0 w-full text-center text-sm text-gray-600">
              <p>{`"Engga Ngoding Engga Makan, Udah Ngoding Lupa Makan"`}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
