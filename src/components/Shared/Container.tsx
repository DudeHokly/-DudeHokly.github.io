import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return (
    <div className={twMerge("mx-auto font-sans", className)}>{children}</div>
  );
};
