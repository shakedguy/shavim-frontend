const upperCaseRegex = /[A-Z]/g;

const lowercaseRegex = /[a-z]/g;

const numbersRegex = /[0-9]/g;

const symbolsRegex = /[!@#$%^&*]/g;

const validateEmail = (email) => {
	return email.match(
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	);
};

const validateCapitalLetterExist = (input) => input.match(upperCaseRegex);

const validateDigitExist = (input) => input.match(numbersRegex);

const validLength = (input, min, max) =>
	input.length >= min && input.length <= max;

const validateLowercaseLetterExist = (input) => input.match(lowercaseRegex);

const validateSymbolExist = (input) => input.match(symbolsRegex);

const validatePassword = (input, minLength = 8, checkSymbol = true) => {
	const pattern = checkSymbol
		? `^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{${minLength},})`
		: `^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{${minLength},})`;
	const regex = new RegExp(pattern, 'g');
	return regex.test(input);
};

const validatePasswordWitheExplanation = (
	input,
	minLength = 8,
	checkSymbol = true
) => {
	const result = {};

	if (validatePassword(input, minLength)) {
		result.isValid = true;
		return result;
	}
	result.isValid = false;
	result.message = 'Password must contain at least:';
	result.requirements = [];
	if (!validateCapitalLetterExist(input)) {
		result.requirements.push('One capital letter');
	}
	if (!validateLowercaseLetterExist(input)) {
		result.requirements.push('One lowercase letter');
	}
	if (!validateDigitExist(input)) {
		result.requirements.push('One digit');
	}
	if (checkSymbol && !validateSymbolExist(input)) {
		result.requirements.push('One symbol');
	}
	if (!validLength(input, minLength)) {
		result.requirements.push(`At least ${minLength} characters`);
	}
	return result;
};

export {
	validateEmail,
	validatePassword,
	validatePasswordWitheExplanation,
	validateSymbolExist,
	validateDigitExist,
	validateLowercaseLetterExist,
	validateCapitalLetterExist,
	validLength,
};
