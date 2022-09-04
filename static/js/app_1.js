// importing the data from data.js
const tableData = data;
//reference the html table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // clearing table to start
    tbody.html("");
    //intiating forEach loop to iterate through data file
    
    data.forEach((dataRow) => { 
        //finds <tr> (table row) in html code
    let row = tbody.append("tr");
        // loop through data rows
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);

        }
    );
});
}
function handleClick(){
    //grab the datetime from the filter
        let date = d3.select("#datetime").property("value");
        let filteredData = tableData;
// applying a filter method that will match the datetime value to the filtered date value.
if (date){
    //add filter to the data to only keep the rows based on said filter
    filteredData = filteredData.filter(row => row.datetime === date);
};
// rebuild table using filtered data
//if no date is entered, filtered table will be be original tableData

buildTable(filteredData);
};
// attach an event to listen for a button click on the filters for the table

d3.selectAll("#filter-btn").on("click",handleClick);
// build table when the page loads
buildTable(tableData);

