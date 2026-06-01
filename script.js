// Menu hambúrguer
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    // Impede scroll do body quando menu está aberto
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
  });
  
  // Fecha o menu ao clicar em um link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

//aqui é o código para a animação de fade-up usando Intersection Observer API
const elements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));

function showTab(id) {
  document.querySelectorAll('#inovacao .tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('#inovacao .tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  event.target.classList.add('active');
}

function showProj(id) {
  document.querySelectorAll('#projetos .tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('#projetos .tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  event.target.classList.add('active');
}

const text = "Conectando tecnologia, pessoas e ecossistemas para gerar valor real.\nCom visão sistêmica, cocriação e liderança.";
const speed = 30;

let i = 0;
const element = document.getElementById("typing-text");

function typeWriter() {
  if (i < text.length) {
    element.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = () => {
  setTimeout(typeWriter, 400);
};

// Botão Ver Todos os Projetos
const btnVerTodos = document.getElementById('btnVerTodos');
const previewGrid = document.getElementById('projetosPreview');
const fullGrid = document.getElementById('projetosFull');
let expanded = false;

if (btnVerTodos) {
  btnVerTodos.addEventListener('click', () => {
    if (!expanded) {
      previewGrid.style.display = 'none';
      fullGrid.style.display = 'grid';
      btnVerTodos.innerHTML = '← Mostrar menos projetos';
      expanded = true;
      
      document.getElementById('projetos').scrollIntoView({ behavior: 'smooth' });
    } else {
      previewGrid.style.display = 'grid';
      fullGrid.style.display = 'none';
      btnVerTodos.innerHTML = '✨ Ver todos os projetos →';
      expanded = false;
    }
  });
}

// Animação das barras de skills quando entra em visualização
const skillCategories = document.querySelectorAll('.comp-categoria');

const observerOptions = {
  threshold: 0.3,
  rootMargin: '0px 0px -50px 0px'
};

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      skillObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

skillCategories.forEach(category => {
  skillObserver.observe(category);
});