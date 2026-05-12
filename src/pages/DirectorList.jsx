import { Link , useOutletContext } from 'react-router-dom';
const DirectorList = () => {
    const directors = useOutletContext()

    const displayDirectors = directors.map(d => (
        <li><a>{d.name}</a></li>
    ))

    return (
        <ul>
            {displayDirectors}
        </ul>
    );
}

export default DirectorList;
