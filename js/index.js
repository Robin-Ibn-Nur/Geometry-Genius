// display data
function displayData(titleName, total) {
    console.log(total)
    
    // if (typeof total !== "number") {
    //     return alert('please')
    // }
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${1}</td>
        <td>${titleName}</td>
        <td>${total}cm<sup>2</sup></td>
        <td>
        <button class="btn btn-xs bg-blue-700 text-[9px] w-100">Convert to m<sup>2</sup></button>
        </td>

      `;
    container.appendChild(tr);

}