 function plusMinus(arr) {
    // Write your code here
    //NOTE-> COMMENT OUT THE CONSOLELOG TO TEST OUTPUTS ON EACH STAGE 
    let countPos=0;
    let countNeg = 0;
    let countZero= 0;
   let  result =  arr.forEach((element) => {
        if(Math.sign(element) == 1){
            countPos++;
            // console.log(countPos);
        }else if(Math.sign(element) == 0){
            countZero++;
            // console.log( countNeg );
        }else if(Math.sign(element) == -1){
              countNeg++;
            // console.log( countZero );
        }

    });

            // for testing purposes uncomment 
            console.log(result = (countPos/arr.length).toFixed(6));
            console.log(result = (countNeg/arr.length).toFixed(6));
            console.log(result = (countZero/arr.length).toFixed(6));
            
}

//comment out to test 
let arr = [-4, 3, -9, 0, 4, 1];

// let arr = [1,1,0,-1,-1];

plusMinus(arr);

/*
refer to the link below for details 
https://www.hackerrank.com/challenges/plus-minus/problem
*/ 