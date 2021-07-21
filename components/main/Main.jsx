import MainStyled from "./MainStyled";
import Image from "next/image";
const Main = () => {
  return (
    <MainStyled>
      <section className='self-presentation'>
        <div>Hey ! Salut ! Je suis</div>
        <h1>
          Sacré MBIKU MUKWAKANI
          
        </h1>
        <h2>
          Développeur fullstack web et <span>UI / UX Designer.</span>
        </h2>
        <button>Contactez moi</button>
        <p className='go-down-button'> </p>
      </section>
      <section className='ui-ux-section'>
        <Image
          src='/images/ui_ux.png'
          alt='Sacré MBIKU MUKWAKANI ui/ux designer'
          width='120'
          height='120'
        />
      </section>

      {/* go_down.svg */}
    </MainStyled>
  );
};

export default Main;
