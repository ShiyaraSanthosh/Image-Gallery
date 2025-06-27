const galleryImages = document.querySelectorAll(".gallery_container img");
const fullImageBox = document.getElementById("fullImgBox");
const fullimage = document.getElementById("fullImage");
galleryImages.forEach(function(img){
    img.addEventListener("click", function(){
        fullImageBox.style.display = "flex";
        fullimage.src = img.src;
        fullImageBox.addEventListener("click", function(){
            fullImageBox.style.display = "none";
        });
    });
});

