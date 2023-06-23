/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Calculator {
  constructor(){
    this.result = 0;
  }
  isDigit=(exp)=> {
      for(let i =0;i<exp.length;i++){
        if(exp[i].match(/[a-zA-Z]/i)){
         // console.log("asda",exp[i]);
          throw new Error("Expected integer");
        }
      }
      return true;
  }
  evalute = (s,i,n)=>{
    let res = 0,sign=1,num=0;
    while(i<n&&s[i]!=')'){
        const check = s[i].match(/[a-zA-Z!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/g);
        console.log("das",check);
        if(!check){
            // console.log(s[i]);
            num=num*10+(s[i]-'0');
        }
        else{
            res+=sign*num;
            num=0;
            if(s[i]=='+')sign = 1;
            else if(s[i]=='-')sign = -1;
            else if(s[i]=='('){
                i++;
                res+=sign*evalute(s,i,n);
            }
        }
        i++;
    }
    return res+sign*num;
  }
  add = (num)=>{
    try {
        let res = parseInt(this.result);
        if(this.isDigit(num)){
          res+=parseInt(num);
          this.result = res.toString();
        }
    } catch (error) {
      throw error;
    }
  }
  subtract = (num)=>{
    try {
      let res = parseInt(this.result);
      if(this.isDigit(num)){
        res-=parseInt(num);
        this.result = res.toString();
      }
  } catch (error) {
    throw error;
  }
  }
  multiply = (num)=>{
    try {
      let res = parseInt(this.result);
      if(this.isDigit(num)){
        res*=parseInt(num);
        this.result = res.toString();
      }
  } catch (error) {
    throw error;
  }
  }
  divide = (num)=>{
    try {
      let res = parseInt(this.result);
      if(this.isDigit(num)){
        res/=parseInt(num);
        this.result = res.toString();
      }
  } catch (error) {
    throw error;
  }
  }
  clear = ()=>{
    this.result = "0";
  }
  calculate = (exp)=>{
        let res = this.evalute(exp,0,exp.length);  
        console.log(res);
  }

}
const calc = new Calculator();
// calc.add('656');
// calc.add('6');
// console.log(calc.result);
// calc.subtract('9');
// console.log(calc.result);
// calc.multiply('2');
// console.log(calc.result);
// calc.divide("2");
// console.log(calc.result);
// calc.clear();
calc.calculate("1+2+3+4+2");


module.exports = Calculator;
