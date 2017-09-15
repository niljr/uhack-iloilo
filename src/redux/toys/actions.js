import { Firebase, FirebaseRef } from '@constants/';

export function getToys() {
  if (Firebase === null) return () => new Promise(resolve => resolve());

  return dispatch => new Firebase.Promise((resolve) => {
    const ref = FirebaseRef.child('toys');

    return ref.once('value').then((snapshot) => {
      const toys = snapshot.val() || {};
      console.log('---', toys)

      return resolve(dispatch({
        type: 'TOY_LIST',
        data: toys,
      }));
    });
  });
}

export function filterToys(ageCode, toyList) {
  return dispatch => {
    console.log(toyList)
    let filteredToys = toyList.filter(toy => toy.ageCode === ageCode);
    dispatch({
      type: 'FILTERED_TOYS',
      filteredToys
    })
  }
}