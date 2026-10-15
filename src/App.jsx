import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ListStagiaire from './components/Stagiaire/ListeStagiaire';
import DetailStagiaire from './components/Stagiaire/DetailStagiaire';
import AddStagiaire from './components/Stagiaire/AddStagiaire';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ListStagiaire />} />
        <Route path="/add" element={<AddStagiaire />} />
        <Route path="/:nom" element={<DetailStagiaire />} />
      </Routes>
    </>
  );
}

export default App;
