import React from 'react';
import { HiSearch } from 'react-icons/hi';
import styled from 'styled-components';
import searchAPI from '../utils';

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 50px;
  border: 1px solid black;
  border-radius: 10em;
  padding: 6.25px;
`;

const Input = styled.input`
  width: 80%;
  height: 100%;
  font-size: 24px;
  border: 0px;
  background-color: transparent;
  padding: 0 20px;
`;

const Label = styled.label`
  width: 15%;
  height: 100%;
  min-width: 60px;
  min-height: 50px;
  border-radius: 10em;
  background: #607ea1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

interface IProp {
  updateResults: Function;
}

const SearchInput: React.FC<IProp> = (props) => {
  const inputRef = React.createRef<HTMLInputElement>();

  const handleSearch = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (inputRef.current?.value) {
      const data = await searchAPI(inputRef.current?.value);
      props.updateResults(data);
    }
  }

  return (
    <Form>
      <Input
        id="search-id"
        ref={inputRef}
        type="text"
        placeholder="Search..."
      />
      <Label onClick={handleSearch}>
        <HiSearch
          style={{ width: '30px', height: '30px', color: '#fff' }}
        />
      </Label>
    </Form>
  );
};

export default SearchInput;
