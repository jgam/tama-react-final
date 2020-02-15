import React from 'react';
import { css } from '@emotion/core';

const Home = () => {
  return (
    <div>
      {/* Global Header */}
      <div
        css={css`
          background-color: red;
        `}
      >
        <header>LOGO</header>
        <nav>
          <div
            css={css`
              background-color: gray;
            `}
          >
            Home
          </div>
          <div
            css={css`
              background-color: gray;
            `}
          >
            Tama
          </div>
          <div
            css={css`
              background-color: gray;
            `}
          >
            Contact
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Home;
