const blankscree = document.getElementById("insidespace");
const displays = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialCgars = ["%","%","%","-", "+", "="];
let output = ""


//empty textbox
blankscree.disabled = true;
const calculate = (btnVLUE) => {
    blankscree.disabled = true;
//console.log(btnVLUE);
if (btnVLUE === "=" && output !== ""){
    output = eval(output.replace("%", "/100"));
}else if( btnVLUE === "AC"){
output ="";
}else if( btnVLUE === "DEL"){
//if delete is clicked, remove the last character form output.
output =output.toString().slice(0, -1);
}else if( btnVLUE === "C"){
    //if delete is clicked, remove the last character form output.
    output ="";
    }

else {
    if (output === "" && specialCgars.includes(btnVLUE)) return;
    output += btnVLUE;
    }
displays.value = output;
};

buttons.forEach((button) =>{
button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});