
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import { globalConfig } from '@/config/global';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  if (!mounted) {
    return null;
  }

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <header id="header" className="absolute top-0 z-50 h-20 w-full">
      <div className="mx-auto flex h-full max-w-7xl select-none items-center justify-between border-b border-transparent px-4 pl-6 lg:rounded-b-xl lg:border-x">

        <Link
          href="/"
          className="group relative z-30 flex h-5 items-center space-x-1.5 whitespace-nowrap text-base font-semibold text-black dark:text-white"
        >
          <span className="text-xl -translate-y-0.5 duration-300 ease-in-out group-hover:-rotate-12 group-hover:scale-[1.2]">
            ✦
          </span>
          <span className="-translate-y-0.5">
            {globalConfig.site.author}
          </span>
        </Link>

        {/* MOBILE MENU BACKGROUND OVERLAY */}
        <div
          id="mobileMenuBackground"
          onClick={closeMenu}
          className={`fixed inset-0 z-20 h-screen w-screen bg-white/90 duration-300 ease-out dark:bg-neutral-950/90 ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        />

        <nav className="relative z-30 flex w-full flex-row-reverse justify-start text-sm text-neutral-500 dark:text-neutral-400 sm:flex-row sm:justify-end">

          {/* OPEN MENU BUTTON */}
          <div
            id="openMenu"
            onClick={toggleMenu}
            className={`ml-4 flex h-6 w-6 cursor-pointer flex-col items-end justify-center sm:hidden ${
              isMenuOpen ? 'hidden' : 'block'
            }`}
          >
            <svg
              className="h-8 w-8 dark:text-neutral-200"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 8h16M4 16h16" />
            </svg>
          </div>

          {/* CLOSE MENU BUTTON */}
          <div
            id="closeMenu"
            onClick={toggleMenu}
            className={`ml-4 flex h-6 w-6 -translate-x-1 cursor-pointer flex-col items-end justify-center sm:hidden ${
              isMenuOpen ? 'block' : 'hidden'
            }`}
          >
            <svg
              className="h-6 w-6 text-neutral-600 dark:text-neutral-200"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>

          {/* NAVIGATION MENU */}
          <div
            id="menu"
            className={`fixed left-0 top-[75px] z-40 flex-col items-stretch justify-start w-full h-auto py-3 transition-all duration-300 ease-out ${
              isMenuOpen ? 'flex' : 'hidden'
            } sm:relative sm:top-0 sm:flex sm:h-auto sm:w-auto sm:flex-row sm:items-center sm:justify-end sm:py-0 sm:pr-0 sm:text-sm`}
          >
            {/* MOBILE MENU PANEL */}
            <div className="absolute inset-0 block h-full w-full px-3 sm:hidden">
              <div className="relative h-full w-full rounded-xl border border-dashed border-neutral-300 bg-white backdrop-blur-sm dark:border-neutral-700 dark:bg-neutral-950" />
            </div>

            {/* NAVIGATION LINKS */}
            {globalConfig.navigation.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`relative flex w-full items-center justify-center px-3 py-1.5 text-center font-medium tracking-wide duration-200 ease-out hover:text-neutral-900 dark:hover:text-white sm:mb-0 sm:w-auto sm:py-0 md:w-auto ${
                  isActive(item.href)
                    ? 'text-neutral-900 dark:text-white'
                    : ''
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
