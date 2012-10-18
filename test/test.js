/*
 * The code for the external Javascript file called from $.ajax() (url: "../../../js/get3.js")
 * is shown below.
 */
$(function(){
  var someText = 'Special users only. ';
  $('#div3').append('Message from test.js: ' + someText + '');
});