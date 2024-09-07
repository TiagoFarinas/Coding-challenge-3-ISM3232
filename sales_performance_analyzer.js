//Task 1-Create a Function to Calculate Average Sales

function calculateAverageSales(sales_figures){
    if(sales_figures.length ===0) return 0
    var SalesTotal = sales_figures.reduce((acc, curr)=> acc + curr, 0)
    return SalesTotal/sales_figures.length};
    // This function will calculate the average sales for the company

//Task 2-Create a Function to Determine Performance Rating
var averageSales = SalesTotal/sales_figures.length;
function determinePerformanceRating (averageSales){
    if (averageSales>10000) {return "Execellent"}
    else if (averageSales>7000 && averageSales<=1000) {return "Good"}
    else if (averageSales>=4000 && averageSales<7000) {return "Satisfactory"}
    else { return"Needs Improvement"}};
// This function uses a series of if else statements to check in what bracket does the average sales for the company fits in and return a string with its "grade".


