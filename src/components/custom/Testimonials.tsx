"use client";
import { motion } from "framer-motion";
import { StarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote: "IMPHNEN membuat belajar coding jadi menyenangkan!",
    name: "Budi Santoso",
    rating: 5,
  },
  {
    quote: "Dari pemula sampai bisa bikin aplikasi sendiri!",
    name: "Ani Wijaya",
    rating: 4,
  },
  {
    quote: "Komunitasnya seru banget untuk belajar bersama",
    name: "Joko Prasetyo",
    rating: 5,
  },
  {
    quote: "Materinya mudah dipahami pemula sekalipun",
    name: "Rina Dewi",
    rating: 5,
  },
  {
    quote: "Mentornya ramah dan sabar mengajar",
    name: "Ahmad Fauzi",
    rating: 4,
  },
  {
    quote: "Belajar sambil gorengan, cocok banget!",
    name: "Diana Putri",
    rating: 5,
  },
  {
    quote: "Project-based learning bikin ngerti prakteknya",
    name: "Eko Pratama",
    rating: 5,
  },
  {
    quote: "Gak cuma teori, langsung praktek bikin aplikasi",
    name: "Siti Rahmah",
    rating: 5,
  },
  {
    quote: "Komunitasnya aktif diskusi tiap hari",
    name: "Fajar Nugraha",
    rating: 4,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const visibleTestimonials = testimonials.slice(current, current + 3);

  const paginate = (newDirection: number) => {
    setCurrent((prev) =>
      Math.max(0, Math.min(testimonials.length - 3, prev + newDirection))
    );
  };

  return (
    <section
      id="testimonial"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f9f5e9]"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-900">
            Apa Kata Mereka?
          </h2>
          <p className="mt-2 text-amber-700">
            Testimoni <s>pemalas</s> member IMPHNEN
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {visibleTestimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="relative bg-[#fff9e6] p-6 shadow-lg min-h-[250px]"
            >
              {/* Efek sobekan kertas */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-amber-50 rotate-45 clip-triangle"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-amber-50 rounded-full opacity-60"></div>

              {/* Efek garis tepi */}
              <div className="absolute inset-0 border-2 border-amber-200 rounded-lg pointer-events-none"></div>
              <div className="absolute top-2 left-2 right-2 bottom-2 border border-amber-100 rounded pointer-events-none"></div>

              <div className="relative z-10 h-full flex flex-col">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-amber-500 fill-amber-500"
                          : "text-amber-200"
                      }`}
                    />
                  ))}
                </div>

                <blockquote className="text-md italic text-amber-900 mb-4 flex-grow">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="mt-auto pt-3 border-t border-amber-200">
                  <p className="font-medium text-amber-800">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-10 gap-6">
          <button
            onClick={() => paginate(-3)}
            disabled={current === 0}
            className="p-3 rounded-full bg-white shadow-md text-amber-600 disabled:opacity-40 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-2">
            {[...Array(Math.ceil(testimonials.length / 3))].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i * 3)}
                className={`w-2 h-2 rounded-full transition-all ${
                  current === i * 3 ? "bg-amber-600 w-4" : "bg-amber-200"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => paginate(3)}
            disabled={current >= testimonials.length - 3}
            className="p-3 rounded-full bg-white shadow-md text-amber-600 disabled:opacity-40 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
