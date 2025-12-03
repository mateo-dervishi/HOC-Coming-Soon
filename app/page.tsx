"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    setIsLoading(false);
  };

  return (
    <div className="h-[100dvh] relative overflow-hidden flex flex-col">
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/sloane-12.webp"
          alt="House of Clarence"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      {/* Header */}
      <header className="relative z-50 pt-6 sm:pt-8">
        <div className="flex items-center justify-center px-4 sm:px-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white text-[12px] sm:text-[14px] md:text-lg lg:text-xl tracking-[0.3em] sm:tracking-[0.4em] font-light"
          >
            HOUSE OF CLARENCE
          </motion.h1>
        </div>
      </header>

      {/* Main Content - Vertically Centered */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-5 sm:px-6">
        <motion.div
          className="text-center text-white w-full max-w-4xl -mt-8 sm:-mt-12"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3,
                delayChildren: 0.6,
              },
            },
          }}
        >
          {/* Main Heading - COMING SOON */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[1.75rem] sm:text-[2.5rem] md:text-[3.25rem] lg:text-[4rem] font-light tracking-[0.25em] sm:tracking-[0.3em] md:tracking-[0.35em] leading-none"
          >
            COMING SOON
          </motion.h2>

          {/* Subheading */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[10px] sm:text-[12px] md:text-[14px] tracking-[0.2em] sm:tracking-[0.25em] mt-6 sm:mt-8 font-light"
          >
            REFINED FINISHING FOR DISCERNING SPACES
          </motion.p>

          {/* Description */}
          <motion.p
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-white/80 text-[12px] sm:text-[14px] md:text-[15px] leading-relaxed max-w-lg mx-auto mt-8 sm:mt-10 font-light"
          >
            Curated collections of luxury bathroom, kitchen, and interior finishing
            materials. Be the first to experience our exclusive offerings.
          </motion.p>

          {/* Email signup form */}
          <div className="w-full max-w-[480px] mx-auto mt-8 sm:mt-10">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <form
                  key="form"
                  onSubmit={handleSubmit}
                  className="relative"
                >
                  <div className="flex flex-row gap-2 sm:gap-3">
                    {/* Email Input */}
                    <motion.div 
                      className="relative flex-1"
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ 
                        y: { duration: 0.6, delay: 2.0, ease: [0.25, 0.1, 0.25, 1] },
                        opacity: { duration: 0.01, delay: 2.0 }
                      }}
                    >
                      <div 
                        className="absolute inset-0 bg-white/10 border border-white/30"
                        style={{ 
                          backdropFilter: 'blur(4px)',
                          WebkitBackdropFilter: 'blur(4px)'
                        }} 
                      />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="relative w-full px-4 sm:px-5 py-3.5 sm:py-4 bg-transparent text-white placeholder:text-white/50 
                                   text-[12px] sm:text-[13px] tracking-[0.1em] focus:outline-none
                                   transition-all duration-300"
                      />
                    </motion.div>
                    {/* Submit Button */}
                    <motion.div 
                      className="relative flex-shrink-0"
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ 
                        y: { duration: 0.6, delay: 2.1, ease: [0.25, 0.1, 0.25, 1] },
                        opacity: { duration: 0.01, delay: 2.1 }
                      }}
                    >
                      <div 
                        className="absolute inset-0 bg-white/10 border border-white"
                        style={{ 
                          backdropFilter: 'blur(4px)',
                          WebkitBackdropFilter: 'blur(4px)'
                        }} 
                      />
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="relative px-6 sm:px-8 py-3.5 sm:py-4 text-white text-[11px] sm:text-[12px] tracking-[0.15em] uppercase 
                                   bg-transparent hover:bg-white/10 active:bg-white/20
                                   transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
                                   overflow-hidden whitespace-nowrap font-medium"
                      >
                        <span className={`transition-opacity ${isLoading ? "opacity-0" : "opacity-100"}`}>
                          NOTIFY ME
                        </span>
                        {isLoading && (
                          <span className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                          </span>
                        )}
                      </button>
                    </motion.div>
                  </div>
                  
                  <motion.p 
                    className="text-white/50 text-[10px] sm:text-[11px] tracking-[0.05em] mt-4 sm:mt-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2.3 }}
                  >
                    We respect your privacy. Unsubscribe at any time.
                  </motion.p>
                </form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 10, stiffness: 100 }}
                    className="w-14 h-14 mx-auto mb-4 border border-white/50 rounded-full flex items-center justify-center"
                  >
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h3 className="text-white text-base tracking-[0.15em] uppercase mb-2">Thank You</h3>
                  <p className="text-white/70 text-[13px]">We&apos;ll notify you when House of Clarence launches.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative z-20 pb-6 sm:pb-8 px-4 sm:px-8">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          {/* Contact - Left */}
          <motion.div 
            className="flex items-center gap-3 sm:gap-4 text-white/60 text-[9px] sm:text-[11px] tracking-[0.1em] uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.5 }}
          >
            <a
              href="mailto:enquiries@houseofclarence.com"
              className="hover:text-white transition-colors duration-300 hidden sm:inline"
            >
              enquiries@houseofclarence.com
            </a>
            <a
              href="mailto:enquiries@houseofclarence.com"
              className="hover:text-white transition-colors duration-300 sm:hidden"
            >
              Email
            </a>
            <span className="text-white/30">|</span>
            <a
              href="tel:+442033704057"
              className="hover:text-white transition-colors duration-300"
            >
              020 3370 4057
            </a>
          </motion.div>

          {/* Scroll indicator - Center */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 hidden sm:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.5 }}
          >
            <div className="w-5 h-8 border border-white/40 rounded-full flex items-start justify-center p-1.5">
              <motion.div
                className="w-0.5 h-2 bg-white/60 rounded-full"
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
            </div>
          </motion.div>

          {/* Social links - Right */}
          <motion.div 
            className="flex items-center gap-4 sm:gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.5 }}
          >
            <a
              href="https://www.instagram.com/houseofclarenceuk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg className="w-[18px] h-[18px] sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://uk.pinterest.com/houseofclarence/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors duration-300"
              aria-label="Pinterest"
            >
              <svg className="w-[18px] h-[18px] sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/houseofclarence/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-[18px] h-[18px] sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
