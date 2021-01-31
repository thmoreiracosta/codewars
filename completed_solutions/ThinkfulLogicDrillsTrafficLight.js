// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
// For example, update_light('green') should return 'yellow'.

function updateLight(current) {
  
    //Complete a função que recebe uma string 
    //como um argumento que representa o estado 
    //atual da luz e retorna uma string que 
    //representa o estado para o qual a luz deve mudar.
    //Por exemplo, update_light ('green') deve retornar 'yellow'.
    
    if (current === 'green'){
      return "yellow";
    }
      else if (current === 'yellow'){
      return "red";
    }
      else
        return 'green';
  };