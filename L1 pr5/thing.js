
function Calculate(){
    
    let nr1Text = $('#firstNumber').val();
    let nr1 = parseInt(nr1Text);
    
    let nr2Text = $('#secondNumber').val();
    let nr2 = parseInt(nr2Text);

    let tx = nr1 + " + " + nr2 + " = " + (nr1+nr2);
    $("#result1").html(tx);

    let tx2 = nr1 + " - " + nr2 + " = " + (nr1-nr2);
    $("#result2").html(tx2);

    let tx3 = nr1 + " * " + nr2 + " = " + (nr1*nr2);
    $("#result3").html(tx3);

    let tx4 = nr1 + " / " + nr2 + " = " +  parseInt((nr1 - (nr1%nr2) )/nr2)  + "  rest = " +  (nr1%nr2);
    $("#result4").html(tx4);

}

console.log("working");