

function compareTriplets(a, b) {
    // Write your code here
// assume A for alice and B for bob
    let {A,B} = a.reduce((initial,curr)=>{
        //lets count the times initial is appended

        let count = initial;

        if(a[count] > b[count]){
            count.A++;
        }else if(b[count]<a[count]){
            count.B++;
        }

        initial.count++;
        return initial;
    }, {A:0,B:0,count:0});

    console.log ([A,B]);


}


let a = [17 ,28 ,30];
let b =[99 ,16, 8];

compareTriplets(a,b);