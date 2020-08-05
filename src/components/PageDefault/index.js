import React from 'react';
<<<<<<< HEAD
import styled, { css } from 'styled-components';

import Menu from '../Menu';
import Footer from '../Footer';
=======
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';
>>>>>>> 427b58d1f670444d0f77ce60471c26bcc29206cb

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
<<<<<<< HEAD
  ${({ paddingAll }) => css`
    padding: ${paddingAll};
  `}
`;


function PageDefault({ children, paddingAll }) {
  return (
    <>
      <Menu />
        <Main paddingAll={paddingAll}>
=======
`;


function PageDefault({ children }) {
  return (
    <>
      <Menu />
        <Main>
>>>>>>> 427b58d1f670444d0f77ce60471c26bcc29206cb
          {children}
        </Main>
      <Footer />
    </>
  );
}

export default PageDefault;