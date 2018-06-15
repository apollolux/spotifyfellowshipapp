//// question 1
function sortByString(s, t) {
	function _sort(a, b) {
		if (t.indexOf(a)<0) return 0;
		else return (t.indexOf(a)-t.indexOf(b));
	}
	var arr = s.split('');
	arr.sort(_sort);
	return arr.join('');
}
