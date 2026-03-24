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
