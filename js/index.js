document.getElementById('first-button').addEventListener('click', function () {
    // get the field element
    const bField = document.getElementById('b-field');
    const bNumber = bField.value;
    const hField = document.getElementById('h-field');
    const hNumber = hField.value;
    const titleElement = document.getElementById('title-name').innerText;
    const total = parseFloat(0.5 * bNumber * hNumber);
    console.log(typeof total)

    displayData(titleElement, total)

})

// display data
function displayData(titleElement, total) {
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${1}</td>
    <td>${titleElement}</td>
    <td>${total}</td>
    <td>
    <button class="btn btn-xs bg-blue-700 text-[9px] w-100">Convert to m<sup>2</sup></button>
    </td>
    
  `;
    container.appendChild(tr);
}