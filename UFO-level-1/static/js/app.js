// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
let tbody = d3.select("tbody");
// Select the button
let button = d3.select("#filter-btn");
// // Select the form
let form = d3.select("#form");


data.forEach(ufo =>{
    let row = tbody.append("tr")
    Object.keys(ufo).forEach(column => row.append("td").text(ufo[column]))
    
})
console.log(data);


// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    let inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    let inputValue = d3.select("#datetime").property("value");
    console.log(inputValue);
  
    let filteredData = data.filter(ufo1 => ufo1.datetime === inputValue);
    console.log(filteredData);
    
    // remove any children from tbody
    tbody.html("");

    filteredData.forEach(filter =>{
        let row = tbody.append("tr")
        Object.keys(filter).forEach(column => row.append("td").text(filter[column]))
    })

}

