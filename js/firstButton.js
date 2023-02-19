document.getElementById('first-button').addEventListener('click', function () {
    // get the field element
    const bField = document.getElementById('b-field');
    const bNumber = bField.value;
    const hField = document.getElementById('h-field');
    const hNumber = hField.value;
    const titleName = document.getElementById('title-name').innerText;
    const total = parseFloat(0.5 * bNumber * hNumber);
    displayData(titleName, total)

})