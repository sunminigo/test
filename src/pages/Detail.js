import { useLocation } from 'react-router-dom';
import styles from '../styles/list.module.scss';

function Detail() {
  const location = useLocation();
  console.log(location.state.data);

  return (
    <div className={styles.detail}>
      <img src={location.state.data.download_url} alt={location.state.data.author} width="100%" />
    </div>
  );
}

export default Detail;
