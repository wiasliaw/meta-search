import React from 'react';

interface IProps {
  data: any;
}

const List: React.FC<IProps> = ({ data }) => (
  <div className="list-element">
    <a href={data.link} target="_blank" rel="noopener noreferrer">
      <h3>{data.title}</h3>
      <p>{data.description}</p>
    </a>
  </div>
)

const SearchList: React.FC<IProps> = ({ data }) => {
  return (
    <div id="list-column">
      {
        data.map((d: any) => <List data={d}/>)
      }
    </div>
  );
}

export default SearchList;
