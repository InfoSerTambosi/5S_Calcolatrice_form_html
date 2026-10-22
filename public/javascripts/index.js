//
// gestione dell'evento 'DOMContentLoaded' per assicurarsi che il 
// DOM sia completamente caricato prima di eseguire il codice
//
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('addButton')  

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
    
    //
    //------------------- VERSIONE CON ASYNC/AWAIT ---------------- 
    //
    
    btn.addEventListener('click', async function() {
        const N1 = parseFloat(document.getElementById('input1').value);
        const N2 = parseFloat(document.getElementById('input2').value);
        const data_obj = { num1: N1, num2: N2 }
        const params = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( data_obj )    // trasforma data_obj in una stringa 
                                                // JSON per inviarlo al server
        }

        try {
            // invio una richiesta http POST al server e attendo la risposta
            const response = await fetch('/calcola', params);
            const R = await response.json();
            const tag_p = document.getElementById('result');
            tag_p.innerHTML = "<b>Operazione: " + R.op + ", Risultato: " + R.result + "</b>";
            
            //const risultato = await response.text();
            //document.getElementById('result').innerHTML = "<b>" + risultato + "</b>";
        } 
        catch( error ){
            console.error('Errore:', error);
        }
    } );

    //
    // ----------- VERSIONE CON fetch() .then() .then()... ----------------
    //
    /*
    btn.addEventListener( 'click', function() {
        const N1 = parseFloat(document.getElementById('input1').value)
        const N2 = parseFloat(document.getElementById('input2').value)
        // invio il POST al server
        const params = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ num1: N1, num2: N2 })
        }
        fetch('/calcola', params )
            .then(response => response.text())  // restituisce il body della risposta come testo
            .then(risultato => {
                // Aggiorna il contenuto della pagina con il risultato
                document.getElementById('result').innerHTML = risultato;
            })
            .catch(error => console.error('Errore:', error));
    })
    */  
})

