import { motion } from "framer-motion";

const words = [
  "Innovative",
  "Creative",
  "Dynamic",
  "Efficient",
  "Powerful",
  "Intelligent",
  "Seamless",
  "Advanced"
];

// Duplicate words multiple times to ensure continuous flow
const duplicatedWords = [...words, ...words, ...words, ...words];

export function BiDirectionalScroll() {
  return (
    <section className="w-full py-20 overflow-hidden bg-[#faf9f7]">
      {/* Top row - right to left */}
      <div className="relative overflow-hidden mb-6">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-100%"]
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          {duplicatedWords.map((word, idx) => (
            <div
              key={idx}
              className="inline-flex items-center justify-center mx-6 px-8 py-3 rounded-full bg-gradient-to-r from-pink-100 to-violet-100"
            >
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                {word}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom row - left to right */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["-100%", "0%"]
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          {duplicatedWords.map((word, idx) => (
            <div
              key={idx}
              className="inline-flex items-center justify-center mx-6 px-8 py-3 rounded-full bg-gradient-to-r from-blue-100 to-green-100"
            >
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                {word}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 