"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Merchant() {
  const products = [
    {
      id: 1,
      name: "Kaos IMPHNEN",
      price: "Rp 120.000",
      badge: "BESTSELLER",
    },
    {
      id: 2,
      name: "Sticker Pack",
      price: "Rp 25.000",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-amber-100"
      id="merchant"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-amber-900 mb-12 text-center"
          >
            Official <span className="text-amber-600">Store</span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Left Column - Toko Illustration (same as before) */}
            <div className="flex flex-col items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="relative w-full max-w-md mb-6"
              >
                <svg
                  viewBox="0 0 400 300"
                  className="w-full h-auto drop-shadow-lg"
                >
                  {/* Building Base */}
                  <rect
                    x="70"
                    y="120"
                    width="260"
                    height="140"
                    rx="5"
                    fill="#FEF3C7"
                    stroke="#92400E"
                    strokeWidth="4"
                  />

                  {/* Roof */}
                  <path
                    d="M50 120 L370 120 L320 70 L100 70 Z"
                    fill="#B45309"
                    stroke="#78350F"
                    strokeWidth="4"
                  />
                  <rect
                    x="160"
                    y="70"
                    width="80"
                    height="20"
                    fill="#92400E"
                    stroke="#78350F"
                    strokeWidth="2"
                  />

                  {/* Door */}
                  <rect
                    x="180"
                    y="180"
                    width="80"
                    height="80"
                    fill="#92400E"
                    stroke="#78350F"
                    strokeWidth="3"
                  />
                  <rect x="205" y="220" width="10" height="10" fill="#FCD34D" />
                  <path
                    d="M250 190 L250 220"
                    stroke="#FEF3C7"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="5,5"
                  />

                  {/* Signboard */}
                  <rect
                    x="120"
                    y="130"
                    width="160"
                    height="30"
                    rx="4"
                    fill="#FCD34D"
                    stroke="#92400E"
                    strokeWidth="2"
                  />
                  <text
                    x="200"
                    y="152"
                    textAnchor="middle"
                    fill="#92400E"
                    fontFamily="Arial"
                    fontWeight="bold"
                    fontSize="14"
                  >
                    IMPHNEN STORE
                  </text>

                  {/* Decorative Elements */}
                  <rect
                    x="100"
                    y="100"
                    width="20"
                    height="20"
                    rx="10"
                    fill="#F59E0B"
                  />
                  <rect
                    x="280"
                    y="100"
                    width="20"
                    height="20"
                    rx="10"
                    fill="#F59E0B"
                  />
                  <path
                    d="M110 100 Q130 80 150 100"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="3"
                  />
                  <path
                    d="M290 100 Q310 80 330 100"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="3"
                  />
                </svg>
              </motion.div>
              <motion.p
                variants={itemVariants}
                className="text-lg text-amber-800 text-center max-w-md"
              >
                Kunjungi toko resmi kami untuk merchandise eksklusif
                berkualitas.
                <br />
                <span className="font-semibold">
                  Diskon 15% untuk member baru!
                </span>
              </motion.p>
            </div>

            {/* Right Column - Updated Bento Layout */}
            <div className="flex flex-col">
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold text-amber-800 mb-6"
              >
                Rekomendasi Merchandise
              </motion.h3>

              <div className="grid gap-6 mb-8">
                {products.map((product) => (
                  <motion.div
                    key={product.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-r from-amber-100 to-amber-200 rounded-xl p-6 shadow-lg"
                  >
                    <div className="flex items-center gap-6">
                      {/* Product Image Placeholder */}
                      <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center">
                        <span className="text-amber-600 font-medium">
                          Gambar
                        </span>
                      </div>

                      <div>
                        <div className="flex items-center gap-3">
                          <h4 className="text-xl font-bold text-amber-900">
                            {product.name}
                          </h4>
                          {product.badge && (
                            <span className="bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                              {product.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-amber-800">{product.price}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div variants={itemVariants} className="text-center">
                <Link href="https://tokopedia.com/imphnen" passHref>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-full text-lg transition-colors shadow-lg"
                  >
                    Kunjungi Official Store Kami
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
