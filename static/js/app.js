// from data.js
const tableData = data;

// get table references with d3.select()
const tbody = //YOUR_CODE_HERE;

// define a function called buildTable that takes an argument called data
// the job of this function is to parse out the data and create an html table
//YOUR_CODE_HERE
  // clear out any existing data in tbody by setting the .html() to an empty string
  //YOUR_CODE_HERE;

  // Next, loop forEach() dataRow in the data
  // and append a row and cells for each value in the row
  //YOUR_CODE_HERE
    // .append() a table row "tr" to the tbody
    const row = //YOUR_CODE_HERE;

    // Loop through forEach val in the Object.values(dataRow)
    //YOUR_CODE_HERE
      // append each value as a table cell (td)
      let cell = //YOUR_CODE_HERE;
      // set the .text of cell to the val
      //YOUR_CODE_HERE;
  

// define a function handleClick() that takes no arguments
// the job of this function is to 
//YOUR_CODE_HERE 

  // Grab the #datetime value from the filter with d3.select().property()
  const date = //YOUR_CODE_HERE;
  // store the tableData into a local variable called filteredData
  let filteredData = //YOUR_CODE_HERE;

  // Check to see if a date was entered and filter the
  // data using that date.
  //YOUR_CODE_HERE
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    //YOUR_CODE_HERE
  

  // Rebuild the table by calling you buildTable() function and passing in your filteredData variable
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  //YOUR_CODE_HERE;


// Attach an event to listen for the form button #filter-btn to be clicked, it should call your handleClick function
//YOUR_CODE_HERE;

// Build the table with your buildTable function when the page loads
//YOUR_CODE_HERE;
