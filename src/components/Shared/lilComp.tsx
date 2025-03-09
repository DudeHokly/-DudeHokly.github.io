import React from "react";
import { Title } from "./title";
import { twMerge } from "tailwind-merge";

interface Props {
  icon?: React.ReactNode;
  imageSrc?: string;
  title: string;
  description: string;
  className?: string;
  titleClassName?: string;
  iconClassName?: string;
  imageClassName?: string;
  descriptionClassName?: string;
}

export const LilComp: React.FC<Props> = ({
  className,
  icon,
  imageSrc,
  title,
  description,
  titleClassName,
  iconClassName,
  imageClassName,
  descriptionClassName,
}) => {
  return (
    <div className={twMerge("flex items-center space-x-4 py-4", className)}>
      {/* Иконка или изображение */}
      {(icon || imageSrc) && (
        <div className="flex items-center justify-center flex-shrink-0 w-16 h-16">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={title}
              className={twMerge(
                "w-12 h-12 rounded-full object-cover",
                imageClassName
              )}
            />
          ) : (
            <div
              className={twMerge(
                "flex items-center justify-center text-black w-12 h-12",
                iconClassName
              )}
            >
              {icon}
            </div>
          )}
        </div>
      )}

      {/* Контент справа */}
      <div>
        <Title text={title} size="md" className={titleClassName} />
        <p className={twMerge("text-sm text-black mt-1", descriptionClassName)}>
          {description}
        </p>
      </div>
    </div>
  );
};
