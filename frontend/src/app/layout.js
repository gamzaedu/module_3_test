import './globals.css';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

export const metadata = {
  title: 'Firewall Log Monitoring',
  description: 'Firewall log monitoring and management system',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
