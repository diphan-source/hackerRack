function miniMaxSum(arr) {
    // Write your code here

    let values = 0;
    let sum =[];
    let sum2 = [];
    let values2 =0;
    let minValue = 0;
    let maxValue = 0;
    let result = 0;
    let newarr = arr.sort();
    for(let i = 0 ; i<newarr.length-1; i++){
        values += newarr[i];
        sum.push(values);
        minValue = values;
        // console.log(minValue);
      
    }
    let arr2 = newarr.splice(0,1);
    // console.log(arr);
    for(let j=0;j<newarr.length;j++){
        values2 +=newarr[j];
        sum2.push(values2);
        maxValue = values2;
        // console.log(maxValue);
    }

        result = minValue + " " + maxValue;
        console.log(result);
}

//testing 
let arr = [1 ,2, 3, 4, 5];
miniMaxSum(arr);

