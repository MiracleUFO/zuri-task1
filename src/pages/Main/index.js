import Header from '../../components/Header';
import Avatar from '../../components/Avatar';
import { Link } from 'react-router-dom';
import content from './constants';
import slack from '../../assets/slack.png';
import './styles.css';


const Main = () => {
  return (
    <>
      <Header />
      <main>
        <Avatar />

        <section className="main-content">
          {content.map((item, i) => 
            <div id={item.id} key={i} className={item.id === 'slack' ? 'hidden' : ''}>
              {item?.text}
              {item.id !== 'contact' ?
                <a href={item?.linkTo} target="_blank" rel="noreferrer" className="button">
                  {item?.id === 'twitter' ?
                    <i className="fa fa-twitter header" aria-hidden="true"></i>
                  : <p className="header">{item?.header}</p>
                  }
                  <p className="sub-text">{item?.subText}</p>
                </a>
              :
                <Link to="/contact" className="button">
                  <p className="header">{item?.header}</p>
                  <p className="sub-text">{item?.subText}</p>
                </Link>
              }
            </div>
          )}

          <div className="socials">
            <img src={slack} alt="Slack icon, leads nowhere" />
            <a href="https://github.com/MiracleUFO/zuri-task1"target="_blank" rel="noreferrer">
              <i className="fa fa-brands fa-github"></i>
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
