import emailjs from '@emailjs/browser';
import { useRef } from 'react';


const CopyContact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g1rbscd', 'template_wjgkxrb', form.current, 'Tm40EN9KquYnQlRMu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
 <div>
  <form ref={form} onSubmit={sendEmail}>
    <h2>Contactez-nous</h2>
    <div>
      <label htmlFor="name">Nom:</label>
      <input type="text" id="name" name="name" required />
    </div>
    <div>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />
    </div>
    <div>
      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" required></textarea>
    </div>
    <button type="submit">Envoyer</button>
  </form>
 </div>

  );
};

export default CopyContact;