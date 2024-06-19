$(document).ready(function() {
    $('#analizar-btn').click(function() {
      let numerosStr = $('#numeros').val().split(',');
  
      let numeros = numerosStr.map(function(num) {
        return parseInt(num.trim());
      }).filter(function(num) {
        return !isNaN(num);
      });
  
      if (numeros.length > 10) {
        $('#alerta').removeClass('d-none');
        return;
      } else {
        $('#alerta').addClass('d-none');
      }
  
      //contadores
      let positivos = 0;
      let negativos = 0;
      let ceros = 0;
  
      // Recorrer el array y contar 
      $.each(numeros, function(index, valor) {
        if (valor > 0) {
          positivos++;
        } else if (valor < 0) {
          negativos++;
        } else {
          ceros++;
        }
      });
  
      // Mostrar resultados
      $('#resultados').html(`
        <p>Números positivos: ${positivos}</p>
        <p>Números negativos: ${negativos}</p>
        <p>Números iguales a cero: ${ceros}</p>
      `);
    });
  });
  