import React from 'react';
import './Cats.css';
import IconCat from './IconCat';
import SecondaryPageBanner from './SecondaryPageBanner';



function Cats() {
  return (
    <>
<SecondaryPageBanner heading3={"Meet the Cats"} bannerImage={'../Images/CatBannerImage.jpg'} altStyling={"75%"}/> 

      <div className='Cats-icon-Outline'>
    
          
          <IconCat
            title="Mya-Cat"
            backgroundStyle={catIcon}
            h3Choice={h3StyleCats}
            age="3"
            breed="Calico"
            funFact="Adores kids"
            imgSrc= "../Images/MyaCat.jpg"
          />
          <IconCat
            title="Mia-Cat"
            backgroundStyle={catIcon}
            h3Choice={h3StyleCats}
            age="3"
            breed="Tabby"
            funFact="Friendly"
            imgSrc= "../Images/MiaCat.jpg"
          />
          <IconCat
            title="Maggie-Cat"
            backgroundStyle={catIcon}
            h3Choice={h3StyleCats}
            age="5"
            breed="Mix"
            funFact="Enjoys lounging in the sun"
            imgSrc= "../Images/MaggieCat.jpg"
          />
       
        {/* <div className='icon-Row'> */}
          <IconCat
            title="Charlie-Cat"
            backgroundStyle={catIcon}
            h3Choice={h3StyleCats}
            age="4"
            breed="Ragdoll"
            funFact="Likes to be cuddled"
            imgSrc= "../Images/cat-image.jpg"
          />
          <IconCat
            title="Garf-Cat"
            backgroundStyle={catIcon}
            h3Choice={h3StyleCats}
            age="6"
            breed="Persian"
            funFact="Loves to climb"
            imgSrc= "../Images/GarfCat.jpg"
          />
          <IconCat
            title="Candy-Cat"
            backgroundStyle={catIcon}
            h3Choice={h3StyleCats}
            age="5"
            breed="Bengal"
            funFact="Social butterfly"
            imgSrc= "../Images/CandyCat.jpg"
          />
           </div>
          
    </>
  );
}

  const catIcon = {
    background: "#6C8B2C",
    borderRadius: "40px",
    width: "250px",
    height: "250px",
    margin: "0 auto",
    padding: "10px",
    display: "flex",
    justifyContent: "center", 
    alignItems: "center", 
  };

  var h3StyleCats = {
    backgroundColor: "rgba(161, 132, 94, 0.2)",
    color: "#405823",
    fontSize: "23px",
    fontWeight: "400",
    fontFamily: "'Inter', sans-serif",
    padding: "2px",
    borderRadius: "10px",
    lineHeight: "150%",
    textAlign: "center",
    marginTop: "20px",
    marginBottom: "20px",
  };

  export default Cats;