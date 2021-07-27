import Sidebar from "../components/Sidebar/Sidebar";
import Main from "../components/main/Main";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Realese from "../components/realese/Realese";
import Contact from "../components/contact/Contact";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Sidebar topPosition='4' />
      <Main />
      <About />
      <Skills />
      <Realese />
      <Contact />
      <footer>
        <ul>
          <li>
            <a href=''>
              <Image
                width='25'
                height='25'
                src='/images/github.svg'
                alt='Sacré Mbiku github'
              />
            </a>
          </li>
          <li>
            <a href=''>
              <Image
                width='25'
                height='25'
                src='/images/instagram.svg'
                alt='Sacré MBIKU instagram'
              />
            </a>
          </li>
          <li>
            <a href=''>
              <Image
                width='25'
                height='25'
                src='/images/twitter.svg'
                alt='Sacré MBIKU twitter'
              />
            </a>
          </li>
          <li>
            <a href=''>
              <Image
                width='25'
                height='25'
                src='/images/linkedin.svg'
                alt='Sacré MBIKU'
              />
            </a>
          </li>
        </ul>

        <div className='button-up-to-page'>
          <button>up</button>
        </div>
      </footer>
    </>
  );
}
