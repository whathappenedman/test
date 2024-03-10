const toggle = 1;
const iterations = 1000000000;
let result = 0;

if (toggle){
	for (let i = 0; i < iterations; i++) {
		const value = ((i*6)+iterations)/(253-i*2);
		if (value%2 == 0) result++
	} 
	console.log("hi " + result)
}
if (!toggle){
	let value = 0;
	for (let i = 0; i < iterations; i++) {
		value = ((i*6)+iterations)/(253-i*2);
		if (value%2 == 0) result++
	}
	console.log("byy " + result)	
}