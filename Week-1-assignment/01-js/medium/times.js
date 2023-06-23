/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/
function sum(n){
    let res = 0;
    for(let i=1;i<=n;i++){
        res += i;
    }
    return res;
}
function calculateTime() {

    console.time("Function Execution");
    console.log(sum(100));
    console.timeEnd("Function Execution");
    
    console.time("Function Execution");
    console.log(sum(100000));
    console.timeEnd("Function Execution");

    
    console.time("Function Execution");
    console.log(sum(1000000000));
    console.timeEnd("Function Execution");
    return 0.01;
}
calculateTime();