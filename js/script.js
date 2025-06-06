const translations = {
  en: {
    portfolio: "My Portfolio",
    projects: "Projects",
    blog: "Check out my blog!",
    windowTitle: "My Project",
    windowBody: "This is a placeholder project window. More coming soon!",
    github: "View on GitHub",
  },
  es: {
    portfolio: "Mi Portafolio",
    projects: "Proyectos",
    blog: "¡Visita mi blog!",
    windowTitle: "Mi Proyecto",
    windowBody: "Esta es una ventana de proyecto de ejemplo. ¡Más pronto!",
    github: "Ver en GitHub",
  },
};

let cursorEffect = null;

window.addEventListener("mousemove", (e) => {
  const isOnIcon = e.target.closest && e.target.closest(".icon");

  if (isOnIcon) {
    if (cursorEffect && cursorEffect.destroy) {
      cursorEffect.destroy();
      cursorEffect = null;
    }
  } else {
    if (!cursorEffect) {
      cursorEffect = new cursoreffects.ghostCursor();
    }
  }
});

const clickSound = new Audio("sound/click.mp3");
clickSound.volume = 0.5;

document.addEventListener("click", () => {
  clickSound.currentTime = 0;
  clickSound.play();
});

function openWindow(id) {
  document.getElementById(id).style.display = "block";

  const elementsToHide = [
    ".wordart-header-absolute-center",
    ".marquee-bar",
    ".dancing-alien",
    ".laptop-decoration",
    ".cat-decoration",
    ".dvd-logo",
  ];

  elementsToHide.forEach((selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.style.display = "none";
    }
  });
}

function closeWindow(id) {
  document.getElementById(id).style.display = "none";

  const elementsToShow = [
    ".wordart-header-absolute-center",
    ".marquee-bar",
    ".dancing-alien",
    ".laptop-decoration",
    ".cat-decoration",
    ".dvd-logo",
  ];

  elementsToShow.forEach((selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.style.display = "flex";
    }
  });

  const alien = document.querySelector(".dancing-alien");
  if (alien) {
    alien.style.display = "block";
  }

  const laptop = document.querySelector(".laptop-decoration");
  if (laptop) {
    laptop.style.display = "block";
  }

  const cat = document.querySelector(".cat-decoration");
  if (cat) {
    cat.style.display = "block";
  }

  const dvd = document.querySelector(".dvd-logo");
  if (dvd) {
    dvd.style.display = "block";
  }
}

function openProject(projectId) {
  const projects = {
    blog: {
      name: "Personal Blog",
      description:
        "Personal blog with articles about web development and technology",
      github: "https://github.com/yourusername/blog",
      demo: "blog.php",
    },
  };

  const project = projects[projectId];
  if (project) {
    window.open(project.demo, "_blank");
  }
}

function makeDraggable(windowEl) {
  const titleBar = windowEl.querySelector(".title-bar");
  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  titleBar.addEventListener("mousedown", (e) => {
    isDragging = true;
    const rect = windowEl.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    windowEl.style.zIndex = 1000001;
    document.body.style.userSelect = "none";
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    let newX = e.clientX - offsetX;
    let newY = e.clientY - offsetY;

    const windowRect = windowEl.getBoundingClientRect();
    const windowWidth = windowRect.width;
    const windowHeight = windowRect.height;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const minVisible = 50;
    newX = Math.max(
      minVisible - windowWidth,
      Math.min(newX, viewportWidth - minVisible)
    );
    newY = Math.max(0, Math.min(newY, viewportHeight - minVisible));

    windowEl.style.left = newX + "px";
    windowEl.style.top = newY + "px";
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    windowEl.style.zIndex = 1000000;
    document.body.style.userSelect = "";
  });
}

window.addEventListener("DOMContentLoaded", () => {
  const win = document.getElementById("exampleWindow");
  makeDraggable(win);
});

function setLanguage(lang) {
  document.querySelector(".purple-wordart").textContent =
    translations[lang].portfolio;
  document.querySelector(".rainbow").textContent = translations[lang].projects;
  document.querySelector(".blinking span").textContent =
    translations[lang].blog;
  document.querySelector("#exampleWindow .title").textContent =
    translations[lang].windowTitle;
  document.querySelector("#exampleWindow .window-body p").textContent =
    translations[lang].windowBody;
  document.querySelector("#exampleWindow .window-body a").textContent =
    translations[lang].github;
}

document.getElementById("lang-en").onclick = () => setLanguage("en");
document.getElementById("lang-es").onclick = () => setLanguage("es");

class DVDScreensaver {
  constructor() {
    this.dvd = document.getElementById("dvdLogo");
    this.position = { x: 50, y: 50 };
    this.velocity = { x: 2, y: 2 };

    this.updatePosition();
    this.animate();
  }

  updatePosition() {
    const rect = this.dvd.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.x <= 0 || this.position.x >= windowWidth - rect.width) {
      this.velocity.x = -this.velocity.x;
      this.position.x = Math.max(
        0,
        Math.min(windowWidth - rect.width, this.position.x)
      );
    }

    if (this.position.y <= 0 || this.position.y >= windowHeight - rect.height) {
      this.velocity.y = -this.velocity.y;
      this.position.y = Math.max(
        0,
        Math.min(windowHeight - rect.height, this.position.y)
      );
    }

    this.dvd.style.left = this.position.x + "px";
    this.dvd.style.top = this.position.y + "px";
  }

  animate() {
    this.updatePosition();
    requestAnimationFrame(() => this.animate());
  }
}

window.addEventListener("load", () => {
  new DVDScreensaver();

  const popSound = new Audio("sound/pop.mp3");
  popSound.volume = 0.7;

  const dvdLogo = document.getElementById("dvdLogo");
  dvdLogo.addEventListener("click", (e) => {
    e.stopPropagation();
    popSound.currentTime = 0;
    popSound.play();
  });
});
