import { Footer } from '@/components/organisms/Footer';
import { Header } from '@/components/organisms/Header';

interface PublicLayoutProps {
  children: React.ReactNode;
}

export function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}
