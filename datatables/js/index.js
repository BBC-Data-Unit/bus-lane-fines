// In settings above we already import jQuery and DataTables IN THAT ORDER

$(document).ready(function(){
  $('#myTable').DataTable();
}); //document ready ensures it doesn't run until all elements are loaded and ready to be selected etc.