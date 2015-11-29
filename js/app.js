function fizzbuzzer(num){
	function fizzbuzzLoop(num){
		for (var i=1; i<=num; i++){
			if (i%3 == 0){
				if(i%5 == 0){document.write(" FIZZBUZZ!");}
				else{document.write(" FIZZ");}
			}else if (i%5 == 0){document.write(" BUZZ");}
			else { document.write(" "+i); }

		console.log(i);}
	}
	while (isNaN(num) == true|| num < 1 || num >100){
		if (isNaN(num) || num > 100 || num < 1){
			var num = prompt("Please, enter number using using numerical digits.")
		}
	}
	fizzbuzzLoop(num);

}
var num = prompt("Please enter a number 1-100.", "46");
fizzbuzzer(num);


// -------------------------------------------------------------
// function fizzbuzzer(max){
// 	function check(n){
// 		var msg = '';
// 		if (n % 3 == 0){ msg +="Fizz"};
// 		if (n % 5 == 0){ msg +="Buzz"};
// 		return msg||n;
// 	}

// 	for(var i = 1; i <= max; i++){
// 		console.log(check(i));
// 	}
// }
// var num = prompt("Please enter a number 1-100.", "46");
// while (isNaN(num) == true|| num < 1 || num >100){
// 	if (isNaN(num) || num > 100 || num < 1){
// 		var num = prompt("Please, enter number using using numerical digits.")
// 	}
// }
// fizzbuzzer(num);