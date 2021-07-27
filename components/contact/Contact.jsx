import ContactStyled from "./ContactStyled";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../section-title/SectionTitle";

const Contact = () => {
  return (
    <ContactStyled>
      <SectionTitle>
        <h2>Contact</h2>
        <h3>Contact</h3>
      </SectionTitle>

      <section className='contact'>
        <ul className='phone-email'>
          <li>
            <span>Phone</span>
            <strong>
              <a href='tel:+2438223311664'>082 33 11 664</a>
            </strong>
          </li>
          <li>
            <span>Phone</span>
            <strong>
              <a href='mailto:sajombiku@gmail.com'>sajombiku@gmail.com</a>
            </strong>
          </li>
        </ul>

        <form action='' method='post'>
          <div className='identity'>
            <div className='name'>
              <input type='text' name='name' id='name' defaultValue='nom' />
            </div>
            <div className='mail'>
              <input type='email' name='mail' id='mail' defaultValue='email' />
            </div>
          </div>
          <div className='message'>
            <textarea
              name='message'
              id='message'
              cols='30'
              rows='10'
              defaultValue='vos mots'
            ></textarea>
          </div>
          <div className='button-submit'>
            <button type='submit'>Envoyez le message</button>
          </div>
        </form>
      </section>

    </ContactStyled>
  );
};

export default Contact;
