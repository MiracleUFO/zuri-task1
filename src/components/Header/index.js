import menuIcon from '../../assets/menu.png';
import shareIcon from '../../assets/share.png';
import './styles.css';

const Header = () => {
  const shareCircle =  (
    <div className="dotted">
      <img src={shareIcon} alt="Share icon" />
    </div>
  );

  return (
    <header>
      <nav className="share">{shareCircle}</nav>
      <nav className="menu">
        <div className="dotted">
          <img src={menuIcon} alt="Menu icon" />
        </div>

        <div className="menu-floating">
          <>{shareCircle}</>
          <p>share</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
