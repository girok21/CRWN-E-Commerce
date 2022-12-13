import DirectoryItem from '../directory-item/directory-item.component';
import './category-menu.styles.scss';

const CategoryMenu = ({ categories })=>{
    return(
        <div className='categories-menu'>
            {categories.map((category) => (
                < DirectoryItem category= {category} key={category.id}/>
            ))}
        </div>
    )
}

export default CategoryMenu;