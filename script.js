'use strict';
// ==================== RENDER ====================
const container = document.getElementById('slides-container');
const menuNav = document.getElementById('menu-nav');
let currentSlide = 0;
let currentSection = '';

// Build slides and menu
slides.forEach((s, i) => {
    // Slide
    const div = document.createElement('div');
    div.className = 'slide' + (i === 0 ? ' active' : '');
    div.id = 'slide-' + i;
    div.innerHTML = (i > 0 ? '<div class="slide-number">שקף ' + i + '</div>' : '') + s.content;
    container.appendChild(div);

    // Menu
    if (s.section && s.section !== currentSection) {
        currentSection = s.section;
        const sec = document.createElement('div');
        sec.className = 'menu-section';
        sec.textContent = s.section;
        menuNav.appendChild(sec);
    }
    const item = document.createElement('div');
    item.className = 'menu-item' + (i === 0 ? ' active' : '');
    item.id = 'menu-' + i;
    item.innerHTML = '<span class="menu-item-num">' + (i) + '</span>' + s.menu;
    item.onclick = () => goToSlide(i);
    menuNav.appendChild(item);
});

function goToSlide(n) {
    if (n < 0 || n >= slides.length) return;
    document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.menu-item').forEach(m => m.classList.remove('active'));
    document.getElementById('slide-' + n).classList.add('active');
    document.getElementById('menu-' + n).classList.add('active');
    document.getElementById('menu-' + n).scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    currentSlide = n;
    updateNav();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function nextSlide() { goToSlide(currentSlide + 1); }
function prevSlide() { goToSlide(currentSlide - 1); }

function updateNav() {
    document.getElementById('prev-btn').disabled = currentSlide === 0;
    document.getElementById('next-btn').disabled = currentSlide === slides.length - 1;
    document.getElementById('nav-text').textContent = (currentSlide + 1) + ' / ' + slides.length;
    document.getElementById('progress-fill').style.width = ((currentSlide + 1) / slides.length * 100) + '%';
}

updateNav();

// Theme & mode
function setMode(mode) {
    document.body.setAttribute('data-mode', mode);
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.toggle('active', b.dataset.mode === mode));
}

function setTheme(theme) {
    document.body.setAttribute('data-theme', theme);
}

// Quiz
function checkQuiz(btn, correct, expId) {
    const parent = btn.closest('.quiz-options');
    parent.querySelectorAll('.quiz-option').forEach(o => o.classList.add('disabled'));
    btn.classList.add(correct ? 'correct' : 'wrong');
    document.getElementById(expId).classList.add('show');
}

function checkQuizQ(btn, correct, expId) {
    const parent = btn.closest('.quiz-options');
    parent.querySelectorAll('.quiz-option').forEach(o => o.classList.add('disabled'));
    btn.classList.add(correct ? 'correct' : 'wrong');
    if (!correct) {
        parent.querySelectorAll('.quiz-option').forEach(o => {
            if (o.getAttribute('onclick').includes('true')) o.classList.add('correct');
        });
    }
    document.getElementById(expId).classList.add('show');
}

// Sidebar toggle
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
}

// Keyboard nav
document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') nextSlide();
    if (e.key === 'ArrowRight') prevSlide();
});

