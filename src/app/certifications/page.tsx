
import type { Metadata } from 'next';
import CertificationsContent from '@/components/CertificationsContent';

export const metadata: Metadata = {
  title: 'Certifications | Kersoan',
  description:
    'Professional certifications and technical credentials earned by Kersoan.',
};

export default function CertificationsPage() {
  return (
    <main className="relative z-10 min-h-screen">
      <CertificationsContent />
    </main>
  );
}
