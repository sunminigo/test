import Photos from './pages/Photos';
import Detail from './pages/Detail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <div>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Photos />} />
          <Route path="detail/:id" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
