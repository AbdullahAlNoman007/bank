 document.getElementById('depo').addEventListener('click',function(){

    const deposite = document.getElementById('deposite')
    const newdepositeamount = deposite.value

    if(parseFloat(newdepositeamount ) ==0){

        alert('Enter some amount')
        deposite.value =''
        return
    }

    

    const depositewallet = document.getElementById("deposite-wallet")
    const olddepositeamount = depositewallet.innerText

    const currentdeposite = parseInt(olddepositeamount) + parseInt(newdepositeamount)

    depositewallet.innerText =currentdeposite
    deposite.value=''

    const balance =document.getElementById('balance')
    const oldbalanceamount = balance.innerText

    const currentbalance = parseFloat(oldbalanceamount) + parseFloat (newdepositeamount)
    
    balance.innerText =currentbalance
 })
 document.getElementById('with').addEventListener('click',function(){

    const withdraw = document.getElementById('withdraw')
    const newwithdrawamount = withdraw.value

    const withdrawwallet = document.getElementById("withdraw-wallet")
    const oldwithdrawamount = withdrawwallet.innerText

    const currenwithdraw = parseInt(oldwithdrawamount) + parseInt(newwithdrawamount)

    const balance =document.getElementById('balance')
    const oldbalanceamount = balance.innerText

    if (parseFloat(newwithdrawamount)> parseFloat(oldbalanceamount)){

        alert("Bank a ato tk nai")
        withdraw.value=''
        return
    }
    withdrawwallet.innerText =currenwithdraw
    withdraw.value=''
    

    const currentbalance = parseFloat(oldbalanceamount) - parseFloat (newwithdrawamount)

    balance.innerText =currentbalance
 })