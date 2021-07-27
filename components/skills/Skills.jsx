/* eslint-disable react/no-unescaped-entities */
import SkillsStyled from "./SkillsStyled";
import Image from "next/image";
import SectionTitle from "../section-title/SectionTitle";
const Skills = () => {
  return (
    <>
      <SkillsStyled>
        <SectionTitle>
          <h2>Compétences</h2>
          <h3>Compétences</h3>
        </SectionTitle>
        <section className='skills'>
          <ul>
            <li>
              <Image width='100' height='100' src='/images/ui_ux.png' alt='' />
              <h4>UX/UI</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                temporibus doloribus perspiciatis, in fugiat enim!
              </p>
            </li>
            <li>
              <Image width='100' height='100' src='/images/ui_ux.png' alt='' />
              <h4>UX/UI</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                temporibus doloribus perspiciatis, in fugiat enim!
              </p>
            </li>
            <li>
              <Image width='100' height='100' src='/images/ui_ux.png' alt='' />
              <h4>UX/UI</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                temporibus doloribus perspiciatis, in fugiat enim!
              </p>
            </li>
            <li>
              <Image width='100' height='100' src='/images/ui_ux.png' alt='' />
              <h4>UX/UI</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                temporibus doloribus perspiciatis, in fugiat enim!
              </p>
            </li>
            <li>
              <Image width='100' height='100' src='/images/ui_ux.png' alt='' />
              <h4>UX/UI</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                temporibus doloribus perspiciatis, in fugiat enim!
              </p>
            </li>
            <li>
              <Image width='100' height='100' src='/images/ui_ux.png' alt='' />
              <h4>UX/UI</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                temporibus doloribus perspiciatis, in fugiat enim!
              </p>
            </li>
            <li>
              <Image width='100' height='100' src='/images/ui_ux.png' alt='' />
              <h4>UX/UI</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                temporibus doloribus perspiciatis, in fugiat enim!
              </p>
            </li>
            <li>
              <Image width='100' height='100' src='/images/ui_ux.png' alt='' />
              <h4>UX/UI</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                temporibus doloribus perspiciatis, in fugiat enim!
              </p>
            </li>
          </ul>
        </section>
      </SkillsStyled>
    </>
  );
};

export default Skills;
