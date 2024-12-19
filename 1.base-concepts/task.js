"use strict"

function solveEquation(a, b, c) {
	let arr = [];

	let disc = Math.pow(b, 2) - 4 * a * c;
	if (disc < 0) {

	}

	if (disc === 0) {
		let x = -b / (2 * a);
		arr.push(x);
	}

	if (disc > 0) {
		let x1 = (-b + Math.sqrt(disc)) / (2 * a);
		let x2 = (-b - Math.sqrt(disc)) / (2 * a);
		arr.push(x1, x2)
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	let percentMonth = (percent / 12 / 100);
	let body = amount - contribution;
	let plateg = body * (percentMonth + (percentMonth / (((1 + percentMonth) ** countMonths) - 1)));
    let totalSum = (plateg * countMonths).toFixed(2);
	return +totalSum;
}