document.addEventListener("DOMContentLoaded", function () {
    const exploreBtn = document.getElementById("exploreBtn");
    const imageGallery = document.getElementById("imageGallery");
    const messageBtn = document.getElementById("messageBtn");
    const messageSection = document.getElementById("messageSection");

    exploreBtn.addEventListener("click", function () {
        document.querySelector(".container").style.display = "none";
        imageGallery.style.display = "block";
        loadImages();
    });

    messageBtn.addEventListener("click", function () {
        imageGallery.style.display = "none";
        messageSection.style.display = "block";
        typeMessage("Happy Birthday, my best friend! 🎉 Wishing you all the happiness, love, and success. You're an amazing person, and I'm so lucky to have you in my life! 💖");
    });
});

function loadImages() {
    const repoOwner = "panda01112000";
    const repoName = "Birthday_wish1";
    const folderPath = "images";
    const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${folderPath}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const imageContainer = document.getElementById('imageContainer');
            imageContainer.innerHTML = "";

            data.forEach((file, index) => {
                if (file.type === "file") {
                    let imgElement = document.createElement('img');
                    imgElement.src = file.download_url;
                    imgElement.classList.add('polaroid');
                    imgElement.style.animation = `fadeIn 1s ease-in-out ${index * 300}ms forwards`;

                    imgElement.onerror = function () { this.style.display = 'none'; };
                    imageContainer.appendChild(imgElement);
                }
            });
        })
        .catch(error => console.error("Error loading images:", error));
}

function typeMessage(text) {
    const messageElement = document.getElementById("typedMessage");
    messageElement.innerHTML = "";
    let index = 0;

    function type() {
        if (index < text.length) {
            messageElement.innerHTML += text[index];
            index++;
            setTimeout(type, 100);
        }
    }
    type();
}
