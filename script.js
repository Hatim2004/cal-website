var firstNumber = "";
var secondeNumber = "";
var op = '';
var restart = false;
function btn_clicked(Value){
    let BtnValue = Number(Value);
    if(restart){
        firstNumber = "";
        secondeNumber = "";
        op = '';
        restart = false; 
        document.getElementById("TextInput").value = "";
    }
    
    

    if(document.getElementById("TextInput").value == op){
        document.getElementById("TextInput").value = "";    
    }

    if(Value == "." && firstNumber.indexOf(".") == -1 && op == ""){
        document.getElementById("TextInput").value += Value;
        firstNumber =  document.getElementById("TextInput").value;
    }

    if(!isNaN(BtnValue) && op == ""){
        document.getElementById("TextInput").value += BtnValue;
        firstNumber = document.getElementById("TextInput").value;
    }

    if(isNaN(BtnValue) && op == "" && Value != "."){
        op = Value;    
        document.getElementById("TextInput").value = op;
    }


    if(Value == "." && secondeNumber.indexOf(".") == -1 && op != ""){
        document.getElementById("TextInput").value += Value;
        secondeNumber =  document.getElementById("TextInput").value;
    }


    if(!isNaN(BtnValue) && op != ""){
        document.getElementById("TextInput").value += BtnValue;
        secondeNumber = document.getElementById("TextInput").value;
    }
   
    if(Value == "="){
        var num1 = Number(firstNumber);
        var num2 = Number(secondeNumber);
       
        var Result = 0;
        switch (op){
            case '+':
                Result = num1 + num2;
                break;
            case "-":
                Result = num1 - num2;
                break;
            case "x":
                Result = num1 * num2;
                break;
            case "/":
                Result = num1 / num2;
                break;
        }
        document.getElementById("TextInput").value = Result;
        restart = true;
        console.log(num1);
        console.log(num2);
    }  

}