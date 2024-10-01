document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (name === '' || email === '' || password === '' || confirmPassword === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (password !== confirmPassword) {
        alert('As senhas não coincidem.');
        return;
    }

    // Simulação de sucesso no cadastro
    alert('Cadastro realizado com sucesso!');
    window.location.href = 'login.html'; // Redireciona para a página de login após o cadastro
});


document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === '' || password === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }


    // Simulação de login bem-sucedido (sem autenticação real)
    alert('Login bem-sucedido!');
    window.location.href = 'index.html'; // Redireciona para a página principal após o login
});
 

