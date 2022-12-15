import DirectoryItem from '../directory-item/directory-item.component';
import {Body, CategoriesMenu} from './category-menu.styles.jsx';

const CategoryMenu = ({ categories })=>{
    return(
        <Body>
            <CategoriesMenu>
                {categories.map((category) => (
                    < DirectoryItem category= {category} key={category.id}/>
                ))}
            </CategoriesMenu>
        </Body>
    )
}

export default CategoryMenu;