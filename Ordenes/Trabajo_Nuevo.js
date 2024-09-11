$(document).ready(function(){
    $('.dropdown-submenu a.test').on("click", function(e){
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });

    $('.dropdown-submenu a').on('click', function(e) {
        e.preventDefault();
        const message = $(this).data('message');
        $('#message').text(message);
    });
});

/**test */

document.querySelectorAll('.dropdown-submenu input[type="checkbox"]').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        const checkedCheckboxes = document.querySelectorAll('.dropdown-submenu input[type="checkbox"]:checked');
        const messages = Array.from(checkedCheckboxes).map(cb => cb.getAttribute('data-message'));
        const messageBox = document.getElementById('message-box');
        if (messages.length > 0) {
            messageBox.textContent = messages.join(', ');
        } else {
            messageBox.textContent = 'Ningún checkbox seleccionado.';
        }
    });
});