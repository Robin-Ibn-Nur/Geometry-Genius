document.getElementById('rhombus').addEventListener('click', function (e) {
    // get the field element
    serial += 1;
    const titleName = e.target.parentNode.parentNode.parentNode.children[0].innerText;
    const firstInput = e.target.parentNode.parentNode.parentNode.children[2].children[0].children[0].value;
    const secondInput = e.target.parentNode.parentNode.parentNode.children[2].children[1].children[0].value;
    const num = parseFloat(0.5 * firstInput * secondInput);
    const total = num.toFixed(2)
    // passing data to displayData
    displayData(titleName, total)

})