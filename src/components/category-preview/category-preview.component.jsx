import ProductCard from '../product-card/product-card.component.jsx';
import { useNavigate } from 'react-router-dom';
import {CategoryPreviewContainer, Title, Preview} from './category-preview.styles.jsx';

const CategoryPreview = ({title, products})=>{
    const navigate = useNavigate();
    const onTitleClickHandler = ()=>{
        navigate(`${title.toLowerCase()}`);
    }
    return(
        <CategoryPreviewContainer>
            <h2>
                <Title onClick={onTitleClickHandler}>{title.toUpperCase()}</Title>
            </h2>
            <Preview>
                {
                    products
                    .filter((_, idx)=> idx < 4)
                    .map((product) =>
                    <ProductCard key={product.id} product={product} />)
                }
            </Preview>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview;