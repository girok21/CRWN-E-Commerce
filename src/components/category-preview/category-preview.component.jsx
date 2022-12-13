import './category-preview.styles.scss';
import ProductCard from '../product-card/product-card.component.jsx';
import { useNavigate } from 'react-router-dom';

const CategoryPreview = ({title, products})=>{
    const navigate = useNavigate();
    const onTitleClickHandler = ()=>{
        navigate(`${title.toLowerCase()}`);
    }
    return(
        <div className='category-preview-container'>
            <h2>
                <span className='title' onClick={onTitleClickHandler}>{title.toUpperCase()}</span>
            </h2>
            <div className='preview'>
                {
                    products
                    .filter((_, idx)=> idx < 4)
                    .map((product) =>
                    <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
    )
}

export default CategoryPreview;