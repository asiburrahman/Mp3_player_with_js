 const audio_file= document.querySelector('audio');
 const play = document.getElementById('play');
 const img = document.getElementById('img');
 const title = document.getElementById('title');
 const artist = document.getElementById('artist');
 const backward = document.getElementById('backward');
 const forward = document.getElementById('forward');
 let start_song = false;

 const songs =[
    {
        songs_name:"BoyWithUke - Toxic (Lyrics) -all my friends are toxic-.mp3",
        title_name: "Toxic",
        artist_name:"BoyWithUke",
        songs_image: "BoyWithUke - Toxic (Lyrics) -all my friends are toxic-"
    },
    {
       songs_name:"Die For You ft. Grabbitz -- Official Music Video -- VALORANT Champions 2021.mp3",
       title_name: "Die For You",
       artist_name:"ft. Grabbitz",
       songs_image: "BoyWithUke - Toxic (Lyrics) -all my friends are toxic-"
   },
   {
       songs_name:"Jaymes Young - Infinity (Lyrics) - cause i love you for infinity.mp3",
       title_name: "Infinity",
       artist_name:"Jaymes Young",
       songs_image: "BoyWithUke - Toxic (Lyrics) -all my friends are toxic-"
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
    img.src=`image/${songs.songs_image}.jpg`;
    title.setAttribute("style", "white-space: nowrap; overflow: auto;");
    
}


next_song=()=>{
    count=(count+1)%songs.length;
    loadSong(songs[count]);
    audio_file_play();
}

forward.addEventListener('click', next_song)

