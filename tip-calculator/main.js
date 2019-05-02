function calculateTip() {
	var bill = document.getElementById("amount").value;
	bill = bill.slice(1, bill.length);
	var serv = document.getElementById("serviceQual").value;
	var peop = document.getElementById("people").value;
	var tipAmt = (bill * serv) / peop;
	tipAmt = changeToCurrency(tipAmt);

	// console.log(bill, serv, peop, tipAmt);
	document.getElementById("total").innerText = "$" + tipAmt;
}

function changeToCurrency(amt) {
	amt = parseFloat(Math.round(amt * 100) / 100).toFixed(2);
	return amt;
}

function updateBoxCurrency(me) {
	amt = changeToCurrency(me.value);
	document.getElementById(me.id).value = "$" + amt;
}
