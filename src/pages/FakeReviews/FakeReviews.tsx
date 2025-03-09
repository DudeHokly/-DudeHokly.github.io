import { Reviews, Title } from "@/components/Shared";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accessibility, Dribbble, Handshake } from "lucide-react";
import { toast } from "sonner";

const FakeReviews: React.FC = () => {
  return (
    <>
      <section
        className="relative h-screen bg-no-repeat bg-cover bg-center z-0 flex justify-center items-center"
        style={{ backgroundImage: "url('/imges/Reviews.webp')" }}
      >
        <div className="flex flex-col items-center z-10">
          <div className="relative flex items-center space-x-2">
            <Input
              type="email"
              placeholder="Напишите свой email"
              className="px-4 py-2 border "
            />
            <Button
              onClick={() => toast("Сообщение успешно отправилось")}
              className="cursor-pointer"
            >
              Отправить
              <Dribbble className="ml-2" size={36} />
            </Button>
          </div>

          <div className="flex space-x-4 mt-6 cursor-pointer">
            <Accessibility className="text-[#008080] " size={38} />
            <Dribbble className="text-[#008080] animate-bounce" size={38} />
            <Handshake className="text-[#008080]" size={38} />
            <Dribbble className="text-[#008080] animate-bounce" size={38} />
            <Accessibility className="text-[#008080]" size={38} />
          </div>
        </div>
      </section>
      <div className="h-1 bg-black mt-[40px] w-[1200px] m-auto"></div>
      <div className="flex flex-col items-center justify-center py-[50px]">
        <div className="shadow-lg p-10 rounded-3xl bg-[#008080] w-[1000px]">
          <Title
            text={"Отзывы благодарных килентов"}
            size="md"
            className="text-center text-white"
          />
          <Reviews />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-[50px]">
        <Title text={"Посетите нас"} size="md" className="mb-4" />

        {/* Карта */}
        <div className="w-full max-w-[1200px] h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1169091732137!2d-122.08424998432751!3d37.42199997982454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba0300a6fb37%3A0x76e9200bcec5f4d6!2sGoogleplex!5e0!3m2!1sen!2sus!4v1615329235706!5m2!1sen!2sus"
            width="100%"
            height="100%"
            className="rounded-lg shadow-md"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default FakeReviews;
