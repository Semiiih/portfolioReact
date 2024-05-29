import React from "react";

export interface TeamMemberProps {
  image: string;
  alt: string;
  name: string;
  skills: string;
  position?: string;
}

export const TeamMember = ({
  image,
  alt,
  name,
  skills,
  position,
}: TeamMemberProps) => {
  return (
    <div className="border-primary-500/50 shadow-primary-500/50 m-2 grid min-h-[200px] w-32 items-center justify-items-center rounded-xl border bg-white p-3 text-center shadow-[0px_3px_0px_0px] ease-in animate-duration-[1500ms] animate-ease-in-out hover:animate-jump md:w-40">
      <img src={image} alt={alt} height="80" width="80" />
      <p>{name}</p>
      <p>{skills}</p>
      <p>{position}</p>
    </div>
  );
};
