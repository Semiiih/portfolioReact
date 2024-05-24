import mainLogo from "@/assets/main-logo.png";
import localisation2 from "@/assets/localisation2.png";
import MacSnow from "@/assets/MacSnow.png";

export const SnowpactBlock = () => {
  return (
    <div className="flex h-full flex-row rounded-xl border-4 border-gray-400 bg-violet-400 bg-opacity-20 pl-10 ">
      <div className="flex-1 flex-col items-center  self-center">
        <div className="flex flex-1 flex-col items-center py-4 ">
          <p className="text-[30px] text-white">Snowpact</p>
          <img src={mainLogo} alt="logoSnow" className="w-32" />
          <img
            src={localisation2}
            alt="loca"
            className="z-0 mt-10 w-[400px] rounded-xl border-4 border-gray-400"
          />
        </div>
      </div>
      <div className="relative flex flex-1 self-center">
        <a href="https://snowpact.com/" target="_blank" className="block">
          <img
            src={MacSnow}
            alt="MacSnow.png"
            className="w-[1000px] transform rounded-xl transition duration-300 hover:scale-110"
          />
        </a>
      </div>
    </div>
  );
};
