import Header from "./components/Header";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";
import ThePerfectLook from "./components/ThePerfectLook/ThePerfectLook";
import MusicEducation from "./components/MusicEducation/MusicEducation";
import SkinRevolution from "../src/components/SkinRevolutionary/SkinRevolutionary";
import SmileGirl from "../src/components/SmileGirl/SmileGirl";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <ThePerfectLook />
      <MusicEducation />
      <SkinRevolution />
      <SmileGirl />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
