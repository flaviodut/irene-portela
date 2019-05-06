(function () {

  function hideLoading() {
    document.querySelector('#loading').style.display = 'none';
  }

  function initDataTable() {
    var dataTable_ptBR = {
      "sEmptyTable": "Nenhum registro encontrado",
      "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
      "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
      "sInfoFiltered": "(Filtrados de _MAX_ registros)",
      "sInfoPostFix": "",
      "sInfoThousands": ".",
      "sLengthMenu": "_MENU_ resultados por página",
      "sLoadingRecords": "Carregando...",
      "sProcessing": "Processando...",
      "sZeroRecords": "Nenhum registro encontrado",
      "sSearch": "Pesquisar",
      "oPaginate": {
        "sNext": "Próximo",
        "sPrevious": "Anterior",
        "sFirst": "Primeiro",
        "sLast": "Último"
      },
      "oAria": {
        "sSortAscending": ": Ordenar colunas de forma ascendente",
        "sSortDescending": ": Ordenar colunas de forma descendente"
      }
    };

    $('#spreadsheet').DataTable({
      columnDefs: [{ width: "20%", targets: 6 }],
      fixedHeader: { header: true, headerOffset: 50 },
      language: dataTable_ptBR,
      paging: true,
      pageLength: 50,
      responsive: true,
    });

    hideLoading();
  }

  initDataTable();
})();
