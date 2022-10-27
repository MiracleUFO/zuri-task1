import Avatar from '../Avatar';
import content from './constants';
import './styles.css';


const Main = () => {
  return (
    <main>
      <Avatar />
      <section className="main-content">
        {content.map((item, i) => 
          <div id={item.id} key={i} className={item.id === 'slack' ? 'hidden' : 'button'}>
            {item?.text}
            <a href={item?.linkTo} target="_blank" rel="noreferrer">
              {item?.id === 'twitter' ?
                <i className="fa fa-twitter header" aria-hidden="true"></i>
              : <p className="header">{item?.header}</p>
              }
              <p className="sub-text">{item?.subText}</p>
            </a>
          </div>
        )}
      </section>
    </main>
  );
};

export default Main;
