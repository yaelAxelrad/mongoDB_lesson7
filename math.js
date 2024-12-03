
function func1(){
  let num1 = Number(document.getElementById("num1").value)
  let num2 = Number(document.getElementById("num2").value)
  alert(num1+num2)
}
function func1B(){
    let num1 = binar(Number(document.getElementById("num1").value))
    let num2 = binar(Number(document.getElementById("num2").value))
    alert(num1+num2)
  }
function func2(){
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    alert(num1*num2)
  }
  function func3(){
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    alert(num1**num2)
  }
  function func4(){
    let name = document.getElementById("name").value
    let code = document.getElementById("code").value
    alert("hello " + (name|| "everyone") + " your code is " + (code || "1234" ))
  }
  function binar(number){
    const binaryRepresentation = number.toString(2);
    return binaryRepresentation;
  }