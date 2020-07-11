import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updatePeek } from '../actions';
import { updateToggle } from '../actions';

import { clone } from '../utils/objectClone.js';

class Card extends Component {

  render() {
    console.log(this.props.displayState);

    const handlePeekClick = clickedProperty => {
      const cardsCopy = clone(this.props.cards);
      cardsCopy[this.props.index][clickedProperty].peek = 1;

      this.props.updatePeek(cardsCopy);
    }

    const handleDisplayToggle = clickedProperty => {
      console.log('display state toggled')
      const displayStateCopy = clone(this.props.displayState);
      displayStateCopy[clickedProperty] = displayState[clickedProperty] === 0 ? 1 : 0;

      this.props.updateToggle(displayStateCopy);
    }

    const currentCard = this.props.cards[this.props.index];
    const displayState = this.props.displayState;
    const cardAspects = Object.keys(currentCard);

    const cardsToRender = cardAspects.map(aspect => {
      return (
        <div className="card-aspect">
          <div
            className="button show-hide"
            onClick={()=>{
              handleDisplayToggle(aspect);
            }}
          >
            Show/hide
          </div>
          <div className="card-main-info">
            {displayState[aspect] || currentCard[aspect].peek ? currentCard[aspect][aspect + 'Text'] : '-'}
          </div>
          <div>
            <span className="button" onClick={() => { handlePeekClick(aspect) }}>peek</span>
          </div>
        </div>
      )
    })

    // map version
    return (
      <div className="card-grid">
        {cardsToRender}
      </div>
    )

//     // non map version
//     return (
//       <div className="card-grid">
//         <div className="card-aspect">
//           <div
//             className="button show-hide"
//             onClick={()=>{
//               console.log('clicked');
//             }}
//           >
//             Show/hide
//           </div>
//           <div className="card-main-info">
//             {displayState.character || currentCard.character.peek ? currentCard.character.characterText : 'Hidden'}
//           </div>
//           <div>
//             <span className="button" onClick={() => { handlePeekClick('character') }}>peek</span>
//           </div>
//         </div>
//         <div className="card-aspect">
//           <div
//             className="button show-hide"
//             onClick={()=>{
//               console.log('clicked');
//             }}
//           >
//             Show/hide
//           </div>
//           <div className="card-main-info">
//             {displayState.onyomi || currentCard.onyomi.peek ? currentCard.onyomi.onyomiText : 'Hidden'}
//           </div>
//           <div>
//             <span className="button" onClick={() => { handlePeekClick('onyomi') }}>peek</span>
//           </div>
//         </div>
//         <div className="card-aspect">
//           <div
//             className="button show-hide"
//             onClick={()=>{
//               console.log('clicked');
//             }}
//           >
//             Show/hide
//           </div>
//           <div className="card-main-info">
//             {displayState.kunyomi || currentCard.kunyomi.peek ? currentCard.kunyomi.kunyomiText : 'Hidden'}
//           </div>
//           <div>
//             <span className="button" onClick={() => { handlePeekClick('kunyomi') }}>peek</span>
//           </div>
//         </div>
//         <div className="card-aspect">
//           <div
//             className="button show-hide"
//             onClick={()=>{
//               console.log('clicked');
//             }}
//           >
//             Show/hide
//           </div>
//           <div className="card-main-info">
//             {displayState.meaning || currentCard.meaning.peek ? currentCard.meaning.meaningText : 'Hidden'}
//           </div>
//           <div>
//             <span className="button" onClick={() => { handlePeekClick('meaning') }}>peek</span>
//           </div>
//         </div>
//       </div>
//     )
  }
}

const mapStateToProps = state => {
  return {
    index: state.cardsIndex,
    cards: state.cards,
    displayState: state.displayState
  }
}

export default connect(mapStateToProps, { updatePeek, updateToggle })(Card);