import Sidebar from "../components/Sidebar/Sidebar";
import Main from "../components/main/Main";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Realese from "../components/realese/Realese";
export default function Home() {
  return (
    <>
      <Sidebar topPosition='8.5' />
      <Main />
      <About />
      <Skills />
      <Realese />
    </>
  );
}
