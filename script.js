let observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("project-show");
            } 
        });
    },
    {
        root: null,
        rootMargin: "-10% 0px",
        threshold: 0
    }
);

let hiddenElements = document.querySelectorAll('.project-hidden');
hiddenElements.forEach(element => {
    observer.observe(element);
});

// =================================================================


observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        root: null,
        rootMargin: "-5% 0px",
        threshold: 0.1
    }
);


hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(element => {
    observer.observe(element);
});


document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
        themeToggle.textContent = '🌞';
    }

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('light-theme')) {
            body.classList.remove('light-theme');
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = '🌙';
        } else {
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = '🌞';
        }
    });
});

document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
});



