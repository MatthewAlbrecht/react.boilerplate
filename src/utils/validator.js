function validate(value, rules) {
	let isValid = true;
	let error = '';

	for (let rule in rules) {
		let validationObject;

		switch (rule) {
			case 'minLength':
				if (!isValid) break;

				validationObject = minLengthValidator(value, rules[rule]);
				isValid = validationObject.isValid;
				if (!isValid) {
					error = validationObject.error;
				}
				break;

			case 'maxLength':
				if (!isValid) break;

				validationObject = maxLengthValidator(value, rules[rule]);
				isValid = validationObject.isValid;
				if (!isValid) {
					error = validationObject.error;
				}
				break;

			case 'isRequired':
				if (!isValid) break;

				validationObject = requiredValidator(value);
				isValid = validationObject.isValid;
				if (!isValid) {
					error = validationObject.error;
				}
				break;

			case 'isEmail':
				if (!isValid) break;

				validationObject = emailValidator(value);
				isValid = validationObject.isValid;
				if (!isValid) {
					error = validationObject.error;
				}
				break;

			case 'onlyNumbers':
				if (!isValid) break;

				validationObject = numberValidator(value);
				isValid = validationObject.isValid;
				if (!isValid) {
					error = validationObject.error;
				}
				break;

			default: isValid = true;
		}
	}

	return {isValid, error};
}

function minLengthValidator(value, minLength) {
	return {
		'isValid': value.length >= minLength,
		'error': ERRORS.INVALID_ENTRY,
	};
}

function maxLengthValidator(value, maxLength) {
	return {
		'isValid': value.length <= maxLength,
		'error': ERRORS.INVALID_ENTRY,
	};
}

function requiredValidator(value) {
	return {
		'isValid': value.trim() !== '',
		'error': ERRORS.REQUIRED_FIELD,
	};
}

function emailValidator(value) {
	var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return {
		'isValid': re.test(String(value).toLowerCase()),
		'error': ERRORS.INVALID_ENTRY,
	};
}

function numberValidator(value) {
	return {
		'isValid': !isNaN(value),
		'error': ERRORS.INVALID_ENTRY,
	};
}

export default validate;

const ERRORS = {
	'REQUIRED_FIELD': 'Required Field',
	'INVALID_ENTRY': 'Invalid Entry',
};
