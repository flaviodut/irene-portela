(function () {
  const catalogo = fetch('data/catalogo.json');

  catalogo
    .then(data => data.json())
    .then(dataJson => {
      feedTable(dataJson);
      initDataTable();
      hideLoading();
    })
    .catch(err => console.error(err))
  
  function hideLoading() {
    document.querySelector('#loading').style.display = 'none';
  }

  function feedTable(rows) {
    const tableReunidos = document.querySelector('#catalogo_reunidos tbody');
    const tableOutros = document.querySelector('#catalogo_outros tbody');

    rows.forEach((row) => {
      const tableRow = document.createElement('tr');

      tableRow.innerHTML = `
        <td>${row['Artista'] !== '' ? row['Artista'] : '-'}</td>
        <td>${row['Disco'] !== '' ? row['Disco'] : '-'}</td>
        <td>${row['Ano'] !== '' ? row['Ano'] : '-'}</td>
        <td>${row['Música'] !== '' ? row['Música'] : '-'}</td>
        <td>${row['Formato'] !== '' ? row['Formato'] : '-'}</td>
        <td>${row['Detalhe'] !== '' ? row['Detalhe'] : '-'}</td>
      `;

      if (row['Comprar'] === 'Comprado')
        tableReunidos.append(tableRow);
      else
        tableOutros.append((tableRow))
    })
  }

  function initDataTable() {
    const dataTable_ptBR = {
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
    
    $('#catalogo_reunidos, #catalogo_outros').DataTable({
      info: false,
      language: dataTable_ptBR,
      paging: false,
      responsive: true,
      searching: false,
      order: [[2, 'asc']]
    });
  }
})();
  