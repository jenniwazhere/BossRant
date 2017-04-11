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

    var newDivCenter = document.createElement('div');
    var newDiv = document.createElement('div');
    var startQuote = document.createElement('i');
    var endQuote = document.createElement('i');
    var divText = document.createElement('text');
    var form = document.createElement("form");
    var button = document.createElement("button");
    var span = document.createElement("span");
    var linebreak1 = document.createElement('br')
    var linebreak2 = document.createElement('br')
    var buttondiv = document.createElement("div");

    newDivCenter.className = 'row text-center my-rant';
    newDiv.className = 'col-12 text-center';
    startQuote.className = 'fa fa-quote-left text-primary fa-3x';
    startQuote.ariaHidden = 'true';
    endQuote.className = 'fa fa-quote-right text-primary fa-3x';
    endQuote.ariaHidden = 'true';
    divText.innerHTML = result[i].text;
    divText.className = 'rant-text';
    span.className = "count";
    span.innerHTML = '0';
    buttondiv.className = "likeBtn";
    button.innerHTML = "like";

    newDiv.appendChild(startQuote);
    newDiv.appendChild(divText);
    newDiv.appendChild(endQuote);
    buttondiv.appendChild(button);
    buttondiv.appendChild(span);
    newDiv.appendChild(buttondiv);
    newDivCenter.appendChild(newDiv);
    $('#feedrants > .container').append(newDivCenter);
    $('#feedrants > .container').append(linebreak1);
    $('#feedrants > .container').append(linebreak2);

    /* OLD VERSION THAT STORED IN A TABLE
    var row = table.insertRow(i);
    var newCell = row.insertCell(0);
    newCell.innerHTML = result[i].text;
    $("#rants tbody").append(row);
    */

  }
}

(function(window){
  horizon('rants').order("time", "descending").findAll({type: "rant"}).watch().subscribe(
  result => populatePosts(result),
  error => console.error(error),
  () => console.log("Results fetched")
)

})(window)
