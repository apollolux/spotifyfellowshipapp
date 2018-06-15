//// question 2
function decodeString(s) {
	function _rep(m, p1, p2, off, txt){
		var out = "";
		while (--p1>-1) {
			out += ""+decodeString(p2);
		}
		return out;
	}
	var rx = /([0-9]+)\[(.*)\]$/;
	var str = s;
	var arr = null;
	while (arr = rx.exec(str)) {
		str = str.replace(rx, _rep);
	}
	return str;
}
