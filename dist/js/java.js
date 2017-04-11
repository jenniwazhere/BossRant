function incrementValueRough() {
    var value = parseInt(document.getElementById('numberA').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('numberA').value = value;
}

function incrementValueDisserve() {
    var value = parseInt(document.getElementById('numberD').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('numberD').value = value;
}

$(".likeBtn button").on("click", function() {
  var count = $(this).parent().find('.count').innerHTML;
  console.log("inclickfunction");
  $count.innerHTML($count.innerHTML() * 1 + 1);
  $(this).parent().find('.count').innerHTML = count;
  console.log(count);

});
