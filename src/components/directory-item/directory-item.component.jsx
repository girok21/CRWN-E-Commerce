import './directory-item.styles.scss';
import { useNavigate } from 'react-router-dom';


const DirectoryItem = ({category})=>{
    const{ title, imageUrl } = category;
    const navigate = useNavigate();
    const categoryClickHandler = ()=>{
        navigate(`${'/shop/' + title.toLowerCase()}`)
    }
    return(
        <div className="directory-item-container" onClick={categoryClickHandler}>
            <div 
                className='background-image' 
                style={{
                    backgroundImage : `url(${imageUrl})`,
                }}
            />
                <div className="body">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default DirectoryItem;