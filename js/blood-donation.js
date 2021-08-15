// hide-reg-form
document.getElementById("reg-form").style.display = "none";

// handling join us button
document.getElementById("join-us").addEventListener("click", function () {
    document.getElementById("carouselExampleIndicators").style.display = "none";
    document.getElementById("find-donors-section").style.display = "none";
    document.getElementById("reg-form").style.display = "block";
});
