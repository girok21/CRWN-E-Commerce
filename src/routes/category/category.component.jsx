import {CategoryName, CategoryContainer} from './category.styles.jsx';
import { useParams } from 'react-router-dom';

import { useContext, useState, useEffect } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';
 

const Category = () =>{
    const {categoriesMap} = useContext(CategoriesContext)
    const {category} = useParams();
    const [products, setProducts] = useState(categoriesMap[category]);
    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap]);
    return(
        <>
            <CategoryName>{category.toUpperCase()}</CategoryName>
            <CategoryContainer>
                {products &&
                    products.map((product) =>
                    <ProductCard key={product.id} product={product} />)
                }
            </CategoryContainer>
        </>
    )
}

export default Category; 