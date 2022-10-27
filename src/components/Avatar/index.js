import avatar from '../../assets/avatar.jpg';
import './styles.css';

const Avatar = () => {
  return (
    <section className="avatar-section">
      <div className="avatar-container">
        <img id="profile__img" src={avatar} alt="avatar" />
      </div>
      <p>Miracle Ufodiama</p>
      <p id="slack">miracleufodiama</p>
    </section>
  );
};

export default Avatar;
