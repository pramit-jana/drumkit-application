window.addEventListener('keydown',function(e){
    const key=this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
      key.classList.add('playing');
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();

    this.setTimeout(function(){
      key.classList.remove("playing")

    },0600)
})