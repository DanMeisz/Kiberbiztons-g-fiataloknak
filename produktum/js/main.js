const passwordInput = document.getElementByIs("passwordInput")

passwordInput.addEventListener("input", function () {
    const password = passwordInput.value;

    console.log(password);
});