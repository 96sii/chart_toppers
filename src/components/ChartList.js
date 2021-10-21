import Song from './Song';

const ChartList = ({songs, loaded}) => {

    if(!loaded){
        return (
            <p>Loading...</p>
        )
    }

    const songList = songs.feed.entry.map((song) => {
    

        return (
            <>
                <Song
                    title={song['im:name'].label}
                    artist={song['im:artist'].label}
                    image={song['im:image'][2].label}
                    url={song.link[0].attributes.href}
                    preview={song.link[1].attributes.href}
                    position={songs.feed.entry.indexOf(song)+1}
                />
            </>
        );
    })

    return (
        <ul>
            {songList}
        </ul>
        
    )
}

export default ChartList;