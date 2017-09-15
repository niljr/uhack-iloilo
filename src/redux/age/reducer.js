// Set initial state
export const initialState = {
  currentAgeBracket: null,
  ageBracket: [
    { ageCode: 1, label: 'Baby', age: '0-12 mos.', image: require('../../images/baby.jpg') },
    { ageCode: 2, label: 'Toddler', age: '1-3 yrs.', image: require('../../images/toddler.jpg')},
    { ageCode: 3, label: 'Preschool', age: '3-5 yrs.', image: require('../../images/preSchool.jpg') },
    { ageCode: 4, label: 'Gradeschooler', age: '5-12 yrs.', image: require('../../images/gradeSchooler.jpg') }
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
