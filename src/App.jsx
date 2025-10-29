import Hero from "./Components/Hero";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./Components/Header";
import Benefits from "./Components/Benefits";
import Collaboration from "./Components/Collaboration";
import Services from "./Components/Services";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
