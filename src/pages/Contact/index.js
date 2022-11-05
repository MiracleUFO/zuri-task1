import { useMemo, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Loader from '../../components/Loader';
import TextField from '../../components/TextField';

import styles from './styles.module.css';
import 'animate.css';

const Contact = () => {
  const initialFieldValues = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    terms: false,
  };

  const [fields, setFields] = useState(initialFieldValues);
  const [showLoader, setShowLoader] = useState(false);
  const [invalidMessageText, setInvalidMessageText] = useState(false);
  const navigate = useNavigate();

  const submitDisabled= useMemo(() => {
    const { firstName, lastName, email, message, terms } = fields;
    const emailRegex = (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    return !(firstName && lastName && email.match(emailRegex) && message && terms);
  }, [fields])

  const handleSubmit = (e) => {
    e.preventDefault();
    const {firstName, lastName, email, message, terms} = fields;
    if (
      firstName &&
      lastName &&
      email &&
      message &&
      terms
    ) {
      setShowLoader(true);
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } else if (!message)
      setInvalidMessageText(true);
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    const valueToSet = name === 'terms' ? checked : value;
    setFields({
      ...fields,
      [name]: valueToSet
    });
  };

  const setChecked = (value) => setFields({...fields, terms: value});

  return (
    <main className={styles.main}>
      {showLoader ?
        <Loader />
      :
      <>
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

          <div className={styles.messageText}>
            <TextField
              id="message"
              name="message"
              label="Message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              value={fields.message}
              onChange={handleChange}
              multiple
              rows="6"
            />
            {!fields.message ?
              <p className={`${styles.errorText} ${invalidMessageText ? styles.show : ''} animate__animated animate__flipInX`}>
                Please enter a message.
              </p> 
            : null}
          </div>

          <TextField
            id="terms"
            name="terms"
            label="You agree to providing your data to Miracle Ufodiama who may contact you."
            type="checkbox"
            checked={fields.terms}
            setChecked={setChecked}
            onChange={handleChange}
            required
          />

          <button
            id="btn__submit"
            type="submit"
            className={styles.submit_btn}
            disabled={submitDisabled}
          >
            Send Message
          </button>
        </form>
      </>}
    </main>
  )
};

export default Contact;