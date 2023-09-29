var userIDInput = document.getElementById('userID');
var postNumberInput = document.getElementById('postNumber');
var emailInput = document.getElementById('email');
var nameInput = document.getElementById('name');
var addressInput = document.getElementById('address');

submitBtn = document.getElementById('submit');

submitBtn.onclick = function () {
    var userID = userIDInput.value;
    var postNumber = postNumberInput.value;
    var email = emailInput.value;
    var name = nameInput.value;
    var address = addressInput.value;
    const checkbox1 = document.getElementById('suomi');
        const checkbox2 = document.getElementById('other');
    if (userID.length < 6) {
        alert('Käyttäjä ID pitää olla vähintään 6 merkkiä pitkä');
        return;
    }
    if (postNumber.length != 5){
        alert('Postinumerossa pitää olla 5 numeroa');
        return;
    }
    if (!checkbox1.checked && !checkbox2.checked) {
        alert('Valitse vähintään yksi vaihtoehto kielistä');
        return;
    }
    if (name.length === 0){
        alert('Nimi puuttuu!');
        return;
    }
    if (address.length === 0){
        alert('Osoite puuttuu!');
        return;
    }
    alert('Lomake on lähetetty!')
    // send payload to server
}