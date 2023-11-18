// Obtener la URL actual y mostrarla en la página
document.addEventListener('DOMContentLoaded', function() {
    const url = window.location.href;
    const urlDisplay = document.getElementById('urlDisplay');
    urlDisplay.textContent = url;
  
    // Hacer que la URL sea un enlace clickable
    urlDisplay.addEventListener('click', function() {
      window.open(url, '_blank');
    });
  });

//obtener cabeceras
function getHeaders() {
    fetch('URL_DEL_SERVIDOR')
      .then(response => {
        const headers = response.headers;
        const headerList = document.getElementById('headerList');
        let headerContent = '<ul>';
        headers.forEach((value, name) => {
          headerContent += `<li><strong>${name}:</strong> ${value}</li>`;
        });
        headerContent += '</ul>';
        headerList.innerHTML = headerContent;
      })
      .catch(error => {
        document.getElementById('headerList').innerText = 'Error al obtener las cabeceras';
      });
  }

// estado de peticion 
function getHeaders() {
    const statusElement = document.getElementById('status');
    const responseElement = document.getElementById('response');
  
    // Mostrar estado de la petición como 'Cargando...'
    statusElement.textContent = 'Cargando...';
  
    fetch('URL_DEL_SERVIDOR')
      .then(response => {
        // Ocultar mensaje de estado
        statusElement.textContent = '';
  
        if (!response.ok) {
          responseElement.textContent = 'Error en la solicitud';
          throw new Error('Error en la solicitud');
        }
  
        return response.text();
      })
      .then(data => {
        // Mostrar la respuesta obtenida
        responseElement.textContent = data;
      })
      .catch(error => {
        statusElement.textContent = 'Error al realizar la solicitud';
        responseElement.textContent = '';
      });
  }

// estado de codigo

function getResponse() {
  const statusElement = document.getElementById('status');
  const responseElement = document.getElementById('response');
  
  fetch('URL_DEL_SERVIDOR')
    .then(response => {
      statusElement.textContent = `Código de Estado: ${response.status} - ${response.statusText}`;
      return response.text();
    })
    .then(data => {
      responseElement.textContent = `Respuesta del Servidor:\n${data}`;
    })
    .catch(error => {
      statusElement.textContent = 'Error al realizar la solicitud';
      responseElement.textContent = '';
    });
  }
  
  