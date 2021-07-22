var btnGenera = document.getElementById("btnGenera");
var btnAnnulla = document.getElementById("btnAnnulla");

btnGenera.addEventListener('click',
    function () {
        var nome = document.getElementById("nome").value;
        var km = document.getElementById("km").value;
        var fasciaEta = document.getElementById("fasciaEta").value;
        
        var nomePasseggero = document.getElementById("nomePasseggero");
        var offerta = document.getElementById("offerta");
        var costoBiglietto = document.getElementById("costoBiglietto");
        var carrozza = document.getElementById("carrozza");
        var codiceCP = document.getElementById("codiceCP");

        var euroAlKm = 0.21;
        var prezzoStandard = km * euroAlKm;
        prezzoStandard = Math.round(prezzoStandard * 100) / 100;

        var scontoMinorenni = 20;
        var prezzoMinorenni = prezzoStandard - ((prezzoStandard * scontoMinorenni) / 100);
        prezzoMinorenni = Math.round(prezzoMinorenni * 100) / 100;

        var scontoOver65 = 40;
        var prezzoOver65 = prezzoStandard - ((prezzoStandard * scontoOver65) / 100);
        prezzoOver65 = Math.round(prezzoOver65 * 100) / 100;

        nomePasseggero.innerHTML = nome;

        if (fasciaEta == "minorenne") {
            offerta.innerHTML = "sconto minorenni: -20%";
            costoBiglietto.innerHTML = "€ " + prezzoMinorenni;
        } else if (fasciaEta == "over-65") {
            offerta.innerHTML = "sconto over 65: -40%";
            costoBiglietto.innerHTML = "€ " + prezzoOver65;
        } else {
            offerta.innerHTML = "Biglietto Standard";
            costoBiglietto.innerHTML = "€ " + prezzoStandard;
        }

        carrozza.innerHTML = Math.floor((Math.random() * 10) + 1);
        codiceCP.innerHTML = Math.floor((Math.random() * 10001) + 90000);

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