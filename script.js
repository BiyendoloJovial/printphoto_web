document.getElementById('deletionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const reason = document.getElementById('reason').value;

    const emailBody = `
        Nom: ${name}\n
        Email: ${email}\n
        Raison de la demande: ${reason}
    `;

    window.location.href = `mailto:printphoto.db@gmail.com?subject=Demande de Suppression de Données Personnelles&body=${encodeURIComponent(emailBody)}`;
});
