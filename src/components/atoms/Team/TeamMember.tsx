export interface TeamMemberProps {
  image: string;
  alt: string;
  name: string;
  skills: string;
  position?: string;
  stylePerso?: boolean;
}

export const TeamMember = ({
  image,
  alt,
  name,
  skills,
  position,
  stylePerso = false,
}: TeamMemberProps) => {
  return (
    <div
      className={`border-primary-500/50 shadow-primary-500/50 m-2 grid min-h-[200px] w-32 items-center justify-items-center rounded-xl border bg-white p-3 text-center shadow-[0px_3px_0px_0px]  md:w-40 ${
        stylePerso
          ? "  animate-jump border-white bg-purple-400 bg-gradient-to-r from-purple-400 via-purple-500 to-violet-600 text-gray-50 animate-duration-[1500ms] animate-infinite animate-ease-in-out "
          : ""
      }`}
    >
      <img src={image} alt={alt} height="80" width="80" />
      <p className="font-bold">{name}</p>
      <p className="text-[14px]">{skills}</p>
      <p className="text-[12px]">{position}</p>
    </div>
  );
};
