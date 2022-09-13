if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: 'STAY (With Justin Bieber)',
      artist: 'The Kid LAROI',
      album: 'STAY',
      artwork: [
        { src: 'https://lite-images-i.scdn.co/image/ab67616d0000b27341e31d6ea1d493dd77933ee5' },
      ]
    });

    navigator.mediaSession.setActionHandler('play', function() {
        var song = document.getElementById('song');
        song.play();
    });
    navigator.mediaSession.setActionHandler('pause', function() {
        var song = document.getElementById('song');
        song.pause();
    });
  }

function checkConnection(){
  var notification = document.getElementById('offline_notification');
  if( !(window.navigator.onLine) ){
      notification.style.display = 'block';
  }
}

function notifyOffline(){
  var notification = document.getElementById('offline_notification');
  notification.style.display = 'block';
}
function notifyOnline(){
  var notification = document.getElementById('offline_notification');
  notification.style.display = 'none';
}

function setSalute(){
  let time = new Date().getHours();
  let text;
  if ( time < 12 && time > 3) {
      text = "Good morning";
  }
  else if ( time < 18) {
      text = "Good afternoon";
  }
  else {
      text = "Good evening";
  }
  if( !(window.navigator.onLine) ){
      text = "You're Offline!"
  }
  document.getElementById('salutation').innerHTML=text;
}
function lodeStop() {
  var loader_page=document.getElementById("cover_loader");
  var loader_icon=document.getElementById("icon_loader");
  loader_icon.style.animationName = 'blowup';
  setTimeout(function(){
      loader_page.style.display = 'none';
  }, 500)
  }

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tabs_but");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }


function popUp(){
  const pop=document.getElementById('player_fullscreen');
  var mt=document.getElementsByTagName('meta')[1];
  mt.content='#243843';
  var lyrics = document.getElementById('lyrics');
  pop.style.display='block';
  pop.style.animationName='popup';
  
  lyrics.focus();
}
function popDown(){
  const pop=document.getElementById('player_fullscreen');
  var mt=document.getElementsByTagName('meta')[1];
  mt.content='#000000';
  pop.style.animationName='popdown';
  setTimeout(function(){
      pop.style.display='none';
  } , 250);
}
var activeSong=false;
function checkPlay(){
  var playerP = document.getElementById('playerPlay');
  var playerFP = document.getElementById('playerFullPlay');
  var seekP = document.getElementById('song_seek_player');
  var seekFP = document.getElementById('seek');
  var song = document.getElementById('song');
  if (activeSong == false){
      activeSong = true;
      song.play();
      playerP.className = 'fa fa-pause';
      playerFP.innerHTML = 'pause_circle_filled';
      setInterval(function(){
          var setT=song.currentTime;
          seekP.value=setT;
          seekFP.value=setT;
      },1000);
  }
  else{
      activeSong = false;
      song.pause();
      playerP.className = 'fa fa-play';
      playerFP.innerHTML = 'play_circle_filled'
  }
}
function seekSong(value){
  var song = document.getElementById('song');
  song.currentTime = value;
}

var liked = true;
function checkLiked(){
  var likes = document.getElementsByClassName("likes");
  var slurp = document.getElementById('likePop');
  var pop = document.getElementById('player');
  if (liked == true){
      liked = false;
      for (i = 0; i < likes.length; i++) {
      likes[i].className = 'fa fa-heart-o likes';
      likes[i].style.color = '#fafafa';
    }
      slurp.innerHTML = 'Removed from Liked Songs.';
      slurp.style.display = "block";
      slurp.style.transform = 'translateY(0)';
      pop.style.transform = 'translateY(-13vw)';
      setTimeout(function(){
          slurp.style.transform = 'translateY(150vw)';
          pop.style.transform = 'translateY(0)';
      },2500);                    
  }
  else{
      liked = true;
      for (i = 0; i < likes.length; i++) {
      likes[i].className = 'fa fa-heart likes';
      likes[i].style.color = '#1DB954';
      }
      slurp.innerHTML = 'Added to Liked Songs.';
      slurp.style.display = "block";
      slurp.style.transform = 'translateY(0)';
      pop.style.transform = 'translateY(-13vw)';
      setTimeout(function(){
          slurp.style.transform = 'translateY(150vw)';
          pop.style.transform = 'translateY(0)';
      },2500);
  }
}

function animate_like(button){
  if( liked ){
      animate_name = 'liked';
  }else{
      animate_name = 'disliked';
  }
  button.style.animationName = animate_name;
  setTimeout(function(){
      button.style.animationName = '';
  }, 500);
}

