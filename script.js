function dropBigFace() {
    const container = document.getElementById("facesContainer");
    const containerOpacity = window.getComputedStyle(container).opacity;
    const bigFace = document.getElementById("bigFace");

    if (containerOpacity === "0") {
        container.style.visibility = "visible";
        container.style.opacity = 1;
        bigFace.className = "bigFaceAnimation";
    }
    else {
        container.style.opacity = "0";
        setTimeout(reset, 600);
        function reset() {
            container.style.visibility = "hidden";
            bigFace.className = "";
            resetGIF("bigFace");
        }
    }

    function resetGIF(id) {
        const gif = document.getElementById(id);
        const imageURL = gif.src;
        gif.src = "";
        gif.src = imageURL;
    }
}



