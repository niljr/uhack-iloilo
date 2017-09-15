let initialState = {
  toyList: [],
  filteredToys: []
}

export default function toyReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOY_LIST': {
      return {
        ...state,
        toyList: action.data,
      };
    }
    case 'FILTERED_TOYS': {
      return {
        ...state,
        filteredToys: action.filteredToys
      }
    } 
    default:
      return state;
  }
}