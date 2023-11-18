var dato = document.getElementById('dato');

dato.addEventListener('focus', function(){
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
})

function Palindromo() {
    var dato = document.getElementById('dato').value;
    var resultado = document.getElementById('resultado');
    var spanB = '<hr><span class="v">';
    var spanR = '<hr><span class="r">';
    var mensaje = '';
    var original, sinsp;
    var m_original, m_alreves, m_sinsp;

    original = dato.toLowerCase(dato);    // Original en minusculas
    sinsp = original.replace(/ /g,'');    // En minúsculas y sin espacios

    m_original = sinsp.split('');         // como array al derecho
    m_alreves  = sinsp.split('');         
    m_alreves.reverse();                 // como array al revés

    if (isNaN(dato) == false || dato == '') {
        mensaje = '¡¡ ERROR !!';
    } else {
        mensaje  = 'Original: ' + m_original + '<br>';
        mensaje += 'Al revés: ' + m_alreves;
        if ( m_original.toString() == m_alreves.toString() ) {     // comparamos strings
            mensaje += spanB + 'Es un Palíndromo' + '';
        } else {
            mensaje += spanR + 'NO es un Palíndromo' +'</span>';
        }
    }
    resultado.innerHTML = mensaje;
}

