const result = document.getElementById("result");
let currentNumber = "";
let oldNumber = "";
let currentOperator = null;
let shouldResetScreen = false;


function insertNumber(number) {
	if (currentNumber === "0" && !shouldResetScreen) {
		currentNumber = number.toString();
	} else if (shouldResetScreen) {
		resetScreen();
		currentNumber = number.toString();
	} else {
		currentNumber += number.toString();
	}

	result.value = currentNumber;
}


function insertOperator(operator) {
	if (currentOperator !== null) {
		calculate();
	}

	oldNumber = currentNumber;
	currentNumber = "";
	currentOperator = operator;
}


function calculate() {
	if (currentOperator === null) {
		return;
	}

	if (currentOperator === "/" && currentNumber === "0") {
		alert("No se puede dividir por cero");
		clearResult();
		return;
	}

	const resultValue = eval(`${oldNumber} ${currentOperator} ${currentNumber}`);
	currentNumber = resultValue.toString();
	currentOperator = null;
	result.value = currentNumber;
	shouldResetScreen = true;
}


function deleteNumber() {
	if (shouldResetScreen) {
		return;
	}

	currentNumber = currentNumber.slice(0, -1);

	if (currentNumber === "") {
		currentNumber = "0";
	}

	result.value = currentNumber;
}


function clearResult() {
	currentNumber = "";
	oldNumber = "";
	currentOperator = null;
	result.value = "0";
	shouldResetScreen = false;
}


function resetScreen() {
	result.value = "";
	shouldResetScreen = false;
}
