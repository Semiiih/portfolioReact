import { Card } from "flowbite-react";

type VeilleCardProps = {
  href?: string;
  title: string;
  description: string;
  image?: string;
  rating: number;
  className?: string;
  date: string;
};

export const VeilleCard = ({
  href,
  image,
  title,
  description,
  rating,
  className,
  date,
}: VeilleCardProps) => {
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={index < rating ? "text-yellow-400" : "text-gray-400"}
      >
        ★
      </span>
    ));
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative block ${className}`}
    >
      <Card className="max-w-sm" imgSrc={image}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>

        <div className="mt-2 flex justify-center">{renderStars(rating)}</div>

        <p className="mt-2 text-sm text-gray-500">
          {new Date(date).toLocaleDateString()}
        </p>
      </Card>

      <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
        <p className="text-lg font-bold text-white">Voir l'article</p>
      </div>
    </a>
  );
};
