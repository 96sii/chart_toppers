
import {useState, useEffect} from 'react';
import ChartList from '../components/ChartList';
import './ChartListBox.css';


const ChartListBox = () => {

    const [songs, setSongs] = useState({});
    const [loaded, setLoaded] = useState(false);

    const getSongs = () => {
        console.log('Getting song information');
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(result => result.json())
        .then(data => setSongs(data))
        .then(() => setLoaded(true));
    }

    useEffect(() => {
        getSongs()
    }, [])

    return (
        <div className="ChartBox">
            <h1>UK Top 20</h1>
            <hr></hr>
            <ChartList 
                songs={songs}
                loaded={loaded}
            />

        </div>    
    );
}

export default ChartListBox;