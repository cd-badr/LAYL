
import { HomePage } from './pages/Home/home';
import { About } from './pages/About/about';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </>
  );
}
export default App;
