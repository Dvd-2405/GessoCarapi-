// ========== CARROSSEL HERO ==========
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

// Swipe hero
let touchStartX = 0;
const slidesEl = document.querySelector('.slides');
slidesEl.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; });
slidesEl.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) irPara(diff > 0 ? atual + 1 : atual - 1);
});


// ========== CARROSSEL SERVIÇOS ==========
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

// Swipe serviços
let touchStartXSvc = 0;
const slidesServicosEl = document.querySelector('.slides-servicos');
slidesServicosEl.addEventListener('touchstart', e => { touchStartXSvc = e.touches[0].clientX; });
slidesServicosEl.addEventListener('touchend', e => {
    const diff = touchStartXSvc - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) irParaServico(diff > 0 ? atualServico + 1 : atualServico - 1);
});


// ========== MENU HAMBURGUER ==========
const menuBtn = document.getElementById('menuHamburguer');
const navMenu = document.getElementById('navMenu');

menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.toggle('aberto');
});

// Fecha o menu ao clicar em qualquer link
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('aberto'));
});

// Fecha ao clicar fora
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && e.target !== menuBtn) {
        navMenu.classList.remove('aberto');
    }
});


// ========== FILTRO DE PRODUTOS ==========
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