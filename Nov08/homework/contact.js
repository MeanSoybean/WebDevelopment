// Update text of nameRequired
// to "required" when empty
// to "Please fill out your name" when not empty
let nameField = $('#name')
let nameRequired = $('#nameRequired')
function onNameInput(e) {
    if (nameField.val().trim().length === 0) {
        nameRequired.text("Please fill out your name")
    } else {
        nameRequired.text("required")
    }
}

nameField.on('input', onNameInput)


// Update text of emailRequired
// to "required" when empty
// to "Please fill out a valid email format"
let emailField = $('#email')
let emailRequired = $('#emailRequired')
function onEmailInput(e) {
    let emailAddr = emailField.val().trim()
    let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddr)
    // this regex is from https://www.w3resource.com/javascript/form/email-validation.php
    if (valid) {
        emailRequired.text("required")
    } else {
        emailRequired.text("Please fill out a valid email format")
    }
}

emailField.on('input', onEmailInput)

// Auto Generate a simple addition question for #arithmeticLabel
let a = 1
let b = 2
let answer = a + b
function newQuestion() {
    a = Math.floor(Math.random() * 10);
    b = Math.floor(Math.random() * 10);
    answer = a + b
    return `${a} + ${b} = ?`
}
$('#arithmeticLabel').text(newQuestion())


// For #arithmeticRequired
// Update to "required" when empty
// Update to "Please fill out a correct answer" if incorrect
// Update to "Thank you for your information!"
let arithmeticField = $('#arithmetic')
let arithmeticRequired = $('#arithmeticRequired')
function onArithmeticChange(e) {
    let attempt = arithmeticField.val()
    if (attempt.length === 0) {
        arithmeticRequired.text("required")
    } else {
        if (Number(attempt) === answer) {
            arithmeticRequired.text("Thank you for your information!")
        } else {
            arithmeticRequired.text("Please fill out a correct answer")
        }
    }
}

arithmeticField.on('input', onArithmeticChange)

// Prevent form from clearing on submit.
/* $('#contactform').submit(
    function(e) {
        e.preventDefault()
    }
) */