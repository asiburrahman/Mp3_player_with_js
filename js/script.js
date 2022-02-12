 const audio_file= document.querySelector('audio');
 const play = document.getElementById('play');
 const img = document.getElementById('img');
 const title = document.getElementById('title');
 const artist = document.getElementById('artist');
 const backward = document.getElementById('backward');
 const forward = document.getElementById('forward');
 const progress = document.getElementById('progress');
 let current_time= document.getElementById('current_time');
 let total_duration= document.getElementById('total_duration');
 let progress_div = document.getElementById('progress_div');
 let start_song = false;

 const songs =[
    {
        songs_name:"BoyWithUke - Toxic (Lyrics) -all my friends are toxic-.mp3",
        title_name: "Toxic",
        artist_name:"BoyWithUke",
        songs_image: "Britney_Spears_Toxic.png"
    },
    {
       songs_name:"Die For You ft. Grabbitz -- Official Music Video -- VALORANT Champions 2021.mp3",
       title_name: "Die For You",
       artist_name:"ft. Grabbitz",
       songs_image: "download.jpg"
   },
   {
       songs_name:"Jaymes Young - Infinity (Lyrics) - cause i love you for infinity.mp3",
       title_name: "Infinity",
       artist_name:"Jaymes Young",
       songs_image: "hqdefault.jpg"
   },
];




 const audio_file_play=()=>{
    audio_file.play();
    start_song = false;
    play.classList.replace('fa-play', 'fa-pause');
    img.classList.add('anime');


}

const audio_file_pause=()=>{
    audio_file.pause();
    start_song=true;
    play.classList.replace('fa-pause', 'fa-play');
    img.classList.remove("anime");
}

 play.addEventListener('click', ()=>
{
    if (start_song){
        audio_file_play();
    }else
    {
        audio_file_pause();
    }
})
let count=0;

const loadSong =(songs)=> 
{
    title.textContent=songs.title_name;
    artist.textContent=songs.artist_name;
    audio_file.src=`audio/${songs.songs_name}`;
    img.src=`image/${songs.songs_image}`;
    title.setAttribute("style", "white-space: nowrap; overflow: auto;");
    
}


next_song=()=>{
    count=(count+1)%songs.length;
    console.log(count);
    loadSong(songs[count]);
    audio_file_play();
}

previous_song=()=>{
    count=(count-1+songs.length)%songs.length;
    console.log(count);
    loadSong(songs[count]);
    audio_file_play();
}
//Progress js works
audio_file.addEventListener('timeupdate',(Event)=>{
    //  console.log(Event);
    const {currentTime, duration} = Event.srcElement;
 //current_time.innerText=Math.floor(audio_file.duration);
    let duration_percent = (currentTime/duration)*100;
    progress.style.width=`${duration_percent}%`;
    let total_duration_min = Math.floor(duration/60);
    let total_duration_sec = Math.floor(duration%60);
    if (duration) {
        total_duration.textContent = `${total_duration_min}:${total_duration_sec}`;
    }
    
    let total_currentTime_min = Math.floor(currentTime/60);
    let total_currentTime_sec = Math.floor(currentTime%60);
    if (currentTime<10) {
        current_time.textContent = `${total_currentTime_min}:0${total_currentTime_sec}`;
    }else{
        current_time.textContent = `${total_currentTime_min}:${total_currentTime_sec}`;
    }    
    
})
audio_file.addEventListener("ended", next_song);

progress_div.addEventListener('click', (Event)=>{
    const {duration} = audio_file;
    // console.log(duration);
    //console.log(Event.offsetX);
    let move_progress = (Event.offsetX/Event.srcElement.clientWidth)*duration;
    console.log(move_progress);
    audio_file.currentTime = move_progress;
})
forward.addEventListener('click', next_song);
backward.addEventListener('click', previous_song);

