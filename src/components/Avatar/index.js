import avatar from '../../assets/avatar.jpg';
import './styles.css';

const Avatar = () => {
  return (
    <div className="avatar-container">
      <img id="profile__img" src={avatar} alt="avatar" />
    </div>
  );
};

export default Avatar;
