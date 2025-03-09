import React from "react";

import { Title } from "./title";
import { Accessibility } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  icon?: string;
  title: string;
  textBelow: string;
}

export const DecorateElem: React.FC<Props> = ({
  className,
  icon,
  title,
  textBelow,
}) => {
  return (
    <div
      className={twMerge(
        "flex items-center justify-center py-[80px] px-[30px] ",
        className
      )}
    >
      <i className="pr-7 ">{icon}</i>

      <div className=" items-center">
        <Title text={title} size="sm" />
        <p>{textBelow}</p>
      </div>
    </div>
  );
};
