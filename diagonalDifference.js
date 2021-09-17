function diagonalDifference(arr) {
    // Write your code here

    let l_sum =0;
    let r_sum = 0;

    for(let i =0 ; i<arr.length;i++){
        for (let j=0;j<arr.length;j++){
            if(i == j){
                // console.log(arr[i][j]);
                l_sum += arr[i][j];
                // console.log(l_sum);
            }
            if((i+j)==(arr.length-1)){
                r_sum+=arr[i][j];
                // console.log(r_sum);
            }
        }
    }

    return Math.abs(l_sum-r_sum);

}


// for testing purposes
// let arr = [[3],
//     [11, 2 ,4],
//     [4, 5, 6],
//     [10, 8, -12]];

// diagonalDifference(arr);


