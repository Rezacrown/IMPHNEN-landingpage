"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Bagaimana cara bergabung dengan komunitas ini?",
    answer:
      "Kamu bisa gabung melalui tombol Join di bagian GitHub, Twitter, Discord atau Instagram kami.",
  },
  {
    question: "Apakah perlu skill coding khusus untuk bergabung?",
    answer:
      "Tidak! Kami menerima semua level, dari yang baru belajar sampai programmer handal.",
  },
  {
    question: "Apa keuntungan gabung di komunitas ini?",
    answer:
      "Kamu bisa belajar bareng, diskusi proyek, dan dapat jaringan profesional.",
  },
  {
    question: "Apakah ada biaya keanggotaan?",
    answer: "Gratis! Tanpa biaya sama sekali.",
  },
  {
    question: "Apa fokus utama komunitas ini?",
    answer:
      "Kami fokus pada pengembangan web modern, tapi membahas semua hal terkait programming.",
  },
  {
    question: "Bagaimana jadwal kegiatan rutinnya?",
    answer:
      "Kami ada meetup online setiap Sabtu jam 7 malam dan webinar bulanan.",
  },
];

// Decorative Star Component
function Star() {
  const colors = ["text-yellow-300", "text-pink-300", "text-blue-300"];
  const color = colors[Math.floor(Math.random() * colors.length)];

  return (
    <motion.span
      className={`absolute text-3xl ${color}`}
      suppressHydrationWarning
      style={{
        left: `${Math.random() * 10 + 5}%`,
        top: `${Math.random() * 60 + 10}%`,
      }}
      animate={{
        y: [0, -10, 0],
        rotate: [0, 180, 360],
        scale: [1, 1.3, 1],
      }}
      transition={{
        duration: Math.random() * 3 + 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      ★
    </motion.span>
  );
}

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Decorative Stars */}
      {[...Array(8)].map((_, i) => (
        <Star key={`star-${i}`} />
      ))}

      {/* Floating Bubble Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => {
          const size = Math.random() * 30 + 10;
          const color = `hsl(${Math.random() * 60 + 190}, 80%, 80%)`;
          return (
            <motion.div
              key={`bubble-${i}`}
              className="absolute rounded-full opacity-70"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: color,
              }}
              animate={{
                y: [0, -50, -100],
                x: [0, Math.random() > 0.5 ? 20 : -20, 0],
                opacity: [0.7, 0.4, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatDelay: Math.random() * 5,
                ease: "linear",
              }}
            />
          );
        })}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center text-[#1A365D] mb-12 relative">
          Frequently Asked Questions
          <motion.span
            className="absolute -top-2 right-2 text-3xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            🌟
          </motion.span>
        </h2>

        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border-2 border-[#90CDF4] rounded-xl overflow-hidden bg-white/90 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                className="w-full p-4 text-left flex justify-between items-center bg-[#E6F0FF] hover:bg-[#BEE3F8] transition-colors"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? -1 : index)
                }
              >
                <span className="font-bold text-lg">{faq.question}</span>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  className="text-2xl text-sky-900"
                >
                  {activeIndex === index ? "▲" : "▼"}
                </motion.span>
              </button>

              <motion.div
                initial={{ height: 0 }}
                animate={{ height: activeIndex === index ? "auto" : 0 }}
                className="overflow-hidden"
              >
                <div className="p-4 font-semibold text-gray-600">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
