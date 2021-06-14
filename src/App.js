
import Header from "./Components/Header";
import FirstSection from "./Components/FirstSection";
import SecondSection from "./Components/SecondSection";
import Footer from "./Components/Footer";
import useWindowSize from "./utils/useWindowSize";

function App() {

  const size = useWindowSize();

  return (
    <>
      <Header device={size.device} />
      <FirstSection device={size.device} />
      <SecondSection />
      <Footer device={size.device} />
    </>
  );
}

export default App;
