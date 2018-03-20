
$('#form').submit(function(e) {
  e.preventDefault();
  let srch = $('#srch').val();
  console.log(srch);
  getData(srch);
});

   

function getData(x) {
  $.ajax({
    url: `https://en.wikipedia.org/w/api.php?action=opensearch&search=${x}&limit=max&format=json&callback=?`,
    dataType: 'json',
    type: 'GET',
    success: function(data) {
      console.log(data);

      let landingDiv = document.querySelector('#landing');
      while (landingDiv.firstChild) {
        landingDiv.removeChild(landingDiv.firstChild);
      } 

      for (let i = 0; i < data[1].length; i++) {
        let linkDiv = document.createElement('div');
        linkDiv.setAttribute('id', 'linkDiv');
        landingDiv.appendChild(linkDiv);

        
        let link = document.createElement('a');
        link.setAttribute('target', 'blank');
        link.href = data[3][i];
        link.textContent = data[1][i];
        linkDiv.appendChild(link);


        let descDiv = document.createElement('div');
        descDiv.setAttribute('id', 'descDiv');
        let desc = document.createTextNode(data[2][i]);


        descDiv.appendChild(desc);
        linkDiv.appendChild(descDiv);

      }
    }
  });
}




