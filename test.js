function getAverage (a,b,){   //funkcje zaczynamy jako function

    var average = (a + b )/2;   // LOCAL variable //
    console.log(average);
    return average;
    
    }    
    
    var myResult = getAverage(7,8,); //GLOBAL variable //
    console.log("the average is" + myResult);
    
 
    function logResult(){
        console.log("the average is" + myResult + " inside the function");

    }
    logResult();
    
    