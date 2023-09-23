import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/menu-bg.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';

const Menu = () => {
    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    
    return (
        <div>
            <Helmet>
                <title>Tech Mart | Menu</title>
            </Helmet>
           <Cover  img ={menuImg}  title={"Our Menu"}></Cover>
           <SectionTitle
            subHeading={"Dont miss"}
            heading={"Todays offer"}
           ></SectionTitle>
           <MenuCategory items={offered}></MenuCategory>

           {/* dessert menu item */}
           <MenuCategory items={dessert} title={"dessert"} img={dessertImg}></MenuCategory>

           {/* pizza menu item */}
           <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
           {/* salad memu items */}
           <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
           {/* soup menu items */}
           <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>

            
        </div>
    );
};

export default Menu;