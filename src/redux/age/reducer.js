// Set initial state
export const initialState = {
  currentAgeBracket: null,
  ageBracket: [
    { ageCode: 1, label: 'Baby: 0-12 mos.', image: 'http://images.mattel.com/scene7//wcsstore/MattelCAS/FDF21_01?storeId=10151&SKU=FDF21' },
    { ageCode: 2, label: 'Toddler: 1-3 yrs.', image: 'https://heavyeditorial.files.wordpress.com/2015/09/toddler-toys-1.jpg?quality=65&strip=all&strip=all'},
    { ageCode: 3, label: 'Preschool: 3-5 yrs.', image: 'https://www.notimeforflashcards.com/wp-content/uploads/2015/11/preschool-toys-3.jpg' },
    { ageCode: 4, label: 'Gradeschooler: 5-12 yrs.', image: 'https://s-media-cache-ak0.pinimg.com/236x/39/78/4d/39784d2b2fb4752a78002a201fb69aa7.jpg' }
  ]
};

export default function ageReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_AGE_BRACKET':
      return {
        ...state,
        currentAgeBracket: action.age,
      };
    default:
      return state;
  }
}
