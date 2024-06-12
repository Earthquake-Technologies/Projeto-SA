var click = false;

// Função que mostra as informações do "Ensino Fundamental I"
function mostrarEFI() {
    let p0 = document.getElementById("p0-alterado-EFI");
    p0.style.display = "none";
    let p1 = document.getElementById("p1-alterado-EFI");
    p1.style.display = "none";
    let infoFundamental1 = document.getElementById("info-efi");
    infoFundamental1.style.display = "block";
    // Desaparecendo as informações do "Ensino Fundamental II"
    let p2 = document.getElementById("p2-alterado-EFII");
    p2.style.display = "";
    let p3 = document.getElementById("p3-alterado-EFII");
    p3.style.display = "";
    let infoFundamental2 = document.getElementById("info-efii");
    infoFundamental2.style.display = "none";
    // Desaparecendo as informações do "Ensino Médio"
    let p4 = document.getElementById("p4-alterado-EM");
    p4.style.display = "";
    let p5 = document.getElementById("p5-alterado-EM");
    p5.style.display = "";
    let infoMedio = document.getElementById("info-em");
    infoMedio.style.display = "none";
}
// Função que mostra as informações do "Ensino Fundamental II"
function mostrarEFII() {
    let p2 = document.getElementById("p2-alterado-EFII");
    p2.style.display = "none";
    let p3 = document.getElementById("p3-alterado-EFII");
    p3.style.display = "none";
    let infoFundamental2 = document.getElementById("info-efii");
    infoFundamental2.style.display = "block";
    // Desaparecendo as informações do "Ensino Fundamental I"
    let p0 = document.getElementById("p0-alterado-EFI");
    p0.style.display = "";
    let p1 = document.getElementById("p1-alterado-EFI");
    p1.style.display = "";
    let infoFundamental1 = document.getElementById("info-efi");
    infoFundamental1.style.display = "none"; 
    // Desaparecendo as informações do "Ensino Médio"
    let p4 = document.getElementById("p4-alterado-EM");
    p4.style.display = "";
    let p5 = document.getElementById("p5-alterado-EM");
    p5.style.display = "";
    let infoMedio = document.getElementById("info-em");
    infoMedio.style.display = "none";
}
// Função que mostra as informações do "Ensino Médio"
function mostrarEM() {
    click = !click;
    
    let p4 = document.getElementById("p4-alterado-EM");
    p4.style.display = "none";
    let p5 = document.getElementById("p5-alterado-EM");
    p5.style.display = "none";
    let infoMedio = document.getElementById("info-em");
    infoMedio.style.display = "block";
    // Desaparecendo as informações do "Ensino Fundamental II"
    let p2 = document.getElementById("p2-alterado-EFII");
    p2.style.display = "";
    let p3 = document.getElementById("p3-alterado-EFII");
    p3.style.display = "";
    let infoFundamental2 = document.getElementById("info-efii");
    infoFundamental2.style.display = "none";
    // Desaparecendo as informações do "Ensino Fundamental I"
    let p0 = document.getElementById("p0-alterado-EFI");
    p0.style.display = "";
    let p1 = document.getElementById("p1-alterado-EFI");
    p1.style.display = "";
    let infoFundamental1 = document.getElementById("info-efi");
    infoFundamental1.style.display = "none"; 
}

function infoTotal() {
    click = !click;
    if (click === true) {
        let p0 = document.getElementById("p0-alterado-EFI");
        p0.style.display = "none";
        let p1 = document.getElementById("p1-alterado-EFI");
        p1.style.display = "none";
        let p2 = document.getElementById("p2-alterado-EFII");
        p2.style.display = "none";
        let p3 = document.getElementById("p3-alterado-EFII");
        p3.style.display = "none";
        let p4 = document.getElementById("p4-alterado-EM");
        p4.style.display = "none";
        let p5 = document.getElementById("p5-alterado-EM");
        p5.style.display = "none";
        let infoFundamental1 = document.getElementById("info-efi");
        infoFundamental1.style.display = "none"; 
        let infoFundamental2 = document.getElementById("info-efii");
        infoFundamental2.style.display = "none";
        let infoMedio = document.getElementById("info-em");
        infoMedio.style.display = "none";
        let infoInterrogacaoEFI = document.getElementById("info-interrogacao-EFI");
        infoInterrogacaoEFI.style.display = "block";
        let infoInterrogacaoEFII = document.getElementById("info-interrogacao-EFII");
        infoInterrogacaoEFII.style.display = "block";
        let infoInterrogacaoEM = document.getElementById("info-interrogacao-EM");
        infoInterrogacaoEM.style.display = "block";
    } else {
        let p0 = document.getElementById("p0-alterado-EFI");
        p0.style.display = "";
        let p1 = document.getElementById("p1-alterado-EFI");
        p1.style.display = "";
        let p2 = document.getElementById("p2-alterado-EFII");
        p2.style.display = "";
        let p3 = document.getElementById("p3-alterado-EFII");
        p3.style.display = "";
        let p4 = document.getElementById("p4-alterado-EM");
        p4.style.display = "";
        let p5 = document.getElementById("p5-alterado-EM");
        p5.style.display = "";
        let infoInterrogacaoEFI = document.getElementById("info-interrogacao-EFI");
        infoInterrogacaoEFI.style.display = "none";
        let infoInterrogacaoEFII = document.getElementById("info-interrogacao-EFII");
        infoInterrogacaoEFII.style.display = "none";
        let infoInterrogacaoEM = document.getElementById("info-interrogacao-EM");
        infoInterrogacaoEM.style.display = "none";
    }
}