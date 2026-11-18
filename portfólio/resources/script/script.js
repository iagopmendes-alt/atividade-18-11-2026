const botoesProjeto = document.querySelectorAll('.btn-detalhes');

botoesProjeto.forEach(function(botao) {
  botao.addEventListener('click', function() {
    const nomeDoProjeto = botao.getAttribute('data-nome');
    alert('Você clicou no projeto: ' + nomeDoProjeto);
  });
});


const botaoEmail = document.getElementById('btn-email');
const aviso = document.getElementById('aviso-copiado');

botaoEmail.addEventListener('click', function() {
  const email = botaoEmail.textContent;
  
  
  navigator.clipboard.writeText(email);
  

  aviso.textContent = 'E-mail copiado com sucesso!';
});