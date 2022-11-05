import { useState } from 'react';
import TextField from '../../components/TextField';
import styles from './styles.module.css';

const Contact = () => {
  const initialFieldValues = {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  };

  const [fields, setFields] = useState(initialFieldValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({
      ...fields,
      [name]: value
    });
    console.log(fields);
  };

  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
      </section>
      <form onSubmit={handleSubmit} className={styles.form}>
        <section className={styles.flex_container}>
          <TextField
            id="first_name"
            name="firstName"
            label="First name"
            placeholder="Enter your first name"
            value={fields.firstName}
            onChange={handleChange}
            small
            required
          />
          <TextField
            id="last_name"
            name="lastName"
            label="Last name"
            placeholder="Enter your last name"
            value={fields.lastName}
            onChange={handleChange}
            small
            required
          />
        </section>
        <TextField
          id="email"
          name="email"
          label="Email"
          placeholder="yourname@email.com"
          type="email"
          value={fields.email}
          onChange={handleChange}
          required
        />
        <TextField
          id="message"
          name="message"
          label="Message"
          placeholder="Send me a message and I'll reply you as soon as possible..."
          value={fields.message}
          onChange={handleChange}
          multiple
          rows="6"
          required
        />
        
        <button type="submit">Submit</button>
      </form>
    </main>
  )
};

export default Contact;