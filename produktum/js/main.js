const passwordInput = document.getElementById("passwordInput");

// ==============================
// ====Jelszóerősség-becslő======
// ==============================
if (passwordInput) {
    const strengthBar = document.getElementById("passwordStrengthBar");
    const strengthText = document.getElementById("passwordStrengthText");
    const lengthCheck = document.getElementById("lengthCheck");
    const lowerCheck = document.getElementById("lowerCheck");
    const upperCheck = document.getElementById("upperCheck");
    const numberCheck = document.getElementById("numberCheck");
    const specialCheck = document.getElementById("specialCheck");


    function updateCheck(element, condition) {
        const icon = element.querySelector("i");

        if (condition) {
            icon.className = "bi bi-check-circle-fill me-2 text-success";
        } else {
            icon.className = "bi bi-x-circle me-2";
        }
    }


    passwordInput.addEventListener("input", function () {
        const password = passwordInput.value;

        // Jelszó követelményeinek ellenőrzése
        const hasLength = password.length >= 14;
        const hasLowercase = /[a-z]/.test(password);
        const hasUppercase = /[A-Z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecial = /[^A-Za-z0-9]/.test(password);

        // Pontszám kiszámítása
        let score = 0;

        if (hasLength) score += 20;
        if (hasLowercase) score += 20;
        if (hasUppercase) score += 20;
        if (hasNumber) score += 20;
        if (hasSpecial) score += 20;

        // Folyamatjelző frissítése
        strengthBar.style.width = score + "%";
        strengthBar.parentElement.setAttribute("aria-valuenow", score);

        // Szöveges értékelés
        if (score === 0) {
            strengthText.textContent = "Nincs megadva";
        } else if (score <= 40) {
            strengthText.textContent = "Gyenge";
        } else if (score <= 60) {
            strengthText.textContent = "Közepes";
        } else if (score <= 80) {
            strengthText.textContent = "Erős";
        } else {
            strengthText.textContent = "Nagyon erős";
        }

        // Folyamatjelző színének frissítése
        strengthBar.classList.remove(
            "bg-danger",
            "bg-warning",
            "bg-success"
        );

        if (score <= 40) {
            strengthBar.classList.add("bg-danger");
        } else if (score <= 60) {
            strengthBar.classList.add("bg-warning");
        } else {
            strengthBar.classList.add("bg-success");
        }


        // Követelmények vizuális visszajelzése
        updateCheck(lengthCheck, hasLength);
        updateCheck(lowerCheck, hasLowercase);
        updateCheck(upperCheck, hasUppercase);
        updateCheck(numberCheck, hasNumber);
        updateCheck(specialCheck, hasSpecial);
    });
}

// ==============================
// ====Adathalászat felismerő====
// ==============================
const phishingButtons = document.querySelectorAll(".phishing-answer");

if (phishingButtons.length > 0) {

    phishingButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            // A felhasználó által választott válasz
            const selectedAnswer = button.dataset.answer;

            // Megkeressük azt a carousel slide-ot,
            // amelyben a megnyomott gomb található
            const currentSlide = button.closest(".carousel-item");

            // Kiolvassuk a slide helyes válaszát
            const correctAnswer = currentSlide.dataset.correct;

            // Megkeressük az adott slide visszajelző mezőjét
            const feedback = currentSlide.querySelector(".phishing-feedback");

            // A kiválasztott és a helyes válasz összehasonlítása
            if (selectedAnswer === correctAnswer) {
                feedback.textContent = "Helyes válasz!";
                feedback.className =
                    "phishing-feedback alert alert-success mt-3";
            } else {
                feedback.textContent = "Nem egészen. Próbáld meg újra!";
                feedback.className =
                    "phishing-feedback alert alert-danger mt-3";
            }

        });

    });

}