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
const speed = 35;

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

document.querySelectorAll('.proj-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const moveX = (x / rect.width - 0.5) * 10;
    const moveY = (y / rect.height - 0.5) * 10;

    card.style.transform = `rotateX(${-moveY}deg) rotateY(${moveX}deg) scale(1.02)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0) scale(1)';
  });
});

const modal = document.getElementById("modal");
const title = document.getElementById("modal-title");
const desc = document.getElementById("modal-desc");

document.querySelectorAll(".proj-card").forEach(card => {
  card.addEventListener("click", () => {
    title.innerText = card.querySelector(".proj-name").innerText;
    desc.innerText = card.querySelector(".proj-desc").innerText;

    modal.style.display = "flex";
  });
});

document.querySelector(".close").onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};
