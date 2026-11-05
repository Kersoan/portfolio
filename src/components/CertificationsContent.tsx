
'use client';

import Image from 'next/image';
import { useState } from 'react';

const certifications = [
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    date: '24 December 2025',
    image: '/assets/images/certifications/azure.jpg',
    verification:
      'https://learn.microsoft.com/en-gb/users/kersoanp-5548/credentials/d4b0b0bba6a8e952',
  },
  {
    title: 'TensorFlow Developer Professional Certificate',
    issuer: 'DeepLearning.AI',
    date: '15 November 2024',
    image: '/assets/images/certifications/deeplearning.jpg',
    verification:
      'https://coursera.org/share/a80e12f5c7c34cf9efe9eb4c9b717582',
  },
  {
    title: 'Google IT Support Professional Certificate',
    issuer: 'Google',
    date: '9 October 2024',
    image: '/assets/images/certifications/google-it.jpg',
    verification:
      'https://coursera.org/share/9ab81102c6537bbd1b224dcfbc21e55a',
  },
  {
    title: 'Natural Language Processing with Classification and Vector Spaces',
    issuer: 'DeepLearning.AI',
    date: '3 September 2024',
    image: '/assets/images/certifications/nlp.jpg',
    verification:
      'https://coursera.org/share/fe56cfb0902864bb3039c59038139f67',
  },
  {
    title: 'Introduction to Databases',
    issuer: 'Meta',
    date: '4 September 2024',
    image: '/assets/images/certifications/meta.jpg',
    verification:
      'https://coursera.org/share/1f3934813050923287d3bac72b25164a',
  },
  {
    title: 'Introduction to Embedded Machine Learning',
    issuer: 'Edge Impulse',
    date: '30 September 2024',
    image: '/assets/images/certifications/embedded-ml.jpg',
    verification:
      'https://coursera.org/share/69fac5e569b434b9c15f98e6289854f6',
  },
  {
    title: 'OpenCV: Advanced Image Operations',
    issuer: 'Infosys Springboard',
    date: '1 June 2023',
    image: '/assets/images/certifications/opencv.jpg',
    verification:
      'https://drive.google.com/file/d/1PtIwvFn9Pv4F8tK2MKbJ3DVfiaW1eXdv/view?usp=sharing',
  },
  {
    title: 'Build & Train RNNs: Neural Network Components',
    issuer: 'Infosys Springboard',
    date: '6 June 2023',
    image: '/assets/images/certifications/rnn.jpg',
    verification:
      'https://drive.google.com/file/d/14s50dnXT2KOZBR-M9wMvKz4mTxa-CIDj/view?usp=sharing',
  },
];

export default function CertificationsContent() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<(typeof certifications)[number] | null>(null);

  return (
    <section className="relative z-20 max-w-4xl mx-auto mt-32 mb-12 px-7 lg:px-0">

      {/* PAGE HEADER */}
      <div className="relative z-20 w-full mx-auto">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl lg:text-4xl">
          Certifications
        </h2>

        <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400 sm:leading-7 lg:leading-8 sm:text-base lg:text-lg">
          Professional certifications and technical credentials
          I've earned across Artificial Intelligence, Machine Learning,
          Cloud Computing, and Software Technologies.
        </p>
      </div>

      {/* CERTIFICATION GRID */}
      <div className="z-20 grid items-stretch w-full grid-cols-1 my-8 gap-7 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">

        {certifications.map((certificate, index) => (
          <button
            type="button"
            key={certificate.title}
            onClick={() => setSelectedCertificate(certificate)}
            className="relative flex flex-col items-stretch text-left duration-300 ease-out p-7 sm:p-3 group rounded-2xl"
            aria-label={`Preview ${certificate.title}`}
          >
            {/* OUTER HOVER BORDER */}
            <span className="absolute inset-0 z-10 block w-full h-full duration-300 ease-out border border-dashed rounded-2xl border-neutral-300 dark:border-neutral-600 group-hover:translate-x-1 group-hover:translate-y-1" />

            {/* INNER HOVER BORDER */}
            <span className="absolute inset-0 z-20 block w-full h-full duration-300 ease-out bg-transparent border border-transparent border-dashed group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:border-neutral-300 dark:group-hover:border-neutral-600 group-hover:bg-white dark:group-hover:bg-neutral-950 rounded-2xl" />

            {/* CARD CONTENT */}
            <span className="relative z-30 block duration-300 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1">

              {/* CERTIFICATE IMAGE */}
              <span className="block w-full overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-800">
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  width={800}
                  height={450}
                  className="w-full h-auto aspect-[16/9] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </span>

              {/* CERTIFICATE DETAILS */}
              <span className="block w-full px-1 mt-5 mb-1 sm:mt-3">

                <span className="flex items-center text-base font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                  {certificate.title}
                </span>

                <span className="text-sm text-neutral-600 dark:text-neutral-400 block mt-1">
                  {certificate.issuer}
                </span>

                <span className="text-xs text-neutral-500 dark:text-neutral-500 block mt-1">
                  Issued on {certificate.date}
                </span>

                <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 block mt-3">
                  Click to view certificate ↗
                </span>

              </span>
            </span>
          </button>
        ))}

      </div>

      {/* CERTIFICATE PREVIEW MODAL */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 sm:p-8"
          onClick={() => setSelectedCertificate(null)}
          role="presentation"
        >
          <div
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl border border-neutral-700 bg-white p-4 shadow-2xl dark:bg-neutral-950 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={selectedCertificate.title}
            onClick={(event) => event.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={() => setSelectedCertificate(null)}
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-200 text-neutral-800 hover:bg-neutral-300 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700"
              aria-label="Close certificate preview"
            >
              ✕
            </button>

            <div className="pr-12 mb-5">
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white sm:text-xl">
                {selectedCertificate.title}
              </h3>
              <p className="mt-1 text-sm text-neutral-500">
                {selectedCertificate.issuer} · {selectedCertificate.date}
              </p>
            </div>

            {/* LARGE CERTIFICATE PREVIEW */}
            <div className="relative w-full overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-900">
              <Image
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                width={1600}
                height={1000}
                className="w-full h-auto object-contain"
                priority
              />
            </div>

            {/* VERIFICATION LINK */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setSelectedCertificate(null)}
                className="rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
              >
                Close Preview
              </button>

              <a
                href={selectedCertificate.verification}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-600 dark:bg-white dark:text-black dark:hover:bg-indigo-400"
              >
                Verify Credential ↗
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
