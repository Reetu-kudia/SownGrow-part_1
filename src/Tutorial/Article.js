import React, { useState, useEffect, useCallback } from 'react';
import './Article.css';
import TAVnav from './TAVnav';
import EFooter from '../Ecommerce/EFooter';
import img1 from './Timages/img4.jpg';
import img2 from './Timages/img5.png';
import img3 from './Timages/img6.jpg';
import img4 from './Timages/img7.jpg';
import img8 from './Timages/img8.jpg';
import img15 from './Timages/img15.jpg';
import img16 from './Timages/img16.jpg';
import img17 from './Timages/img17.webp';
// Sample images for the slideshow
import image1 from './Timages/img1.webp';
import image2 from './Timages/img2.jpg';
import image3 from './Timages/img3.jpg';
import A1 from './Timages/A1.png';
import A2 from './Timages/A2.png';
import A3 from './Timages/A3.png';
import A4 from './Timages/A4.png';
import A5 from './Timages/A5.png';
const Article = () => {
  // Define an array of images for the slideshow
  const images = [image1, image2, image3];

  // State to track the index of the current image
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define the updateIndex function using useCallback
  const updateIndex = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]); // Include images.length as a dependency

  // Effect to update the index at regular intervals
  useEffect(() => {
    const interval = setInterval(updateIndex, 5000); // Change image every 5 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [updateIndex]); // Include updateIndex as a dependency

  return (
    <div className="Article">
      <TAVnav />
      <h2 className="PlantCareHeader">Plant Care Guides</h2>

      <h3>Caring for Succulents</h3>
      {/* Display the current image */}
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slideshow-image" />
      
      <div className="article-content">
        <p className="SucculentsParagraph">
          Succulents are low-maintenance plants that thrive in dry conditions. To care for succulents, ensure they have well-draining soil and water them sparingly, allowing the soil to dry out between waterings. Place them in a sunny spot and protect them from frost during the winter months.
        </p>
      </div>

      {/* Gardening Tips section */}

      <div className="GardeningTips">
        <h3>Gardening Tips</h3>
        <ul className="GardeningTips-list">
          <li>
            <img src={img1} alt="Soil Preparation" className="GardeningTips-image" />
            <p><strong>Soil Preparation:</strong> Start by testing your soil to understand its composition and pH level. Amend the soil with organic matter like compost to improve its texture and fertility.</p>
          </li>
          <li>
            <img src={img2} alt="Companion Planting" className="GardeningTips-image" />
            <p><strong>Companion Planting:</strong> Utilize companion planting techniques to enhance plant health and deter pests. For example, plant marigolds near tomatoes to repel nematodes.</p>
          </li>
          <li>
            <img src={img3} alt="Organic Pest Control" className="GardeningTips-image" />
            <p><strong>Organic Pest Control:</strong> Implement natural pest control methods such as introducing beneficial insects like ladybugs or using neem oil spray for pest management.</p>
          </li>
          <li>
            <img src={img4} alt="Maximizing Garden Space" className="GardeningTips-image" />
            <p><strong>Maximizing Garden Space:</strong> Make the most of your garden space by using vertical gardening techniques, interplanting different crops, and utilizing raised beds or containers.</p>
          </li>
        </ul>
      </div>
      {/* Sustainable Gardening Practices section */}
      <div className="SustainableGardening">
        <h3>Sustainable Gardening Practices</h3>
        <div className="TAcard-container">
          <div className="TAcard">
            <img src={img8} alt="Water Conservation" className="TAcard-image" />
            <div className="TAcard-content">
              <h4>Water Conservation</h4>
              <p>Implement water-saving techniques such as mulching, drip irrigation, and collecting rainwater to conserve water in the garden.</p>
            </div>
          </div>
          <div className="TAcard">
            <img src={img15} alt="Organic Fertilizers" className="TAcard-image" />
            <div className="TAcard-content">
              <h4>Organic Fertilizers</h4>
              <p>Use natural fertilizers like compost, manure, and organic amendments to enrich the soil and promote healthy plant growth.</p>
            </div>
          </div>
          <div className="TAcard">
            <img src={img16} alt="Reducing Plastic Waste" className="TAcard-image" />
            <div className="TAcard-content">
              <h4>Reducing Plastic Waste</h4>
              <p>Avoid single-use plastic in the garden by opting for reusable materials, compostable pots, and eco-friendly alternatives for gardening supplies.</p>
            </div>
          </div>
          <div className="TAcard">
            <img src={img17} alt="Grow Your Own Food" className="TAcard-image" />
            <div className="TAcard-content">
              <h4>Grow Your Own Food</h4>
              <p>Growing sustainable vegetables, fruits, and herbs is satisfying, easy, 
              and delicious. Plus, raising some of your own food is an essential part of a sustainable 
              lifestyle</p>
            </div>
          </div>
        </div>
      </div>


      <div className='PersonArticles'>
      <div className='article-container'>
      <img src={A1} alt="Jadav Payeng" className="miami-image" />
      <p>
      <h1>The Forest Man of India</h1>
      Jadav Payeng, widely hailed as the "Forest Man of India,
      " has become synonymous with extraordinary environmental stewardship through his 
      remarkable endeavors in reforestation. Born into the Mishing tribe in the state of Assam, 
      India, Payeng embarked on his mission at the tender age of 16, spurred by the alarming 
      erosion and deforestation plaguing Majuli Island in the Brahmaputra River. Armed with 
      determination and a deep-rooted love for nature, he initiated his ambitious project by planting bamboo saplings in the barren sandbars dotting the landscape. Over the ensuing decades, Payeng's tireless efforts bore fruit as he painstakingly expanded his green sanctuary, 
      nurturing a burgeoning forest that now spans an awe-inspiring 1,360 acres. Today, this verdant oasis, known as the Molai Forest or Payeng Forest, teems with a diverse array of flora and fauna, including majestic creatures 
      like rhinoceroses, tigers, elephants, and deer.
      </p>
     
     
    </div>
    <div className='article-container'>
      <img src={A2} alt="Marimuthu Yoganathan" className="miami-image" />
      <p>
      <h1>The Tree Man of India</h1>
      He was born in 1969 and is popularly known as The Tree Man of India. He is an Indian environmental activist. 
      He is a bus conductor for the Tamilnadu State Transport Corporation and is known as an eco-activist. He has been awarded the "Eco Warrior" 
      award by the Vice-President of India. He also received recognition from the US-based footwear company Timberland for his outstanding work in planting around 1,20,000 saplings across the state. He also created 
      awareness about protecting the environment among the students. Yoganathan also received an award for his pet project, "UyirVaza Oru Mararn." Under this, the students have been taught to plant one tree sapling on their birthday.
      </p>
    </div>
   
    <div className='article-container'>
      <img src={A4} alt="Sunderlal Bahuguna" className="miami-image" />
      <p>
      <h1>Sunderlal Bahuguna</h1>
      Last but not least, Sunderlal Bahuguna is one of the oldest environmentalists living today with 92 years of age. He was the leader of a famous Chipko movement and is
       a follower of Mahatma Gandhi's philosophy of Satyagraha and Non-violence. He is a real hero who has been fighting for the preservation of forests in the Himalayas for his entire life. 
       He was first a member of the Chipko movement in the 1970s. Later he was a member of the Anti-Tehri Dam movement, which was started in the 1980s and ended in early 2004. He was awarded the Padma Vibhushan on 26 January 2009, 
       India's second-highest civilian award.
      Beyond his involvement in the Chipko movement, Bahuguna continued to be a vocal critic of unsustainable development practices, particularly large-scale dam projects in the Himalayan region. 
      He argued passionately for the preservation of ecological balance and the adoption of sustainable alternatives to meet the developmental needs of communities. Bahuguna's tireless advocacy and unwavering 
      commitment to environmental protection earned him numerous accolades, including the Ramon Magsaysay Award and the Padma Vibhushan, India's second-highest civilian honor. His enduring legacy serves as a reminder of the power of grassroots 
      movements and the importance of individual action in safeguarding the environment for future generations.
      </p>
    </div>
    <div className='article-container'>
      <img src={A5} alt="Sebastiao and Lelia Salgado" className="miami-image" />
      <p>
      <h1>Sebastiao and Lelia Salgado </h1>
      The passionate couple have a great message on how a small group can make tremendous impact on nature conservation. Sai sanctuary  located at the heart of western ghats now 
      spread across 300 acres and hosts a variety of wild species including some of the critically endangered species . Save Animal Initiative probably is the first private wildlife sanctuary in India and a living exemplary 
      model of conservation that private individuals and entities can follow to save our depleting natural environments.
      </p>
    </div>
    
    <div className='article-container'>
      <img src={A3} alt=" Vandana Shiva" className="miami-image" />
      <p>
      <h1> Vandana Shiva</h1>
      Vandana Shiva is a Delhi based eco feminist and environmentalist. She is a Gandhi follower
       and is well known for her efforts to protect forests, conserve local biodiversity, and organize women’s networks. She is a physicist and has authored books such as
        Staying Alive: Women, Monocultures of the Mind, and Soil Not Oil: Environmental Justice in an Age of Climate Crisis. She was identified as an environmental ‘hero’ by Time Magazine in 2003. Vandana Shiva is the director of the Research Foundation for Science, 
      Technology, and Natural Resource Policy in Dehra Dun.
    Vandana Shiva was awarded the Right Livelihood Award in 1993, which is considered parallel to the Nobel Prize. She is also a founder of Navdanya, which was a national movement, created in 1984 to protect the diversity of living resources.
      </p>
    </div>  
    </div>
      <EFooter/>
    </div>
  );
};

export default Article;
