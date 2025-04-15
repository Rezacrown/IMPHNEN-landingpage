"use client";
import { motion } from "framer-motion";

const features = [
  {
    title: "Pembelajaran",
    description: "Tutorial lengkap step-by-step tanpa coding",
    icon: "🎓",
    color: "bg-gradient-to-br from-blue-500 to-cyan-500",
    cardBg: "bg-blue-50",
  },
  {
    title: "Artikel",
    description: "Konten ringkas & mudah dipahami",
    icon: "📄",
    color: "bg-gradient-to-br from-green-500 to-emerald-500",
    cardBg: "bg-green-50",
  },
  {
    title: "Grup Diskusi",
    description: "Tanya jawab langsung dengan expert",
    icon: "💬",
    color: "bg-gradient-to-br from-purple-500 to-fuchsia-500",
    cardBg: "bg-purple-50",
  },
  {
    title: "Shitpost",
    description: "Komunitas santai & meme programming",
    icon: "😂",
    color: "bg-gradient-to-br from-amber-400 to-orange-500",
    cardBg: "bg-amber-50",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Apa yang Kami Tawarkan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Solusi lengkap buat kamu yang ingin jadi programmer tanpa ribet
            coding
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              whileHover={{ y: -5 }}
              className={`${feature.cardBg} p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all`}
            >
              <div
                className={`w-14 h-14 rounded-lg ${feature.color} flex items-center justify-center text-white text-2xl mb-4`}
              >
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-5">{feature.description}</p>

              <button
                className={`px-4 py-2 rounded-lg text-sm font-medium ${feature.color} text-white hover:opacity-90 transition-all`}
              >
                Pelajari Selengkapnya
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
