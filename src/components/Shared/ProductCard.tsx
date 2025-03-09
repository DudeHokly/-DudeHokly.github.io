import React, { useState } from "react";
import { Title } from "./index";
import { Accessibility } from "lucide-react";
import { toast } from "sonner";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { twMerge } from "tailwind-merge";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

interface Props {
  id: number;
  imgUrl: string;
  PianoName: string;
  StrikethroughPrice?: number;
  PianoPrice: number;
  className?: string;
  characteristics: {
    keys: number; // Количество клавиш
    bodyMaterial: string; // Материал корпуса
    dimensions: string; // Размеры
    weight: string; // Вес
    color: string; // Цвет
  };
}

export const ProductCart: React.FC<Props> = ({
  className,
  imgUrl,
  PianoName,
  StrikethroughPrice,
  PianoPrice,
  characteristics,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={twMerge(
        "cursor-pointer group transform transition duration-500 hover:scale-105 border-solid border-2 border-[#008080] rounded-xl p-5 justify-self-center",
        className
      )}
    >
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <img
            className="w-[215px] h-[215px] block mx-auto hover:opacity-80 transition"
            src={imgUrl}
            alt="Пианино"
            onClick={() => setOpen(true)}
          />
        </DialogTrigger>

        <DialogContent className="max-w-lg mx-auto">
          <DialogHeader>
            <DialogTitle>{PianoName}</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col md:flex-row gap-4">
            {/* Изображение */}
            <div className="w-full md:w-1/2">
              <img
                src={imgUrl}
                alt={PianoName}
                className="w-full h-60 object-cover rounded-md"
              />
              <p className="text-xl font-bold mt-4">{PianoPrice} руб</p>
              {StrikethroughPrice && (
                <p className="text-gray-500">
                  <s>{StrikethroughPrice} руб</s>
                </p>
              )}
            </div>

            {/* Характеристики */}
            <div className="w-full md:w-1/2 space-y-2">
              <h2 className="text-lg font-semibold">Характеристики:</h2>
              <p>
                <span className="font-medium">Количество клавиш:</span>{" "}
                {characteristics.keys}
              </p>
              <p>
                <span className="font-medium">Материал корпуса:</span>{" "}
                {characteristics.bodyMaterial}
              </p>
              <p>
                <span className="font-medium">Размеры:</span>{" "}
                {characteristics.dimensions}
              </p>
              <p>
                <span className="font-medium">Вес:</span>{" "}
                {characteristics.weight}
              </p>
              <p>
                <span className="font-medium">Цвет:</span>{" "}
                {characteristics.color}
              </p>
            </div>
          </div>

          <Separator className="my-4" />

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Закрыть</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Title text={PianoName} size="sm" />
      {StrikethroughPrice && (
        <p className="text-gray-500">
          <s>{StrikethroughPrice} руб</s>
        </p>
      )}
      <b className="text-lg">{PianoPrice} руб</b>

      {/* Кнопка добавления в корзину */}
      <div className="flex justify-between mt-3">
        <Button
          className="cursor-pointer"
          onClick={() =>
            toast(`${PianoName} добавлен в корзину`, {
              description: "Перейдите в корзину или продолжайте покупки",
            })
          }
        >
          В корзину
        </Button>
        <Accessibility className="w-5 h-5" />
      </div>
    </div>
  );
};
