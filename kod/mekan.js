
function redirect() {
    // Seçilen şehri al
    var selectedCity = document.getElementById("sehir").value;

    // Yönlendirme yap
    switch (selectedCity) {
        case "istanbul":
            window.location.href = "istmekanfiltre.html";
            break;
        case "ankara":
            window.location.href = "ankara.html";
            break;
        case "izmir":
            window.location.href = "izmir.html";
            break;
        default:
            alert("Geçersiz şehir seçimi!");
    }
}
