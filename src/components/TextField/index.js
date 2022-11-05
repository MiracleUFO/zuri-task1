import styles from './styles.module.css';

const TextField = ({ 
  id,
  type,
  label,
  placeholder,
  value,
  onChange,
  small,
  multiple,
  ...rest
}) => {
  return (
    <div className={`${styles.textBox} ${small ? styles.input_small : ''}`}>
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
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          {...rest}
        />
      }
    </div>
  )
}

export default TextField;