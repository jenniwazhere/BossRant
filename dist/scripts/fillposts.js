var $ = window.jQuery;
//Create "users" database
const users = horizon('rants');
var GET_DISPLAY_TABLE = "rants";

function populatePosts(result) {
  var table = document.getElementById(GET_DISPLAY_TABLE);
  console.log(result.length);
  for (var i = 0; i < result.length; i++)
  {
    console.log(result[i]);
    var row = table.insertRow(i);
    var newCell = row.insertCell(0);
    newCell.innerHTML = result[i].text;
    $("#rants tbody").append(row);
  }
}

(function(window){
  horizon('rants').order("time", "descending").findAll({type: "rant"}).watch().subscribe(
  result => populatePosts(result),
  error => console.error(error),
  () => console.log("Results fetched")
)

})(window)
