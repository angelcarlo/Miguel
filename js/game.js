function rolldice(){
	var bet = document.getElementById('txtbet').value;
	var betint = parseInt(bet);
	var winningnumber = Math.floor(Math.random()*6)+1;
	document.getElementById('txtwinningnumber').value = winningnumber;
	
	var lp = document.getElementById('meterlp').value;
	var lpint = parseInt(lp);
	
	if(lp>0)
		{
			if(betint==winningnumber){
			document.getElementById('txtresult').value = "YOU WIN";
			document.getElementById('meterlp').value = lpint + 10;
			}
			else{
			document.getElementById('txtresult').value = "YOU LOSE";
			document.getElementById('meterlp').value = lpint - 10;	
			}
		}
	else{
			document.getElementById('txtresult').value = "New Game";
			document.getElementById('meterlp').value = 100;
	}
}