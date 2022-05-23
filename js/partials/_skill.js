
// --- card-1 : web desing
    let number = document.getElementById("number-1");
    let counter = 0;
    setInterval(() => {
      if(counter == 100){
        clearInterval();
      }else{
        counter += 1;
      number.innerHTML = counter + "%";
      } 
    }, 10);


// --- card-2 : web development
    let number2 = document.getElementById("number-2");
    let counter2 = 0;
    setInterval(() => {
      if(counter2 == 65){
        clearInterval();
      }else{
        counter2 += 1;
      number2.innerHTML = counter + "%";
      } 
    }, 20);


// --- card-3 : web development
    let number3 = document.getElementById("number-3");
    let counter3 = 0;
    setInterval(() => {
      if(counter3 == 65){
        clearInterval();
      }else{
        counter3 += 1;
      number3.innerHTML = counter + "%";
      } 
    }, 20);


// --- card-4 : interior design
    let number4 = document.getElementById("number-4");
    let counter4 = 0;
    setInterval(() => {
      if(counter4 == 65){
        clearInterval();
      }else{
        counter3 += 1;
      number4.innerHTML = counter + "%";
      } 
    }, 20);
