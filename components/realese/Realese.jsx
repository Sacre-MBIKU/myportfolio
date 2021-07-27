import RealeseStyled from "./RealeseStyled";
import Image from "next/image";
import SectionTitle from "../section-title/SectionTitle";

const Realese = () => {
  return (
    <RealeseStyled>
      <SectionTitle>
        <h2>Réalisations</h2>
        <h3>Réalisations</h3>
      </SectionTitle>

      <section className='realese'>
        <ul>
          <li>
            <Image width='300' height='200' src='/images/kd.png' alt='' />
            <h4>UX/UI</h4>
            <a href = "#">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </a>
          </li>
          <li>
            <Image width='300' height='200' src='/images/formulaire.png' alt='' />
            <h4>UX/UI</h4>
            <a href = "#">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </a>
          </li>
          <li>
            <Image width='300' height='200' src='/images/project 23.png' alt='' />
            <h4>UX/UI</h4>
            <a href = "#">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </a>
          </li>
          <li>
            <Image width='300' height='200' src='/images/carnet de contact.png' alt='' />
            <h4>UX/UI</h4>
            <a href = "#">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </a>
          </li>
        </ul>
      </section>
    </RealeseStyled>
  );
};

export default Realese;
