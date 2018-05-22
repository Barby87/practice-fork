window.onload = function() {
    var btn = document.getElementById('buttonchange');
    var txt = document.getElementById('paragraph');
    var btnDos = document.getElementById('magic');
    var txtDos = document.getElementById('');

    btn.addEventListener('click', function() {
        txt.innerHTML = '<h2>Git y Github TE AMAMOS</h2>';
    })

    btnDos.addEventListener('click', function() {
        //txtDos.innerHTML = '';
        txtDos.classList.add('dissapear');
    }
    })
}