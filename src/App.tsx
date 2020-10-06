import React from 'react';
import { FcEngineering } from 'react-icons/fc';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import SInput from './components/SearchInput';
import SList from './components/SearchList';
import { IAPIResponse } from './typing';
import './App.css';

const Container = styled.div<{ isCenter: boolean }>`
  display: flex;
  justify-content: ${props => props.isCenter ? 'flex-start' : 'center'};
  align-items: center;
  flex-direction: column;
  margin-top: 72px;
  padding: 5% 10%;
`;

const App: React.FC = () => {
  const [isSearch, setSearch] = React.useState<boolean>(false);
  const [data, setData] = React.useState<{ results: IAPIResponse[], err: any }>();

  React.useEffect(() => {
    if (data && !isSearch) {
      setSearch(true)
    }
    return;
  }, [data, isSearch]);

  return (
    <React.Fragment>
      <Navbar />
      <Container isCenter={isSearch}>
        {
          !isSearch
            ? <FcEngineering
              style={{
                width: '150px',
                height: '150px',
                color: '#364f6b',
                margin: '30px',
              }}
              className="home-icon"
            />
            : <></>
        }
        <SInput updateResults={setData}/>
        {
          data ? <SList results={data.results} /> : <></>
        }
      </Container>
    </React.Fragment>
  );
}

export default App;
