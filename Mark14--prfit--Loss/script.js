var purc = document.querySelector(".purchase");
var quan = document.querySelector(".quantity");
var curr = document.querySelector(".current");

var btn = document.querySelector(".btn");
var after_submit = document.querySelector("#after_submit");
var bg= document.querySelector('.bg');

btn.addEventListener("click", () => {

    document.getElementById('graph').style.display="none";
    var purchase = Number(purc.value);
    var quantity = Number(quan.value);
    var current = Number(curr.value);

    if (purchase < 1 || quantity < 1 || current < 1)
    {
        document.getElementById('after_submit').innerHTML = "Enter values greater than 0";
    }
    else{
        var totalPurchase = purchase * quantity;
        var totalCurrent = current * quantity;
        var diff = totalCurrent - totalPurchase;
        if(totalPurchase === totalCurrent)
        {
            document.getElementById('after_submit').style.display="block";
            after_submit.textContent = "No profit no loss";
            document.getElementById('ok').style.display="block";
            document.getElementById('profit').style.display="none";
            document.getElementById('loss').style.display="none";
            
        }
        else if (diff > 0)
        {
            var profitPer = ((diff / totalPurchase) * 100).toFixed(2);
            document.getElementById('after_submit').style.display="block";
            document.getElementById('after_submit').innerHTML = `Hurrey!! You got a profit of Rs ${diff} which is ` + profitPer + `%`;
            document.getElementById('profit').style.display="block";
            document.getElementById('loss').style.display="none";
            document.getElementById('ok').style.display="none";
        }
        else{
            var lossPer = ((-diff / totalPurchase) * 100).toFixed(2);
            document.getElementById('after_submit').style.display="block";
            document.getElementById('after_submit').innerHTML = `ayyo, you are in loss of Rs ${-diff} which is ` + lossPer + `%`;
            document.getElementById('loss').style.display="block";
            document.getElementById('profit').style.display="none";
            document.getElementById('ok').style.display="none";

            if(lossPer>50){
                
            }
            else{
                
            }
        }
    }
});