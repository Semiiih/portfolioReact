import { Card } from "flowbite-react";

type VeilleCardProps = {
  renderAs?: React.ElementType;
  href?: string;
  title: string;
  description: string;
  image?: string;
  children?: React.ReactNode;
};
export const VeilleCard = ({ image, title, description }: VeilleCardProps) => {
  return (
    <div className="relative">
      <Card className="max-w-sm" imgSrc={image}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </Card>
      <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
        <p className="text-lg font-bold text-white">Your Hover Content</p>
      </div>
    </div>
  );
};
