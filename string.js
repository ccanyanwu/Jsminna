//given sentence 

const sentence = "maDam aYO Who Stays In oYo Was in a Bus goiNg to Lagos And smiliNG whEn Her Son Sold the rAceCar";

//modifiedSentence 

const modifiedSentence = sentence =>{

  

  //all arrays containing specific string type 

  let switchedSentence = '', 

      upperCased = [],

      ing = [],

      palindrome = [];

      

  

  

  //change each character case

  for (let i = 0; i < sentence.length; i++) {

    if(sentence[i] === sentence[i].toLowerCase()){

      switchedSentence += sentence[i].toUpperCase();

    }else if(sentence[i] === sentence[i].toUpperCase()){

      switchedSentence += sentence[i].toLowerCase()

    }else if(cases[i] === " " ){

      switchedSentence += sentence[i];

    }

  }

  //convert switched string to an array 

  switchedSentenceArray = switchedSentence.split(" ");

  

  //select every string that starts with an uppercase 

  for (let i = 0; i < switchedSentenceArray.length; i++) {

    if (switchedSentenceArray[i].charAt(0) == switchedSentenceArray[i]. charAt(0).toUpperCase()){

      upperCased.push(switchedSentenceArray[i]);

    }

  }

  

  //select all strings that ends with ing from the upperCased array 

  for (let i = 0; i < upperCased.length; i++) {

    if (upperCased[i].slice(-3).toLowerCase() === 'ing') {

      ing.push(upperCased[i]);

    }

  }

  

  //select all the palindrome string from the upper cased array 

  for (let i = 0; i < upperCased.length; i++) {

    if (upperCased[i].toLowerCase() === (upperCased[i].toLowerCase()).split("").reverse("").join(""))  {

      palindrome.push(upperCased[i]);

    }

  }

  //object containing final result 

  let modifiedSentenceObject = {

    'upperCased' : upperCased, 

    'ing' : ing, 

    'palindrome' : palindrome

  }

  console.log(modifiedSentenceObject);

}

modifiedSentence(sentence);
