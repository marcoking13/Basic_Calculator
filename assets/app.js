const calc_buttons = [0,1,2,3,4,5,6,7,8,9,"*","/","+","-"];

var isStart = true;

var calculator = document.querySelector(".calculator");

var equation = 0

var result_text = document.querySelector(".result_text");

result_text.innerText = "Hello Welcome to Math Helper!";



const SubmitEquation = () =>{

  console.log(eval(equation));
  if(!eval(equation)){
    equation = 0;
    result_text.innerText = "Error";
  }else{
    var final_result = eval(equation).toString();
    result_text.innerText = final_result;
  }
  isStart = true;

}


const GenerateButtons = () =>{

  for(var i = 0; i < calc_buttons.length; i++){
    var button_element = document.createElement("div");
    button_element.classList.add("calculator_button");
    button_element.classList.add("col-2");

    button_element.setAttribute("data",calc_buttons[i].toString());

    var button_text = document.createElement("p");
    button_text.classList.add("calculator_text");
    button_text.innerText = calc_buttons[i].toString();
    button_text.setAttribute("data",calc_buttons[i].toString());
    button_element.append(button_text);
    button_element.addEventListener("click",(e)=>{AddToEquation(e.target.getAttribute("data"))});
    calculator.append(button_element);
  }
}

const GenerateEqualButton = () => {
  var button_element = document.createElement("div");
  button_element.classList.add("calculator_button");
  button_element.classList.add("col-2");

  button_element.setAttribute("data","=");

  var button_text = document.createElement("p");
  button_text.classList.add("calculator_text");
  button_text.innerText = "="
  button_text.setAttribute("data","=");
  button_element.append(button_text);
  button_element.addEventListener("click",(e)=>{SubmitEquation()});
  calculator.append(button_element);
}


const AddToEquation = (value) => {
  console.log(value);
  if(isStart){
    equation = value;
    isStart = false;
  }else{
    equation+= value;
  }
  result_text.innerText = equation.toString();
}


GenerateButtons();
GenerateEqualButton();
