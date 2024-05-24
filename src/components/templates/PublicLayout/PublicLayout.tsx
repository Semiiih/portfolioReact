import { Particle } from "@/components/atoms/Particles";
import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import homeBg from "@/assets/home-bg.jpg";

interface PublicLayoutProps {
  children: React.ReactNode;
}

export function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div
      className="flex min-h-screen w-full flex-col bg-white"
      style={{
        backgroundImage: `url(${homeBg})`,
        backgroundSize: "",
      }}
    >
      <Particle />
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}
