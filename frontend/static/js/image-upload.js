document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("file");
    const footerText = document.querySelector(".image-uploader-container .footer p");
    const header = document.querySelector(".image-uploader-container .header");
    const svgIcon = header.querySelector(".image-uploader-container svg");
    const headerText = header.querySelector(".image-uploader-container p");

    fileInput.addEventListener("change", function (event) {
        const file = event.target.files[0];

        if (file) {
            // Display the file name in the footer
            footerText.textContent = file.name;

            // Preview the image in the header
            const reader = new FileReader();
            reader.onload = function (e) {
                // Remove the SVG icon and text
                if (svgIcon) svgIcon.style.display = "none";
                if (headerText) headerText.style.display = "none";

                // Create or update the image preview
                let imagePreview = header.querySelector("img");
                if (!imagePreview) {
                    imagePreview = document.createElement("img");
                    imagePreview.style.maxHeight = "100%";
                    imagePreview.style.maxWidth = "100%";
                    imagePreview.style.objectFit = "contain";
                    header.appendChild(imagePreview);
                }
                imagePreview.src = e.target.result;
            };
            reader.readAsDataURL(file);
        } else {
            // Reset to default state if no file is selected
            footerText.textContent = "Not selected file";

            // Restore the SVG icon and text
            if (svgIcon) svgIcon.style.display = "block";
            if (headerText) headerText.style.display = "block";

            // Remove the image preview if it exists
            const imagePreview = header.querySelector("img");
            if (imagePreview) {
                header.removeChild(imagePreview);
            }
        }
    });
});