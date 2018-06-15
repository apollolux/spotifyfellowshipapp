//// question 3
function changePossibilities(amt, arr) {
	function _numsort(a,b) {
		return (a-b);
	}
	function _breakdown(x, den) {
		if (0===x) return 1;
		if (0>x) return 0;
		if (0<x&&den.length<1) return 0;
		// adapted from https://www.geeksforgeeks.org/dynamic-programming-set-7-coin-change/
		// using http://www.algorithmist.com/index.php/Coin_Change
		var r = 0;
		//console.log("begin",x, arr);
		r += _breakdown(x, den.slice(0, -1));
		r += _breakdown(x-den[den.length-1], den);
		//console.log("end",r);
		return r;
	}
	amt = amt-0;
	var ret = 0;
	if (0===amt) ret = 1;
	else if (0<amt) {
		arr.sort(_numsort);
		ret = _breakdown(amt, arr);
	}
	return ret;
}
