document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generate');

    generateButton.addEventListener('click', function() {
        document.getElementById('name').textContent = "Generated Name";
    });
});
