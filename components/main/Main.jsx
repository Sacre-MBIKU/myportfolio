import MainStyled from "./MainStyled";
import Image from "next/image";
const Main = () => {
  const goToContact = () => {
    document.body.scrollTop = 1000090; // For Safari
    document.documentElement.scrollTop = 1000090; // For Chrome, Firefox, IE and Opera
  };

  const goToAbout = () => {
    document.body.scrollTop = 550; // For Safari
    document.documentElement.scrollTop = 550; // For Chrome, Firefox, IE and Opera
  };
  return (
    <>
      <MainStyled>
        <section className='self-presentation'>
          <div>Hey ! Salut ! Je suis</div>
          <h1>Sacré MBIKU MUKWAKANI</h1>
          <h2>
            Développeur fullstack web et <span>UI / UX Designer.</span>
          </h2>
          <button onClick = {goToContact}>Contactez moi</button>
          <p className='go-down-button' onClick = {goToAbout}> </p>
        </section>
        <section className='ui-ux-section'>
          <Image
            src='/images/ui_ux.png'
            alt='Sacré MBIKU MUKWAKANI ui/ux designer'
            width='120'
            height='120'
          />
        </section>
      </MainStyled>
    </>
  );
};

export default Main;
