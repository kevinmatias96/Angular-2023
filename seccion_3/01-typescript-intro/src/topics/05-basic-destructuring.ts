
interface AudioPlayer{
    audioVolume: number;
    songDuration:number;
    song: string;
    detail: Details;
}

interface Details {
    author: string;
    year: number
}


const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    detail: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

const song = 'New Song';

const { song: anotherSong, songDuration: duration, detail } = audioPlayer;
const { author } = detail;

// console.log('Song: ', song);
// console.log('Duration: ', duration);
// console.log('Author: ', author);

const [p1, p2, trunks]: string [] = ['Goku', 'Vegeta', 'Trunks']

console.log('Personaje 3: ', trunks);


export{}