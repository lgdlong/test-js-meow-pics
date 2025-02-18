function upDate(previewPic) {
    console.log("Event triggered!"); // Step 1: Check if function runs
    console.log("Image source:", previewPic.src); // Step 2: Log src
    console.log("Image alt text:", previewPic.alt); // Step 2: Log alt
    
    // Step 4: Change text inside the div
    document.getElementById("image").innerText = previewPic.alt;

    // Step 5: Change the src of the image
    previewPic.dataset.originalSrc = previewPic.src; // Store original src
    previewPic.src = './assets/alt-pic.jpg';
}

function unDo(previewPic) {
    // Revert the src of the image
    previewPic.src = previewPic.dataset.originalSrc;
}
