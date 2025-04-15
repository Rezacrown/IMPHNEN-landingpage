"use client";
import { motion } from "framer-motion";

export default function Community() {
  return (
    <section
      id="community"
      className="py-16 bg-[#E6F0FF] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/svg/cartoon-bubbles.svg')] bg-repeat opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-4">
            Bergabunglah Bersama Kami
          </h2>
          <p className="text-lg text-[#4299E1] max-w-2xl mx-auto">
            {"Let's connect in these playful spaces"}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-max md:h-[450px]">
          {/* GitHub - Large Center Piece */}
          <motion.a
            href="https://github.com/IMPHNEN"
            target="_blank"
            rel="noopener noreferrer"
            className="row-span-2 col-span-2 bg-white rounded-2xl p-6 flex flex-col justify-between border-4 border-[#90CDF4] shadow-[8px_8px_0px_rgba(66,153,225,0.5)] hover:shadow-[6px_6px_0px_rgba(66,153,225,0.7)]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 0.98, rotate: -1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="text-5xl">🐙</div>
                <div>
                  <h3 className="text-2xl font-bold">GitHub Community</h3>
                  <p className="text-[#4A5568]">1,250+ Members</p>
                </div>
              </div>

              <div className="relative">
                <h4 className="text-sm font-semibold mb-2">
                  Contributions (Last Year)
                </h4>
                <div className="grid grid-rows-7 grid-cols-14 gap-1">
                  {Array.from({ length: 98 }).map((_, i) => (
                    <div
                      suppressHydrationWarning
                      key={i}
                      className={`w-2 h-2 rounded-sm ${
                        Math.random() > 0.3 ? "bg-green-500" : "bg-green-100"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  1,248 contributions
                </p>
              </div>
            </div>
            <button className="px-6 py-3 rounded-lg text-lg font-bold bg-[#4299E1] text-white hover:bg-[#3182CE] transition-colors shadow-md hover:shadow-lg">
              Join & Contribute
            </button>
          </motion.a>

          {/* Twitter - Small Top Right */}
          <motion.a
            href="#"
            className="bg-white rounded-2xl p-4 flex flex-col justify-between border-4 border-[#63B3ED] shadow-[5px_5px_0px_rgba(99,179,237,0.5)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, rotate: 2 }}
            transition={{ delay: 0.1, type: "spring" }}
          >
            <div>
              <div className="text-4xl mb-2">🐦</div>
              <h3 className="text-xl font-bold mb-1">Twitter</h3>
              <p className="text-sm text-gray-500">5,420 Followers</p>
            </div>
            <button className="mt-2 px-3 py-1 rounded-md text-sm font-medium bg-[#1DA1F2] text-white">
              Follow Us
            </button>
          </motion.a>

          {/* Discord - Small Bottom Right */}
          <motion.a
            href="#"
            className="bg-white rounded-2xl p-4 flex flex-col justify-between border-4 border-[#D6BCFA] shadow-[5px_5px_0px_rgba(214,188,250,0.5)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, rotate: -2 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <div>
              <div className="text-4xl mb-2">💬</div>
              <h3 className="text-xl font-bold mb-1">Discord</h3>
              <p className="text-sm text-gray-500">800+ Online</p>
            </div>
            <button className="mt-2 px-3 py-1 rounded-md text-sm font-medium bg-[#5865F2] text-white">
              Join Server
            </button>
          </motion.a>

          {/* Instagram - Long Left Bottom */}
          <motion.a
            href="#"
            className="col-span-2 bg-white rounded-2xl p-4 flex items-center justify-between border-4 border-[#F687B3] shadow-[5px_5px_0px_rgba(246,135,179,0.5)]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ x: 5, rotate: 1 }}
            transition={{ type: "spring" }}
          >
            <div className="flex items-center">
              <div className="text-4xl mr-4">📸</div>
              <div>
                <h3 className="text-xl font-bold">Instagram</h3>
                <p className="text-sm text-gray-500">8,760 Followers</p>
              </div>
            </div>
            <button className="px-4 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-[#833AB4] to-[#FD1D1D] text-white">
              Follow
            </button>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
