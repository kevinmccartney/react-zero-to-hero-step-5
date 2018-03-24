import React, { Component } from 'react';

import Wrapper from './components/Wrapper';
import Background from './components/Background';
import UIWrapper from './components/UIWrapper';
import UIInner from './components/UIInner';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import Recipe from './components/Recipe';
import Searchbar from './components/Searchbar';
import SearchBlock from './components/SearchBlock';
import SearchButton from './components/SearchButton';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Background />
        <UIWrapper>
          <UIInner>
            <Title>What's cookin, good lookin?</Title>
            <Subtitle>You can make a <Recipe>casserole</Recipe></Subtitle>
            <SearchBlock>
              <Searchbar
                placeholder="find something good"
              />
              <SearchButton>Search</SearchButton>
            </SearchBlock>
          </UIInner>
        </UIWrapper>
      </Wrapper>
    );
  }
}

export default App;
