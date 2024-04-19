import { PublicLayout } from "@/components/templates/PublicLayout";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <PublicLayout>
      <main className="mx-auto max-w-screen-xl">
        <div className="space-y-4">
          <Link to="/about">dazdazdzda</Link>
          <a href="/about">xxx</a>
        </div>
      </main>
    </PublicLayout>
  );
};
