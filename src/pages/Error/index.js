import React from 'react';
import styled from 'styled-components';
import PageDefault from '../../components/PageDefault';

const Canvas = styled.iframe`
  align-content: center;
  position: center;
  width: 744px;
  height: 364px;
  max-height: 360;
`;

function Error() {
  return (
    <PageDefault>
      <h1>ERROR 404 - Página não encontrada!</h1>
      <Canvas
        title="Titulo do Iframe"
        src="https://editor.p5js.org/raianepedra/embed/1Nq3ltRlp"
      />

    </PageDefault>
  );
}

export default Error;
