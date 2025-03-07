import logoMRH from "@/assets/logoMRH.jpg";

export const CardRGB = () => {
  return (
    <div className="relative flex h-[500px] w-[400px] items-center justify-center overflow-hidden rounded-[20px] bg-[#07182E]">
      {/* <h2 className="z-10 text-2xl text-white">CARD</h2>
       */}
      <img
        src={logoMRH}
        alt={`${logoMRH} logo`}
        className="z-50 mb-0 h-[100px] w-[100px] rounded-xl bg-white"
      />
      <div className="absolute h-[130%] w-[100px] animate-rotBGimg bg-gradient-to-b from-[#00b7ff] to-[#ff30ff] transition-all duration-200 ease-linear"></div>
      <div className="absolute inset-[5px] rounded-[15px] bg-[#07182E]"></div>
    </div>
  );
};
