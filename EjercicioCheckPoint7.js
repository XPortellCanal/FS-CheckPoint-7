function addAndComment(numOne, numTwo, numThree, numFour) {
  
    const mult = (numOne + numTwo) * (numThree + numFour);
  
    if (mult > 50) {
      console.log('¡El número es mayor que 50!');
    } else if (mult < 50) {
      console.log('¡El número es menor que 50!');
    } else {
      console.log('¡El número no es ni menor ni mayor que 50!');
    }
}

addAndComment(5, 3, 4, 9); 
  
addAndComment(1, 3, 2, 3);
  
addAndComment(2, 3, 5, 5);