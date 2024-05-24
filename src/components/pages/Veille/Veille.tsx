import { PublicLayout } from "@/components/templates/PublicLayout";
import "@/components/hooks/mainAnim.css";
import { VeilleCard } from "@/components/atoms/VeilleCard/VeilleCard";
import mac from "@/assets/mac.jpg";

export const Veille = () => {
  return (
    <PublicLayout>
      <main className="mx-auto max-w-screen-xl">
        <div className="mb-10 h-[200px] w-full place-content-center rounded-xl border-2 bg-violet-400 bg-opacity-20	">
          <p className="text-center text-[30px] text-white ">
            Ma veille technologique
          </p>
          <p className="mx-40 flex justify-center pt-7 text-center text-[18px] text-white">
            <span className=" font-medium underline ">Thème: </span> Quels sont
            les langages de programmation et frameworks les plus appropriés pour
            répondre efficacement aux besoins spécifiques d'un projet ?
          </p>
        </div>
        <div className="grid grid-cols-3 gap-20 rounded-xl bg-violet-400 bg-opacity-20 p-20">
          <VeilleCard image={mac} title="Article " description="aaaaaa" />
          <VeilleCard image={mac} title="Article " description="aaaaaa" />
          <VeilleCard image={mac} title="Article " description="aaaaaa" />

          <VeilleCard image={mac} title="Article" description="aaaaaaa" />
          <VeilleCard image={mac} title="Article" description="aaaaaaa" />
          <VeilleCard image={mac} title="Article" description="aaaaaaa" />
        </div>
      </main>
    </PublicLayout>
  );
};
