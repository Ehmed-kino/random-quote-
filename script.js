function getquote() {
  var http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (http.readyState === 4 && http.status === 200) {
      var jsonObjects = JSON.parse(http.response);
      var ran = Math.floor(Math.random()*jsonObjects.length);
      document.getElementById('pic').innerHTML = "<img class='pics' src=img/" + jsonObjects[ran].shortName + ".jpg>";
      document.getElementById('name').innerHTML = jsonObjects[ran].name;
      document.getElementById('quote').innerHTML = jsonObjects[ran].quote;
    }
  };
  http.open('GET', 'quotes.json', true);
  http.send();
}
