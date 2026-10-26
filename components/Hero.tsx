"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaAward,
  FaBrain,
  FaLightbulb,
  FaCogs,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";
import Link from "next/link";

const fullName = "Engr. Anwar H Azad";

const icons = [
  { Icon: FaAward, angle: 0 },
  { Icon: FaBrain, angle: 72 },
  { Icon: FaLightbulb, angle: 144 },
  { Icon: FaCogs, angle: 216 },
  { Icon: FaRocket, angle: 288 },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [displayedName, setDisplayedName] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Typing animation
  useEffect(() => {
    if (!mounted) return;

    let index = 0;

    const interval = window.setInterval(() => {
      index++;
      setDisplayedName(fullName.slice(0, index));

      if (index >= fullName.length) {
        window.clearInterval(interval);
      }
    }, 85);

    return () => window.clearInterval(interval);
  }, [mounted]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative isolate flex min-h-[90vh] flex-col
      items-center justify-center overflow-hidden
      px-5 py-24 text-center sm:px-8 lg:min-h-screen"
    >
      {/* BACKGROUND EFFECTS */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[25%]
        -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full
        bg-dark-600/[0.12] blur-[130px] sm:h-[700px] sm:w-[700px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-150px]
        top-[15%] -z-10 h-[350px] w-[350px] rounded-full
        bg-amber-400/[0.07] blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-200px]
        left-[-100px] -z-10 h-[400px] w-[400px] rounded-full
        bg-cyan-500/[0.06] blur-[130px]"
      />

      {/* SUBTLE GRID */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
        opacity-[0.12]
        [background-image:linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)]
        [background-size:64px_64px]
        [mask-image:linear-gradient(to_bottom,black,transparent_90%)]"
      />

      {/* MAIN CONTENT */}

      <div className="relative z-10 flex w-full flex-col items-center">
        {/* TOP LABEL */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-4 inline-flex items-center gap-3 rounded-full
          border border-amber-300/20 bg-white/[0.03] px-5 py-2
          backdrop-blur-xl"
        >
          <span
            className="h-1.5 w-1.5 rounded-full bg-amber-300
            shadow-[0_0_12px_rgba(252,211,77,0.9)]"
          />

          <span
            className="text-[10px] font-semibold uppercase
            tracking-[0.25em] text-amber-100/90
            sm:text-xs sm:tracking-[0.32em]"
          >
            Leadership · Innovation · Excellence
          </span>
        </motion.div>

        {/* PREMIUM EXECUTIVE PORTRAIT */}

        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 0.15,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative isolate mx-auto mb-8 mt-8
          flex items-center justify-center"
        >
          {/* Ambient portrait glow */}

          <div
            aria-hidden="true"
            className="absolute inset-[-35%] -z-10 rounded-full
            bg-[radial-gradient(circle,rgba(59,130,246,0.25)_0%,rgba(99,102,241,0.10)_42%,transparent_72%)]
            blur-3xl"
          />

          {/* Outer rotating gold orbit */}

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute h-[320px] w-[320px]
            rounded-full border border-dashed border-amber-200/30
            sm:h-[440px] sm:w-[440px]"
          >
            <span
              className="absolute left-1/2 top-0 h-2.5 w-2.5
              -translate-x-1/2 -translate-y-1/2 rounded-full
              bg-amber-200 shadow-[0_0_16px_rgba(252,211,77,0.9)]"
            />

            <span
              className="absolute bottom-[12%] right-[8%] h-1.5 w-1.5
              rounded-full bg-cyan-300
              shadow-[0_0_14px_rgba(103,232,249,0.9)]"
            />
          </motion.div>

          {/* Inner rotating ring */}

          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 32,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute h-[290px] w-[290px]
            rounded-full border border-amber-300/45
            shadow-[0_0_25px_rgba(251,191,36,0.08)]
            sm:h-[380px] sm:w-[380px]"
          >
            <span
              className="absolute right-[12%] top-[12%] h-2 w-2
              rounded-full bg-amber-100
              shadow-[0_0_15px_rgba(252,211,77,0.8)]"
            />
          </motion.div>

          {/* Cyan halo */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute h-[270px] w-[270px]
            rounded-full border border-cyan-300/20
            shadow-[0_0_45px_rgba(34,211,238,0.10)]
            sm:h-[350px] sm:w-[350px]"
          />

          {/* Metallic portrait frame */}

          <div
            className="relative h-[250px] w-[250px] rounded-full
            bg-gradient-to-br from-amber-100 via-white/80 to-cyan-400
            p-[5px]
            shadow-[0_0_35px_rgba(59,130,246,0.22),0_0_80px_rgba(59,130,246,0.15)]
            sm:h-[310px] sm:w-[310px]"
          >
            <div
              className="relative h-full w-full overflow-hidden
              rounded-full border-[5px] border-[#080e1d]
              bg-[#080e1d]"
            >
              <Image
                src="/images/personal/profile.png"
                alt="Engr. Anwar H Azad"
                fill
                priority
                sizes="(max-width: 640px) 250px, 310px"
                className="object-cover object-center
                transition-transform duration-700 hover:scale-105"
              />

              {/* Cinematic lighting */}

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0
                bg-gradient-to-tr from-blue-950/20
                via-transparent to-amber-100/10"
              />

              {/* Bottom vignette */}

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0
                h-1/3 bg-gradient-to-t from-slate-950/30 to-transparent"
              />
            </div>
          </div>

          {/* Floating award badge */}

          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute bottom-3 right-0 z-20 flex h-12 w-12
            items-center justify-center rounded-full
            border border-amber-200/50 bg-[#0b1222]/95
            text-amber-200
            shadow-[0_0_25px_rgba(251,191,36,0.2)]
            backdrop-blur-xl sm:bottom-5 sm:right-4
            sm:h-14 sm:w-14"
          >
            <FaAward className="text-2xl" />
          </motion.div>

          {/* Floating innovation badge */}

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-0 top-[18%] z-20 flex h-10 w-10
            items-center justify-center rounded-full
            border border-cyan-200/25 bg-[#0b1222]/95
            text-cyan-200 shadow-[0_0_25px_rgba(34,211,238,0.12)]
            backdrop-blur-xl sm:left-[-5px] sm:h-12 sm:w-12"
          >
            <FaLightbulb className="text-lg" />
          </motion.div>
        </motion.div>

        {/* EXECUTIVE NAME */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative z-10 max-w-5xl"
        >
          <h1
            className="min-h-[1.3em] bg-gradient-to-r from-amber-100
            via-white to-cyan-200 bg-clip-text py-2 text-4xl
            font-extrabold tracking-tight text-transparent
            sm:text-6xl lg:text-7xl"
          >
            {displayedName}

            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
              }}
              className="ml-1 inline-block h-[0.9em] w-[3px]
              translate-y-1 rounded-full bg-cyan-300 align-baseline"
            />
          </h1>

          {/* Elegant title separator */}

          <div className="mt-3 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-amber-300/70 sm:w-16" />

            <p
              className="text-xs font-semibold uppercase tracking-[0.22em]
              text-cyan-200/90 sm:text-sm sm:tracking-[0.35em]"
            >
              Sales Director
            </p>

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-amber-300/70 sm:w-16" />
          </div>

          <p
            className="mt-4 text-lg font-semibold tracking-wide
            text-white/90 sm:text-xl"
          >
            Advanced ABC Groups
          </p>
        </motion.div>

        {/* EXECUTIVE DESCRIPTION */}

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative z-10 mx-auto mt-7 max-w-3xl px-2
          text-base leading-8 text-slate-300/90
          sm:px-4 sm:text-lg sm:leading-9"
        >
          A visionary entrepreneur and corporate leader with over a decade of
          excellence in healthcare, manufacturing, and global trade. Driving
          sustainable innovation, shaping modern infrastructure, and inspiring
          transformation through strategic growth and social responsibility.
        </motion.p>

        {/* AWARD HIGHLIGHT */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="relative z-10 mt-6 inline-flex flex-wrap
          items-center justify-center gap-3 rounded-full
          border border-amber-200/15 bg-white/[0.035]
          px-5 py-3 backdrop-blur-xl sm:px-6"
        >
          <FaAward className="shrink-0 text-amber-300" />

          <span className="text-sm text-slate-300">
            Recipient of the{" "}
            <span className="font-semibold text-amber-200">
              Wondu China Excellence Award
            </span>
          </span>
        </motion.div>

        {/* CALL TO ACTION */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="relative z-10 mt-9 flex flex-wrap
          items-center justify-center gap-4"
        >
          <Link
            href="/about"
            className="group inline-flex items-center justify-center
            gap-3 rounded-xl border border-white/15
            bg-gradient-to-r from-blue-600 to-indigo-500
            px-7 py-4 text-sm font-semibold text-white
            shadow-[0_8px_30px_rgba(37,99,235,0.22)]
            transition-all duration-300
            hover:-translate-y-1 hover:border-cyan-200/30
            hover:shadow-[0_12px_40px_rgba(37,99,235,0.32)]
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-cyan-300
            focus-visible:ring-offset-2
            focus-visible:ring-offset-[#050914]"
          >
            Discover His Vision
            <FaArrowRight
              className="transition-transform duration-300
              group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* SUBTLE ORBITING ICONS — DESKTOP ONLY */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[20%]
          -z-10 hidden h-[560px] w-[560px] -translate-x-1/2
          lg:block"
        >
          <div
            className="absolute inset-0 rounded-full
            border border-white/[0.035]"
          />

          {mounted &&
            icons.map(({ Icon, angle }, index) => (
              <motion.div
                key={index}
                className="absolute left-1/2 top-1/2 h-0 w-0"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 50,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div
                  className="absolute left-0 top-0"
                  style={{
                    transform: `rotate(${angle}deg) translateY(-280px)`,
                  }}
                >
                  <div
                    className="flex h-11 w-11 -translate-x-1/2
                    -translate-y-1/2 items-center justify-center
                    rounded-full border border-cyan-200/10
                    bg-slate-950/80 text-cyan-200/40
                    shadow-[0_0_20px_rgba(34,211,238,0.04)]
                    backdrop-blur-md"
                  >
                    <Icon className="text-lg" />
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>

      {/* BOTTOM DECORATIVE LINE */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2
        h-px w-2/3 -translate-x-1/2
        bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent"
      />
    </motion.section>
  );
}
