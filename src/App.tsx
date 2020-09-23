import React from 'react';
import Navbar from './components/Navbar';
import SearchList from './components/SearchList';
import './App.css';

const App: React.FC = () => {
  const [list, setList] = React.useState<any>([]);

  const updateSearch = (data: any) => {
    setList(data);
  }

  return (
    <React.Fragment>
      <Navbar updateSearch={updateSearch}/>
      <SearchList data={list} />
    </React.Fragment>
  );
}

export default App;
