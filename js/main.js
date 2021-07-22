var btnGenera = document.getElementById("btnGenera");
var btnAnnulla = document.getElementById("btnAnnulla");

btnGenera.addEventListener('click',
    function () {
        var nome = document.getElementById("nome").value;
        var km = document.getElementById("km").value;
        var fasciaEta = document.getElementById("fasciaEta").value;

        var biglietto = document.getElementById("biglietto");
        biglietto.style.display = "block";
    }
)

btnAnnulla.addEventListener('click',
    function () {
        document.getElementById("nome").value = "";
        document.getElementById("km").value = "";
        document.getElementById("fasciaEta").value = "";

        var biglietto = document.getElementById("biglietto");
        biglietto.style.display = "none";
    }
)