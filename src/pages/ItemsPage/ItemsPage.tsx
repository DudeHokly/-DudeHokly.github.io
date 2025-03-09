import React, { useEffect, useRef, useState } from "react";
import { Filters, ProductCart } from "@/components/Shared";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const pianos = [
  {
    id: 0,
    imgUrl:
      "https://static.insales-cdn.com/r/tz9jO2jZUSM/rs:fit:500:0:1/q:100/plain/images/products/1/5291/479859883/NV5S_styling.jpeg@webp",
    PianoName: "Yamaha",
    StrikethroughPrice: 1000000,
    PianoPrice: 960000,
    characteristics: {
      keys: 88,
      keyType: "взвешенные, молоточкового типа",
      bodyMaterial: "Дерево/пластик",
      dimensions: "140 × 50 × 90 см",
      weight: "70 кг",
      color: "Черный",
    },
  },
  {
    id: 1,
    imgUrl:
      "https://static.insales-cdn.com/r/B4hZGmXEFwE/rs:fit:500:0:1/q:100/plain/images/products/1/2381/313649485/Kawai_Novus_NV-5.jpg@webp",
    PianoName: "Kawai",
    StrikethroughPrice: 950000,
    PianoPrice: 920000,
    characteristics: {
      keys: 88,
      keyType: "взвешенные, молоточкового типа",
      bodyMaterial: "Дерево/пластик",
      dimensions: "142 × 52 × 91 см",
      weight: "75 кг",
      color: "Белый",
    },
  },
  {
    id: 2,
    imgUrl:
      "https://static.insales-cdn.com/r/uTY750Szf1U/rs:fit:500:0:1/q:100/plain/images/products/1/1904/313837424/Kawai_CA99_%D0%BF%D0%B0%D0%BB%D0%B8%D1%81%D0%B0%D0%BD%D0%B4%D1%80_1.jpg@webp",
    PianoName: "Kawai CA99",
    StrikethroughPrice: 1100000,
    PianoPrice: 1050000,
    characteristics: {
      keys: 88,
      keyType: "взвешенные, деревянные",
      bodyMaterial: "Дерево",
      dimensions: "145 × 53 × 92 см",
      weight: "78 кг",
      color: "Палисандр",
    },
  },
  {
    id: 3,
    imgUrl:
      "https://static.insales-cdn.com/r/giIaWRKX7zM/rs:fit:500:0:1/q:100/plain/images/products/1/1064/160556072/kawai-ca-98-r.jpg@webp",
    PianoName: "Kawai CA98",
    StrikethroughPrice: 1080000,
    PianoPrice: 1020000,
    characteristics: {
      keys: 88,
      keyType: "взвешенные, деревянные",
      bodyMaterial: "Дерево",
      dimensions: "144 × 51 × 91 см",
      weight: "76 кг",
      color: "Коричневый",
    },
  },
  {
    id: 4,
    imgUrl:
      "https://static.insales-cdn.com/r/OoJTDWEKLic/rs:fit:500:0:1/q:100/plain/images/products/1/5433/218494265/gallery_lx708_angle_charcoal_black.jpg@webp",
    PianoName: "Roland LX708",
    StrikethroughPrice: 1200000,
    PianoPrice: 1150000,
    characteristics: {
      keys: 88,
      keyType: "взвешенные, молоточкового типа",
      bodyMaterial: "Дерево/пластик",
      dimensions: "146 × 54 × 93 см",
      weight: "82 кг",
      color: "Черный",
    },
  },

  {
    id: 5,
    imgUrl:
      "https://static.insales-cdn.com/r/M-owQJRBuMQ/rs:fit:500:0:1/q:100/plain/images/products/1/1139/792323187/CNT96264.jpg@webp",
    PianoName: "Yamaha",
    StrikethroughPrice: 1000000,
    PianoPrice: 960000,
    characteristics: {
      keys: 88,
      keyType: "взвешенные, молоточкового типа",
      bodyMaterial: "Дерево/пластик",
      dimensions: "146 × 54 × 93 см",
      weight: "82 кг",
      color: "Черный",
    },
  },
  {
    id: 6,
    imgUrl:
      "https://static.insales-cdn.com/r/zQRdYxEhwWA/rs:fit:500:0:1/q:100/plain/images/products/1/2669/766675565/CNT93577.jpg@webp",
    PianoName: "Yamaha",
    StrikethroughPrice: 1000000,
    PianoPrice: 960000,
    characteristics: {
      keys: 88,
      keyType: "взвешенные, молоточкового типа",
      bodyMaterial: "Дерево/пластик",
      dimensions: "146 × 54 × 93 см",
      weight: "82 кг",
      color: "Черный",
    },
  },
  {
    id: 7,
    imgUrl:
      "https://static.insales-cdn.com/r/dlb_LP4WlG0/rs:fit:500:0:1/q:100/plain/images/products/1/3932/146788188/preview.jpg@webp",
    PianoName: "Yamaha",
    StrikethroughPrice: 1000000,
    PianoPrice: 960000,
    characteristics: {
      keys: 88,
      keyType: "взвешенные, молоточкового типа",
      bodyMaterial: "Дерево/пластик",
      dimensions: "146 × 54 × 93 см",
      weight: "82 кг",
      color: "Черный",
    },
  },
  {
    id: 8,
    imgUrl:
      "https://static.insales-cdn.com/r/SKr46QrB6Ms/rs:fit:500:0:1/q:100/plain/images/products/1/1279/664921343/kawai-ca901-digital-piano-satin-black-p52855-157622_image.png@webp",
    PianoName: "Yamaha",
    StrikethroughPrice: 1000000,
    PianoPrice: 960000,
    characteristics: {
      keys: 88,
      keyType: "взвешенные, молоточкового типа",
      bodyMaterial: "Дерево/пластик",
      dimensions: "146 × 54 × 93 см",
      weight: "82 кг",
      color: "Черный",
    },
  },
  {
    id: 9,
    imgUrl:
      "https://static.insales-cdn.com/r/05re7dcRfb8/rs:fit:500:0:1/q:100/plain/images/products/1/4594/313823730/Kawai_CA79_%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B8%CC%86_1.jpg@webp",
    PianoName: "Yamaha",
    StrikethroughPrice: 1000000,
    PianoPrice: 960000,
    characteristics: {
      keys: 88,
      keyType: "взвешенные, молоточкового типа",
      bodyMaterial: "Дерево/пластик",
      dimensions: "146 × 54 × 93 см",
      weight: "82 кг",
      color: "Черный",
    },
  },
  {
    id: 10,
    imgUrl:
      "https://static.insales-cdn.com/r/Pn28iM0YI68/rs:fit:500:0:1/q:100/plain/images/products/1/230/117596390/63h83ud3migwwgcgoc0wcss08.jpg@webp",
    PianoName: "Yamaha",
    StrikethroughPrice: 1000000,
    PianoPrice: 960000,
    characteristics: {
      keys: 88,
      keyType: "взвешенные, молоточкового типа",
      bodyMaterial: "Дерево/пластик",
      dimensions: "146 × 54 × 93 см",
      weight: "82 кг",
      color: "Черный",
    },
  },
  {
    id: 11,
    imgUrl:
      "https://static.insales-cdn.com/r/xnbbW8ea3pk/rs:fit:500:0:1/q:100/plain/images/products/1/1004/160367596/preview__1_.jpg@webp",
    PianoName: "Yamaha",
    StrikethroughPrice: 1000000,
    PianoPrice: 960000,
    characteristics: {
      keys: 88,
      keyType: "взвешенные, молоточкового типа",
      bodyMaterial: "Дерево/пластик",
      dimensions: "146 × 54 × 93 см",
      weight: "82 кг",
      color: "Черный",
    },
  },
  {
    id: 12,
    imgUrl:
      "https://static.insales-cdn.com/r/HyRWM8s7WAI/rs:fit:500:0:1/q:100/plain/images/products/1/175/74916015/01.JPG@webp",
    PianoName: "Yamaha",
    StrikethroughPrice: 1000000,
    PianoPrice: 960000,
    characteristics: {
      keys: 88,
      keyType: "взвешенные, молоточкового типа",
      bodyMaterial: "Дерево/пластик",
      dimensions: "146 × 54 × 93 см",
      weight: "82 кг",
      color: "Черный",
    },
  },
  {
    id: 13,
    imgUrl:
      "https://static.insales-cdn.com/r/kI7t1uW1arg/rs:fit:500:0:1/q:100/plain/images/products/1/3947/337301355/CLP-745WH_a_0001.tif.jpg@webp",
    PianoName: "Yamaha",
    StrikethroughPrice: 1000000,
    PianoPrice: 960000,
    characteristics: {
      keys: 88,
      keyType: "взвешенные, молоточкового типа",
      bodyMaterial: "Дерево/пластик",
      dimensions: "146 × 54 × 93 см",
      weight: "82 кг",
      color: "Черный",
    },
  },
  {
    id: 14,
    imgUrl:
      "https://static.insales-cdn.com/r/kI7t1uW1arg/rs:fit:500:0:1/q:100/plain/images/products/1/3947/337301355/CLP-745WH_a_0001.tif.jpg@webp",
    PianoName: "Yamaha",
    StrikethroughPrice: 1000000,
    PianoPrice: 960000,
    characteristics: {
      keys: 88,
      keyType: "взвешенные, молоточкового типа",
      bodyMaterial: "Дерево/пластик",
      dimensions: "146 × 54 × 93 см",
      weight: "82 кг",
      color: "Черный",
    },
  },
  {
    id: 15,
    imgUrl:
      "https://static.insales-cdn.com/r/TWLyc-FFk24/rs:fit:500:0:1/q:100/plain/images/products/1/5369/218256633/gallery_lx705_angle_charcoal_black.jpg@webp",
    PianoName: "Yamaha",
    StrikethroughPrice: 1000000,
    PianoPrice: 960000,
    characteristics: {
      keys: 88,
      keyType: "взвешенные, молоточкового типа",
      bodyMaterial: "Дерево/пластик",
      dimensions: "146 × 54 × 93 см",
      weight: "82 кг",
      color: "Черный",
    },
  },
  {
    id: 16,
    imgUrl:
      "https://static.insales-cdn.com/r/8SOLJWKHuzU/rs:fit:500:0:1/q:100/plain/images/products/1/1086/282666046/CASIO_GP-510_1.jpg@webp",
    PianoName: "Yamaha",
    StrikethroughPrice: 1000000,
    PianoPrice: 960000,
    characteristics: {
      keys: 88,
      keyType: "взвешенные, молоточкового типа",
      bodyMaterial: "Дерево/пластик",
      dimensions: "146 × 54 × 93 см",
      weight: "82 кг",
      color: "Черный",
    },
  },
  {
    id: 17,
    imgUrl:
      "https://static.insales-cdn.com/r/el2YgeIsMB4/rs:fit:500:0:1/q:100/plain/images/products/1/4299/130134219/Yamaha-Clavinova-CSP-170-WH-4.jpg@webp",
    PianoName: "Yamaha",
    StrikethroughPrice: 780000,
    PianoPrice: 960000,
    characteristics: {
      keys: 88,
      keyType: "взвешенные, молоточкового типа",
      bodyMaterial: "Дерево/пластик",
      dimensions: "146 × 54 × 93 см",
      weight: "82 кг",
      color: "Черный",
    },
  },
];

