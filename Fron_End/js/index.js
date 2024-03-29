// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

    //Get nb of rows and cols input
    const rows = $("#inputHeight").val();
    const cols = $("#inputWidth").val();
  
    //the table
    const table = $("#pixelCanvas");
  
    //Reset to the empty tabl, in case one already created
    table.children().remove();
  
    //Make rows
    for (let i = 0; i < rows; i++) {
      table.append("<tr></tr>");
      //Create cols
      for (let j = 0; j < cols; j++) {
        table.children().last().append("<td></td>");
      }
    }
  
    //Listen for cell clicks
    table.on("click", "td", function() {
      //Get color from color picker
      let color = $("input#colorPicker").val();
      //Apply color to cell
      $(this).attr("bgcolor", color);
    });
  }
  
  // Listen for button clicks to trigger makeGrid()
  $("input[type='submit']").click(function(e) {
    e.preventDefault(); //Required to avoid submit and page reload
    makeGrid();
  });