
document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project");

    projects.forEach(function (project) {
        project.addEventListener("mouseenter", function () {
            project.style.transform = "translateY(-5px)";
            project.style.transition = "0.3s ease";
            project.style.boxShadow = "0 8px 18px rgba(0, 0, 0, 0.12)";
        });

        project.addEventListener("mouseleave", function () {
            project.style.transform = "translateY(0)";
            project.style.boxShadow = "none";
        });
    });

    console.log("Portfolio website loaded successfully!");
});
