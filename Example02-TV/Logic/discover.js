var listAvaliableServers = [];

function entablishConnection(url) {
  $(location).attr("href", "./example.html?url=" + url);
}

function avaliableServersToDiv(server) {
  listAvaliableServers.push(server);
  var addOptions =
    '<button type="button" id="' +
    (server + 2) +
    '" class="buttonPr" onclick="entablishConnection(\'' +
    server +
    "');\" >" +
    server +
    "</button>";
  console.log(server + "\n");
  var div = document.getElementById("avaliableServers");
  div.innerHTML += addOptions;
}

var Synapse = new window.Synapse(8080);

function finServers() {
  Synapse.findServers(15, 5000, avaliableServersToDiv, null);
}
setTimeout(finServers, 3000);
