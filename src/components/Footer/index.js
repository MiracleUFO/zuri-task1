import zuriLogo from '../../assets/zuri-logo.png';
import i4gLogo from '../../assets/I4G-logo.png';
import './styles.css';

const Footer = () => (
  <footer>
    <img src={zuriLogo} alt="Zuri internship logo" />
    <p>HNG Internship 9 Frontend Task</p>
    <img src={i4gLogo} alt="I4G logo" />
  </footer>
);

export default Footer;