import validate from 'utils/validator';

export function handleInputChange(event, $this) {
  const name = event.target.name;
  const value = event.target.value;

  const updatedInputs = {
    ...$this.state.formInputs,
  };

  const updatedFormElement = {
    ...updatedInputs[name],
  };

  updatedFormElement.value = value;
  updatedFormElement.touched = true;

  // run our validation rules through the validator
  const validation = validate(value, updatedFormElement.validationRules);

  updatedFormElement.valid = validation.isValid;
  updatedFormElement.error = validation.error;

  updatedInputs[name] = updatedFormElement;

  const formIsValid = isFormValid(updatedInputs);
  const formIsActive = isFormActive(updatedInputs);

  $this.setState({
    formInputs: updatedInputs,
    formIsValid,
    formIsActive,
  });
}

export function validateAllInputs($this) {
  const updatedInputs = {
    ...$this.state.formInputs,
  };

  for (let input in updatedInputs) {
    const updatedFormElement = {
      ...updatedInputs[input],
    };
    const validation = validate(updatedFormElement.value, updatedFormElement.validationRules);

    updatedFormElement.touched = true;
    updatedFormElement.valid = validation.isValid;
    updatedFormElement.error = validation.error;

    updatedInputs[input] = updatedFormElement;
  }

  $this.setState({
    formInputs: updatedInputs,
  });
}

export function isFormValid(inputs) {
  let formIsValid = true;

  for (let inputName in inputs) {
    formIsValid = inputs[inputName].valid && formIsValid;
  }

  return formIsValid;
}

export function isFormActive(inputs) {
  let formIsActive = true;

  for (let inputName in inputs) {
    formIsActive = formIsActive || inputs[inputName].touched;
  }

  return formIsActive;
}

export function handleFormSubmit(event, $this, options) {
  event.preventDefault();
  const { onSuccess, onFailure } = options;

  $this.setState({ isLoading: true });
  validateAllInputs($this);

  if (!$this.state.formIsValid) {
    return $this.setState({ isLoading: false });
  }

  // Do fetch stuff
  setTimeout(() => {
    // fake submit time to show disabled state when submitted and waiting for a response
    Math.random() > .5 ? onSuccess() : onFailure();
    $this.setState({ isLoading: false });
  }, 2500);
}
