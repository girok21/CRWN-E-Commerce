import { useNavigate } from 'react-router-dom';

import {BackgroundImage, Body, DirectoryItemContainer} from './directory-item.styles.jsx';

const DirectoryItem = ({category})=>{
    const{ title, imageUrl } = category;
    const navigate = useNavigate();
    const categoryClickHandler = ()=>{
        navigate(`${'/shop/' + title.toLowerCase()}`)
    }
    return(
        <DirectoryItemContainer onClick={categoryClickHandler}>
            <BackgroundImage
                imageUrl = {imageUrl}
                style={{
                    backgroundImage : `url(${imageUrl})`,
                }}
            />
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem;