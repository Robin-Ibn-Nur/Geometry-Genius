// display data
function displayData(titleName, total) {
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${1}</td>
    <td>${titleName}</td>
    <td>${total}</td>
    <td>
    <button class="btn btn-xs bg-blue-700 text-[9px] w-100">Convert to m<sup>2</sup></button>
    </td>
    
  `;
    container.appendChild(tr);
}