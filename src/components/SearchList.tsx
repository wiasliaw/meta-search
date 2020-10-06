import React from 'react';
import styled from 'styled-components';
import { IAPIResponse } from '../typing';
import imgBing from '../image/bing.jpg';
import imgGoogle from '../image/google.png';

const Col = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  padding: 0 10%;
`;

const List = styled.div<{ brand: string }>`
  width: calc(100% - 20px);
  border: 1px gray solid;
  border-radius: 10px;
  margin: 10px 0px;
  padding: 10px;
  background-image: url(${props => props.brand === 'google' ? imgGoogle: imgBing});
  background-position: right;
  background-repeat: no-repeat;
  background-size: 150px 150px;
`;

const P = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 375px) {
    width: 220px;
  }
  @media (min-width: 375px) and (max-width: 768px) {
    width: 320px;
  }
  @media (min-width: 768px) and (max-width: 1280px) {
    width: 650px;
  }
  @media (min-width: 1280px) {
    width: 800px;
  }
`;

interface IProps {
  results: IAPIResponse[];
}

const SearchList: React.FC<IProps> = (props) => {
  return (
    <Col>
      {
        props.results.map(r => (
          <List key={Symbol(r.title).toString()} brand={r.type}>
            <a href={r.link} target="_blank" rel="noopener noreferrer">
              <h3>{r.title}</h3>
              <P>{r.description}</P>
            </a>
          </List>
        ))
      }
    </Col>
  );
};

export default SearchList;
