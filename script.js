const loginModal = document.getElementById("loginModal");
const signupModal = document.getElementById("signupModal");

const openModalBtn = document.getElementById("openModalBtn");
const openSignupModal = document.getElementById("openSignupModal");
const openLoginModal = document.getElementById("openLoginModal");

openModalBtn.addEventListener("click", function() {
    loginModal.style.display = "flex"; // Mostra o modal
});

openSignupModal.addEventListener("click", function(event) {
    event.preventDefault(); // Evita comportamento padrão do link
    loginModal.style.display = "none";
    signupModal.style.display = "flex";
});

openLoginModal.addEventListener("click", function(event) {
    event.preventDefault(); // Evita comportamento padrão do link
    signupModal.style.display = "none";
    loginModal.style.display = "flex";
});

window.addEventListener("click", function(event) {
    if (event.target === loginModal) {
        loginModal.style.display = "none";
    } else if (event.target === signupModal) {
        signupModal.style.display = "none";
    }
});

document.getElementById("signupSenha").addEventListener("input", function() {
    const senha = this.value;
    const senhaCheck1 = document.getElementById("senhaCheck1");
    const senhaCheck2 = document.getElementById("senhaCheck2");
    const senhaCheck3 = document.getElementById("senhaCheck3");
    const senhaText1 = document.getElementById("senhaText1");
    const senhaText2 = document.getElementById("senhaText2");
    const senhaText3 = document.getElementById("senhaText3");

    function verificaComprimento(senha) {
        return senha.length >= 8;
    }

    function verificaMaiuscula(senha) {
        return /[A-Z]/.test(senha);
    }

    function verificaEspecial(senha) {
        return /[@#$&]/.test(senha);
    }

    function atualizarVerificacao(checkElement, textElement, isValido) {
        if (isValido) {
            checkElement.textContent = "check_circle";
            checkElement.style.color = "green";
            textElement.style.color = "green";
        } else {
            checkElement.textContent = "cancel";
            checkElement.style.color = "red";
            textElement.style.color = "red";
        }
    }

    atualizarVerificacao(senhaCheck1, senhaText1, verificaComprimento(senha));
    atualizarVerificacao(senhaCheck2, senhaText2, verificaMaiuscula(senha));
    atualizarVerificacao(senhaCheck3, senhaText3, verificaEspecial(senha));
    validarSenhas();
});

document.getElementById("signupConfirmSenha").addEventListener("input", function() {
    validarSenhas();
});

function validarSenhas() {
    const senha = document.getElementById("signupSenha").value;
    const senhaConfirm = document.getElementById("signupConfirmSenha").value;
    const senhaCheck4 = document.getElementById("senhaCheck4");
    const senhaText4 = document.getElementById("senhaText4");

    if (senha === senhaConfirm) {
        senhaCheck4.textContent = "check_circle";
        senhaCheck4.style.color = "green";
        senhaText4.style.color = "green";
    } else {
        senhaCheck4.textContent = "cancel";
        senhaCheck4.style.color = "red";
        senhaText4.style.color = "red";
    }
}

// Impede a submissão do formulário se as senhas não forem iguais
document.querySelector(".formulario").addEventListener("submit", function(event) {
    const senha = document.getElementById("signupSenha").value;
    const senhaConfirm = document.getElementById("signupConfirmSenha").value;
    if (senha !== senhaConfirm) {
        event.preventDefault(); // Impede o envio do formulário
        alert("As senhas devem ser iguais.");
    }
});