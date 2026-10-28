//
// gestione dell'evento 'DOMContentLoaded' per assicurarsi che il 
// DOM sia completamente caricato prima di eseguire il codice
//
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('calc2_button')  

    btn.addEventListener('click', function() {
        const N1 = document.getElementById('input1').value
        const N2 = document.getElementById('input2').value
        //
        // reindirizza a '/calcola2' con i parametri num1 e num2 dentro la querystring
        window.location.replace(`/calcola2?num1=${N1}&num2=${N2}`);
    })



    //
    //------------ VERSIONE CON ELABORAZIONE LATO CLIENT ---------------- 
    //
    /*
    btn.addEventListener( 'click', function() {
        const risultato = document.getElementById('result')
        const N1 = parseFloat(document.getElementById('input1').value)
        const N2 = parseFloat(document.getElementById('input2').value)
        const somma = N1 + N2
        risultato.textContent = "Risultato (lato client): " + somma
    } )

    */

})

