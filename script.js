function insert_Row() {
    //Write your code here
	let table = document.querySelector("#sampleTable")
	let row = document.createElement("tr")
	row.innerHTML = `<td>New Cell1</td>
					<td>New Cell2</td>`

	table.insertAdjacentElement('afterbegin', row); 
  
}
