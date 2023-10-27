// Button painallusten seuranta
lisaa.addEventListener("click", lisaaNimi);
poista.addEventListener("click", poistaNimi);
sorttaa.addEventListener("click", jarjestaLista);
tyhjenna.addEventListener("click", tyhjennaLista);

// Alustus
document.getElementById("nimi").setAttribute("autocomplete", "off"); // Estää pikavalintalistan näkymisen syöttökentän alla
piilotaBoxi(); // Funktio poistaa näytöltä kaverilistalaatikon listan ollessa tyhjä
let nimiLista = [];

// Nimen lisääminen listalle
function lisaaNimi(event) {
    event.preventDefault();
    let nimi = document.getElementById("nimi").value;
    // Tarkista, että syöttökenttään on kirjoitettu jotain
    if (nimi.length < 1) {
            return;
    }
    // Lisää nimi listalle, tyhjennä syöttörivi ja tulosta lista näytölle
    nimiLista.push(nimi);   //console.log(nimiLista)
    tulostaLista();
};

// Nimen poisto listalta
function poistaNimi(event) {
    event.preventDefault();
    let nimi = document.getElementById("nimi").value;

    // Tarkista, että syöttökenttään on kirjoitettu jotain
    if (nimi.length < 1) {
        return;
    }

    // Tarkista onko annettu nimi listalla
    let indeksi = nimiLista.indexOf(nimi);
    if (indeksi == -1) {
        return;
    }

    // Poista nimi listalta
    nimiLista.splice(indeksi, 1);
    tulostaLista();
}

// Listan järjestäminen aakkosjärjestykseen
function jarjestaLista(event) {
    event.preventDefault();
    nimiLista.sort();
    tulostaLista();
}

// Tyhjennä lista, varmistaa confirm -ikkunassa pyynnön
function tyhjennaLista() {
    if (nimiLista.length == 0) {
        return;
    }
    let varmistus = confirm("Haluatko varmasti tyhjentää listan?");
    if (varmistus) {
        nimiLista = [];
        tulostaLista();
    }
}

// Poistaa näytöltä kaverilistalaatikon, jos listalla ei ole nimiä
function piilotaBoxi() {
    document.getElementById("kaverilista").style.display = "none";
}

// Tulostus
function tulostaLista() {
    // Näytä nimilistalaatikko, jos listalla on nimiä
    if (nimiLista.length > 0){
        document.getElementById("kaverilista").style.display = "block";
    } else {
        piilotaBoxi();
    }

    // Tulosta lista näytölle
    let listaElementti = document.getElementById("kaverilista");
    document.getElementById("nimi").value = "";
    listaElementti.innerHTML = "";
    for (let i = 0; i < nimiLista.length; i++) {
        let lista = document.createElement("li");
        lista.textContent = nimiLista[i];
        listaElementti.appendChild(lista);
    }
}
