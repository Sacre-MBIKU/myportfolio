import NavbarStyled, { ListLink, Button } from "./NavbarStyled";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
const Navbar = () => {
  const [isNavMenuDisplayed, setIsNavMenuDisplayed] = useState(false);

  const menuHandler = () => {
    setIsNavMenuDisplayed(!isNavMenuDisplayed);
  };
  return (
    <NavbarStyled navDisplay={isNavMenuDisplayed}>
      <nav>
        <Link href='/'>
          <a>
            <Image
              src='/images/logo 1.svg'
              alt='Sacré MBIKU MUKWAKANI'
              width='80'
              height='80'
            />
          </a>
        </Link>
        <Button
          navDisplay={isNavMenuDisplayed}
          onClick={menuHandler}
          image='/images/menu.svg'
        />
        <Button
          crossButton
          navDisplay={!isNavMenuDisplayed}
          onClick={menuHandler}
          image='/images/cross.svg'
        />
        <ul>
          <ListLink listColor>
            <Link href='/'>
              <a>Accueil</a>
            </Link>
          </ListLink>
          <ListLink>
            <Link href='/about'>
              <a>A propos</a>
            </Link>
          </ListLink>
          <ListLink>
            <Link href='/skills'>
              <a>Compétences</a>
            </Link>
          </ListLink>
          <ListLink>
            <Link href='/releases'>
              <a>Réalisations</a>
            </Link>
          </ListLink>
          <ListLink>
            <Link href='/contact'>
              <a>Contact</a>
            </Link>
          </ListLink>
        </ul>
      </nav>
    </NavbarStyled>
  );
};

export default Navbar;
