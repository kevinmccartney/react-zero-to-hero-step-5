import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { random } from 'lodash';

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
  constructor() {
    super();

    this.state ={
      recipe: 'casserole',
      recipes: [
        'a casserole',
        'a bowl of ramen',
        'a smoothie',
        'cookies',
        'kimchi',
        'omlets',
      ],
      recipeUpdaterId: null,
    };

    this.updateRecipe = this.updateRecipe.bind(this);
  }

  componentDidMount() {
    const recipeUpdaterId = setInterval(this.updateRecipe, 4000);

    console.log(recipeUpdaterId);

    this.setState({
      recipeUpdaterId,
    })
  }

  componentWillUnmount() {
    clearInterval(this.state.recipeUpdaterId);
  }

  updateRecipe() {
    const newIndex = random(0, 5);
    const newRecipe = this.state.recipes[newIndex];

    this.setState({
      recipe: newRecipe,
    });
  }

  render() {
    return (
      <Wrapper>
        <Background />
        <UIWrapper>
          <UIInner>
            <Title>{this.props.greeting}</Title>
            <Subtitle>You can make <Recipe>{this.state.recipe}</Recipe></Subtitle>
            <SearchBlock>
              <Searchbar
                placeholder="find something good"
              />
              <SearchButton>
                Search
              </SearchButton>
            </SearchBlock>
          </UIInner>
        </UIWrapper>
      </Wrapper>
    );
  }
}

App.propTypes = {
  greeting: PropTypes.string.isRequired,
};

export default App;
