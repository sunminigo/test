import { useState, useEffect } from 'react';
import Btn from '../components/Button';
import List from '../components/List';
import Spinner from '../components/Spinner';
import axios from 'axios';

function App() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  let [pageIdx, setPageIdx] = useState(1);
  let [select, setSelect] = useState('');

  const getList = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://picsum.photos/v2/list');
      setList([...list, ...response.data.slice(pageIdx, pageIdx + 1)]);
      setPageIdx(pageIdx + 1);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };
  const clickMore = () => {
    getList();
  };
  const removeList = (item) => {
    setList(list.filter((i) => i.id !== item.id));
  };
  const onSelect = (e) => {
    setSelect(e.target.value);

    if (select === '0') {
      list.sort((a, b) => a.author.localeCompare(b.author));
    } else {
      list.sort((a, b) => -a.author.localeCompare(b.author));
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="page_photo">
      <div style={{ padding: '10px' }}>
        <select value={select} onChange={onSelect}>
          <option value="" disabled>
            정렬
          </option>
          <option value="0">오름순</option>
          <option value="1">내림순</option>
        </select>
      </div>
      <div style={{ padding: '10px' }}>
        <List data={list} handleSnap={removeList} />
        {list.length <= pageIdx && <Btn text={'더보기'} align={'center'} handleClick={clickMore} />}

        {loading && <Spinner />}
      </div>
    </div>
  );
}

export default App;
