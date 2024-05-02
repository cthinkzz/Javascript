// Consider a scenario where a user needs to withdraw money from an ATM. To facilitate this, create a function named giveNotes that takes two arguments: an array representing the available notes and the amount the user wishes to withdraw. The function should provide the user with the requested amount in notes, or prompt the user to enter a new withdrawal amount based on the available notes if an exact match is not possible.

// input1:
//     giveNotes(arrNotes: [1000, 200, 500, 100], amount: 2700)
// output1:
//    Please collect Notes [500: 1, 1000: 2, 200: 1]

const giveNotes = (arr, amount) => {
  arr.sort((a, b) => b - a);
  const notes = new Map();
  let pending = amount;
  const min = arr[arr.length - 1];

  const getMaxPossible = () => {
    for (let i = 0; i < arr.length; i++) {
      if (pending >= arr[i]) {
        return arr[i];
      }
    }
  };

  while (pending >= min) {
    const maxAmount = getMaxPossible();
    if (maxAmount) {
      pending = pending - maxAmount;
      const count = notes.get(maxAmount) || 0;
      notes.set(maxAmount, count + 1);
    } else {
      console.log(
        'Combination is not possible from the ATM for the entered amount'
      );
      return;
    }
  }
  if (pending === 0) {
    console.log(notes);
  } else {
    console.log(
      'Combination is not possible from the ATM for the entered amount'
    );
  }
};

giveNotes([1000, 200, 2000, 500, 100], 2700);
