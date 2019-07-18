import $ from 'jquery'

$(document).ready(() => {
  $.ajax('http://localhost:3000/api/v1/top_word')
  .done((res) => {
    $('.top-word > h3').append(Object.keys(res.word)[0])
  })
})
