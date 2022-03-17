// 1a Skriv en funktion som tar två parametrar som ska vara heltal. Den ska returnera ett slumptal vars värde är mellan parametrarna. Utgå från Math.random().
// Exempel: rand(2, 5) → något av 2, 3, 4 och 5

function rand(x, y) {
	let r = Math.random()
	let diff = y - x + 1;  // 6 - 1 + 1 === 6
	r *= diff  // 0..5
	r += x   // 1..6
	return Math.floor(r)  // round/ceil/floor
}
// console.log( rand(1, 6) )

// 1b Skriv en funktion som skapar en lista med slumptal. Funktionen ska ta tre parametrar: hur lång listan ska vara och mellan vilka tal som slumptalet ska ligga.
function generateRandomList(length, x, y) {
	let list = []
	for( let i=0; i<length; i++ )
		list.push( rand(x, y) )
	return list
}

// console.log( generateRandomList(4000, 5, 8) )


// 2a Skriv en funktion som räknar ut summan för alla tal i en lista.
// 2b Skriv en funktion som räknar ut medelvärdet för alla tal i en lista.
// 2c Skriv två funktioner som returnerar det största respektive det minsta värdet i en lista.
function sum(list) {
	let sum = 0
	for( let i=0; i<list.length; i++ ) {
		sum += list[i]
	}
	return sum
}
function sumForEach(list) {
	let sum = 0
	list.forEach(element => {
		sum += element
	})
	return sum
}

function average(list) {
	return sum(list) / list.length
}

function listMin(list) {
	let minSoFar = list[0]
	for( let i=1; i<list.length; i++ ) {
		if( list[i] < minSoFar ) {
			minSoFar = list[i]
		}
	}
	return minSoFar
}

const list = [2, 3, 5, 8, 13, 21]  // 52
// console.log(listMin(list))




// 4a Skriv en funktion som gör samma sak som funktionen split.
// Exempel: function mySplit(string, separator)
function mySplit(string, separator) {
	let results = []

	// Index där nästa split ska börja
	let currentStart = 0

	// Loopa igenom hela strängen. Titta om vi hittar separator-strängen på varje position.
	for( let index=0; index<string.length; index++ ) {
		// Plocka ut en lika lång sträng som separator, för att jämföra dem
		let sub = string.substring(index, index + separator.length)
		if( sub === separator ) {
			// hittade en match
			results.push(string.substring(currentStart, index))
			currentStart = index + separator.length
		} else {
			// hittade ingen match
		}
	}
	// Lägg till eventuell rest på slutet
	if( currentStart < string.length-1 ) {
		results.push( string.substring(currentStart) )
	}
	return results
	// Algoritmen:
	// Loopa igenom strängen
	// Använd substring för att plocka ut en delsträng som är lika lång som separator
	//Om delsträng == separator: pusha det vi hittat hittills
}

console.log( mySplit('Quick brown fox ', ' ') )