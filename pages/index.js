import Sidebar from "../components/Sidebar/Sidebar";
import Main from "../components/main/Main";
import About from "../components/about/About";
export default function Home() {
  return (
    <>
      <Sidebar topPosition='8.5' />
      <Sidebar topPosition='60' horizontalPosition='85' />
      <Main />
      <About />
    </>
  );
}
