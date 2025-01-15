// It's dummy implementation for display purpose
function sendMessage() {
    const input = document.getElementById('messageInput');
    if (input.value.trim() !== '') {
        alert('Thank you for your message!');
        input.value = '';
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const icon = document.querySelector('.theme-toggle i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
}