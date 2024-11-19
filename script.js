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
        rootMargin: "40% 0px",
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


function openVideo(videoUrl) {
    const modals = document.querySelectorAll('.video-modal');
    modals.forEach(modal => {
        modal.style.display = 'none'; 
    });

    const modal = document.getElementById("video-modal");
    modal.style.display = 'flex';
    modal.classList.add('show');


    const videoPlayer = document.getElementById('video-player');
    const videoSource = document.getElementById('video-source');

    if (videoUrl === 'assets/images/ai/screen1.mp4') {
        videoPlayer.style.paddingLeft = '25%';
        videoPlayer.style.width = '400px';
    } else {
        videoPlayer.style.paddingLeft = '0%';
        videoPlayer.style.width = '800px'; 
    }
    
    videoSource.src = videoUrl;
    videoPlayer.load();

    document.body.classList.add('modal-open');
}


function closeVideo() {
    const modal = document.getElementById("video-modal");
    modal.classList.remove('show');
    
    setTimeout(() => {
        modal.style.display = 'none'; 
    }, 500);  

    document.body.classList.remove('modal-open');
}



window.onclick = function(event) {
    const modal = document.getElementById("video-modal");
    if (event.target === modal) {
        modal.style.display = "none"; 
    }
};


window.onscroll = function() {
    const modal = document.getElementById("video-modal");
    modal.style.display = "none"; 
};

closeVideo();



let currentImageIndex = 1; // Start with the first image
let totalImages = 0; // Total images in the folder
let folderName = ''; // Folder name for dynamic path

// Open Carousel
function openCarousel(folder, count) {
    folderName = folder;
    totalImages = count;

    // Show the modal
    const modal = document.getElementById('carousel-modal');
    modal.style.display = 'flex';

    // Show the first image
    currentImageIndex = 1;
    updateCarouselImage();
}

// Close Carousel
function closeCarousel() {
    closeVideo();
    const modal = document.getElementById('carousel-modal');
    modal.style.display = 'none';
}

// Update Carousel Image
function updateCarouselImage() {
    const imageElement = document.getElementById('carousel-image');
    imageElement.src = `assets/images/${folderName}/screen${currentImageIndex}.png`;
}

// Show Previous Image
function previousImage() {
    if (currentImageIndex > 1) {
        currentImageIndex--;
    } else {
        currentImageIndex = totalImages; // Loop to the last image
    }
    updateCarouselImage();
}

// Show Next Image
function nextImage() {
    if (currentImageIndex < totalImages) {
        currentImageIndex++;
    } else {
        currentImageIndex = 1; // Loop to the first image
    }
    updateCarouselImage();
}




