import clsx from "clsx";
import React from "react";

import { TeamMember, TeamMemberProps } from "./TeamMember";

export type TeamProps = {
  items: TeamMemberProps[];
  vertical?: boolean;
};

export const Team = ({ items, vertical }: TeamProps) => {
  return (
    <div
      className={clsx("flex md:p-2 ", [
        !vertical && "flex-row flex-wrap justify-center",
        vertical && "flex-col text-center",
      ])}
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
          />
        ))}
    </div>
  );
};
