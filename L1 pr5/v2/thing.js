let op = 1;

function Select1(){
    op = 1;
    $("#selected_operation").html(" Operatie selectata: adunare ");
}
function Select2(){
    op = 2;
    $("#selected_operation").html(" Operatie selectata: scadere ");
}
function Select3(){
    op = 3;
    $("#selected_operation").html(" Operatie selectata: inmultire ");
}
function Select4(){
    op = 4;
    $("#selected_operation").html(" Operatie selectata: impartire ");
}


function Calculate(){
    

    let nr1Text = $('#firstNumber').val();
    let nr1 = parseInt(nr1Text);
    
    let nr2Text = $('#secondNumber').val();
    let nr2 = parseInt(nr2Text);

    let tx = "";
    if(op==1)
    {
        tx = nr1 + " + " + nr2 + " = " + (nr1+nr2);    
    }
    
    if( op == 2)
    {
        tx = nr1 + " - " + nr2 + " = " + (nr1-nr2);
    }

    if( op == 3)
    {
        tx = nr1 + " * " + nr2 + " = " + (nr1*nr2);
    }

    if( op == 4)
    {
        tx = nr1 + " / " + nr2 + " = " +  parseInt((nr1 - (nr1%nr2) )/nr2)  + "  rest = " +  (nr1%nr2);
    }

    $("#result").html(tx);

}
