import React from 'react';
import { FaGithub } from 'react-icons/fa';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  z-index: 1000;
  background-color: #364f6b;
`;

const Title = styled.h2`
  color: #fff;
`;

const Navbar = () => (
  <Nav>
    <Title>Meta Search</Title>
    <a
      href="https://github.com/wiasliaw77210/meta-search"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaGithub
        style={{ width: '35px', height: '35px', color: '#fff' }}
      />
    </a>
  </Nav>
);

export default Navbar;
