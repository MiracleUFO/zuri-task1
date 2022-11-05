import Header from '../../components/Header';
import Avatar from '../../components/Avatar';
import { Link } from 'react-router-dom';
import content from './constants';
import slack from '../../assets/slack.png';
import styles from './styles.module.css';

const Main = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Avatar />

        <section className={styles.main_content}>
          {content.map((item, i) => 
            <div id={item.id} key={i} className={item.id === 'slack' ? styles.hidden : ''}>
              {item?.text}
              {item.id !== 'contact' ?
                <a href={item?.linkTo} target="_blank" rel="noreferrer" className={styles.button}>
                  {item?.id === 'twitter' ?
                    <i className={`fa fa-twitter ${styles.header}`} aria-hidden="true"></i>
                  : <p className={styles.header}>{item?.header}</p>
                  }
                  <p className={styles.sub_text}>{item?.subText}</p>
                </a>
              :
                <Link to="/contact" className={styles.button}>
                  <p className={styles.header}>{item?.header}</p>
                  <p className={styles.sub_text}>{item?.subText}</p>
                </Link>
              }
            </div>
          )}

          <div className={styles.socials}>
            <img src={slack} alt="Slack icon, leads nowhere" />
            <a href="https://github.com/MiracleUFO/zuri-task1" target="_blank" rel="noreferrer">
              <i className="fa fa-brands fa-github"></i>
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
