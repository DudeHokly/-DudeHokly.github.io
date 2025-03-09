import React from "react";
import { Cat, Cigarette, Ear } from "lucide-react";

import { Title } from "./title";
import { LilComp } from "./lilComp";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}

export const AdverComp: React.FC<Props> = ({ className }) => {
  const itemsFor = [
    {
      icon: <Cigarette size={36} />,
      title: "Мелодия вашей мечты",
      description: "Откройте мир звуков с нашими инструментами.",
    },
    {
      icon: <Ear size={36} />,
      title: "Звуки, рождающие эмоции",
      description: "Создавайте музыку с лучшими инструментами.",
    },
    {
      icon: <Cat size={36} />,
      title: "Гармония в каждой ноте",
      description: "Выберите инструмент своей мечты у нас.",
    },
  ];
  return (
    <section
      className={twMerge("relative w-full h-[700px]", className)}
      style={{
        backgroundImage: "url('imges/mainPageAdverBg.webp')",
      }}
    >
      <div className="absolute top-[90px] left-[240px] p-5 bg-white/80 shadow-3xl rounded-lg max-w-[700px]">
        <div className="">
          <Title
            text="Музыка - это язык души"
            className="font-semibold text-[#008080]"
            size="md"
          />
          <p className="text-black text-lg font-medium">
            Наш магазин предлагает широкий выбор качественных музыкальных
            инструментов для профессионалов и любителей. От классических
            фортепиано до современных синтезаторов, от акустических гитар до
            электронных ударных - у нас есть всё для вашего творчества. Опытные
            консультанты помогут подобрать инструмент, который раскроет ваш
            талант. Доставка по всей стране, гарантия качества и послепродажное
            обслуживание - мы заботимся о наших клиентах!
          </p>
        </div>
        <div className="">
          {itemsFor.map((i, index) => (
            <LilComp
              key={index}
              icon={i.icon}
              title={i.title}
              description={i.description}
              descriptionClassName="text-lg font-medium"
              titleClassName="text-[#008080]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
