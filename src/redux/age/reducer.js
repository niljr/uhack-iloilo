// Set initial state
export const initialState = {
  currentAgeBracket: null,
  ageBracket: [
    { ageCode: 1, label: 'Baby', age: '0-12 mos.', image: 'http://www.bridgenorena.com/wordpress/wp-content/uploads/2011/03/slider1.jpg' },
    { ageCode: 2, label: 'Toddler', age: '1-3 yrs.', image: 'http://funderstanding.com/wp-content/uploads/2011/04/child-and-playdough1.jpg'},
    { ageCode: 3, label: 'Preschool', age: '3-5 yrs.', image: 'https://2hy93b3y7wpb45rh9i135ueo-wpengine.netdna-ssl.com/wp-content/uploads/121029593-Playing-with-toys.jpg' },
    { ageCode: 4, label: 'Gradeschooler', age: '5-12 yrs.', image: 'http://images.parents.mdpcdn.com/sites/parents.com/files/images/550_101566746.jpg' }
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
