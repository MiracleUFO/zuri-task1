import { useState } from 'react';
import loaderIcon from '../../assets/loader-icon.gif';
import tickIcon from '../../assets/blue-tick.png';
import styles from './styles.module.css';
import { useEffect } from 'react';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500)
  }, []);

  return (
    <div className={styles.container}>
      {loading ?
        <img src={loaderIcon} alt="Blue circular Loader" className={styles.loader_icon} />
      :
        <>
          <img src={tickIcon} alt="Blue tick icon" className={styles.tick} />
          <p>Sent</p>
        </>
      }
    </div>
  )
};

export default Loader;