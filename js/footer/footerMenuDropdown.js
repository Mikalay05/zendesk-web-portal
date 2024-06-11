document.addEventListener("DOMContentLoaded", function() {
    var headings = document.querySelectorAll(".box-nav-footer h4");
    headings.forEach(function(heading) {
        heading.addEventListener("click", function() {
            var content = this.nextElementSibling;
            content.classList.toggle("show-navs-footer");
        });
    });
});
