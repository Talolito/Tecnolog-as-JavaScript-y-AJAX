function getHeaders() {
    const headerListElement = document.getElementById('headerList');
    
    fetch('URL_DEL_SERVIDOR')
      .then(response => {
        const headers = response.headers;
        let headerContent = '';
        headers.forEach((value, name) => {
          headerContent += `${name}: ${value}\n`;
        });
        headerListElement.textContent = headerContent || 'No se encontraron cabeceras';
      })
      .catch(error => {
        headerListElement.textContent = 'Error al obtener las cabeceras';
      });
  }
  