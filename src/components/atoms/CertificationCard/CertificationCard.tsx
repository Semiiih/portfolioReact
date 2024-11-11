import { useState, MouseEvent, useCallback } from "react";

function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let lastCall = 0;
  return (...args: Parameters<T>) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func(...args);
  };
}

interface CardApprocheProps {
  label?: string;
  description?: string;
  imageSrc?: string;
  imageSize?: string;
  competences?: string[];
  screenshotUrl?: string;
}

export const CertificationCard: React.FC<CardApprocheProps> = ({
  label = "Premium",
  description = "",
  imageSrc,
  imageSize = "w-full",
  competences = [],
  screenshotUrl,
}) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const onMouseMove = useCallback(
    throttle((e: MouseEvent<HTMLDivElement>) => {
      const card = e.currentTarget;
      const box = card.getBoundingClientRect();
      const x = e.clientX - box.left;
      const y = e.clientY - box.top;
      const centerX = box.width / 2;
      const centerY = box.height / 2;
      const rotateX = (y - centerY) / 15;
      const rotateY = (centerX - x) / 15;

      setRotate({ x: rotateX, y: rotateY });
    }, 100),
    [],
  );

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const handleClick = () => {
    if (screenshotUrl) {
      window.open(screenshotUrl, "_blank");
    }
  };

  return (
    <>
      <div
        className="card relative h-[500px] w-[300px] rounded-xl  transition-[all_400ms_cubic-bezier(0.03,0.98,0.52,0.99)_0s] will-change-transform"
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
          transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
        }}
        onClick={handleClick}
      >
        <div className="pulse absolute -inset-2 rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-75 blur-xl" />
        <div className="flex  items-center justify-center">
          <div className="relative  h-[500px] w-[300px] transform cursor-pointer rounded-2xl bg-gradient-to-b from-gray-700 via-gray-800 to-slate-800 shadow-[0_-5px_25px_rgba(255,255,255,0.5)] transition-transform hover:scale-105">
            <img
              src={imageSrc}
              alt={label}
              className={`mx-auto mt-4 self-center  p-6 ${imageSize}`}
            />
            <p className="flex-col justify-end px-8 pt-4 text-center font-poppins text-lg text-slate-300">
              {description}
            </p>
            <div className="px-8 pt-4 text-slate-300">
              <ul className="list-disc pl-5">
                {competences.map((competence, index) => (
                  <li key={index} className="text-sm">
                    {competence}
                  </li>
                ))}
              </ul>
            </div>
            <span className="absolute -left-2 -top-2 flex h-36 w-36 items-center justify-center overflow-hidden ">
              <div className="absolute flex h-10 w-[150%] -translate-y-2 rotate-[-45deg] items-center justify-center bg-gradient-to-r from-violet-600 via-violet-500 to-violet-900 font-semibold uppercase tracking-wider text-white shadow-md ">
                {label}
              </div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
