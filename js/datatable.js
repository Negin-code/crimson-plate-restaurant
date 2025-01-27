// DataTables Initialization
$(document).ready(function () {
  //Ensures the code executes only after the DOM (HTML document) has fully loaded.Prevents errors by waiting for the table element (#menuTable) to be fully available in the DOM.
  // $("#menuTable").DataTable(); 
  $('#menuTable').DataTable({
    "paging": true,
    "searching": true,
    "info": true,
    "lengthChange": false,
    "pageLength": 10,
    "order": [[0, 'asc']],
    "columnDefs": [
      { "orderable": true, "targets": 0 },
      { "orderable": true, "targets": 1 },
      { "orderable": true, "targets": 2 }
    ]
  });
});
