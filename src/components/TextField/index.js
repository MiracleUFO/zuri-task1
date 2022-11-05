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
  ...rest
}) => {
  return (
    <div className={`${styles.textBox} ${small ? styles.input_small : ''} ${type === 'checkbox' ? styles.termsBox : ''}`}>
      <label htmlFor={id} className={styles.label}>{label}</label>
      {multiple ?
        <textarea
          className={styles.textArea}
          id={id}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          {...rest}>
        </textarea>
      : 
        <input
          className={styles.input}
          id={id}
          value={value}
          checked={checked}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
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
    </div>
  )
}

export default TextField;