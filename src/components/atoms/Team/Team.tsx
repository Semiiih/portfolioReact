import clsx from "clsx";
import { TeamMember, TeamMemberProps } from "./TeamMember";

export type TeamProps = {
  items: TeamMemberProps[];
  vertical?: boolean;
};

export const Team = ({ items, vertical }: TeamProps) => {
  return (
    <div
      className={clsx("flex gap-4 md:p-2 lg:gap-0", {
        "flex-row flex-wrap justify-center": !vertical,
        "flex-col gap-10 text-center": vertical,
      })}
    >
      {items &&
        items.map((item, index) => (
          <TeamMember
            key={index}
            image={item.image}
            alt={item.alt}
            name={item.name}
            skills={item.skills}
            position={item.position}
            stylePerso={item.stylePerso}
          />
        ))}
    </div>
  );
};
