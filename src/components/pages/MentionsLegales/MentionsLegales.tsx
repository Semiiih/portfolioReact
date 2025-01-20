import { PublicLayout } from "@/components/templates/PublicLayout";
import "@/components/hooks/mainAnim.css";

export const MentionsLegales = () => {
  return (
    <PublicLayout>
      <section className="flex h-full flex-col items-center justify-start gap-10 bg-slate-800 px-6 py-16 text-white lg:px-32">
        <div className="w-full max-w-7xl">
          <h1 className="mb-8 text-center text-4xl font-bold">
            Mentions Légales
          </h1>

          {/* Informations générales */}
          <div className="mb-8">
            <h2 className="mb-4  w-fit border-b-2 text-2xl font-semibold">
              Informations Générales
            </h2>
            <p>
              Ce site est édité par : <br />
              CAKICI Semih
              <br />
              Email : semih.cakici34@gmail.com
            </p>
          </div>

          {/* Hébergement */}
          <div className="mb-8">
            <h2 className="mb-4  w-fit border-b-2 text-2xl font-semibold">
              Hébergement
            </h2>
            <p>
              Le site est hébergé par : <br />
              Github
              <br />
              Adresse : 88 Colin P Kelly Jr St San Francisco, CA 94107
              <br />
              numéro : (877) 448-4820
            </p>
          </div>

          {/* Propriété intellectuelle */}
          <div className="mb-8">
            <div className="mb-8">
              <h2 className="mb-4  w-fit border-b-2 text-2xl font-semibold">
                Propriété Intellectuelle
              </h2>
              <p>
                Tous les contenus présents sur ce site (textes, images,
                graphismes, logos, vidéos, etc.) sont la propriété exclusive de
                CAKICI Semih, sauf mention contraire. Certains contenus (images,
                vidéos, ou autres médias) proviennent de sources libres d'accès
                sur Google ou d'autres plateformes, et sont utilisés
                conformément aux droits d'usage autorisés.
              </p>
            </div>
          </div>

          {/* Cookies */}
          <div className="mb-8">
            <h2 className="mb-4  w-fit border-b-2 text-2xl font-semibold">
              Cookies
            </h2>
            <p>
              Ce site n'utilise aucun cookie. Aucune donnée de navigation n'est
              collectée ou stockée par le biais de cookies ou d'autres
              technologies similaires. Vous pouvez naviguer en toute
              tranquillité sans suivi ni collecte d'informations.
            </p>
          </div>

          {/* Données personnelles */}
          <div className="mb-8">
            <h2 className="mb-4  w-fit border-b-2 text-2xl font-semibold">
              Données Personnelles
            </h2>
            <p>
              Aucune donnée personnelle n'est collectée via ce site web, à moins
              que cela ne soit spécifiquement indiqué dans un formulaire de
              contact ou dans un but précis. Toute information fournie via ces
              formulaires sera traitée conformément à notre politique de
              confidentialité.
            </p>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};
