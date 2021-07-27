/* eslint-disable react/no-unescaped-entities */
import AboutStyled from "./AboutStyled";
import Image from "next/image";
import SectionTitle from "../section-title/SectionTitle";
const About = () => {
  return (
    <>
      <AboutStyled id="about">
        <SectionTitle>
          <h2>A propos de moi</h2>
          <h3>A propos de moi</h3>
        </SectionTitle>
        <section className='profile'>
          <div className='profile-image'>
            <div className='square-deco'></div>
            <Image
              src='/images/profile.png'
              alt='Sacré MBIKU MUKWAKANI ui/ux designer'
              width='240'
              height='300'
            />
          </div>
        </section>
        <section className="description">
          <h2 className='presentation'>
            Je suis <strong>Sacré MBIKU MUKWAKANI</strong>
          </h2>
          <h3 className='profile-phrase'>
            La creéativité est une passion pour moi, qui s'est traduite à la
            conception des sites webs (vos sites web). Un seul concept :{" "}
            <strong>La BEAUTE dans la SIMPLICITE</strong>.
          </h3>
          <ul className='description-list'>
            <li>
              <span>Nom</span> <strong>Sacré MBIKU MUKWAKANI</strong>
            </li>
            <li>
              <span>Phone</span> <a href="tel:+243823311664">+ 243823311664</a>
            </li>
            <li>
              <span>Ville</span>Kinshasa
            </li>
            <li>
              <span>Email</span> <a href="mailto:sajombiku@gmail.com">sajombiku@gmail.com</a>
            </li>
            <li>
              <span>Education</span>Bac + 2 développeur fullstack web à la{" "}
              <strong>Kinshasa Digital Academy</strong>
            </li>
          </ul>
        </section>
      </AboutStyled>
    </>
  );
};

export default About;
