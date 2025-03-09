import { DecorateElem, NewsLenta } from "@/components/Shared";

import { AdverComp } from "@/components/Shared/adver";
import CarouselComp from "@/components/Shared/Carousel";
import { Button } from "@/components/ui/button";
import { BicepsFlexed, FileMusic, Sparkles } from "lucide-react";
import { Link } from "react-router";

interface DecorItem {
  title: string;
  textBelow: string;
  icon?: React.ReactNode;
}

const Home: React.FC = () => {
  const decorElemData = [
    {
      icon: <BicepsFlexed size={30} />,
      title: "Музыка для души и вдохновения",
      textBelow: "Создавайте мелодии, которые трогают сердца.",
    },
    {
      icon: <Sparkles size={30} />,
      title: "Ощути магию каждого аккорда",
      textBelow: "Музыкальные инструменты для настоящих творцов.",
    },
    {
      icon: <FileMusic size={30} />,
      title: "Звук, который оживляет мечты",
      textBelow: "Откройте мир музыки вместе с нами.",
    },
  ];

  const newsData = [
    {
      id: 1,
      title: "Грандиозная распродажа гитар",
      text: "Скидки до 30% на электрогитары весь июнь!",
      backgroundImage: "/imges/adNews1.jpg",
    },
    {
      id: 2,
      title: "Мастер-класс от виртуоза",
      text: "Известный пианист проведет бесплатный урок!",
      backgroundImage: "/imges/adNews2.jpg",
    },
    {
      id: 3,
      title: "Новинка: цифровые пианино Yamaha",
      text: "Поступление моделей с расширенным функционалом.",
      backgroundImage: "/imges/adNews3.jpg",
    },
    {
      id: 4,
      title: "Конкурс молодых талантов",
      text: "Участвуйте и выиграйте профессиональный микрофон!",
      backgroundImage: "/imges/adNews4.jpg",
    },
    {
      id: 5,
      title: "Специальное предложение для школ",
      text: "Комплекты музыкальных инструментов со скидкой 20%.",
      backgroundImage: "imges/adNews5.jpg",
    },
    {
      id: 6,
      title: "Отдел винтажных инструментов",
      text: "Редкие экземпляры теперь в нашем магазине.",
      backgroundImage: "/imges/adNews6.jpg",
    },
    {
      id: 7,
      title: "Бесплатная доставка по всей стране",
      text: "От 10000 рублей доставим ваш инструмент бесплатно!",
      backgroundImage: "/imges/adNews7.jpg",
    },
  ];

  return (
    <>
      {/* block с картинкой main */}
      <section
        className="relative flex items-center justify-center h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/imges/mainPage.webp')",
        }}
      >
        <div className="absolute text-center bg-white/50 text-black backdrop-blur-md opacity-95 shadow-lg p-5 rounded-3xl">
          <h1 className="text-3xl font-bold mb-4">
            Звучи со всей душой и раскрывай свой музыкальный потенциал!
          </h1>
          <Link to="/ShopingCarting">
            <Button className="text-lg px-6 py-6 cursor-pointer">
              Заказать инструмент
            </Button>
          </Link>
        </div>
      </section>

      {/* Секция DecorateElem т.е. три прикольных элема */}
      <section className="flex flex-wrap justify-center gap-4 py-4 px-2">
        {(decorElemData as DecorItem[]).map((item, index) => (
          <DecorateElem
            key={index}
            icon={item.icon}
            className="border-[5px] border-[#008080] p-4 w-[500px]"
            title={item.title}
            textBelow={item.textBelow}
          />
        ))}
      </section>

      {/* чет связанное с рекламой где три иконки*/}
      <AdverComp className="bg-no-repeat bg-cover bg-center" />

      {/* Карусель компонент*/}
      <CarouselComp />

      {/* Лента новостей */}
      <NewsLenta news={newsData} />
    </>
  );
};
export default Home;
