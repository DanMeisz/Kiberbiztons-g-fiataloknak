const passwordInput = document.getElementById("passwordInput");

passwordInput.addEventListener("input", function () {
    const password = passwordInput.value;

    const hasLength = password.length >= 14;
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);

    let score = 0;

    if (hasLength) score += 20;
    if (hasLowercase) score += 20;
    if (hasUppercase) score += 20;
    if (hasNumber) score += 20;
    if (hasSpecial) score += 20;

console.log("Score:", score);
});