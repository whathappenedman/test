//https://web.archive.org/web/20220223201610/https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals
//recursive setTimeout gurantees to run delay after previous end of exec
let i=0;
let delay  = 10;

foo();

function foo() {
	if (i%100==0)
		console.log(i)
	i++
	setTimeout(foo,delay)
}

//setInterval(foo,1000)
while (false){
	//foo()
	//setTimeout(foo,1000)
}
