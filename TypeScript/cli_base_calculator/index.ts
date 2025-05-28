import {question } from "readline-sync"

type Operator = "+" | "-" |"*" | "/"


function main():void{
  const firstStr: string =  question("Enter the first number:\n")
  const operator: string =  question("Enter the operator: (+,-,/,*)\n")
  const secondStr: string = question("Enter the second number: \n")

  const validInput: boolean = isNumber(firstStr) && isNumber(secondStr) && isOperator(operator)

  if(validInput){
    console.log("Is valid ");
    const firstNum : number = parseInt(firstStr)
    const secondNum : number = parseInt(secondStr)
    
    calculate(firstNum,operator as Operator,secondNum)
  }else{
    console.log("\nInvalid Input\n");
    main()
  }


}

function calculate(num1:number, op:Operator, num2:number){
    switch(op){
        case "+":
            console.log(num1+num2);
            break
        case "-":
            console.log(num1-num2);
            break
        case "*":
            console.log(num1*num2);
            break
        case "/":
            console.log(num1/num2);
            break

    }
}


function isOperator(operator:string):boolean{
    switch (operator){
        case "+":
        case "-":
        case "*":
        case "/":
            return true
        default :
            return false    
    }
}

function isNumber(str:string):boolean{
    const parsedStr = parseInt(str)
    const isNum:boolean = !isNaN(parsedStr)
    return isNum
}

main()