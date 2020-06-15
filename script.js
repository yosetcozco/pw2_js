function query1(name){
  var url = '../web_programming/cgi-bin/actorsName.py?name='+name;
  ajax(url, render)
}
function render(data){
//TODO: how about empty data?
  var table = "<table id='table1'>";
  var row = data[0];
  table += '<tr>';
  for(key in row){
    table += '<th>';
    table += key;
    table += '</th>';
  }
  table += '</tr>';
  for(var i in data){
    table += '<tr>';
    row = data[i];
    for(key in row){
      table += '<td>';
      table += row[key];
      table += '</td>';
    }
    table += '</tr>';
  }
  table += "</table>";
  document.getElementById("answer1").innerHTML = table;
}
function ajax(url, callback){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var cmn_data = this.responseText;
      console.log(cmn_data);
      callback(cmn_data);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}