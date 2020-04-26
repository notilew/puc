window.addEventListener('load', function () {
  document.querySelector('main section p button').addEventListener('click', function () {
    const xhr = new XMLHttpRequest();
    
    xhr.open('get', 'produtos.json', true);
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        let linhas = '';
        const parse = JSON.parse(xhr.responseText);
        
        for (const produto of parse['produtos']) {
          linhas += `<tr>`;
          linhas += `<td>${produto['codigo']}</td>`;
          linhas += `<td>${produto['descricao']}</td>`;
          linhas += `<td>${produto['preco'].toFixed(2).replace('.', ',')}</td>`;
          linhas += `</tr>`;
        }
        
        document.querySelector('main section table tbody').innerHTML = linhas;
      }
    }
  });
});
