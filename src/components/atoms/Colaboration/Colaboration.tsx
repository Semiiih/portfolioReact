"use client";
import { AnimatedTooltip } from "./animation";

interface Person {
  id: number;
  name: string;
  designation: string;
  image: string;
}

interface ColaborationProps {
  people?: Person[];
}

export function Colaboration({ people = [] }: ColaborationProps) {
  return (
    <div className="mb-10 flex w-full flex-row items-center justify-center">
      <AnimatedTooltip items={people} />
    </div>
  );
}
