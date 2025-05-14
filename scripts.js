document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggles = document.querySelectorAll(".dropbtn");

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener("touchstart", function (e) {
            const parent = this.parentElement;
            const isOpen = parent.classList.contains("open");

            if (!isOpen) {
                e.preventDefault();
                parent.classList.add("open");

                // Close other dropdowns
                dropdownToggles.forEach(other => {
                    if (other !== toggle) {
                        other.parentElement.classList.remove("open");
                    }
                });
            }
        });

        // Close dropdown if clicked outside
        document.addEventListener("click", function (e) {
            if (!toggle.parentElement.contains(e.target)) {
                toggle.parentElement.classList.remove("open");
            }
        });
    });
});
