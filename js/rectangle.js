document.getElementById('second-button').addEventListener('click', function (e) {
    // console.log(e.target.parentNode.parentNode.parentNode.children[2].children[1].children[0].value)
    const titleName = e.target.parentNode.parentNode.parentNode.children[0].innerText;
    const firstInput = e.target.parentNode.parentNode.parentNode.children[2].children[0].children[0].value;
    const secondInput = e.target.parentNode.parentNode.parentNode.children[2].children[1].children[0].value;
    const num = parseFloat(firstInput * secondInput);
    const total = num.toFixed(2)
    displayData(titleName, total)
})