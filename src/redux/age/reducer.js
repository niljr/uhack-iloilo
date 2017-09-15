// Set initial state
export const initialState = {
  currentAgeBracket: null,
  ageBracket: [
    { ageCode: 1, label: 'Baby: 0-12 mos.' },
    { ageCode: 2, label: 'Toddler: 1-3 yrs.' },
    { ageCode: 3, label: 'Preschool: 3-5 yrs.' },
    { ageCode: 4, label: 'Gradeschooler: 5-12 yrs.' }
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
