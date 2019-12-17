import $ from 'jquery'

$(document).ready(() => {
  $.get('https://wordwatch-api.herokuapp.com/api/v1/top_word', function(data) {
    document.querySelector('#top_word').innerHTML = JSON.stringify(data.word)
  });


  document.getElementById('button').addEventListener('click', function(e) {
    e.preventDefault();
    var something = document.getElementById("text").value;
    var details = `{ "word": { "value": "${something}" } }`;
    // var details = `{ "word": { "value": "${something}" } }`;
    console.log(details)
    $.post('https://wordwatch-api.herokuapp.com/api/v1/words', JSON.parse(details), function(data) {
      console.log(data)
        // document.querySelector('#top_word').innerHTML = JSON.stringify(data.word)
    })
  })
})
