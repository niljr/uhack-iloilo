let initialState = {
  cart: [
    {
      "_id" : "59bc02027e226d02e8acf3aa",
      "ageCode" : 1,
      "image" : "https://firebasestorage.googleapis.com/v0/b/sample-207f0.appspot.com/o/009167_1.jpg?alt=media&token=98c39e98-48e8-490f-817f-3e432ee554ab",
      "name" : "Match & Build Soft Blocks",
      "price" : 300
    }, {
      "_id" : "59bc0fb29a53dce197632538",
      "ageCode" : 1,
      "image" : "http://toystrunk.com/is.aspx?img=/Content/Images/Toys/000049.jpg&text=ToysTrunk.com,5,.3,70,0x4cccccc,Arial,Bold&cell=300,300,0xffffff&cvt=jpeg&qlt=90",
      "name" : "Rhino Rhythm",
      "price" : 749
    }, {
      "_id" : "59bc0fb29beaaab83444ce56",
      "ageCode" : 1,
      "image" : "http://toystrunk.com/is.aspx?img=/Content/Images/Toys/000361.jpg&text=ToysTrunk.com,5,.3,70,0x4cccccc,Arial,Bold&cell=300,300,0xffffff&cvt=jpeg&qlt=90",
      "name" : "Ballapalooza",
      "price" : 340
    }, {
      "_id" : "59bc0fb26f6dfae9b78c494e",
      "ageCode" : 1,
      "image" : "gs://sample-207f0.appspot.com/is.jpg",
      "name" : "Activity Cube",
      "price" : 540
    }, {
      "_id" : "59bc0fb2262dbed612f4e70f",
      "ageCode" : 1,
      "image" : "http://toystrunk.com/is.aspx?img=/Content/Images/Toys/000286.jpg&text=ToysTrunk.com,5,.3,70,0x4cccccc,Arial,Bold&cell=300,300,0xffffff&cvt=jpeg&qlt=90",
      "name" : "Tag Junior Book Dora 123",
      "price" : 500
    }
  ]
}

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    // case 'SET_AGE_BRACKET':
    //   return {
    //     ...state,
    //     currentAgeBracket: action.age,
    //   };
    default:
      return state;
  }
}