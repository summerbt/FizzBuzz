var num = prompt("Please enter a number 1-100.", "46");
while (isNaN(num) == true|| num < 1 || num >100){
if (isNaN(num) || num > 100 || num < 1){
	var num = prompt("Please, enter number using using numerical digits.")
}}

	for (var i=1; i<=num; i++){
		if (i%3 == 0){
			if(i%5 == 0){
				document.write(" FIZZBUZZ!");
			} else { document.write(" FIZZ"); }
		} else if (i%5 == 0){
			document.write(" BUZZ");
		} else { document.write(" "+i); }

		console.log(i);
	}