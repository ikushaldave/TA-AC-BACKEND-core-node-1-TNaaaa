function areaOfSquare(a) {
	return a * a;
}

function areaOfRect(l, b) {
	return l * b;
}

function areaOfCircle(r) {
	return Math.PI * r * r;
}

module.exports = {
	areaOfCircle,
	areaOfRect,
	areaOfSquare,
};
