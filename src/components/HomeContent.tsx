
'use client';

import Link from 'next/link';
import { homeConfig } from '@/config/home';

function HexagonPortrait() {
  return (
    <div className="relative flex aspect-square w-full max-w-[280px] items-center justify-center sm:max-w-[360px] lg:max-w-[460px]">

      {/* Existing hexagon breathing effect */}
      <div
        className="absolute inset-[3%] animate-hex-breathe"
        style={{
          clipPath:
            'polygon(50% 0%, 94% 25%, 94% 75%, 50% 100%, 6% 75%, 6% 25%)',
          background: 'rgba(140,140,140,0.16)',
        }}
      />

      {/* Middle hexagon layer */}
      <div
        className="absolute inset-[7%]"
        style={{
          clipPath:
            'polygon(50% 0%, 94% 25%, 94% 75%, 50% 100%, 6% 75%, 6% 25%)',
          background: 'rgba(150,150,150,0.20)',
        }}
      />

      {/* Inner hexagon border */}
      <div
        className="absolute inset-[11%]"
        style={{
          clipPath:
            'polygon(50% 0%, 94% 25%, 94% 75%, 50% 100%, 6% 75%, 6% 25%)',
          background: 'rgba(210,210,210,0.85)',
        }}
      />

      {/* Portrait */}
      <div
        className="absolute inset-[11.7%] overflow-hidden"
        style={{
          clipPath:
            'polygon(50% 0%, 94% 25%, 94% 75%, 50% 100%, 6% 75%, 6% 25%)',
        }}
      >
        <img
          src="/assets/images/kersoan-cutout.png"
          alt="Kersoan - AI and Data Science professional"
          className="h-full w-full object-contain object-bottom"
        />
      </div>
    </div>
  );
}

export default function HomeContent() {
  return (
    <section className="flex flex-1 items-center py-20 sm:py-24 lg:py-0">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-8 px-5 sm:px-6 lg:-translate-y-[50px] lg:flex-row lg:gap-12 lg:px-8">

        {/* Introduction */}
        <div className="w-full min-w-0 text-center lg:w-[50%] lg:text-left">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            {homeConfig.greeting}
          </h1>

          <p className="mt-4 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
            {homeConfig.description}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
            >
              View About
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>

            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition-all duration-300 hover:scale-105 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
            >
              {homeConfig.buttons.viewProjects}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        {/* Hexagon portrait */}
        <div className="flex w-full min-w-0 items-center justify-center lg:w-[50%]">
          <HexagonPortrait />
        </div>

      </div>
    </section>
  );
}
