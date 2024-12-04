// Contact Form Validation
function validateForm() {
    const name = document.forms["contactForm"]["name"].value.trim();
    const email = document.forms["contactForm"]["email"].value.trim();
    const message = document.forms["contactForm"]["message"].value.trim();
    let valid = true;
    let errorMessage = "";

    if (name === "") {
        errorMessage += "Name must be filled out.\n";
        valid = false;
    }

    if (email === "") {
        errorMessage += "Email must be filled out.\n";
        valid = false;
    } else {
        // Simple email regex
        const emailPattern = /\S+@\S+\.\S+/;
        if (!emailPattern.test(email)) {
            errorMessage += "Invalid email format.\n";
            valid = false;
        }
    }

    if (message === "") {
        errorMessage += "Message must be filled out.\n";
        valid = false;
    }

    if (!valid) {
        alert(errorMessage);
    }

    return valid;
}
