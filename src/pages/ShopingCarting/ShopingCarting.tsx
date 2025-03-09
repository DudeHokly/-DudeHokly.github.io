import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

// Тип данных товара
type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const initialCart: CartItem[] = [
  { id: 1, name: "Товар 1", price: 1000, quantity: 1 },
  { id: 2, name: "Товар 2", price: 1500, quantity: 2 },
  { id: 3, name: "Товар 3", price: 2000, quantity: 1 },
];

const ShopingCarting: React.FC = () => {
  const [isOrder, setIsOrder] = useState(true);
  const [cart, setCart] = useState<CartItem[]>(initialCart);

  // Функция увеличения количества
  const increaseQuantity = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Функция уменьшения количества
  const decreaseQuantity = (id: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Функция удаления товара из корзины
  const removeItem = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Подсчет общей суммы заказа
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="pt-[60px] pb-[60px]">
      <Card className="w-full max-w-lg mx-auto mt-10 p-6 shadow-lg">
        <CardHeader>
          <CardTitle>
            {isOrder ? "Оформление заказа" : "Отправка заказа"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Переключатель */}
          <div className="flex justify-center gap-4 mb-4">
            <Button
              variant={isOrder ? "default" : "outline"}
              onClick={() => setIsOrder(true)}
              className="cursor-pointer"
            >
              Оформить заказ
            </Button>
            <Button
              variant={!isOrder ? "default" : "outline"}
              onClick={() => setIsOrder(false)}
              className="cursor-pointer"
            >
              Оформить доставку
            </Button>
          </div>

          {isOrder ? (
            // Контент для оформления заказа
            <>
              {cart.length === 0 ? (
                <p className="text-center text-gray-500">Корзина пуста</p>
              ) : (
                <>
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center py-2"
                    >
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-gray-500">{item.price} ₽</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => decreaseQuantity(item.id)}
                        >
                          −
                        </Button>
                        <span>{item.quantity}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => increaseQuantity(item.id)}
                        >
                          +
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => removeItem(item.id)}
                        >
                          ✖
                        </Button>
                      </div>
                    </div>
                  ))}
                  <Separator className="my-4" />
                  <div className="flex justify-between font-semibold">
                    <span>Итого:</span>
                    <span>{totalPrice} ₽</span>
                  </div>
                  <Link to="/Payment">
                    <Button className="w-full mt-4">Оформить заказ</Button>
                  </Link>
                </>
              )}
            </>
          ) : (
            // Контент для отправки
            <p className="text-center text-gray-500">
              Информация об отправке заказа появится здесь.
            </p>
          )}
        </CardContent>
      </Card>
    </section>
  );
};

export default ShopingCarting;
