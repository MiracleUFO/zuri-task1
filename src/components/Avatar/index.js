import avatar from '../../assets/avatar.jpg';
import styles from './styles.module.css';

const Avatar = () => {
  return (
    <section className={styles.avatar_section}>
      <div className={styles.avatar_container}>
        <img id="profile__img" src={avatar} alt="avatar" />
      </div>
      <p>Miracle Ufodiama</p>
      <p id="slack" className={styles.slack}>miracleufodiama</p>
    </section>
  );
};

export default Avatar;
