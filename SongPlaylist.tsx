import React, { useState } from 'react';

const SongPlaylist:React.FC = ()=> {
    const [song, setSong] = useState<string[]>([]);

    const addItem = (item: string) =>{
        setSong([...song, item]);
    }

    const deleteItem = (index: number) => {
        const updateSong = song.filter((_,i ) => i !== index);
        setSong(updateSong);
    }
return(
    <div>
        <h2>Song Playlist</h2>
        <button onClick={()=> addItem('Mai nikla gaddi laka')} style={{color: 'black', margin: '10px'}}>Add Mai Nikla Gaddi Laka</button>
        <button onClick={()=> addItem('chota- chota bhaiyo k bada bhaiya')} style={{color: 'red', margin:  '10px'}}>Add Chota-Chota Bhaiyo k Bada Bhaiyo</button>
        <button onClick={()=> addItem('teri ishq ma bul gayi sansar mannu')} style={{color: 'Blue', margin: '10px'}}>Add Tera Ishq Ma Bhul Gayi Sansar Manu</button>
      <ul>
        {song.map((item, index) => (
            <li key={index}>
                {item}<button onClick={() => deleteItem(index)}></button>
            </li>
            
        ))}
      </ul>
    </div>
)
}

export default SongPlaylist;