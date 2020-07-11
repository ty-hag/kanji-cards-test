import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeIndex, updatePeek } from '../actions';
import Card from './Card';

import { clone } from '../utils/objectClone';

class CardDisplay extends Component {

  render() {

    const resetPeekStatus = () => {
      const cardsWithPeekStatusReset = clone(this.props.cards);
      cardsWithPeekStatusReset[this.props.index].character.peek = 0;
      cardsWithPeekStatusReset[this.props.index].onyomi.peek = 0;
      cardsWithPeekStatusReset[this.props.index].kunyomi.peek = 0;
      cardsWithPeekStatusReset[this.props.index].meaning.peek = 0;
      this.props.updatePeek(cardsWithPeekStatusReset);
    }

    return (
      <div>
        <div className="container-next-previous">
          <span
            className="button next-card"
            onClick={() => {
              resetPeekStatus();
              if (this.props.index > 0) {
                this.props.changeIndex(this.props.index - 1)
              } else if (this.props.index === 0) {
                this.props.changeIndex(this.props.cards.length - 1);
              }
            }}
          >
            PREVIOUS CARD
          </span>
          <span
            className="button previous-card"
            onClick={() => {
              resetPeekStatus();
              if (this.props.index < this.props.cards.length - 1) {
                this.props.changeIndex(this.props.index + 1)
              } else if (this.props.index === this.props.cards.length - 1) {
                this.props.changeIndex(0);
              }
            }}
          >
            NEXT CARD
          </span>
        </div>
        <div>
          <Card />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    index: state.cardsIndex,
    cards: state.cards
  }
}

export default connect(mapStateToProps, { changeIndex, updatePeek })(CardDisplay);