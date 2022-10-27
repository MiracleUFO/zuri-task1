import avatar from '../../assets/avatar.jpg';
import './styles.css';

const Avatar = () => {
  return (
    <div className="avatar-section">
      <div className="avatar-container">
        <img id="profile__img" src={avatar} alt="avatar" />
      </div>
      <p id="twitter">Miracle Ufodiama</p>
      <p id="slack">miracleufodiama</p>
    </div>
  );
};

export default Avatar;
