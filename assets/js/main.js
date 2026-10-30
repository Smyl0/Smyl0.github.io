/* ==========================================================================
   Steven Pallo · Portafolio
   ========================================================================== */
(() => {
  'use strict';

  const $ = (sel, el = document) => el.querySelector(sel);
  const $$ = (sel, el = document) => [...el.querySelectorAll(sel)];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  const GITHUB_USER = 'Smyl0';
  const GITHUB = `https://github.com/${GITHUB_USER}`;
  const LINKEDIN = 'https://www.linkedin.com/in/steven-pallo-b2717340a';
  const EMAIL = 'stevenpallo1025@gmail.com';
  const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.18.0/icons';

  /* ------------------------------------------------------------------
     Datos
     ------------------------------------------------------------------ */
  const DB_SVG = `<svg viewBox="0 0 64 64" aria-hidden="true"><ellipse cx="32" cy="14" rx="22" ry="8" fill="#f6a23c"/><path d="M10 14v12c0 4.4 9.8 8 22 8s22-3.6 22-8V14c0 4.4-9.8 8-22 8S10 18.4 10 14Z" fill="#e8890f"/><path d="M10 30v12c0 4.4 9.8 8 22 8s22-3.6 22-8V30c0 4.4-9.8 8-22 8S10 34.4 10 30Z" fill="#d1760a"/><path d="M10 46v4c0 4.4 9.8 8 22 8s22-3.6 22-8v-4c0 4.4-9.8 8-22 8S10 50.4 10 46Z" fill="#b86306"/></svg>`;

  const PT_SVG = `<svg viewBox="0 0 256 256" aria-hidden="true"><g stroke="#1ba0d7" stroke-width="14" stroke-linecap="round"><line x1="128" y1="128" x2="52" y2="58"/><line x1="128" y1="128" x2="204" y2="58"/><line x1="128" y1="128" x2="52" y2="198"/><line x1="128" y1="128" x2="204" y2="198"/></g><circle cx="128" cy="128" r="44" fill="#0a0e18" stroke="#1ba0d7" stroke-width="14"/><circle cx="128" cy="128" r="16" fill="#fff"/><circle cx="52" cy="58" r="26" fill="#1ba0d7"/><circle cx="204" cy="58" r="26" fill="#1ba0d7"/><circle cx="52" cy="198" r="26" fill="#1ba0d7"/><circle cx="204" cy="198" r="26" fill="#1ba0d7"/></svg>`;

  const CATEGORIES = { lang: 'lenguaje', web: 'web · framework', tools: 'herramienta · redes' };

  const SKILLS = [
    { name: 'Java', cat: 'lang', icon: 'java/java-original', color: '#f89820' },
    { name: 'C#', cat: 'lang', icon: 'csharp/csharp-original', color: '#a179dc' },
    { name: 'C++', cat: 'lang', icon: 'cplusplus/cplusplus-original', color: '#659ad2' },
    { name: 'Python', cat: 'lang', icon: 'python/python-original', color: '#ffd43b' },
    { name: 'PHP', cat: 'lang', icon: 'php/php-original', color: '#8892bf' },
    { name: 'JavaScript', cat: 'lang', icon: 'javascript/javascript-original', color: '#f7df1e' },
    { name: 'SQL', cat: 'lang', svg: DB_SVG, color: '#f29111' },
    { name: 'HTML5', cat: 'web', icon: 'html5/html5-original', color: '#e34f26' },
    { name: 'CSS3', cat: 'web', icon: 'css3/css3-original', color: '#2965f1' },
    { name: 'React', cat: 'web', icon: 'react/react-original', color: '#61dafb' },
    { name: '.NET', cat: 'web', icon: 'dotnetcore/dotnetcore-original', color: '#8b5cf6' },
    { name: 'Git', cat: 'tools', icon: 'git/git-original', color: '#f05032' },
    { name: 'GitHub', cat: 'tools', icon: 'github/github-original', color: '#e8edf5', invert: true },
    { name: 'Linux', cat: 'tools', icon: 'linux/linux-original', color: '#fcc624' },
    { name: 'Packet Tracer', cat: 'tools', svg: PT_SVG, color: '#1ba0d7' },
  ];

  const PROJECTS = [
    {
      repo: 'Tower_Defense_Estructura_Datos', emoji: '🏰', title: 'Tower Defense',
      desc: 'Juego con interfaz gráfica hecho con raylib, donde torres, enemigos y oleadas se gestionan con listas enlazadas.',
      tags: ['C++', 'raylib', 'Listas enlazadas'],
    },
    {
      repo: 'Prueba-practica-arboles-java', emoji: '🎓', title: 'Sistema Académico UTA',
      desc: 'Gestión de estudiantes con un Árbol Binario de Búsqueda: inserción, búsqueda, eliminación y recorridos inorden, preorden, postorden y por niveles.',
      tags: ['Java', 'POO', 'Árbol BST'],
    },
    {
      repo: 'Proyectos_Estructura_Datos', emoji: '👥', title: 'Gestión de Estudiantes',
      desc: 'Gestor de calificaciones construido sobre una lista doblemente enlazada, más ejercicios de listas secuenciales.',
      tags: ['C++', 'Lista doble', 'POO'],
    },
    {
      repo: 'Deberes_Estructura_Datos', emoji: '🌳', title: 'Ejercicios de Árboles',
      desc: 'Árboles binarios, recorridos y transformaciones resueltos en Java y C++, además de un BST aplicado a una empresa.',
      tags: ['Java', 'C++', 'Árboles'],
    },
    {
      repo: 'Deber_Registro_Pacientes_Atendidos', emoji: '🏥', title: 'Registro de Pacientes',
      desc: 'Programa de consola en C++ para llevar el registro de los pacientes atendidos.',
      tags: ['C++', 'Consola'],
    },
    {
      repo: 'Smyl0.github.io', emoji: '🚀', title: 'Este portafolio', demo: 'https://smyl0.github.io/',
      desc: 'Sitio personal con terminal interactiva, animaciones en canvas y datos en vivo desde la API de GitHub.',
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
  ];

  const LANG_COLORS = {
    'C++': '#f34b7d', Java: '#b07219', HTML: '#e34c26', CSS: '#663399', JavaScript: '#f1e05a',
    'C#': '#178600', Python: '#3572a5', PHP: '#4f5d95', TypeScript: '#3178c6',
  };

  const ICONS = {
    github: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
    external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>',
  };

  const ROLES = [
    'Estudiante de Ingeniería en Software',
    'Full-Stack Developer en formación',
    'Backend con Java, C# y .NET',
    'Interfaces con React',
    'Fan de las estructuras de datos',
    'Redes con Cisco Packet Tracer',
  ];

  /* ------------------------------------------------------------------
     Utilidades
     ------------------------------------------------------------------ */
  const escapeHTML = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const rtf = new Intl.RelativeTimeFormat('es', { numeric: 'auto' });
  function timeAgo(dateStr) {
    const diff = (new Date(dateStr) - Date.now()) / 1000;
    const units = [['year', 31536000], ['month', 2592000], ['week', 604800], ['day', 86400], ['hour', 3600], ['minute', 60]];
    for (const [unit, secs] of units) {
      if (Math.abs(diff) >= secs) return rtf.format(Math.round(diff / secs), unit);
    }
    return 'justo ahora';
  }

  let toastTimer;
  function toast(msg) {
    const el = $('#toast');
    el.textContent = msg;
    el.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('is-visible'), 2600);
  }

  const storage = {
    get(key) { try { return JSON.parse(sessionStorage.getItem(key)); } catch { return null; } },
    set(key, value) { try { sessionStorage.setItem(key, JSON.stringify(value)); } catch { /* sin almacenamiento */ } },
  };

  /* ------------------------------------------------------------------
     Navegación, barra de progreso y brillo del cursor
     ------------------------------------------------------------------ */
  function initNav() {
    const nav = $('#nav');
    const menu = $('#menu');
    const burger = $('#burger');
    const progress = $('#progress');

    const setMenu = (open) => {
      menu.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    };
    burger.addEventListener('click', () => setMenu(!menu.classList.contains('is-open')));
    $$('.nav__link').forEach((link) => link.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
    document.addEventListener('click', (e) => { if (!nav.contains(e.target)) setMenu(false); });

    let ticking = false;
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      nav.classList.toggle('is-scrolled', scrollY > 20);
      progress.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
      ticking = false;
    };
    addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
    onScroll();

    const links = new Map($$('.nav__link').map((a) => [a.getAttribute('href').slice(1), a]));
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((a) => a.classList.remove('is-active'));
        links.get(entry.target.id)?.classList.add('is-active');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    $$('main section[id]').forEach((s) => spy.observe(s));
  }

  function initGlow() {
    if (!finePointer || reduceMotion) return;
    const glow = $('#glow');
    let x = 0, y = 0, raf = 0;
    addEventListener('pointermove', (e) => {
      x = e.clientX; y = e.clientY;
      glow.classList.add('is-on');
      if (!raf) raf = requestAnimationFrame(() => { glow.style.transform = `translate3d(${x}px, ${y}px, 0)`; raf = 0; });
    }, { passive: true });
    document.addEventListener('pointerleave', () => glow.classList.remove('is-on'));
  }

  /* ------------------------------------------------------------------
     Fondo de red (canvas)
     ------------------------------------------------------------------ */
  function initNetwork() {
    const canvas = $('#network');
    const ctx = canvas.getContext('2d');
    const LINK = 140;
    const MOUSE_LINK = 190;
    let w = 0, h = 0, dpr = 1, nodes = [], raf = 0;
    const mouse = { x: -9999, y: -9999 };

    function resize() {
      const prevW = w;
      dpr = Math.min(devicePixelRatio || 1, 2);
      w = canvas.width = innerWidth * dpr;
      h = canvas.height = innerHeight * dpr;
      // En móvil la barra de direcciones cambia el alto al hacer scroll: no regenerar por eso.
      if (prevW === w && nodes.length) return;
      const count = Math.min(95, Math.round((innerWidth * innerHeight) / 15000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35 * dpr,
        vy: (Math.random() - 0.5) * 0.35 * dpr,
        r: (Math.random() * 1.3 + 0.7) * dpr,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      const link = LINK * dpr;
      const mLink = MOUSE_LINK * dpr;
      const mx = mouse.x * dpr, my = mouse.y * dpr;
      ctx.lineWidth = 0.8 * dpr;

      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < link * link) {
            ctx.strokeStyle = `rgba(129, 140, 248, ${(1 - Math.sqrt(d2) / link) * 0.32})`;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        const dm = Math.hypot(a.x - mx, a.y - my);
        if (dm < mLink) {
          ctx.strokeStyle = `rgba(34, 211, 238, ${(1 - dm / mLink) * 0.55})`;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mx, my); ctx.stroke();
        }
      }

      ctx.fillStyle = 'rgba(165, 243, 252, .75)';
      for (const n of nodes) { ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill(); }
    }

    function loop() { draw(); raf = requestAnimationFrame(loop); }
    const start = () => { if (!raf && !reduceMotion) loop(); };
    const stop = () => { cancelAnimationFrame(raf); raf = 0; };

    resize();
    draw();
    start();

    let resizeTimer;
    addEventListener('resize', () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(() => { resize(); draw(); }, 150); });
    addEventListener('pointermove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
    document.addEventListener('pointerleave', () => { mouse.x = mouse.y = -9999; });
    document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
  }

  /* ------------------------------------------------------------------
     Efecto de escritura del hero
     ------------------------------------------------------------------ */
  function initTyping() {
    const el = $('#typed');
    if (!el || reduceMotion) return;
    let role = 0, char = ROLES[0].length, deleting = true;

    function tick() {
      const text = ROLES[role];
      if (deleting) {
        char--;
        el.textContent = text.slice(0, char);
        if (char === 0) { deleting = false; role = (role + 1) % ROLES.length; }
        setTimeout(tick, 28);
      } else {
        const next = ROLES[role];
        char++;
        el.textContent = next.slice(0, char);
        if (char === next.length) { deleting = true; setTimeout(tick, 1800); return; }
        setTimeout(tick, 55 + Math.random() * 40);
      }
    }
    setTimeout(tick, 2400);
  }

  /* ------------------------------------------------------------------
     Apariciones al hacer scroll y contadores
     ------------------------------------------------------------------ */
  if (!('IntersectionObserver' in window)) document.documentElement.classList.remove('js');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  const observeReveals = (root = document) => $$('.reveal:not(.is-visible)', root).forEach((el) => revealObserver.observe(el));

  function animateCount(el) {
    const target = Number(el.dataset.count) || 0;
    if (reduceMotion) { el.textContent = target; el.dataset.done = '1'; return; }
    const duration = 1400;
    const t0 = performance.now();
    const step = (now) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round((Number(el.dataset.count) || target) * eased);
      if (p < 1) requestAnimationFrame(step);
      else el.dataset.done = '1';
    };
    requestAnimationFrame(step);
  }

  function initCounters() {
    const tech = $('#techCount');
    if (tech) tech.dataset.count = SKILLS.length;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCount(entry.target);
        io.unobserve(entry.target);
      });
    }, { threshold: 0.6 });
    $$('[data-count]').forEach((el) => io.observe(el));
  }

  /* ------------------------------------------------------------------
     Interacciones: spotlight, tilt y botones magnéticos
     ------------------------------------------------------------------ */
  function initPointerFx() {
    if (!finePointer) return;

    document.addEventListener('pointermove', (e) => {
      const card = e.target.closest('.spotlight');
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    }, { passive: true });

    if (reduceMotion) return;

    document.addEventListener('pointermove', (e) => {
      const el = e.target.closest('.tilt');
      if (!el) return;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      const max = Number(el.dataset.tilt) || 7;
      el.style.transform = `perspective(900px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg)`;
    }, { passive: true });
    document.addEventListener('pointerout', (e) => {
      const el = e.target.closest('.tilt');
      if (el && !el.contains(e.relatedTarget)) el.style.transform = '';
    });

    $$('.magnetic').forEach((btn) => {
      btn.addEventListener('pointermove', (e) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        btn.style.transform = `translate(${x * 0.18}px, ${y * 0.3}px)`;
      });
      btn.addEventListener('pointerleave', () => { btn.style.transform = ''; });
    });
  }

  /* ------------------------------------------------------------------
     Tarjeta de código: números de línea
     ------------------------------------------------------------------ */
  function initCodeCard() {
    const code = $('.code__body code');
    if (!code) return;
    code.innerHTML = code.innerHTML
      .split('\n')
      .map((line, i) => `<span class="ln">${i + 1}</span>${line}`)
      .join('\n');
  }

  /* ------------------------------------------------------------------
     Cinta infinita
     ------------------------------------------------------------------ */
  function initMarquee() {
    const track = $('#marquee');
    if (track) track.innerHTML += track.innerHTML;
  }

  /* ------------------------------------------------------------------
     Skills
     ------------------------------------------------------------------ */
  function initSkills() {
    const grid = $('#skillsGrid');
    grid.innerHTML = SKILLS.map((s, i) => {
      const icon = s.svg || `<img src="${DEVICON}/${s.icon}.svg" alt="" width="54" height="54" loading="lazy"${s.invert ? ' class="invert"' : ''} />`;
      return `
        <div class="reveal" style="--d:${(i % 5) * 0.06}s" data-cat="${s.cat}">
          <div class="skill card spotlight" style="--c:${s.color}">
            <span class="skill__icon">${icon}</span>
            <span class="skill__name">${s.name}</span>
            <span class="skill__cat">${CATEGORIES[s.cat]}</span>
          </div>
        </div>`;
    }).join('');
    observeReveals(grid);

    const buttons = $$('.filter');
    buttons.forEach((btn) => btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      buttons.forEach((b) => {
        const active = b === btn;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-pressed', String(active));
      });
      let shown = 0;
      [...grid.children].forEach((item) => {
        const match = filter === 'all' || item.dataset.cat === filter;
        item.hidden = !match;
        item.classList.add('is-visible');
        const card = item.firstElementChild;
        card.classList.remove('pop');
        if (match) {
          void card.offsetWidth;
          card.style.setProperty('--pd', `${shown++ * 0.04}s`);
          card.classList.add('pop');
        }
      });
    }));
  }

  /* ------------------------------------------------------------------
     Proyectos (datos en vivo desde la API de GitHub)
     ------------------------------------------------------------------ */
  function initProjects() {
    const grid = $('#projectsGrid');
    grid.innerHTML = PROJECTS.map((p, i) => {
      const url = `${GITHUB}/${p.repo}`;
      const lang = p.tags[0];
      return `
        <div class="reveal" style="--d:${(i % 3) * 0.08}s">
          <article class="project card spotlight tilt" data-repo="${p.repo.toLowerCase()}" data-tilt="5">
            <div class="project__top">
              <span class="project__emoji" aria-hidden="true">${p.emoji}</span>
              <div class="project__links">
                ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener" aria-label="Ver ${p.title} en vivo">${ICONS.external}</a>` : ''}
                <a href="${url}" target="_blank" rel="noopener" aria-label="Código de ${p.title} en GitHub">${ICONS.github}</a>
              </div>
            </div>
            <h3 class="project__title"><a href="${url}" target="_blank" rel="noopener">${p.title}</a></h3>
            <p class="project__desc">${p.desc}</p>
            <ul class="project__tags">${p.tags.map((t) => `<li>${t}</li>`).join('')}</ul>
            <div class="project__meta">
              <span><i class="lang-dot" style="--c:${LANG_COLORS[lang] || '#8b949e'}"></i><span data-lang>${lang}</span></span>
              <span data-updated></span>
            </div>
          </article>
        </div>`;
    }).join('');
    observeReveals(grid);
  }

  let liveRepos = [];

  async function loadGitHub() {
    let data = storage.get('gh-data');
    if (!data) {
      try {
        const [user, repos] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USER}`).then((r) => (r.ok ? r.json() : Promise.reject(r.status))),
          fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`).then((r) => (r.ok ? r.json() : Promise.reject(r.status))),
        ]);
        data = {
          publicRepos: user.public_repos,
          repos: repos.map((r) => ({ name: r.name, language: r.language, pushed_at: r.pushed_at, html_url: r.html_url, description: r.description, fork: r.fork })),
        };
        storage.set('gh-data', data);
      } catch {
        return; // Sin conexión o límite de la API: se quedan los datos estáticos.
      }
    }

    liveRepos = data.repos.filter((r) => !r.fork);

    const repoCount = $('#repoCount');
    if (repoCount && data.publicRepos) {
      repoCount.dataset.count = data.publicRepos;
      if (repoCount.dataset.done) repoCount.textContent = data.publicRepos;
    }

    const byName = new Map(data.repos.map((r) => [r.name.toLowerCase(), r]));
    $$('.project').forEach((card) => {
      const repo = byName.get(card.dataset.repo);
      if (!repo) return;
      if (repo.language) {
        $('[data-lang]', card).textContent = repo.language;
        $('.lang-dot', card).style.setProperty('--c', LANG_COLORS[repo.language] || '#8b949e');
      }
      $('[data-updated]', card).textContent = `Actualizado ${timeAgo(repo.pushed_at)}`;
    });
  }

  /* ------------------------------------------------------------------
     Terminal interactiva
     ------------------------------------------------------------------ */
  function initTerminal() {
    const body = $('#termBody');
    const out = $('#termOut');
    const form = $('#termForm');
    const input = $('#termInput');
    const history = [];
    let hIndex = 0;
    let booted = false;
    let busy = false;

    const PROMPT = '<span class="t-user">steven@uta</span>:<span class="t-path">~</span>$';
    const link = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;
    const scrollDown = () => { body.scrollTop = body.scrollHeight; };

    function print(html = '', cls = '') {
      const row = document.createElement('div');
      row.className = `row ${cls}`.trim();
      row.innerHTML = html;
      out.appendChild(row);
      scrollDown();
    }
    const gap = () => print('', 'gap');

    const FILES = {
      'sobre_mi.txt': () => run('about', true),
      'skills.json': () => print(escapeHTML(JSON.stringify({
        lenguajes: ['Java', 'C#', 'C++', 'Python', 'PHP', 'JavaScript', 'SQL'],
        web: ['HTML5', 'CSS3', 'React', '.NET'],
        herramientas: ['Git', 'GitHub', 'Linux', 'Cisco Packet Tracer'],
      }, null, 2)), 't-cyan'),
      'contacto.md': () => run('contacto', true),
      'secreto.txt': () => print('🤫 Shhh… escribe <span class="t-cyan">matrix</span> y mira lo que pasa.'),
    };

    const COMMANDS = {
      help: {
        desc: 'Muestra esta ayuda',
        run() {
          print('<span class="t-bold">Comandos disponibles:</span>');
          Object.entries(COMMANDS).forEach(([name, cmd]) => {
            if (cmd.hidden) return;
            print(`  <span class="t-cyan">${name.padEnd(11)}</span><span class="t-muted">${cmd.desc}</span>`);
          });
          gap();
          print('<span class="t-muted">Tip: usa ↑ ↓ para el historial y Tab para autocompletar.</span>');
        },
      },
      about: {
        desc: 'Quién soy',
        run() {
          print('<span class="t-cyan t-bold">Steven Pallo</span> — Estudiante de Ingeniería en Software');
          print('<span class="t-muted">Universidad Técnica de Ambato · 4.º semestre · Ambato, Ecuador</span>');
          gap();
          print('Me gusta construir software web y de escritorio, y entender cómo funcionan las cosas por dentro:');
          print('estructuras de datos, algoritmos, backend y redes. Siempre aprendiendo algo nuevo. 🚀');
        },
      },
      skills: {
        desc: 'Mi stack tecnológico',
        run() {
          const groups = { lang: 'Lenguajes', web: 'Web', tools: 'Herramientas' };
          Object.entries(groups).forEach(([cat, label]) => {
            const items = SKILLS.filter((s) => s.cat === cat).map((s) => s.name).join(' · ');
            print(`<span class="t-violet">${label.padEnd(13)}</span><span class="t-muted">→</span> ${items}`);
          });
        },
      },
      proyectos: {
        desc: 'Proyectos destacados',
        run() {
          PROJECTS.forEach((p) => print(`${p.emoji} ${link(`${GITHUB}/${p.repo}`, p.title)} <span class="t-muted">— ${p.tags.join(' · ')}</span>`));
          gap();
          const total = liveRepos.length ? `${liveRepos.length} repos públicos` : 'todos mis repos';
          print(`<span class="t-muted">Ver ${total} en</span> ${link(`${GITHUB}?tab=repositories`, 'github.com/Smyl0')}`);
        },
      },
      contacto: {
        desc: 'Cómo contactarme',
        run() {
          print(`<span class="t-violet">Correo   </span> ${link(`mailto:${EMAIL}`, EMAIL)}`);
          print(`<span class="t-violet">LinkedIn </span> ${link(LINKEDIN, 'linkedin.com/in/steven-pallo-b2717340a')}`);
          print(`<span class="t-violet">GitHub   </span> ${link(GITHUB, 'github.com/Smyl0')}`);
        },
      },
      neofetch: {
        desc: 'Info del sistema (edición Steven)',
        run() {
          const art = [
            '███████╗██████╗ ',
            '██╔════╝██╔══██╗',
            '███████╗██████╔╝',
            '╚════██║██╔═══╝ ',
            '███████║██║     ',
            '╚══════╝╚═╝     ',
          ].join('\n');
          const info = [
            ['', '<span class="t-user">steven</span>@<span class="t-user">uta</span>'],
            ['', '<span class="t-muted">─────────────</span>'],
            ['SO', 'Ingeniería en Software · UTA'],
            ['Host', 'Universidad Técnica de Ambato'],
            ['Uptime', '4.º semestre'],
            ['Shell', 'bash · PowerShell'],
            ['Lenguajes', 'Java, C#, C++, Python, PHP, JS, SQL'],
            ['Frameworks', 'React, .NET'],
            ['Redes', 'Cisco Packet Tracer · Linux'],
            ['Ubicación', 'Ambato, Ecuador'],
            ['Estado', 'Siempre aprendiendo 🚀'],
          ].map(([k, v]) => (k ? `<span class="t-cyan t-bold">${k}</span>: ${v}` : v)).join('\n');
          const colors = ['#ff5f57', '#febc2e', '#28c840', '#22d3ee', '#6366f1', '#8b5cf6', '#f472b6', '#e8edf5']
            .map((c) => `<i style="background:${c}"></i>`).join('');
          print(`<div class="neo"><pre class="neo__art">${art}</pre><div>${info}<div class="neo__colors">${colors}</div></div></div>`);
        },
      },
      github: { desc: 'Abre mi GitHub', run() { open(GITHUB, '_blank', 'noopener'); print('Abriendo GitHub… 🚀'); } },
      linkedin: { desc: 'Abre mi LinkedIn', run() { open(LINKEDIN, '_blank', 'noopener'); print('Abriendo LinkedIn… 💼'); } },
      email: { desc: 'Escríbeme un correo', run() { location.href = `mailto:${EMAIL}`; print(`Abriendo tu correo para escribir a ${EMAIL} ✉️`); } },
      ls: {
        desc: 'Lista mis archivos',
        run() { print(Object.keys(FILES).map((f) => `<span class="${f.endsWith('.txt') ? '' : 't-cyan'}">${f}</span>`).join('   ')); },
      },
      cat: {
        desc: 'Lee un archivo (ej: cat sobre_mi.txt)',
        run(args) {
          const file = args[0];
          if (!file) return print('<span class="t-red">cat: falta el nombre del archivo.</span> Prueba <span class="t-cyan">ls</span>.');
          if (FILES[file]) return FILES[file]();
          print(`<span class="t-red">cat: ${escapeHTML(file)}: No existe el archivo o directorio</span>`);
        },
      },
      whoami: { desc: 'Usuario actual', run() { print('steven'); } },
      date: { desc: 'Fecha y hora', run() { print(new Date().toLocaleString('es-EC', { dateStyle: 'full', timeStyle: 'short' })); } },
      echo: { desc: 'Repite un texto', run(args) { print(escapeHTML(args.join(' '))); } },
      history: { desc: 'Comandos usados', run() { history.forEach((c, i) => print(`<span class="t-muted">${String(i + 1).padStart(3)}</span>  ${escapeHTML(c)}`)); } },
      matrix: { desc: '🤫', run() { print('<span class="t-green">Despierta, Neo… 🐇</span>'); setTimeout(matrixRain, 400); } },
      clear: { desc: 'Limpia la terminal', run() { out.innerHTML = ''; } },
      sudo: { hidden: true, run() { print('<span class="t-red">steven no está en el archivo sudoers. Este incidente será reportado.</span> 👀'); } },
      rm: { hidden: true, run() { print('<span class="t-yellow">Buen intento 😏 Aquí no se borra nada.</span>'); } },
      cd: { hidden: true, run() { print('Este portafolio vive en <span class="t-path">~</span>. No hay a dónde ir… ¡todo está aquí! 😄'); } },
      exit: { hidden: true, run() { print('No puedes escapar tan fácil 😄 Te llevo arriba…'); setTimeout(() => scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }), 700); } },
      hola: { hidden: true, run() { print('¡Hola! 👋 Gracias por pasar por aquí. Escribe <span class="t-cyan">help</span> para empezar.'); } },
    };
    const ALIASES = { 'sobre-mi': 'about', sobre_mi: 'about', projects: 'proyectos', contact: 'contacto', cls: 'clear', ayuda: 'help', hello: 'hola' };

    function run(raw, silent = false) {
      const line = raw.trim();
      if (!silent) print(`${PROMPT} ${escapeHTML(line)}`);
      if (!line) return;
      if (!silent) { history.push(line); hIndex = history.length; }
      const [name, ...args] = line.split(/\s+/);
      const key = ALIASES[name.toLowerCase()] || name.toLowerCase();
      const cmd = COMMANDS[key];
      if (cmd) cmd.run(args);
      else print(`<span class="t-red">bash: ${escapeHTML(name)}: comando no encontrado.</span> Escribe <span class="t-cyan">help</span> para ver los comandos.`);
      if (!silent && key !== 'clear') gap();
    }

    function typeAndRun(cmd) {
      if (busy) return;
      busy = true;
      input.value = '';
      let i = 0;
      const step = () => {
        input.value = cmd.slice(0, ++i);
        if (i < cmd.length) setTimeout(step, reduceMotion ? 0 : 45);
        else setTimeout(() => { run(cmd); input.value = ''; busy = false; }, 180);
      };
      step();
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (busy) return;
      run(input.value);
      input.value = '';
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (hIndex > 0) input.value = history[--hIndex];
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (hIndex < history.length - 1) input.value = history[++hIndex];
        else { hIndex = history.length; input.value = ''; }
      } else if (e.key === 'Tab') {
        e.preventDefault();
        const value = input.value.trim().toLowerCase();
        if (!value) return;
        const [first, ...rest] = value.split(/\s+/);
        if (first === 'cat' && rest.length <= 1) {
          const matches = Object.keys(FILES).filter((f) => f.startsWith(rest[0] || ''));
          if (matches.length === 1) input.value = `cat ${matches[0]}`;
          else if (matches.length > 1) { print(`${PROMPT} ${escapeHTML(input.value)}`); print(matches.join('   '), 't-muted'); }
          return;
        }
        const matches = Object.keys(COMMANDS).filter((c) => !COMMANDS[c].hidden && c.startsWith(value));
        if (matches.length === 1) input.value = `${matches[0]} `;
        else if (matches.length > 1) { print(`${PROMPT} ${escapeHTML(input.value)}`); print(matches.join('   '), 't-muted'); }
      } else if (e.key.toLowerCase() === 'l' && e.ctrlKey) {
        e.preventDefault();
        out.innerHTML = '';
      }
    });

    body.addEventListener('click', () => {
      if (!getSelection().toString()) input.focus({ preventScroll: true });
    });

    $$('#termChips button').forEach((btn) => btn.addEventListener('click', () => typeAndRun(btn.dataset.cmd)));

    const bootObserver = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting || booted) return;
      booted = true;
      bootObserver.disconnect();
      print('Bienvenido a la terminal de <span class="t-cyan t-bold">Steven Pallo</span> 👋');
      print('<span class="t-muted">Escribe <span class="t-cyan">help</span> para ver los comandos disponibles.</span>');
      gap();
      setTimeout(() => typeAndRun('neofetch'), 700);
    }, { threshold: 0.35 });
    bootObserver.observe(body);
  }

  /* ------------------------------------------------------------------
     Lluvia Matrix (comando "matrix" y código Konami)
     ------------------------------------------------------------------ */
  let matrixRunning = false;
  function matrixRain(duration = 7000) {
    if (matrixRunning) return;
    matrixRunning = true;
    const canvas = $('#matrix');
    const ctx = canvas.getContext('2d');
    const fontSize = 16;
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    const columns = Math.ceil(canvas.width / fontSize);
    const drops = Array.from({ length: columns }, () => Math.random() * -60);
    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワン0123456789{}<>/=;JAVAC#PHPSQL';
    let raf = 0, last = 0;
    const t0 = performance.now();

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    canvas.classList.add('is-on');

    function frame(now) {
      if (now - last > 40) {
        last = now;
        ctx.fillStyle = 'rgba(0, 0, 0, .08)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = `${fontSize}px "JetBrains Mono", monospace`;
        for (let i = 0; i < columns; i++) {
          const y = drops[i] * fontSize;
          ctx.fillStyle = Math.random() > 0.96 ? '#e0fbff' : '#22d3ee';
          ctx.fillText(chars[(Math.random() * chars.length) | 0], i * fontSize, y);
          if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
          drops[i]++;
        }
        ctx.fillStyle = 'rgba(0, 0, 0, .6)';
        ctx.fillRect(canvas.width / 2 - 170, canvas.height - 64, 340, 34);
        ctx.fillStyle = '#8a94a8';
        ctx.font = '13px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillText('clic o Esc para salir', canvas.width / 2, canvas.height - 42);
        ctx.textAlign = 'start';
      }
      if (now - t0 < duration) raf = requestAnimationFrame(frame);
      else stop();
    }

    function stop() {
      cancelAnimationFrame(raf);
      canvas.classList.remove('is-on');
      canvas.removeEventListener('click', stop);
      removeEventListener('keydown', onKey);
      matrixRunning = false;
    }
    function onKey(e) { if (e.key === 'Escape') stop(); }

    canvas.addEventListener('click', stop);
    addEventListener('keydown', onKey);
    raf = requestAnimationFrame(frame);
  }

  function initKonami() {
    const code = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a'];
    let pos = 0;
    addEventListener('keydown', (e) => {
      pos = e.key.toLowerCase() === code[pos] ? pos + 1 : (e.key.toLowerCase() === code[0] ? 1 : 0);
      if (pos === code.length) { pos = 0; toast('🎮 ¡Código Konami activado!'); matrixRain(); }
    });
  }

  /* ------------------------------------------------------------------
     Contacto y pie
     ------------------------------------------------------------------ */
  function initContact() {
    $('#copyEmail')?.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(EMAIL);
        toast('📋 ¡Correo copiado al portapapeles!');
      } catch {
        toast(`✉️ ${EMAIL}`);
      }
    });
    $('#year').textContent = new Date().getFullYear();
  }

  /* ------------------------------------------------------------------
     Inicio
     ------------------------------------------------------------------ */
  initCodeCard();
  initMarquee();
  initSkills();
  initProjects();
  initNav();
  initGlow();
  initNetwork();
  initTyping();
  initCounters();
  initPointerFx();
  initTerminal();
  initKonami();
  initContact();
  observeReveals();
  loadGitHub();

  console.log(
    '%c<SP/>%c ¿Revisando el código? 👀\nEscríbeme a ' + EMAIL + ' y hablamos.',
    'font: 700 22px "Space Grotesk", sans-serif; color: #22d3ee;',
    'font: 13px "JetBrains Mono", monospace; color: #8a94a8;'
  );
})();
