const galleryImages = document.querySelectorAll(".gallery_container img");
const fullImageBox = document.getElementById("fullImgBox");
const fullimage = document.getElementById("fullImage");
const icon = document .getElementById("close");
galleryImages.forEach(function(img){
    img.addEventListener("click", function(){
        fullImageBox.style.display = "flex";
        fullimage.src = img.src;
        icon.onclick = function() {
            fullImageBox.style.display = "none";
        };
        });
    });


