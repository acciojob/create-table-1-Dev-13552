function insert_Row() {
    //Write your code here
	let table = document.querySelector("#sampleTable")
	// let row = document.createElement("tr")
	// row.innerHTML = `<td>New Cell1</td>
	// 				<td>New Cell2</td>`

	// table.insertAdjacentElement('afterbegin', row); 

	  let newRow = table.insertRow(0);

  // insert two cells
  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);

  // set values
  cell1.innerHTML = "New Cell1";
  cell2.innerHTML = "New Cell2";
  
}
