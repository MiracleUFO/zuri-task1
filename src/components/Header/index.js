import menuIcon from '../../assets/menu-icon.png';
import shareIcon from '../../assets/share-icon.png';
import styles from './styles.module.css';

const Header = () => {
  const shareCircle =  (
    <div className={styles.dotted}>
      <img src={shareIcon} alt="Share icon" />
    </div>
  );

  return (
    <header className={styles.header}>
      <nav className={styles.share}>{shareCircle}</nav>
      <nav className={styles.menu}>
        <div className={styles.dotted}>
          <img src={menuIcon} alt="Menu icon" />
        </div>

        <div className={styles.menu_floating}>
          <>{shareCircle}</>
          <p>share</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