function popShow(){
  var pop = document.getElementById('player');
  setTimeout(function(){
      pop.style.display = "block";
      pop.style.animationName = "upShow";
  },2000)
}


/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

function lyrics(song) { 
  var t=song.currentTime;
  var lyrics = document.getElementById('lyrics');
  var text = document.getElementById('content_lyrics');
  var updateTimer = document.getElementById('currenttime');
  var m,s;
  if(Math.round(t%60) < 10){
      s = '0'+ Math.round(t%60);
  }
  else{
      s = Math.round(t%60);
  }
  m = Math.trunc(t/60);
  updateTimer.innerHTML = m+':'+s;
  text.style.color='#121212';
  if( t < 30.5 ){
      document.getElementById('l0').style.color='#fafafa'}
  else if( t < 33.5 ){
      document.getElementById('l1').style.color='#fafafa'}
  else if( t < 36.5 ){
      document.getElementById('l2').style.color='#fafafa'}
  else if( t < 39.0 ){
      document.getElementById('l3').style.color='#fafafa'}
  else if( t < 42.2 ){
      document.getElementById('l4').style.color='#fafafa'}
  else if( t < 45.2 ){
      document.getElementById('l5').style.color='#fafafa'}
  else if( t < 48.0 ){
      document.getElementById('l6').style.color='#fafafa'}
  else if( t < 50.5 ){
      document.getElementById('l7').style.color='#fafafa'}
  else if( t < 53.5 ){
      document.getElementById('l8').style.color='#fafafa'}
  else if( t < 56.0 ){
      document.getElementById('l9').style.color='#fafafa'}
  else if( t < 58.5 ){
      document.getElementById('l10').style.color='#fafafa'}
  else if( t < 62.0 ){
      document.getElementById('l11').style.color='#fafafa'}
  else if( t < 64.0 ){
      document.getElementById('l12').style.color='#fafafa'}
  else if( t < 67.5 ){
      document.getElementById('l13').style.color='#fafafa'}
  else if( t < 70.4 ){
      document.getElementById('l14').style.color='#fafafa'}
  else if( t < 73.0 ){
      document.getElementById('l15').style.color='#fafafa'}
  else if( t < 75.0 ){
      document.getElementById('l16').style.color='#fafafa'}
  else if( t < 78.0 ){
      document.getElementById('l17').style.color='#fafafa'}
  else if( t < 81.6 ){
      document.getElementById('l18').style.color='#fafafa'}
  else if( t < 84.0 ){
      document.getElementById('l19').style.color='#fafafa'}
  else if( t < 87.0 ){
      document.getElementById('l20').style.color='#fafafa'}
  else if( t < 90.0 ){
      document.getElementById('l21').style.color='#fafafa'}
  else if( t < 93.2 ){
      document.getElementById('l22').style.color='#fafafa'}
  else if( t < 96.0 ){
      document.getElementById('l23').style.color='#fafafa'}
  else if( t < 98.9 ){
      document.getElementById('l24').style.color='#fafafa'}
  else if( t < 101.5 ){
      document.getElementById('l25').style.color='#fafafa'}
  else if( t < 104.3 ){
      document.getElementById('l26').style.color='#fafafa'}
  else if( t < 107.7 ){
      document.getElementById('l27').style.color='#fafafa'}
  else if( t < 109.8 ){
      document.getElementById('l28').style.color='#fafafa'}
  else if( t < 112.3 ){
      document.getElementById('l29').style.color='#fafafa'}
  else if( t < 115.2 ){
      document.getElementById('l30').style.color='#fafafa'}
  else if( t < 118.2 ){
      document.getElementById('l31').style.color='#fafafa'}
  else if( t < 121.3 ){
      document.getElementById('l32').style.color='#fafafa'}
  else if( t < 124.0 ){
      document.getElementById('l33').style.color='#fafafa'}
  else if( t < 126.9 ){
      document.getElementById('l34').style.color='#fafafa'}
  else if( t < 128.5 ){
      document.getElementById('l35').style.color='#fafafa'}
  else if( t < 132.3 ){
      document.getElementById('l36').style.color='#fafafa'}
  else if( t < 135.3 ){
      document.getElementById('l37').style.color='#fafafa'}
  else if( t < 137.8 ){
      document.getElementById('l38').style.color='#fafafa'}
  else if( t < 140.0 ){
      document.getElementById('l39').style.color='#fafafa'}
  else if( t < 148.5 ){
      document.getElementById('l40').style.color='#fafafa'}
  else if( t < 152.0 ){
      document.getElementById('l41').style.color='#fafafa'}
  else if( t < 155.0 ){
      document.getElementById('l42').style.color='#fafafa'}
  else{
      document.getElementById('l43').style.color='#fafafa'}
}

