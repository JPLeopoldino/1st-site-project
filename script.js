//Função para selecionar os elementos
const selectElement = (s) => document.querySelector(s);

//Abrir o menu quanto clicar
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
});

//Fechar o menu quanto clicar
selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});