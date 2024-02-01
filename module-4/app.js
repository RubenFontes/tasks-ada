function validarPasso1() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const cep = document.getElementById('cep').value;
  const consentimento = document.getElementById('consentimento').checked;

  // Validar campos
  if (!nome || !email || !cep || !consentimento || !validateEmail(email)) {
    alert('Preencha todos os campos corretamente.');
    return;
  }

  // Armazenar no Web Storage
  localStorage.setItem('nome', nome);
  localStorage.setItem('email', email);
  localStorage.setItem('cep', cep);

  // Avançar para o próximo passo
  document.getElementById('passo1').style.display = 'none';
  document.getElementById('passo2').style.display = 'block';
}

function calcularChurrasco() {
  const homens = parseInt(document.getElementById('homens').value);
  const mulheres = parseInt(document.getElementById('mulheres').value);
  const criancas = parseInt(document.getElementById('criancas').value);
  const alcoolicas = parseInt(document.getElementById('alcoolicas').value);

  // Calcular quantidade de itens
  const carne = 0.4 * homens + 0.32 * mulheres + 0.2 * criancas;
  const paoDeAlho = 2 * (homens + mulheres) + criancas;
  const carvao = homens + mulheres + criancas;
  const sal = 0.04 * (homens + mulheres + criancas);
  const gelo = Math.ceil((homens + mulheres + criancas) / 10) * 5;
  const refrigerante = Math.ceil((homens + mulheres + criancas) / 5);
  const agua = Math.ceil((homens + mulheres + criancas) / 5);
  const cerveja = 3 * alcoolicas;

  // Exibir resultado na tabela
  const resultadoTable = document.getElementById('resultado');
  resultadoTable.innerHTML = `
    <h2 style="text-align: center">Resultado do cálculo</h2>
    <tr><td><strong>Carne:</strong></td><td>${carne.toFixed(2)} KG</td></tr>
    <tr><td><strong>Pão de Alho:</strong></td><td>${paoDeAlho}</td></tr>
    <tr><td><strong>Carvão:</strong></td><td>${carvao} KG</td></tr>
    <tr><td><strong>Sal:</strong></td><td>${sal.toFixed(2)} KG</td></tr>
    <tr><td><strong>Gelo:</strong></td><td>${gelo} KG</td></tr>
    <tr><td><strong>Refrigerante:</strong></td><td>${refrigerante} garrafas de 2L</td></tr>
    <tr><td><strong>Água:</strong></td><td>${agua} garrafas de 1L</td></tr>
    <tr><td><strong>Cerveja:</strong></td><td>${cerveja} garrafas de 600ml</td></tr>
  `;

  // Armazenar no Web Storage
  localStorage.setItem('homens', homens);
  localStorage.setItem('mulheres', mulheres);
  localStorage.setItem('criancas', criancas);
  localStorage.setItem('alcoolicas', alcoolicas);

  // Avançar para o próximo passo
  document.getElementById('passo2').style.display = 'none';
  document.getElementById('passo3').style.display = 'block';
}

function validateEmail(email) {
  // Simples validação de e-mail
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Preencher campos se já foram preenchidos anteriormente
document.getElementById('nome').value = localStorage.getItem('nome') || '';
document.getElementById('email').value = localStorage.getItem('email') || '';
document.getElementById('cep').value = localStorage.getItem('cep') || '';

document.getElementById('passo1').style.display = 'block';  // Mostrar o primeiro passo
