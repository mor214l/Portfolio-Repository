function validateForm(theForm) {
    let isValid = true;
    let errorMessage = '';

    if (theForm.firstName.value == '') {
        errorMessage = errorMessage + 'First Name is required';
        isValid = false;
        theForm.firstName.focus();
    }
    if (theForm.lastName.value == '') {
        errorMessage += '\nLast Name is required';
        if (isValid) {
            isValid = false;
            theForm.lastName.focus();
        }
    }
    if (theForm.clientEmail.value.length == 0) {
        errorMessage += '\nEmail is required';
        if (isValid) {
            isValid = false;
            theForm.clientEmail.focus();
        }
    } else {
        if (theForm.clientEmail.value.length <= 6) {
            errorMessage += '\nEmail must be at least 6 characters';
            if (isValid) {
                isValid = false;
                theForm.clientEmail.focus();
            }
        }
    }
    if (theForm.clientPassword.value == '') {
        errorMessage += '\nPassword is required';
        if (isValid) {
            isValid = false;
            theForm.clientPassword.focus();
        }
    }

    if (isValid == false) {
        alert(errorMessage);
    }

    return isValid;
}
function myFunction() {
    alert("Thank you so much for signing up we cant wait!!!");
    window.history.back();
}

