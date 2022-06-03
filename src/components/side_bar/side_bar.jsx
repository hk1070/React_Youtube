import styles from './side_bar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faCompass,
  faClock,
  faHeart,
  faFolder,
} from '@fortawesome/free-solid-svg-icons';

const SideBar = ({ display }) => {
  const displayType = display === 'list' ? styles.list : styles.grid;
  return (
    <>
      <div className={`${styles.sidebar} ${displayType}`}>
        <div className={styles.menubox}>
          <FontAwesomeIcon icon={faHouse} className={styles.icon} />
          <span className={styles.menutext}>홈</span>
        </div>
        <div className={styles.menubox}>
          <FontAwesomeIcon icon={faCompass} className={styles.icon} />
          <span className={styles.menutext}>탐색</span>
        </div>
        <div className={styles.menubox}>
          <FontAwesomeIcon icon={faHeart} />
          <span className={styles.menutext}>구독</span>
        </div>
        <div className={styles.menubox}>
          <FontAwesomeIcon icon={faFolder} />
          <span className={styles.menutext}>보관함</span>
        </div>
        <div className={styles.menubox}>
          <FontAwesomeIcon icon={faClock} className={styles.icon} />
          <span className={styles.menutext}>시청 기록</span>
        </div>
      </div>
    </>
  );
};

export default SideBar;
