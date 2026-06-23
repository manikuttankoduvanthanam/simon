
let recordingTimer,seconds=0,isPlaying=false;
function startRecording(){
voiceIdle.classList.add('hidden');
voiceRecording.classList.remove('hidden');
seconds=0;
recordingTimer=setInterval(()=>{
seconds++;
recordTimer.textContent=String(Math.floor(seconds/60)).padStart(2,'0')+':'+String(seconds%60).padStart(2,'0');
},1000);
}
function stopRecording(){
clearInterval(recordingTimer);
voiceRecording.classList.add('hidden');
voicePlayback.classList.remove('hidden');
elapsedTime.textContent=recordTimer.textContent;
}
function deleteRecording(){voicePlayback.classList.add('hidden');voiceIdle.classList.remove('hidden');}
function reRecord(){voicePlayback.classList.add('hidden');startRecording();}
function togglePlayback(){isPlaying=!isPlaying;playIcon.textContent=isPlaying?'⏸':'▶';}
