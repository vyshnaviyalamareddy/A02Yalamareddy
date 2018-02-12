function convert(){
    var a=getconvert();
    window.alert(a);
}
function isFloat(Calculation){
    return Calculation === +Calculation && Calculation !== (Calculation|0);
}
function valid(givenorders)
{
    const minorders= 1;
    const mincancelled= 1;
    const maxorders= 100;
    const maxcancelled = 100;
    let orders;
    
    if (givenorders < minorders) {
        orders = 0;
    }
    else if (givenorders > maxorders) {
        orders = 100;
    }
    else if(isFloat(givenorders)){
        throw Error('The given argument is not an Integer');

    }
    else {
        orders = givenorders;
    }
    return orders;
}

function getconvert(){
    var givenorders = document.getElementById("orders").value;
    var givencancelled = document.getElementById("orders cancelled").value;
   let orders=valid(givenorders);
    let cancelled=valid(givencancelled);
    let Calculation = orders-cancelled;
    return Calculation;

   

  };
  
  



