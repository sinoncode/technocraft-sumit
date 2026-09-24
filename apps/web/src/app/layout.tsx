import '@/index.css';
import { InquiryProvider } from '@/components/inquiry-dialog';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { FloatingInquiry } from '@/components/floating-inquiry';

export const metadata = {
  title: 'Technocraft',
  description: 'Technocraft description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
        />
      </head>
      <body>
        <InquiryProvider>
          <div className="relative flex min-h-[100dvh] flex-col">
            <SiteHeader />
            <div className="flex-1">{children}</div>
            <SiteFooter />
            <FloatingInquiry />
          </div>
        </InquiryProvider>
      </body>
    </html>
  );
}
