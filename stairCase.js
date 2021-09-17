function staircase(n) {
    // Write your code here

    let result ="" //declare ana empty string
    var i =0;
    //loop through the rows and columns to target the spaces
    for (i=1; i<=n ; i++){
        // let z = n-(i+1);// to eliminate the 0 since the index starts at 0
        for(let w=0 ; w<n-i ; w++){
            result +=" ";
        }
    
    //how to print the #
        for (let x =0 ; x<i ; x++){
           
            result +="#";
        }
        if(i<n){
            result +="\n";
        }
    }
        console.log(result);

}
//testing purposes

let n = 6;
staircase(n);

/*
    https://www.hackerrank.com/challenges/staircase/problem?h_r=next-challenge&h_v=zen
*/
