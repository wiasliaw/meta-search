import React from 'react';
import { InputBase } from '@material-ui/core';
import { GitHub, Search } from '@material-ui/icons';

interface IProp {
  updateSearch: Function;
}

const Navbar: React.FC<IProp> = ({ updateSearch }) => {
  const handleSearch = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const request = await fetch(
      `https://google-search3.p.rapidapi.com/api/v1/search/q=${parseInput()}&num=10`,
      {
        'method': 'GET',
        headers: new Headers({
          'x-rapidapi-host': 'google-search3.p.rapidapi.com',
          'x-rapidapi-key': `${process.env.REACT_APP_API_KEY}`,
        }),
      },
    );
    if (request.status === 200) {
      const data = await request.json();
      updateSearch(data.results);
    } else {
      updateSearch(
        {
          answers: [],
          image_results: [],
          results: [
            {
              description: '',
              title: 'Error',
              link: '',
            }
          ],
          total: 0,
        }
      );
    }
  }

  const parseInput = (): String => {
    const inputText = document.querySelector<HTMLInputElement>('#search-input');
    return (inputText?.value)?.replace(/[ ]/gi, '+') || '';
  }

  return (
    <nav id="navbar" className="white">
      <div className="center">
        <h3>Meta Search</h3>
      </div>
      <div className="center">
        <div id="search" className="center">
          <div onClick={handleSearch}>
            <Search />
          </div>
          <InputBase
            id="search-input"
            placeholder="Search..."
            type="text"
          />
        </div>
      </div>
      <div className="center">
        <a
          href="https://github.com/wiasliaw77210/meta-search"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#fff' }}
        >
          <GitHub />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
