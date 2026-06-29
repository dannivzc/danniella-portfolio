// ===== TEMA CLARO/ESCURO =====
const btnTema = document.getElementById('btn-tema');

// Verifica se o usuário já tinha escolhido um tema antes
if (localStorage.getItem('tema') === 'escuro') {
  document.body.classList.add('escuro');
  btnTema.textContent = '☀️';
}

// Alterna entre tema claro e escuro ao clicar no botão
btnTema.addEventListener('click', () => {
  document.body.classList.toggle('escuro');

  if (document.body.classList.contains('escuro')) {
    btnTema.textContent = '☀️';
    localStorage.setItem('tema', 'escuro');
  } else {
    btnTema.textContent = '🌙';
    localStorage.setItem('tema', 'claro');
  }
});

// ===== MENU HAMBÚRGUER (MOBILE) =====
const btnMenu = document.getElementById('btn-menu');
const menuLista = document.getElementById('menu-lista');

// Abre e fecha o menu ao clicar no botão hambúrguer
btnMenu.addEventListener('click', () => {
  menuLista.classList.toggle('aberto');
});

// Fecha o menu ao clicar em qualquer link
menuLista.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuLista.classList.remove('aberto');
  });
});

// ===== VALIDAÇÃO DO FORMULÁRIO DE CONTATO =====
const btnEnviar = document.getElementById('btn-enviar');

btnEnviar.addEventListener('click', () => {

  // Pega os valores dos campos
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  // Pega os elementos de erro
  const erroNome = document.getElementById('erro-nome');
  const erroEmail = document.getElementById('erro-email');
  const erroMensagem = document.getElementById('erro-mensagem');
  const msgSucesso = document.getElementById('msg-sucesso');

  // Limpa erros anteriores
  erroNome.textContent = '';
  erroEmail.textContent = '';
  erroMensagem.textContent = '';
  msgSucesso.textContent = '';

  // Controle de erros
  let temErro = false;

  // Valida nome
  if (nome === '') {
    erroNome.textContent = 'Por favor, informe seu nome.';
    temErro = true;
  }

  // Valida e-mail com expressão regular
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    erroEmail.textContent = 'Por favor, informe seu e-mail.';
    temErro = true;
  } else if (!regexEmail.test(email)) {
    erroEmail.textContent = 'Informe um e-mail válido. Ex: usuario@dominio.com';
    temErro = true;
  }

  // Valida mensagem
  if (mensagem === '') {
    erroMensagem.textContent = 'Por favor, escreva uma mensagem.';
    temErro = true;
  }

  // Se não tiver erros, simula o envio
  if (!temErro) {
    // Limpa os campos do formulário
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensagem').value = '';

    // Exibe mensagem de sucesso
    msgSucesso.textContent = '✅ Mensagem enviada com sucesso!';
  }
});