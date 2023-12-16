import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeView } from "./views/home-view";
import { FindView } from "./views/find-view";
import { SignUpView } from "./views/sign-up";
import { SignInView } from "./views/sign-in";

export const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/find" element={<FindView />} />
        <Route path="/sign-in" element={<SignInView />} />
        <Route path="/sign-up" element={<SignUpView />} />
      </Routes>
    </BrowserRouter>
  );
};
