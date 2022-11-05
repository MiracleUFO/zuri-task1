import styles from './styles.module.css';

const TextField = ({ 
  id,
  label,
  placeholder,
  value,
  onChange,
  small,
  multiple,
  ...rest
}) => {
  console.log(small);
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
          placeholder={placeholder}
          onChange={onChange}
          {...rest}
        />
      }
    </div>
  )
}

export default TextField;