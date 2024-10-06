var _a;
function generatePassword(length) {
    if (length === void 0) { length = 12; }
    var upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    var numberChars = '0123456789';
    var symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    var allChars = upperCaseChars + lowerCaseChars + numberChars + symbolChars;
    var password = '';
    password += upperCaseChars.charAt(Math.floor(Math.random() * upperCaseChars.length));
    password += lowerCaseChars.charAt(Math.floor(Math.random() * lowerCaseChars.length));
    password += numberChars.charAt(Math.floor(Math.random() * numberChars.length));
    password += symbolChars.charAt(Math.floor(Math.random() * symbolChars.length));
    for (var i = password.length; i < length; i++) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
    return password.split('').sort(function () { return Math.random() - 0.5; }).join('');
}
function displayGeneratedPassword() {
    var newPassword = generatePassword();
    var resultParagraph = document.getElementById('presult');
    resultParagraph.textContent = "Generated Password: ".concat(newPassword);
}
(_a = document.getElementById('generateBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', displayGeneratedPassword);
