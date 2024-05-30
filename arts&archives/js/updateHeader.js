// filename: js/updateHeader.js
function updateHeaderWithAccountName() {
    const accountName = localStorage.getItem('accountName');
    if (accountName) {
        const accountNameElements = document.querySelectorAll('#accountName');
        accountNameElements.forEach(element => {
            element.textContent = accountName;
        });
    }
}

document.addEventListener('DOMContentLoaded', updateHeaderWithAccountName);