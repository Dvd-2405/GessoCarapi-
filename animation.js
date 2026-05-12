// Carrossel Hero
const slides = document.querySelectorAll('.slides .slide');
let atual = 0;

function irPara(index) {
    slides[atual].classList.remove('ativo');
    atual = (index + slides.length) % slides.length;
    slides[atual].classList.add('ativo');
}

document.getElementById('proximo').addEventListener('click', () => irPara(atual + 1));
document.getElementById('anterior').addEventListener('click', () => irPara(atual - 1));

setInterval(() => irPara(atual + 1), 4000);


// Carrossel Serviços
const slidesServico = document.querySelectorAll('.slides-servicos .slide-servico');
let atualServico = 0;

function irParaServico(index) {
    slidesServico[atualServico].classList.remove('ativo');
    atualServico = (index + slidesServico.length) % slidesServico.length;
    slidesServico[atualServico].classList.add('ativo');
}

document.querySelector('.svc-proximo').addEventListener('click', () => irParaServico(atualServico + 1));
document.querySelector('.svc-anterior').addEventListener('click', () => irParaServico(atualServico - 1));

setInterval(() => irParaServico(atualServico + 1), 5000);


// Dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    dropdown.querySelector('.dropdown-toggle').addEventListener('click', (e) => {
        e.stopPropagation();

        dropdowns.forEach(d => {
            if (d !== dropdown) d.classList.remove('aberto');
        });

        dropdown.classList.toggle('aberto');
    });
});

document.addEventListener('click', () => {
    dropdowns.forEach(d => d.classList.remove('aberto'));
}); 


const filtros = document.querySelectorAll('.filtro');
const produtos = document.querySelectorAll('.produto');

filtros.forEach(filtro => {
    filtro.addEventListener('click', () => {
        
        filtros.forEach(f => f.classList.remove('ativo'));
       
        filtro.classList.add('ativo');

        const categoria = filtro.dataset.filtro;

        produtos.forEach(produto => {
            if (categoria === 'todos' || produto.dataset.categoria === categoria) {
                produto.style.display = 'flex';
            } else {
                produto.style.display = 'none';
            }
        });
    });
});     