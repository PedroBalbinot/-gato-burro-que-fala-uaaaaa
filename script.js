let fonteGrande = false; // Estado inicial

function alternarFonte() {
    let texto = document.getElementById("texto");

    if (fonteGrande) {
        texto.style.fontSize = "16px"; // Volta ao tamanho normal
    } else {
        texto.style.fontSize = "24px"; // Aumenta a fonte
    }

    fonteGrande = !fonteGrande; // Alterna o estado
}