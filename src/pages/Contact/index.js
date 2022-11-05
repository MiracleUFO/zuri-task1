import { useState } from 'react';
import styles from './styles.module.css';

const Contact = () => {
  const initialFieldValues = {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  };

  const [fields, setFields] = useState(initialFieldValues);
  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
      </section>

      <form>

      </form>
    </main>
  )
};

export default Contact;