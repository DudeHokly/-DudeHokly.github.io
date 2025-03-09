import React from "react";
import { LilComp } from "./lilComp";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}

export const Reviews: React.FC<Props> = ({ className }) => {
  const itemsFor = [
    {
      id: 1,
      userPhoto: "/imges/Reviews1.jpg",
      title: "Анна Петрова",
      description:
        "Купила здесь синтезатор Yamaha. Качество звука превзошло все мои ожидания! Доставка была быстрой, а упаковка надежной. Очень довольна покупкой и сервисом",
    },
    {
      id: 2,
      userPhoto: "/imges/Reviews2.png",
      title: "Михаил Иванов",
      description:
        "Приобрел акустическую гитару Martin. Магазин предложил отличную цену и профессиональную консультацию. Инструмент пришел в идеальном состоянии. Рекомендую всем музыкантам!",
    },
    {
      id: 3,
      userPhoto: "/imges/Reviews3.jpg",
      title: "Елена Сидорова",
      description:
        "Заказывала здесь цифровое пианино для дочери. Менеджеры помогли с выбором модели, подходящей для начинающих. Инструмент отличного качества, дочь в восторге!",
    },
    {
      id: 4,
      userPhoto: "/imges/Reviews4.jpeg",
      title: "Дмитрий Козлов",
      description:
        "Огромное спасибо за профессионализм и внимание к клиентам! Купил здесь электрогитару Fender и комбоусилитель. Все работает идеально, звук потрясающий. Буду рекомендовать ваш магазин всем друзьям-музыкантам",
    },
    {
      id: 5,
      userPhoto: "/imges/Reviews5.jpg",
      title: "Ольга Новикова",
      description:
        "Хочу выразить благодарность за отличный сервис и качественные товары! Заказывала укулеле и метроном. Доставка была быстрой, товары отлично упакованы. Отдельное спасибо за подробную консультацию по выбору укулеле для начинающих. Теперь я ваш постоянный клиент!",
    },
  ];
  return (
    <div className={twMerge("", className)}>
      {itemsFor.map((i, index) => (
        <LilComp
          key={index}
          imageSrc={i.userPhoto}
          title={i.title}
          titleClassName="text-white"
          description={i.description}
          descriptionClassName="text-white text-base"
        />
      ))}
    </div>
  );
};
