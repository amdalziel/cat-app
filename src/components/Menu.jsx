import React from 'react'
import './Menu.css';
import IconMenu from './IconMenu';
import SecondaryPageBanner from './SecondaryPageBanner';


function Menu() {
  return (
    <>

<SecondaryPageBanner heading3={"Menu"} bannerImage={'../Images/MenuBannerImage.jpg'} altStyling={"0%"} /> 



<div className='Menu-iconOutline'>
 <IconMenu title="Coffee" imgURL="./Images/beans.jpg" backgroundStyle={drinkIcon} h3Choice={h3StyleCafe} itemOne= "Expresso" itemTwo = "Americano" itemThree = "Cappuccino" itemFour = "Latte" itemFive = "Mocha" itemSix = "" />
 <IconMenu title="Tea" imgURL="./Images/tea.jpg" backgroundStyle={drinkIcon} h3Choice={h3StyleCafe} itemOne= "Peppermint" itemTwo = "Chamomile" itemThree = "Green Tea" itemFour = "Chai Tea" itemFive = "Earl Grey" itemSix = ""/> 
 <IconMenu title="Hot Drinks" imgURL="./Images/hotdrink.jpg" backgroundStyle={drinkIcon} h3Choice={h3StyleCafe} itemOne= "Classic Hot Chocolate" itemTwo = "Mocha Hot Chocolate" itemThree = "Whiskers Carmel Macchiato" itemFour = "Feline Froth White Mocha" itemFive = "Purrfect Pumpkin Spice Latte" /> 
 <IconMenu title="Cold Drinks" imgURL="./Images/colddrink.jpeg" backgroundStyle={drinkIcon} h3Choice={h3StyleCafe} itemOne= "Peach Freeze" itemTwo = "Lemonade" itemThree = "Soda" itemFour = "Iced Coffee" itemFive= "Iced Tea" /> 
 </div > 


 <div className='Menu-iconOutline'>
 <IconMenu title="Sandwiches" imgURL="./Images/sand.jpg" backgroundStyle={foodIcon} h3Choice={h3StyleCafe} itemOne= "House Club" itemTwo = "Roast Beef" itemThree = "Grilled Cheese" itemFour = "Ruben" itemFive = "" itemSix = "All served with your choice of handcut fries or a tossed salad"/> 
 <IconMenu title="Soups" imgURL="./Images/soup.jpg" backgroundStyle={foodIcon} h3Choice={h3StyleCafe} itemOne= "Local Chowder" itemTwo = "French Onion" itemThree = "Organic Vegtable" itemFour = "Black Bean Fiesta" itemFive = "" itemSix = "All served with your choice of garlic bread or roll"/> 
 <IconMenu title="Cookies" imgURL="./Images/cookie.jpg" backgroundStyle={foodIcon} h3Choice={h3StyleCafe} itemOne= "Sugar Cookies" itemTwo = "Brownies" itemThree = "Chocolate Chip" itemFour = "Mollasses" itemFive = "Shortbread" itemSix = "Jam Jams"/> 
 <IconMenu title="Sweet Treats" imgURL="./Images/cake.jpg"backgroundStyle={foodIcon} h3Choice={h3StyleCafe} itemOne= "Cheesecake" itemTwo = "Muffins" itemThree = "Croissants" itemFour = "Pastries" itemFive = "Scones" itemSix = "Pie"/> 
 </div> 

 <div className='Menu-iconOutline'>
 <IconMenu title="Kids Menu" imgURL="./Images/hotdog.jpg"backgroundStyle={foodIcon} h3Choice={h3StyleCafe} itemOne= "Mini Hotdogs" itemTwo = "Apple Slices" itemThree = "PB&J Sandwich" itemFour = "Mac and Cheese"/> 
 <IconMenu title="Hot Lunch" imgURL="./Images/chili.jpg"backgroundStyle={foodIcon} h3Choice={h3StyleCafe} itemOne= "Chili" itemTwo = "Hearty Beef Stew" itemThree = "Butter Chicken" itemFour = "Wings" itemFive = "" itemSix = "All served with your choice of garlic bread or roll"/> 
 <IconMenu title="Smoothie Bar" imgURL="./Images/smoothie.jpg"backgroundStyle={foodIcon} h3Choice={h3StyleCafe} itemOne= "Tropical Tempation" itemTwo = "Mixed Berry" itemThree = "Veggie Vegan" itemFour = "Citrus Twist"/> 
 <IconMenu title="Healthy Options" imgURL="./Images/salad.jpg"backgroundStyle={foodIcon} h3Choice={h3StyleCafe} itemOne= "Chef Salad" itemTwo = "Fruit Salad" itemThree = "Garden Salad" itemFour = "Greek Yogurt with Granola" itemFive = "Mixed Nuts" itemSix = "Cobb Salad"/> 
 </div> 


    </>
  )
}

var drinkIcon = {
  backgroundColor: "#220302",
  borderRadius: "10px",
  border: "3px solid #405823",
  borderShadow: "10px 10px 5px #405823",
  width: "250px",
  height: "250px",
  margin: "0 auto",
  padding: "10px",
  position: "relative", 

}; 


var foodIcon = {
    backgroundColor: "#220302",
    borderRadius: "10px",
    border: "3px solid #405823",
    borderShadow: "10px 10px 5px #405823",
    width: "250px",
    height: "250px",
    margin: "0 auto",
    padding: "10px",
    position: "relative", 
  
  }; 

  var h3StyleCafe = {
    backgroundColor: "rgba(161, 132, 94, 0.2)",
    color: "#405823", 
    fontSize: "30px",
    fontWeight: "700", 
    fontFamily: "Kalam, cursive",
    padding: "5px",
    borderRadius: "10px",  
    lineHeight: "150%", 
    textAlign: "center",
    marginTop: "20px", 
    marginBottom: "20px"
  }

export default Menu