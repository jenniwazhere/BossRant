var $ = window.jQuery;
//Create "users" database
const users = horizon('rants');

function populateTop(result) {
  if($('#toprantbox').length>0){
    $('#toprantbox').remove();
  }
  for (var i = 0; i < result.length; i++)
  {
    var newDivCenter = document.createElement('div');
    var newDiv = document.createElement('div');
    var startQuote = document.createElement('i');
    var endQuote = document.createElement('i');
    var divText = document.createElement('text');
    var linebreak1 = document.createElement('br')
    var linebreak2 = document.createElement('br')

    newDivCenter.id= 'toprantbox';
    newDivCenter.className = 'row text-center my-rant';
    newDiv.className = 'col-12 text-center';
    startQuote.className = 'fa fa-quote-left text-primary fa-3x';
    startQuote.ariaHidden = 'true';
    endQuote.className = 'fa fa-quote-right text-primary fa-3x';
    endQuote.ariaHidden = 'true';
    divText.innerHTML = result[i].text;
    divText.className = 'rant-text';

    newDiv.appendChild(startQuote);
    newDiv.appendChild(divText);
    newDiv.appendChild(endQuote);
    newDivCenter.appendChild(newDiv);
    $('#toprants > .container justify-content-center').append(newDivCenter);
    $('#toprants > .container justify-content-center').append(linebreak1);
    $('#toprants > .container justify-content-center').append(linebreak2);

  }
}

(function(window){
  horizon('rants').order("likes", "descending").limit(3).watch().subscribe(
  result => populateTop(result),
  error => console.error(error),
  () => console.log("Results fetched")
)

})(window)
