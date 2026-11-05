
import Image from "next/image";
import { aboutConfig } from "@/config/about";

export default function AboutContent() {
  return (
    <section className="relative z-20 w-[896px] max-w-full mx-auto mt-32 mb-12 px-4 sm:px-6">

      {/* ABOUT INTRODUCTION */}
      <div className="relative z-20 w-full mx-auto">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl lg:text-4xl">
          {aboutConfig.title}
        </h2>

        <div className="flex flex-col md:flex-row items-start gap-8 mt-3 sm:mt-4 lg:mt-6">

          {/* ABOUT DESCRIPTION AND SKILLS */}
          <div className="w-full md:w-1/2 flex flex-col">
            <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400 sm:leading-7 lg:leading-8 sm:text-base lg:text-lg">
              {aboutConfig.description}
            </p>

            <div className="mt-auto pt-4 flex flex-wrap gap-2">
              {aboutConfig.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* DEVELOPER WORKSPACE WITH ANIMATED MONITOR WAVE */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-[480px] aspect-[3/2] overflow-hidden rounded-xl">

              <Image
                src="/assets/images/about/workspace-wave.png"
                alt="AI developer workspace"
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-cover"
                priority
              />

              {/* ANIMATED WAVE INSIDE MONITOR */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 1000 667"
                preserveAspectRatio="none"
              >
                <defs>
                  <clipPath id="monitorScreenClip">
                    <polygon points="395,120 930,120 930,405 395,385" />
                  </clipPath>

                  <linearGradient
                    id="monitorWaveGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#672cff" />
                    <stop offset="50%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#00c8ff" />
                  </linearGradient>

                  <filter
                    id="monitorWaveGlow"
                    x="-30%"
                    y="-100%"
                    width="160%"
                    height="300%"
                  >
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <g clipPath="url(#monitorScreenClip)">

                  {/* PRIMARY WAVE */}
                  <path
                    className="monitor-wave monitor-wave-primary"
                    d="M350 275 C460 170 530 370 650 270 S830 170 1000 260"
                    fill="none"
                    stroke="url(#monitorWaveGradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    filter="url(#monitorWaveGlow)"
                  />

                  {/* SECONDARY WAVE */}
                  <path
                    className="monitor-wave monitor-wave-secondary"
                    d="M350 300 C460 210 550 390 680 300 S850 210 1000 290"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="4"
                    strokeLinecap="round"
                    filter="url(#monitorWaveGlow)"
                  />

                </g>
              </svg>
            </div>
          </div>

        </div>
      </div>

      {/* EXPERIENCE AND EDUCATION SECTION */}
      <div className="flex flex-col gap-8 mt-20">

        {/* PROFESSIONAL TIMELINE */}
        <div className="w-full min-w-0">

          <h2 className="mb-2 text-2xl font-bold dark:text-neutral-200">
            {aboutConfig.experience.title}
          </h2>

          <div className="py-10">

            {/* PROFESSIONAL EXPERIENCE */}
            {aboutConfig.experience.items.map((item, index) => (
              <div
                key={`experience-${index}`}
                className="pb-10 border-l border-gray-200 dark:border-neutral-700"
              >
                <div className="relative flex flex-col justify-start pl-12">

                  <div className="absolute top-0 left-0 z-40 flex items-center justify-center -translate-x-1/2 bg-white border rounded-full dark:bg-neutral-950 w-14 h-14 border-neutral-300 dark:border-neutral-700">
                    <svg
                      className="w-8 h-8 text-neutral-700 dark:text-neutral-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>

                  <p className="text-xs uppercase text-neutral-400 dark:text-neutral-500 tracking-widest">
                    {item.period}
                  </p>

                  <h3 className="my-1 text-lg font-bold dark:text-neutral-100">
                    {item.role}
                  </h3>

                  <p className="mb-1 text-sm font-medium dark:text-neutral-300">
                    {item.company}
                  </p>

                  <p className="text-sm font-light text-neutral-600 dark:text-neutral-400">
                    {item.description}
                  </p>

                </div>
              </div>
            ))}

            {/* COLLEGE TIMELINE */}
            <div className="pb-10 border-l border-gray-200 dark:border-neutral-700">
              <div className="relative flex flex-col justify-start pl-12">

                <div className="absolute top-0 left-0 z-40 flex items-center justify-center -translate-x-1/2 bg-white border rounded-full dark:bg-neutral-950 w-14 h-14 border-neutral-300 dark:border-neutral-700">
                  <svg
                    className="w-8 h-8 text-neutral-700 dark:text-neutral-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M22 10v6M2 10l10-5 10 5-10 5-10-5zm4 3v5c3.5 3 8.5 3 12 0v-5"
                    />
                  </svg>
                </div>

                <p className="text-xs uppercase text-neutral-400 dark:text-neutral-500 tracking-widest">
                  {aboutConfig.experience.education.period}
                </p>

                <h3 className="my-1 text-lg font-bold dark:text-neutral-100">
                  {aboutConfig.experience.education.role}
                </h3>

                <p className="mb-1 text-sm font-medium dark:text-neutral-300">
                  {aboutConfig.experience.education.company}
                </p>

                <p className="text-sm font-light text-neutral-600 dark:text-neutral-400">
                  {aboutConfig.experience.education.description}
                </p>

                {/* INTERNSHIPS UNDER COLLEGE */}
                <div className="mt-6 ml-2 space-y-6 border-l border-dashed border-neutral-300 dark:border-neutral-700">

                  {aboutConfig.experience.education.internships.map(
                    (internship, index) => (
                      <div
                        key={`internship-${index}`}
                        className="relative pl-6"
                      >
                        <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-indigo-500" />

                        <p className="text-xs uppercase text-neutral-400 dark:text-neutral-500 tracking-widest">
                          {internship.period}
                        </p>

                        <h4 className="my-1 text-base font-semibold dark:text-neutral-100">
                          {internship.role}
                        </h4>

                        <p className="mb-1 text-sm font-medium dark:text-neutral-300">
                          {internship.company}
                        </p>

                        <p className="text-sm font-light text-neutral-600 dark:text-neutral-400">
                          {internship.description}
                        </p>
                      </div>
                    )
                  )}

                </div>
              </div>
            </div>

            {/* SCHOOL EDUCATION */}
            {aboutConfig.school.map((item, index) => (
              <div
                key={`school-${index}`}
                className="pb-10 border-l border-gray-200 last:border-l-0 dark:border-neutral-700"
              >
                <div className="relative flex flex-col justify-start pl-12">

                  <div className="absolute top-0 left-0 z-40 flex items-center justify-center -translate-x-1/2 bg-white border rounded-full dark:bg-neutral-950 w-14 h-14 border-neutral-300 dark:border-neutral-700">
                    <svg
                      className="w-8 h-8 text-neutral-700 dark:text-neutral-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 3L2 8l10 5 10-5-10-5z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M6 11v5c3 2 9 2 12 0v-5M22 8v6"
                      />
                    </svg>
                  </div>

                  <p className="text-xs uppercase text-neutral-400 dark:text-neutral-500 tracking-widest">
                    {item.period}
                  </p>

                  <h3 className="my-1 text-lg font-bold dark:text-neutral-100">
                    {item.role}
                  </h3>

                  <p className="mb-1 text-sm font-medium dark:text-neutral-300">
                    {item.company}
                  </p>

                  <p className="text-sm font-light text-neutral-600 dark:text-neutral-400">
                    {item.description}
                  </p>

                </div>
              </div>
            ))}

          </div>
        </div>

        {/* LET'S CONNECT - BELOW THE COMPLETE TIMELINE */}
        <div className="w-full max-w-[520px] mx-auto mt-4">

          <div className="relative overflow-hidden rounded-2xl border border-neutral-700 bg-gradient-to-br from-neutral-900 via-[#171725] to-[#17152c] p-6 shadow-xl">

            {/* DECORATIVE BACKGROUND GLOW */}
            <div className="absolute -bottom-24 -right-16 w-64 h-40 rounded-full bg-indigo-600/30 blur-3xl pointer-events-none" />

            <div className="relative z-10">

              {/* CONNECT ICON */}
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/40 mb-5">
                <svg
                  className="w-6 h-6 text-indigo-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M21 3L10 14M21 3l-7 18-4-7-7-4 18-7z"
                  />
                </svg>
              </div>

              <h2 className="text-2xl font-bold text-white mb-3">
                {aboutConfig.connect.title}
              </h2>

              <p className="text-sm leading-6 text-neutral-300 mb-6">
                {aboutConfig.connect.description}
              </p>

              {/* SOCIAL LINKS WITH INLINE BRAND LOGOS */}
              <div className="flex flex-col gap-3">

                {Object.entries(aboutConfig.connect.links).map(
                  ([key, link]) => (
                    <a
                      key={key}
                      href={link.url}
                      target={
                        link.url.startsWith("mailto:")
                          ? undefined
                          : "_blank"
                      }
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-3 rounded-xl border border-neutral-700 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-neutral-100 transition-all duration-300 hover:bg-indigo-600/20 hover:border-indigo-500/60 hover:translate-x-1"
                    >

                      <span className="flex items-center gap-3">

                        {/* LINKEDIN LOGO */}
                        {key === "linkedin" && (
                          <svg
                            viewBox="0 0 24 24"
                            className="w-6 h-6 fill-[#0A66C2]"
                            aria-hidden="true"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
                          </svg>
                        )}

                        {/* GITHUB LOGO */}
                        {key === "github" && (
                          <svg
                            viewBox="0 0 24 24"
                            className="w-6 h-6 fill-white"
                            aria-hidden="true"
                          >
                            <path d="M12 .297a12 12 0 0 0-3.79 23.386c.6.111.82-.261.82-.577v-2.234c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 6.006 0c2.291-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.216.694.825.576A12.001 12.001 0 0 0 12 .297Z" />
                          </svg>
                        )}

                        {/* MEDIUM LOGO */}
                        {key === "medium" && (
                          <svg
                            viewBox="0 0 24 24"
                            className="w-6 h-6 fill-white"
                            aria-hidden="true"
                          >
                            <path d="M13.54 12a6.5 6.5 0 0 1-6.5 6.5A6.5 6.5 0 0 1 .54 12a6.5 6.5 0 0 1 6.5-6.5 6.5 6.5 0 0 1 6.5 6.5ZM20.5 12c0 3.38-1.46 6.12-3.25 6.12S14 15.38 14 12s1.46-6.12 3.25-6.12S20.5 8.62 20.5 12ZM24 12c0 3.03-.51 5.5-1.13 5.5s-1.12-2.47-1.12-5.5.5-5.5 1.12-5.5S24 8.97 24 12Z" />
                          </svg>
                        )}

                        {/* GMAIL LOGO */}
                        {key === "email" && (
                          <svg
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                            aria-hidden="true"
                          >
                            <path
                              fill="#EA4335"
                              d="M2.5 5.5 12 12.8l9.5-7.3v13a2 2 0 0 1-2 2h-2V9.4L12 14.1 6.5 9.4v11.1h-2a2 2 0 0 1-2-2v-13Z"
                            />
                            <path
                              fill="#4285F4"
                              d="M2.5 5.5v13a2 2 0 0 0 2 2h2V9.4L2.5 5.5Z"
                            />
                            <path
                              fill="#34A853"
                              d="M17.5 20.5h2a2 2 0 0 0 2-2v-13l-4 3.9v11.1Z"
                            />
                          </svg>
                        )}

                        {link.text}
                      </span>

                      {/* EXTERNAL LINK ARROW */}
                      <svg
                        className="w-4 h-4 text-neutral-400 group-hover:text-indigo-300 transition-colors"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 17L17 7M7 7h10v10"
                        />
                      </svg>

                    </a>
                  )
                )}

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
