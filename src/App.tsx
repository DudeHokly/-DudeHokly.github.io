import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Container, Footer, Header } from "@/components/Shared";

import ItemsPage from "./pages/ItemsPage/ItemsPage";
import Home from "./pages/Home/Home";
import FakeReviews from "./pages/FakeReviews/FakeReviews";
import Maintenance from "./pages/Maintenance/Maintenance";
import AboutUs from "./pages/AboutUs/AboutUs";
import TeachingPage from "./pages/TeachingPage/TeachingPage";
import AuthForm from "./pages/Authorization/Authorization";
import ShopingCarting from "./pages/ShopingCarting/ShopingCarting";
import PaymentForm from "./pages/Payment/Payment";
import Feedback from "./pages/Feedback/Feedback";

export default function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/FakeReviews" element={<FakeReviews />} />
        <Route path="/Maintenance" element={<Maintenance />} />
        <Route path="/TeachingPage" element={<TeachingPage />} />
        <Route path="/Authorization" element={<AuthForm />} />
        <Route path="/ItemsPage" element={<ItemsPage />} />
        <Route path="/ShopingCarting" element={<ShopingCarting />} />
        <Route path="/Payment" element={<PaymentForm />} />
        <Route path="/Feedback" element={<Feedback />} />
      </Routes>
      <Footer />
    </Container>
  );
}
