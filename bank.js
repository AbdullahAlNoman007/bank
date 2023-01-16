function gettextbyid(idname){

    const textfield = document.getElementById(idname);
    const oldtextvalue = parseFloat(textfield.innerText)
    return oldtextvalue
  }
function getvaluebyid(valuebtn){
    const valuefield =document.getElementById(valuebtn)
    const newidvalue =parseFloat(valuefield.value)
    valuefield.value =''
    return newidvalue
    
}

function setvalue(id,newvalue){

    const textid = document.getElementById(id)
    textid.innerText =newvalue
}


document.getElementById('depo').addEventListener("click",function(){

    const text = gettextbyid("deposit-wallet")
    const value = getvaluebyid("deposit")
    const balance = gettextbyid("balance")
    if(value === 0){
        alert("Enter Some Value")
        return
    }
    const newvalue = text + value
    const newbalance =balance + value
    setvalue("deposit-wallet",newvalue)
    setvalue("balance",newbalance)

})
document.getElementById('with').addEventListener("click",function(){

    const text = gettextbyid("withdraw-wallet")
    const value = getvaluebyid("withdraw")
    const balance = gettextbyid("balance")
   
    if(value> balance){

        alert("You don't have sufficient balance")
        return
    }
    else if(value === 0){
        alert("Enter Some Value")
        return
    }
    const newvalue = text + value
    const newbalance =balance - value

    setvalue("withdraw-wallet",newvalue)
    setvalue("balance",newbalance)

})


