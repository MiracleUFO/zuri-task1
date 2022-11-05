import { useMemo, useState } from 'react';
import { emailValidRegex } from '../../constants/emailValidRegex';
import { articleToShow } from './logic';
import styles from './styles.module.css';

const TextField = ({ 
  id,
  type,
  label,
  placeholder,
  value,
  checked,
  setChecked,
  onChange,
  small,
  multiple,
  invalid,
  ...rest
}) => {
  const [boxUnfocused, setBoxUnfocused] = useState(false);
  const [inputUnfocused, setInputUnfocused] = useState(false);

  const showErrorText = useMemo(() => {
    const valueValid = type === 'email' ? value.match(emailValidRegex) : !!value;
    return boxUnfocused && !valueValid;
  }, [boxUnfocused, type, value]);

  return (
    <div
      className={`${styles.textBox} ${small ? styles.input_small : ''} ${type === 'checkbox' ? styles.termsBox : ''}`}
      onMouseLeave={() => setBoxUnfocused(true)}
      onMouseEnter={() => setBoxUnfocused(false)}
    >
      <label htmlFor={id} className={styles.label}>{label}</label>
      {multiple ?
        <textarea
          className={`${styles.textArea} ${inputUnfocused ? styles.invalid_on_unfocus : ''}`}
          id={id}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={() => setInputUnfocused(true)}
          onFocus={() => setInputUnfocused(false)}
          {...rest}>
        </textarea>
      : 
        <input
          className={`${styles.input} ${inputUnfocused ? styles.invalid_on_unfocus : ''}`}
          id={id}
          value={value}
          checked={checked}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={() => setInputUnfocused(true)}
          onFocus={() => setInputUnfocused(false)}
          {...rest}
        />
      }
      {type === 'checkbox' ?
        <span 
          className={`${styles.custom_checkbox} ${checked ? styles.active : ''}`}
          onClick={() => setChecked(!checked)}
        ></span>
      : null
      }
      {id !== 'terms' && id !== 'last_name' && id !== 'first_name' && showErrorText ?
        <p className={`${styles.errorText} animate__animated animate__flipInX`}>
          Please enter {articleToShow(label)} {label.toLowerCase() === 'email' ? 'valid' : null} {label.toLowerCase()}
        </p> 
      : null
      }
    </div>
  )
}

export default TextField;