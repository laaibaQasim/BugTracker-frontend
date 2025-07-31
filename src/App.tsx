/** @jsxImportSource theme-ui */
import { Dashboard } from "./components/Dashboard";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";

export const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Dashboard />
      <Footer />
    </>
  );
};
