
import { motion } from "motion/react";
import { LuArrowUpRight, LuDownload } from "react-icons/lu";

import Container from "../common/Container";
import Button from "../common/Button";
import SocialLinks from "../common/SocialLinks";
import SmartImage from "../common/SmartImage";
import MountainSilhouette from "../animation/MountainSilhouette";

import { isConfigured, site } from "../../data/site";
import { fadeUp, stagger } from "../../lib/motion";

// Import the actual profile image from your images folder.
import profileImage from "../common/images/profile.jpeg";

export default function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative isolate flex min-h-svh flex-col justify-center overflow-hidden pb-[26vh] pt-28"
    >
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid items-center gap-12 lg:grid-cols-[1.35fr_0.65fr]"
        >
          {/* Left: Introduction */}
          <div>
            <motion.p variants={fadeUp} className="eyebrow">
              {site.role} · {site.education.school}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-6 font-display text-5xl leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
            >
              Wahidullah{" "}
              <span className="italic text-accent">
                Hussaini
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-xl text-fg sm:text-2xl"
            >
              {site.headline}
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-xl leading-relaxed text-muted"
            >
              {site.intro}
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-4 font-display text-lg italic text-muted"
            >
              {site.tagline}
            </motion.p>

            {/* Action buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Button to="/projects" icon={LuArrowUpRight}>
                Explore My Work
              </Button>

              <Button to="/contact" variant="ghost">
                Let&apos;s Work Together
              </Button>

              {isConfigured(site.resumePath) && (
                <Button
                  href={site.resumePath}
                  variant="ghost"
                  icon={LuDownload}
                  download
                >
                  Résumé
                </Button>
              )}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8">
              <SocialLinks />
            </motion.div>
          </div>

          {/* Right: Profile portrait */}
          <motion.div
            variants={fadeUp}
            className="mx-auto w-full max-w-xs lg:max-w-sm"
          >
            <div className="relative">
              {/* Decorative outline */}
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-t-full border border-accent/40"
              />

              {/* Actual profile image */}
              <SmartImage
                src={profileImage}
                alt="Portrait of Wahidullah Hussaini"
                fileLabel="profile.jpeg"
                priority
                className="relative aspect-[4/5] rounded-t-full border border-line"
                imgClassName="object-center"
              />

              <span
                aria-hidden="true"
                className="absolute -top-2 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-accent"
              />
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
          Scroll
        </span>

        <span className="relative block h-10 w-px overflow-hidden bg-line">
          <span
            className="absolute inset-0 bg-accent"
            style={{
              animation: "scroll-cue 2.2s ease-in-out infinite",
            }}
          />
        </span>
      </div>

      {/* Mountain background */}
      <MountainSilhouette
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[28vh] min-h-48 w-full"
      />
    </section>
  );
}
