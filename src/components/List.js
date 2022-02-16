import { Link } from 'react-router-dom';
import styles from '../styles/list.module.scss';
import { SwipeableList, SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';
import { Trash } from 'phosphor-react';

function List({ data, handleSnap }) {
  const items = data || [];

  if (data.length > 0) {
    return (
      <div className={styles.list}>
        <SwipeableList threshold={0.2}>
          {items.map((item) => (
            <SwipeableListItem
              className={styles.item}
              key={item.id}
              swipeLeft={{
                content: <Trash size={32} />,
                action: () => {
                  handleSnap(item);
                },
              }}
            >
              <Link to={`/detail/${item.id}`} state={{ data: item }}>
                <img src={item.download_url} alt={item.author} />
                <p className={styles.title}>{item.author}</p>
              </Link>
            </SwipeableListItem>
          ))}
        </SwipeableList>
      </div>
    );
  } else {
    return <p className={styles.noneMsg}>no data</p>;
  }
}

export default List;
