// display data
let serial = 0;
function displayData(titleName, total) {

    //error message handalling
    if (total <= 0 || isNaN(total)) {
        const container = document.getElementById("table-container");
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td colspan="4" class="text-red-600">please enter any valid number</td>
        `;
        container.appendChild(tr);
        return;
    }

    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${serial}</td>
        <td>${titleName}</td>
        <td>${total}cm<sup>2</sup></td>
        <td>
            <button class="btn btn-xs bg-blue-700 text-[9px] w-100">Convert to m<sup>2</sup></button>
        </td>
    `;
    container.appendChild(tr);

    // add event listener to the conversion button
    const conversionBtn = tr.querySelector("button");
    conversionBtn.addEventListener("click", () => {
        const totalInM2 = total / 10000;
        tr.innerHTML = `
            <td>${serial}</td>
            <td>${titleName}</td>
            <td>${totalInM2}m<sup>2</sup></td>
            <td></td>
        `;
        container.appendChild(tr);
    });
}
