// script.js
function showProjectImages(projectName) {
    const modal = document.getElementById('project-images-modal');
    const gallery = document.getElementById('project-image-gallery');
    gallery.innerHTML = ''; // Clear previous images

    let images = [];
    if (projectName === 'techsolutions') {
        images = ['techsolutions1.jpg', 'techsolutions2.jpg', 'techsolutions3.jpg']; // Replace with your image URLs/filenames
    } else if (projectName === 'flowless') {
        images = ['flowless1.jpg', 'flowless2.jpg']; // Replace with your image URLs/filenames
    } else if (projectName === 'gazaskygeeks') {
        images = ['gazaskygeeks1.jpg', 'gazaskygeeks2.jpg', 'gazaskygeeks3.jpg', 'gazaskygeeks4.jpg']; // Replace with your image URLs/filenames
    } else if (projectName === 'refugeeconnect') {
        images = ['refugeeconnect1.jpg', 'refugeeconnect2.jpg']; // Portfolio project images
    } else if (projectName === 'nakbaarchive') {
        images = ['nakbaarchive1.jpg', 'nakbaarchive2.jpg', 'nakbaarchive3.jpg']; // Portfolio project images
    }

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image; // Assuming images are in the same folder, adjust path if needed
        imgElement.alt = projectName + ' project image';
        gallery.appendChild(imgElement);
    });

    modal.style.display = "block";
}

function closeProjectImages() {
    const modal = document.getElementById('project-images-modal');
    modal.style.display = "none";
}

// Close modal if user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById('project-images-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Smooth scrolling for section links (if you add them - already in previous version)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});