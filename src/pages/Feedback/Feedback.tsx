import { Title } from "@/components/Shared";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const loginSchema = z.object({
  email: z.string().email("Некорректный email"),
  password: z.string().min(6, "Пароль должен содержать минимум 6 символов"),
});

const Feedback = () => {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <section className="pt-[80px]">
      <div className="p-[40px] shadow-2xl rounded-3xl w-[1200px] mb-[50px] m-auto">
        <div className="mt-5">
          <Title
            text={"Cообщите нам о вашей проблемы, а мы попробуем решить ее"}
            className="mb-2"
          />
          <p>
            Сообщите нам о вашей проблеме Мы всегда готовы помочь вам! Если у
            вас возникли трудности с выбором инструмента, оформлением заказа или
            доставкой, просто свяжитесь с нами. Наша команда профессионалов
            сделает всё возможное, чтобы найти решение. Мы ценим каждого клиента
            и стремимся сделать ваш опыт покупки максимально комфортным. Ваше
            мнение и обратная связь помогают нам становиться лучше!
          </p>
        </div>
        <div className="mt-5">
          <Title text={"Опишите вашу проблему"} />
          <Input
            type="text"
            placeholder="Опишите вашу проблему"
            className="mt-2"
          />
        </div>

        <div className="mt-5">
          <Title text={"Вы так же можете связаться с нами по телефону"} />
          <div className="mt-2">
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
  );
};

export default Feedback;
