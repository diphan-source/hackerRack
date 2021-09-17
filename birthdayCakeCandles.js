function birthdayCakeCandles(candles) {
    // Write your code here
    let count = 0;
    let result = 0;
    let maxValue = 0;

    maxValue = Math.max(...candles);
    console.log(maxValue);
    result = candles.forEach(element => {
        
        if(element == maxValue){
            count++;
            console.lo
        }
       
    });
    
    result = count;
     return result;

}


let candles = [3 ,2 ,1, 3]

birthdayCakeCandles(candles);