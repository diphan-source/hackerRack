
function aVeryBigSum(ar) {
    // Write your code here

    let sum = ar.reduce((init,acc)=>{

        return init + acc;
    });

    return sum;
}