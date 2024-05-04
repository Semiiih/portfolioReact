import { Particle } from "@/components/atoms/Particles";
import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";

interface PublicLayoutProps {
  children: React.ReactNode;
}

export function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div
      className="animated-bg flex min-h-screen w-full flex-col bg-white"
      style={{
        backgroundImage: "url('@/../public/images/home-bg.jpg')",
        backgroundSize: "cover",
      }}
    >
      <Particle />
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}