const ItemsPage: React.FC = () => {
  const filtersRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [offsetTop, setOffsetTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      if (filtersRef.current && containerRef.current) {
        const containerBounds = containerRef.current.getBoundingClientRect();
        const filtersBounds = filtersRef.current.getBoundingClientRect();
        setOffsetTop(filtersBounds.top - containerBounds.top); // Смещение секции фильтров
        setContainerHeight(containerBounds.height); // Высота контейнера товаров
      }
    };

    window.addEventListener("resize", updateDimensions);
    updateDimensions();

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <section className="bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Hero-секция */}
      <div className="bg-gradient-to-r from-[#008080] to-[#00b3b3] w-full h-[200px] flex items-center justify-center mt-[64px]">
        <h2 className="text-3xl font-semibold text-black">
          Добро пожаловать в the Piano Store!
        </h2>
      </div>
      <div className="w-full max-w-[1500px] pt-[30px]">
        <div className="flex flex-col md:flex-row gap-8" ref={containerRef}>
          {/* Фильтрация */}
          <div
            ref={filtersRef}
            style={{
              position: "sticky",
              top: "20px",
              maxHeight: `${containerHeight - offsetTop}px`,
              overflow: "hidden",
            }}
            className="bg-white shadow-md rounded-lg p-4 w-full md:w-[300px] self-start"
          >
            <Filters />
          </div>

          {/* Список товаров */}
          <div className="bg-white shadow-md rounded-lg p-4 flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pianos.map((i, index) => (
                <ProductCart
                  key={index}
                  id={i.id}
                  imgUrl={i.imgUrl}
                  PianoPrice={i.PianoPrice}
                  PianoName={i.PianoName}
                  StrikethroughPrice={i.StrikethroughPrice}
                  characteristics={i.characteristics}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Пагинация */}
        <div className="mt-8 flex justify-center pb-[25px]">
          <div className="bg-white shadow-md rounded-lg py-6 px-4 w-full">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemsPage;
