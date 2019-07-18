import $ from 'jquery'

$(document).ready(() => {
  function topWord() {
    var topWord = 'Top word from Word Watch API:'
    $.ajax('http://localhost:3000/api/v1/top_word')
    .done((res) => {
      $('.top-word > h3').replaceWith("<h3>".concat(topWord.concat(
        Object.keys(res.word)[0]
      ), "</h3>"));

      $('.word-count').replaceWith(
        "<h3>".concat(
          Object.values(res.word)[0],"</h3>"
        )
      )
    });
  };
  topWord();

  $('.text-submission > button').click(() => {
    var wordList = $('.text-submission > textarea').val().split(' ');
    for(var i = 0; i < wordList.length; i++) {
      var body = { "word": { "value": wordList[i] } }
      $.post('http://localhost:3000/api/v1/words', body)
    }
  });
})
