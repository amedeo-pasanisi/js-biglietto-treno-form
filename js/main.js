var btnGenera = document.getElementById("btnGenera");
var btnAnnulla = document.getElementById("btnAnnulla");

btnGenera.addEventListener('click',
    function () {
        var nome = document.getElementById("nome").value;
        var km = document.getElementById("km").value;
        var fasciaEta = document.getElementById("fasciaEta").value;

        var euroAlKm = 0.21;
        var prezzoStandard = km * euroAlKm;
        prezzoStandard = Math.round(prezzoStandard * 100) / 100;

        var scontoMinorenni = 20;
        var prezzoMinorenni = prezzoStandard - ((prezzoStandard * scontoMinorenni) / 100);
        prezzoMinorenni = Math.round(prezzoMinorenni * 100) / 100;

        var scontoOver65 = 40;
        var prezzoOver65 = prezzoStandard - ((prezzoStandard * scontoOver65) / 100);
        prezzoOver65 = Math.round(prezzoOver65 * 100) / 100;

        document.getElementById("nomePasseggero").innerHTML = nome;

        if (fasciaEta == "minorenne") {
            document.getElementById("offerta").innerHTML = "sconto minorenni: -20%";
            document.getElementById("costoBiglietto").innerHTML = "€ " + prezzoMinorenni;
        } else if (fasciaEta == "over-65") {
            document.getElementById("offerta").innerHTML = "sconto over 65: -40%";
            document.getElementById("costoBiglietto").innerHTML = "€ " + prezzoOver65;
        } else {
            document.getElementById("offerta").innerHTML = "Biglietto Standard";
            document.getElementById("costoBiglietto").innerHTML = "€ " + prezzoStandard;
        }

        document.getElementById("carrozza").innerHTML = Math.floor((Math.random() * 10) + 1);
        document.getElementById("codiceCP").innerHTML = Math.floor((Math.random() * 10001) + 90000);

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