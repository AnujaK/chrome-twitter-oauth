function init(){
  var bootSimply = new BootSimply("TWITTER");
  bootSimply.oauthFlow();
  document.querySelector('#greeting').innerText = 'chrome-twitter-oauth sample'; 
}

window.onload = init;
