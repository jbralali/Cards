function enableEditing(elementId) {
  var element = document.getElementById(elementId);
  var currentText = element.textContent;

  if (element.getElementsByTagName('input').length > 0) {
    return;
  }

  var isEmail = (elementId === 'email') ? 'type="email"' : 'type="text"';
  var inputHTML = `<input ${isEmail} id="${elementId}Input" value="${currentText.replace('Email: ', '')}" onblur="saveText('${elementId}')">`;

  element.innerHTML = (elementId === 'email') ? 'Email: ' + inputHTML : inputHTML;
}

function saveText(elementId) {
  var inputElement = document.getElementById(elementId + "Input");
  var newText = inputElement.value;

  var element = document.getElementById(elementId);
  element.innerHTML = (elementId === 'email') ? 'Email: ' + newText : newText;
}

function saveAll() {
  var fields = ['generatedName', 'yourTitle', 'email'];
  fields.forEach(function(field) {
    saveText(field);
  });

  // Simulate save to database here
  alert('Data saved (simulated)');
}
