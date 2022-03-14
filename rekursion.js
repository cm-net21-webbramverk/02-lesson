// 16 Skriv en funktion factorial(n) som räknar ut fakulteten för ett heltal med en loop. Fakulteten tar man genom att multiplicera talet med alla mindre tal ner till 1. Exempel: 1! == 1, 2! == 2*1, 4! == 4*3*2*1 osv.

// 17 Skriv en ny funktion som beräknar fakulteten rekursivt.

function factorialLoop(n) {
	let result = n;
	for( let i=n-1; i>=1; i-- ) {
		result *= i
	}
	return result
}

console.log(factorialLoop(4))  // 3! === 6


function factorial(n) {
	if( n === 1 )
		return 1
	else {
		return factorial(n - 1) * n
	}
}

console.log(factorial(4))  // 3! === 6
