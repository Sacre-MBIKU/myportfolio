import Sidebar from "../components/Sidebar/Sidebar";
import Main from "../components/main/Main";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
export default function Home() {
  return (
    <>
      <Sidebar topPosition='8.5' />
      <Main />
      <About />
      <Skills />
    </>
  );
}
