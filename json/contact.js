function validateForm(theForm) {
    let isValid = true;
    let errorMessage = '';

    if (theForm.fullName.value == '') {
        errorMessage = errorMessage + 'First Name is required';
        isValid = false;
        theForm.firstName.focus();
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
    if (isValid == false) {
        alert(errorMessage);
    }

    return isValid;
}
function myFunction() {
    alert("Thank you for reaching out I will get back to you as soon as possible");
    window.history.back();
}

