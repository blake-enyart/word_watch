import $ from 'jquery'

$(document).ready(() => {
  $.ajax('http://localhost:3000/api/v1/top_word')
  .done((res) => {
    $('.top-word > h3').append(Object.keys(res.word)[0])
    $('.word-count').append("<h3>".concat(Object.values(res.word)[0],"</h3>"))
  })
})
