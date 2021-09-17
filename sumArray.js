

function simpleArraySum(ar) {

    // Write your code here
    let sum = ar.reduce((initial,curr)=>{
        return initial + curr;
    })

    return sum;
}

