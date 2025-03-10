import { Title } from "@/components/Shared";

const AboutUs: React.FC = () => {
  const employeesData = [
    {
      srcImg: "/imges/emplyee1.jpg",
      employeeName: "Алексей Иванов",
      employeePosition: "Менеджер по продажам",
    },
    {
      srcImg: "/imges/emplyee2.jpg",
      employeeName: "Дмитрий Кузнецов",
      employeePosition: "Технический консультант",
    },
    {
      srcImg: "/imges/emplyeeBoss.jpg",
      employeeName: "Алексей Сергеевич",
      employeePosition: "Глава компании",
    },
  ];

  return (
    <>
      <section className="pt-[80px]">
        <div className="p-[40px] shadow-2xl rounded-3xl w-[1200px] mb-[50px] m-auto">
          <div className="mt-2">
            <Title text={"Наша команда"} />
            <div className="grid grid-cols-3 gap-6 mt-6">
              {employeesData.map((i, index) => (
                <div key={index} className="text-center">
                  <img
                    src={i.srcImg}
                    alt={`Команда ${index + 1}`}
                    className="w-40 h-40 rounded-full object-cover mx-auto"
                  />
                  <p className="mt-2 font-semibold">{i.employeeName}</p>
                  <p className="text-sm text-gray-500">{i.employeePosition}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5">
            <Title text={"О нас"} />
            <p>
              Мы — команда профессионалов, увлеченных музыкой и стремящихся
              сделать её доступной для каждого. Наш интернет-магазин предлагает
              широкий ассортимент музыкальных инструментов, от классических
              гитар до современных синтезаторов. Помимо онлайн-продаж, у нас
              есть филиалы в крупных городах, где вы можете протестировать
              инструменты перед покупкой. Мы гордимся тем, что предоставляем
              качественные товары, профессиональные консультации и сервис
              мирового уровня.
            </p>
          </div>
          <div className="mt-5">
            <Title text={"Почему так дорого"} />
            <p>
              Качество всегда стоит своих денег. Мы работаем только с
              проверенными брендами, которые гарантируют надежность и
              долговечность своих инструментов. Каждый товар проходит тщательную
              проверку перед продажей, чтобы вы могли быть уверены в его
              качестве. Кроме того, мы предлагаем гарантийное обслуживание и
              поддержку после покупки. Вы платите за инструмент, который станет
              вашим спутником на долгие годы.
            </p>
          </div>
          <div className="mt-5">
            <Title text={"Что именно отличает наш товар от других?"} />
            <p>
              Наши инструменты — это сочетание качества, инноваций и
              доступности. Мы сотрудничаем с ведущими мировыми производителями,
              чтобы предложить вам лучшие модели на рынке. Кроме того, наши
              сотрудники — профессиональные музыканты, которые помогут вам
              выбрать инструмент под ваши нужды. Мы также предоставляем
              уникальные услуги: настройка инструмента перед отправкой и
              бесплатные мастер-классы для наших клиентов.
            </p>
          </div>

          <div className="mt-5">
            <Title text={"Наши ценности"} />
            <ul className="list-disc ml-6 mt-4">
              <li>Клиентоориентированность</li>
              <li>Высокое качество продукции</li>
              <li>Экологичность</li>
              <li>Индивидуальный подход</li>
            </ul>
          </div>

          <div className="mt-5">
            <Title text={"Наша история"} />
            <p className="mt-4">
              Наша компания была основана в 2010 году небольшой группой
              энтузиастов, увлеченных музыкой. Мы начали с маленького магазина в
              центре города, где продавали гитары и аксессуары для начинающих
              музыкантов. Со временем наша страсть к музыке и стремление к
              качеству привели к расширению ассортимента и открытию новых
              филиалов по всей стране.
            </p>
            <p className="mt-2">
              В 2015 году мы запустили интернет-магазин, чтобы сделать наши
              инструменты доступными для клиентов из самых удаленных уголков
              страны. Сегодня мы гордимся тем, что стали одним из ведущих
              поставщиков музыкальных инструментов как для любителей, так и для
              профессионалов. Мы продолжаем развиваться, организовывая
              мастер-классы, поддерживая молодые таланты и создавая пространство
              для вдохновения. Эти тексты подчеркивают профессионализм компании,
              её историю и преимущества товаров, создавая доверие у клиентов
              вашего музыкального магазина!
            </p>
          </div>
          <div className="mt-5">
            <Title text={"Контакты"} />
            <div className="mt-4">
              <p>📍 Адрес: г. Санкт-Петербург, ул. Примерная, д. 1</p>
              <p>📞 Телефон: +7 (123) 456-78-90</p>
              <p>📧 Email: info@example.com</p>
              <div className="mt-2 flex space-x-4">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600"
                >
                  VK
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500"
                >
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
