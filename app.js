let textvalue = document.getElementById("screen");
function display(val){
    textvalue.value=textvalue.value +val;
}

function clr(){

    textvalue.value = "";

}

function calculate(){
    let x = textvalue.value;
    try{
        var y = eval(x);
        if (Number.isInteger(y))
        textvalue.value = y;
        else
        textvalue.value - y.toFixed(2);
    }catch(err){
        alert(err.message);
    }
}