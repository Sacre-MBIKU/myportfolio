/* eslint-disable react/no-unescaped-entities */
import SkillsStyled from "./SkillsStyled";
import Image from "next/image";
import SectionTitle from "../section-title/SectionTitle";
const Skills = () => {
  return (
    <>
      <SkillsStyled id ="skills">
        <SectionTitle>
          <h2>Compétences</h2>
          <h3>Compétences</h3>
        </SectionTitle>
        <section className='skills'>
          <ul>
            <li>
              <Image
                width='100'
                height='100'
                src='/images/ui_ux.png'
                alt='ux and ui designer'
              />
              <h4>UX/UI</h4>
              <p>
                Un site Web au design soigné et convivial gagne toujours le cœur
                des utilisateurs.
              </p>
            </li>
            <li>
              <Image
                width='100'
                height='100'
                src='/images/js.svg'
                alt='frontend and backend developper'
              />
              <h4>Javascript</h4>
              <p>
                C'est l'un des langages les plus utilisés pour écrire du code
                frontend et backend pour les serveurs.
              </p>
            </li>
            <li>
              <Image
                width='100'
                height='100'
                src='/images/react.svg'
                alt='react js '
              />
              <h4>React js</h4>
              <p>
                Une bibliothèque JavaScript pour créer des interfaces
                utilisateurs
              </p>
            </li>
            <li>
              <Image
                width='100'
                height='100'
                src='/images/python.svg'
                alt=' python'
              />
              <h4>Python</h4>
              <p>
                Il est multiplateformes et favorise la programmation impérative
                structurée, fonctionnelle et orientée objet.
              </p>
            </li>
            <li>
              <Image
                width='100'
                height='100'
                src='/images/rest_api.png'
                alt='api rest'
              />
              <h4>API REST</h4>
              <p>
                REST est un style d'architecture logicielle définissant un
                ensemble de contraintes à utiliser pour créer des services web.
              </p>
            </li>
            <li>
              <Image
                width='100'
                height='100'
                src='/images/github-brands.svg'
                alt='git and github'
              />
              <h4>GIT/GITHUB</h4>
              <p>
                Git est un logiciel de gestion de versions décentralisé. Github
                est un service web d'hébergement et de gestion de développement
                de logiciels
              </p>
            </li>
            <li>
              <Image
                width='100'
                height='100'
                src='/images/database.svg'
                alt='database storage'
              />
              <h4>Gestion de Base de données</h4>
              <p>
                Un système de gestion de base de données est un logiciel système
                servant à stocker, à manipuler ou gérer, et à partager des
                données dans une base de données.
              </p>
            </li>
            <li>
              <Image
                width='100'
                height='100'
                src='/images/users.svg'
                alt='Soft Skills'
              />
              <h4>Soft Skills</h4>
              <p>
                Un bon développeur est une personne attréyante, travaillant en
                équipe, sachant gérer des projets et bien évidemment créative...
              </p>
            </li>
          </ul>
        </section>
      </SkillsStyled>
    </>
  );
};

export default Skills;
