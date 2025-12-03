"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Particle component for the background effect
function Particle({ delay }: { delay: number }) {
  const randomX = Math.random() * 100;
  const randomDuration = 15 + Math.random() * 20;
  const randomSize = 1 + Math.random() * 2;

  return (
    <motion.div
      className="absolute rounded-full bg-accent-gold/20"
      style={{
        width: randomSize,
        height: randomSize,
        left: `${randomX}%`,
        bottom: -10,
      }}
      initial={{ y: 0, opacity: 0 }}
      animate={{
        y: -1200,
        opacity: [0, 0.8, 0.8, 0],
      }}
      transition={{
        duration: randomDuration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}

// Animated line divider
function AnimatedDivider() {
  return (
    <div className="relative h-px w-32 mx-auto my-8 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-gold to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="absolute inset-0 bg-light-grey/30" />
    </div>
  );
}

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Clock effect
  useEffect(() => {
    setCurrentTime(new Date());
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Mouse tracking for subtle parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x, y });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call - replace with actual email collection
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsLoading(false);
  };

  // Generate particles
  const particles = Array.from({ length: 30 }, (_, i) => (
    <Particle key={i} delay={i * 0.5} />
  ));

  return (
    <div
      ref={containerRef}
      className="min-h-screen relative overflow-hidden bg-primary-black flex flex-col items-center justify-center"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% 50%, rgba(201, 169, 98, 0.08) 0%, transparent 50%),
              radial-gradient(ellipse 60% 40% at 20% 80%, rgba(201, 169, 98, 0.05) 0%, transparent 50%),
              radial-gradient(ellipse 60% 40% at 80% 20%, rgba(201, 169, 98, 0.05) 0%, transparent 50%)
            `,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating particles */}
        {particles}

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Subtle vignette effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-3xl"
        style={{
          transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)`,
        }}
      >
        {/* Pre-heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span className="inline-block text-[10px] md:text-[11px] tracking-[0.4em] text-accent-gold/80 uppercase mb-6">
            Arriving Soon
          </span>
        </motion.div>

        {/* Main title with staggered letters */}
        <motion.h1
          className="text-white font-display"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.5,
              },
            },
          }}
        >
          <div className="text-[clamp(2rem,8vw,5rem)] tracking-[0.25em] leading-none mb-2">
            {"HOUSE OF".split("").map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                variants={{
                  hidden: { opacity: 0, y: 50, rotateX: -90 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    transition: {
                      type: "spring",
                      damping: 12,
                      stiffness: 100,
                    },
                  },
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
          <div className="text-[clamp(2.5rem,10vw,6.5rem)] tracking-[0.3em] leading-none">
            {"CLARENCE".split("").map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                variants={{
                  hidden: { opacity: 0, y: 50, rotateX: -90 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    transition: {
                      type: "spring",
                      damping: 12,
                      stiffness: 100,
                    },
                  },
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.h1>

        <AnimatedDivider />

        {/* Tagline */}
        <motion.p
          className="text-warm-grey text-sm md:text-base tracking-[0.2em] uppercase mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          Refined Finishing For Discerning Spaces
        </motion.p>

        <motion.p
          className="text-warm-grey/60 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          Curated collections of luxury bathroom, kitchen, and interior
          finishing materials. Be the first to experience our exclusive
          offerings.
        </motion.p>

        {/* Email signup form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="max-w-md mx-auto"
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="relative"
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1 group">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white placeholder:text-warm-grey/50 
                                 text-sm tracking-wider focus:outline-none focus:border-accent-gold/50 focus:bg-white/[0.07]
                                 transition-all duration-300"
                    />
                    <div
                      className="absolute inset-0 border border-accent-gold/0 group-focus-within:border-accent-gold/30 
                                    pointer-events-none transition-all duration-300"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-8 py-4 bg-accent-gold text-primary-black text-[12px] tracking-[0.2em] uppercase font-medium
                               hover:bg-accent-gold/90 hover:scale-[1.02] active:scale-[0.98]
                               transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
                               relative overflow-hidden group"
                  >
                    <span
                      className={`transition-opacity ${isLoading ? "opacity-0" : "opacity-100"}`}
                    >
                      Notify Me
                    </span>
                    {isLoading && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="w-5 h-5 border-2 border-primary-black/30 border-t-primary-black rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      </span>
                    )}
                  </button>
                </div>
                <p className="text-warm-grey/40 text-[11px] tracking-wider mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-6"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 10, stiffness: 100 }}
                  className="w-16 h-16 mx-auto mb-6 border border-accent-gold/50 rounded-full 
                             flex items-center justify-center"
                >
                  <motion.svg
                    className="w-8 h-8 text-accent-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <motion.path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    />
                  </motion.svg>
                </motion.div>
                <h3 className="text-white text-lg tracking-[0.15em] uppercase mb-2">
                  Thank You
                </h3>
                <p className="text-warm-grey/60 text-sm">
                  We&apos;ll notify you when House of Clarence launches.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Bottom section with contact info */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-6 md:p-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-6">
          {/* Contact */}
          <div className="flex items-center gap-8 text-warm-grey/50 text-[11px] tracking-[0.15em] uppercase">
            <a
              href="mailto:hello@houseofclarence.com"
              className="hover:text-accent-gold transition-colors duration-300"
            >
              hello@houseofclarence.com
            </a>
            <span className="hidden md:inline text-warm-grey/20">|</span>
            <a
              href="tel:+442033704057"
              className="hidden md:inline hover:text-accent-gold transition-colors duration-300"
            >
              020 3370 4057
            </a>
          </div>

          {/* Time - only show after hydration */}
          {currentTime && (
            <div className="text-warm-grey/30 text-[11px] tracking-[0.3em] font-mono">
              LONDON{" "}
              {currentTime.toLocaleTimeString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })}
            </div>
          )}

          {/* Social links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-warm-grey/40 hover:text-accent-gold transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-warm-grey/40 hover:text-accent-gold transition-colors duration-300"
              aria-label="Pinterest"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-warm-grey/40 hover:text-accent-gold transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-white/10" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-white/10" />
      <div className="absolute bottom-24 left-8 w-16 h-16 border-l border-b border-white/10 hidden md:block" />
      <div className="absolute bottom-24 right-8 w-16 h-16 border-r border-b border-white/10 hidden md:block" />
    </div>
  );
}

