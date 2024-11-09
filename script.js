document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents page reload

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    // Basic validation
    if (!email || !password) {
        alert('Please fill in both fields.');
        return;
    }

    // Simulate form submission
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);

    alert('Form submitted');
});
