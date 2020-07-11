import { combineReducers } from 'redux';

const kanjiDefaults = [
  {
    character: {
      characterText: '水',
      show: 1,
      peek: 0
    },
    onyomi: {
      onyomiText: 'すい',
      show: 1,
      peek: 0
    },
    kunyomi: {
      kunyomiText: 'みず',
      show: 1,
      peek: 0
    }
    ,
    meaning: {
      meaningText: 'water',
      show: 1,
      peek: 0
    }
  },
  {
    character: {
      characterText: '犬',
      show: 1,
      peek: 0
    },
    onyomi: {
      onyomiText: 'けん',
      show: 1,
      peek: 0
    },
    kunyomi: {
      kunyomiText: 'いぬ',
      show: 1,
      peek: 0
    },
    meaning: {
      meaningText: 'dog',
      show: 1,
      peek: 0
    }
  },
  {
    character: {
      characterText: '海',
      show: 1,
      peek: 0
    },
    onyomi: {
      onyomiText: 'かい',
      show: 1,
      peek: 0
    },
    kunyomi: {
      kunyomiText: 'うみ',
      show: 1,
      peek: 0
    },
    meaning: {
      meaningText: 'ocean',
      show: 1,
      peek: 0
    }
  },
  {
    character: {
      characterText: '木',
      show: 1,
      peek: 0
    },
    onyomi: {
      onyomiText: 'もく',
      show: 1,
      peek: 0
    },
    kunyomi: {
      kunyomiText: 'き',
      show: 1,
      peek: 0
    },
    meaning: {
      meaningText: 'tree',
      show: 1,
      peek: 0
    }
  },
  {
    character: {
      characterText: '糸',
      show: 1,
      peek: 0
    },
    onyomi: {
      onyomiText: 'けい',
      show: 1,
      peek: 0
    },
    kunyomi: {
      kunyomiText: 'いと',
      show: 1,
      peek: 0
    },
    meaning: {
      meaningText: 'thread',
      show: 1,
      peek: 0
    }
  }
];

const cardsIndexReducer = (currentIndex = 0, action) => {
  if (action.type === 'INDEX_CHANGE') {
    console.log('from cardsIndexReducer')
    return action.payload;
  }
  return currentIndex;
}

const cardsReducer = (cards = kanjiDefaults, action) => {
  if (action.type === 'CARD_DISPLAY_CHANGE') {
    return action.payload;
  }
  return cards;
}

const defaultDisplayState = {
  character: 1,
  onyomi: 0,
  kunyomi: 0,
  meaning: 0
}

const displayStateReducer = (currentDisplayState = defaultDisplayState, action) => {
  if (action.type === 'TOGGLE_CHANGE') {
    return action.payload
  }
  return currentDisplayState;
};

export default combineReducers({
  cardsIndex: cardsIndexReducer,
  cards: cardsReducer,
  displayState: displayStateReducer
});