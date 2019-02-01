(function () {
  const planilha = fetch('data/planilha.json');

  planilha
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
    const tableBody = document.querySelector('#table tbody');

    rows.forEach((row) => {
      const tableRow = document.createElement('tr');

      tableRow.innerHTML = `
        <td>${row['Data'] !== '' ? row['Data'] : '-'}</td>
        <td>${row['Publicação'] !== '' ? row['Publicação'] : '-'}</td>
        <td>${row['UF'] !== '' ? row['UF'] : '-'}</td>
        <td>${row['Tipo'] !== '' ? row['Tipo'] : '-'}</td>
        <td>${row['Assunto'] !== '' ? row['Assunto'] : '-'}</td>
        <td>${row['Complemento'] !== '' ? row['Complemento'] : '-'}</td>
        <td>${row['Localização'] !== '' ? locationCombo(row['Localização']) : '-'}</td>
        <td>${row['Recorte'] !== '' ? `<a href="images/highlight/${row['Recorte']}" data-lightbox="${row['Recorte']}">${row['Recorte']}</a>` : '-'}</td>
        <td>${row['Interesse'] !== '' ? row['Interesse'] : '-'}</td>
      `;

      tableBody.append(tableRow);
    })
  }

  function locationCombo(location) {
    if (location.indexOf('Vários:') > -1) {
      const splited = location.split('Vários: ');
      return `<div class="location"><a href="javascript:;" class="location-label">Vários</a><span class="location-addresses">${splited[1]}</span></div>`
    } else {
      return location;
    }
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
    
    $('#table').DataTable({
      fixedHeader: {
        header: true,
        headerOffset: 50,
      },
      language: dataTable_ptBR,
      paging: false,
      responsive: true,
    });
  }
})();
