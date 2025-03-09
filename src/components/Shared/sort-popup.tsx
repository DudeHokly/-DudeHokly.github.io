import React from "react";
import { Accessibility } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}

export const SortPopUp: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={twMerge(
        "inline-flex cursor-pointer bg-red-900 rounded-xl p-1",
        className
      )}
    >
      <Accessibility />
      <b>Сортировка:</b>
      <b>по возростанию цены</b>
    </div>
  );
};
