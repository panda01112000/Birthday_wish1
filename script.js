document.getElementById('exploreBtn').addEventListener('click', function() {
    document.getElementById('landing').style.display = 'none';
    document.getElementById('gallery').style.display = 'block';
    loadImages();
});

document.getElementById('messageBtn').addEventListener('click', function() {
    document.getElementById('gallery').style.display = 'none';
    document.getElementById('messageSection').style.display = 'block';
    typeMessage("Happy Birthday, Bestie! 🎉 You mean the world to me. Wishing you all the happiness! 💖");
});

function typeMessage(text) {
    let i = 0;
    let messageElement = document.getElementById('message');
    messageElement.innerHTML = ""; 

    function typingEffect() {
        if (i < text.length) {
            messageElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typingEffect, 100);
        }
    }

    typingEffect();
}

/* 🖼️ Auto Load All Images */
function loadImages() {
    const imageContainer = document.getElementById('imageContainer');
    const imageList = [  
        "IMG-20230126-WA0006.jpg", "IMG-20231017-WA0016.jpg", "IMG-20231101-WA0031.jpg",  
        "IMG20210815161609.jpg", "IMG20230126180443.jpg", "IMG20231101190935.jpg",  
        "IMG_20240308_184738-01.jpeg", "IMG_20240308_184739.jpg", "IMG_20240308_185227.jpg",  
        "IMG_20240319_123035566.jpg", "IMG_20240809_190759116.jpg", "IMG_20241110_174538989.jpg",  
        "IMG_20241231_173637078.jpg", "IMG_20241231_174120812.jpg"  
    ];

    imageList.forEach(imageName => {
        let imgElement = document.createElement('img');
        imgElement.src = `images/${imageName}`;
        imgElement.classList.add('polaroid');
        imgElement.onerror = function() { this.style.display = 'none'; }; // Hide missing images
        imageContainer.appendChild(imgElement);
    });
}
