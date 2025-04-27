import React, {useState} from "react";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import heroImage from "./assets/earth.png";
import toiletImg from "./assets/bio.jpeg";
import logo from "./assets/logoplanetmama.png";
import mangroveImg from "./assets/mangrove.png";
import oceanImg from "./assets/ocean.png";
import gallery1 from "./assets/mangrove2.jpeg";
import gallery2 from "./assets/mangrove3.jpeg";
import gallery3 from "./assets/mangrove4.jpeg";
import productImg from "./assets/bio.jpeg";
import skillImg from "./assets/skill.png";
import climateImg from "./assets/climate.jpg";
import seaweedImg from "./assets/seaweed.jpg";
import desalinationImg from "./assets/desalination.jpg";

import mangrove2 from "./assets/mangrove2.jpeg";
import mangrove3 from "./assets/mangrove3.jpeg";
import mangrove4 from "./assets/mangrove4.jpeg";
import mangrove5 from "./assets/mangrove5.jpeg";
import mangrove6 from "./assets/mangrove6.jpeg";
import bio1 from "./assets/bio/1.jpeg";

import bio2 from "./assets/bio/2.jpeg";
import bio3 from "./assets/bio/3.jpeg";
import bio4 from "./assets/bio/4.jpeg";
import bio5 from "./assets/bio/5.jpeg";
import bio6 from "./assets/bio/6.jpeg";
import bio7 from "./assets/bio/7.jpeg";

import bannerBg from "./assets/banner.png";
import sdg1 from "./assets/sdg1.png";
import sdg2 from "./assets/sdg2.png";
import sdg3 from "./assets/sdg3.png";
import sdg4 from "./assets/sdg4.png";
import sdg5 from "./assets/sdg5.png";
import "./App.css";

const SectionCard = ({ title, image, text, paragraphs = [], extraImages = [], testimonials = [], partners = [], vision = [], mission =[] }) => (
  <div className="card">
   <img src={image} alt={title} className="card-image top" />
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{text}</p>
      {paragraphs.map((para, index) => (
        <p key={index} className="card-text">{para}</p>
      ))}
      {extraImages.length > 0 && (
  <div className="card-gallery">
    <h3 style={{ gridColumn: "1 / -1", color: '#1b5e20', marginBottom: '0.5rem' }}>
      Highlights from Our Work
    </h3>
    {extraImages.map((img, i) => (
      <img key={i} src={img} alt={`${title} extra ${i}`} className="card-image small" />
    ))}
  </div>
)}

      {testimonials.length > 0 && (
        <div className="testimonials">
          <h3>What our community says</h3>
          {testimonials.map((quote, i) => (
            <blockquote key={i} className="testimonial">“{quote}”</blockquote>
          ))}
        </div>
      )}
      {vision.length > 0 && (
        <div className="vision">
          <h3>VISION</h3>
          {vision.map((quote, i) => (
            <blockquote key={i} className="vision">“{quote}”</blockquote>
          ))}
        </div>
      )}
      {mission.length > 0 && (
        <div className="mission">
          <h3>MISSION</h3>
          {mission.map((quote, i) => (
            <blockquote key={i} className="mission">“{quote}”</blockquote>
          ))}
        </div>
      )}
      {partners.length > 0 && (
        <div className="partners">
          <h3>Our Partners</h3>
          <div className="partner-logos">
            {partners.map((logo, i) => (
              <img key={i} src={logo} alt={`Partner ${i}`} className="partner-logo" />
            ))}
            
          </div>
        </div>
      )}
    </div>
  </div>
);

const Home = () => (
  <>
  <div className="hero">
        <img src={heroImage} alt="Earth" className="hero-image" />
        <div className="hero-overlay">
          <h1>Planet Mama</h1>
          <p>Earth is the only planet we have. If we protect our planet, it protects us.</p>
        </div>
      </div>
      
      {/* Image Gallery Section */}
      <div className="gallery-two-column">
      <h1>Mangrove plantation in Sunderban</h1>
        <img src={gallery1} alt="Mangrove 1" />
        <img src={gallery2} alt="Mangrove 2" />
        <img src={gallery3} alt="Mangrove 3" />
        <img src={gallery1} alt="Mangrove 1" />
        <img src={gallery2} alt="Mangrove 2" />
      </div>

      {/* SDG Commitment Section */}
      <div className="sdg-section">
        <h2>ACHIEVING THE UNITED NATIONS SUSTAINABLE DEVELOPMENT GOALS</h2>
        <div className="sdg-icons-grid">
          <img src={sdg1} alt="SDG 1" />
          <img src={sdg2} alt="SDG 2" />
          <img src={sdg3} alt="SDG 3" />
          <img src={sdg4} alt="SDG 4" />
          <img src={sdg5} alt="SDG 5" />
         
        </div>
      </div>


      <div className="gallery-two-column">
      <h1>Our Impact Initiatives</h1>
      </div>
      {/* Product + Content Section */}
      <div className="home-product-section">
        <img src={productImg} alt="Bio Toilet" />
        <div className="home-product-content">
          <h2>Eco Bio-Toilet</h2>
          <p>
            Our eco-friendly bio-toilets provide sanitation access to remote communities, improving health,
            hygiene, and dignity. Designed to operate without water or sewage lines, they are a sustainable
            solution to rural sanitation challenges.
            EcoRest is an innovative, sustainable sanitation solution - bio toilets, eco toilet enviro toilet - designed for modern living while respecting the planet. Engineered with advanced composting technology, our bio toilet efficiently transforms waste into nutrient-rich compost without the need for water, chemicals, or external power sources. Its sleek, compact design seamlessly integrates into homes, cabins, RVs, and eco-friendly communities, offering a hygienic and odour-free experience.  
          </p>
          <NavLink to="/bio-toilet">
      <button className="know-more-button">Know More</button>
    </NavLink>
        </div>
      </div>

      <div className="home-product-section" >
      <div className="home-product-content">
          <h2>Seaweed Solutions</h2>
          <p>
          Nature-based Solutions are actions to protect, sustainably manage, and restore natural and modified ecosystems that address societal challenges effectively and adaptively, simultaneously providing human well-being and biodiversity benefits (IUCN). At PlanetMama, we develop Nature-based Solutions to preserve the Ocean, lungs and carbon sinks of our planet. We restore seagrass and the planet ecosystem.
          </p>
          <NavLink to="/target-path">
  <button className="know-more-button">Know More</button>
</NavLink>
        </div>
        <img src={seaweedImg} alt="Bio Toilet" />
      </div>

      <div className="home-product-section">
        <img src={desalinationImg} alt="Bio Toilet" />
        <div className="home-product-content">
          <h2>Desalination Solutions</h2>
          <p>
          Seeing a need for energetic, nonprofit work in this area, we formed our organization to provide sustainable water solutions. We've consistently grown since then, all thanks to the helping hands of this amazing community!
          </p>
          <NavLink to="/desalination">
  <button className="know-more-button">Know More</button>
</NavLink>
        </div>
      </div>

      <div className="home-product-section" >
      <div className="home-product-content">
          <h2>Climate Action</h2>
          <p>
          We focus on making the maximum positive effort for our community. Our members and volunteers provide the momentum that helps us affect change. Using data driven models, we provide solutions that make a long-lasting difference to create sustainable ecosystem 
          </p>
          <NavLink to="/ocean">
  <button className="know-more-button">Know More</button>
</NavLink>
        </div>
        <img src={climateImg} alt="Bio Toilet" />
        
      </div>

      <div className="home-product-section">
        <img src={skillImg} alt="Bio Toilet" />
        <div className="home-product-content">
          <h2>Inclusive business models to reduce inequality</h2>
          <p>
          Planet Mama is building a community of local skilled and unskilled rural women workforce.  We provide self sustainable growth to women, by creating a livelihood by engaging them in plantation, processing and providing land and ocean solutions.  50% of the seafood workforce is female and women comprise 90% of the seafood secondary processing & value-added sector, but are underrepresented in leadership and management roles. We at Planet Mama aim towards utilizing these super powers in women and help them shine! </p>
          <NavLink to="/target-path">
  <button className="know-more-button">Know More</button>
</NavLink>
        </div>
      </div>

      <div className="home-product-section">
 
  <div className="home-product-content">
    <h2>Mangrove Plantation</h2>
    <p>Mangroves are nature’s coastal protectors. Planet Mama is on a mission to restore mangrove forests across India’s vulnerable shorelines. Our plantation drives engage local women and educate communities about their importance.</p>
    <NavLink to="/mangrove">
  <button className="know-more-button">Know More</button>
</NavLink>
  
  </div>
  <img src={mangrove2} alt="Mangrove Plantation" />
</div>

      {/* Call to Action Banner with Background Image Only */}
      <div style={{
        backgroundImage: `url(${bannerBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '200px',
        borderRadius: '1px',
        margin: '3rem auto',
        width: '100%',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }} />

      

      
    </>
);

const DonateVolunteer = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We’ll be in touch soon.");
    setForm({ name: "", email: "", message: "" });
  };
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Get Involved</h2>
        <p className="card-text">Join Planet Mama by volunteering or supporting us with a donation. Fill out the form below and we'll get back to you.</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your Email" required />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="How would you like to help?" rows="4" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

const sections = [
  
  {
    path: "/about",
    
    title: "About Us",
    image: heroImage,
    text: `PLANET MAMA is born out of its love and passion for the planet, focused to effectively address the mission of protecting and restoring the oceans which give us oxygen, food, and millions of livelihoods.`,
    paragraphs: [
      "Take local actions for mangrove plantation to balance humanity and the ocean, and promote sanitation through bio-toilets...",
      "Headquartered in Kolkata, PLANET MAMA connects with national bodies...",
      "Nature is our greatest ally—and it’s under threat..."
    ],
    
    testimonials: [
      "Planet Mama changed how I see nature. I now lead cleanups in my village. - Rina, Odisha"
    ],
    extraImages: [
      mangrove2,
      mangrove3,
      mangrove4,
      seaweedImg,
    ]
  }  ,
  {
    path: "/bio-toilet",
    title: "Bio Toilets",
    image: toiletImg,
    text: `Eco-friendly toilets that eliminate open defecation, reduce disease, and promote dignity.`,
    paragraphs: [
      "These are waterless toilets designed for rural areas and installed in partnership with local women cooperatives.",
      "Our eco-toilets use bio-digestion to manage waste sustainably, ensuring sanitation and soil health."
    ],
    testimonials: ["I no longer have to walk miles for a safe place. This toilet is my pride. - Kamala, West Bengal"],
    extraImages: [
      bio1,
      bio5,
      bio6,
      bio7,
     
    ]
  },
  {
    path: "/mangrove",
    title: "Mangrove Restoration",
    image: mangroveImg,
    text: "We restore coastal mangroves that protect against cyclones and absorb carbon.",
    paragraphs: [
      "Mangroves are nature's barrier against climate disasters. They shield coastal communities from storm surges and prevent erosion.",
      "Our mangrove program involves women in every step – from seed collection and nursery establishment to field plantation.",
      "Through this effort, we've planted over 20,000 mangrove saplings across 4 coastal states in India.",
      "The program also creates sustainable livelihoods and supports biodiversity in fragile ecosystems.",
      "Involving schools in eco-education and tree plantation events ensures the next generation is empowered to act." 
    ],
    extraImages: [
      mangrove2,
      mangrove3,
      mangrove4,
      mangrove5,
     
    ],
    testimonials: [
      "Our village is now better protected from floods. Thank you Planet Mama. - Meena, Sunderbans"
    ],
    imageStyle: "gallery-two-column"
  },
  {
    path: "/desalination",
    title: "Desalination",
    image: desalinationImg,
    text: `Eco-friendly toilets that eliminate open defecation, reduce disease, and promote dignity.`,
    paragraphs: [
      "Planet Mama touts to develop tech products that harness sunshine and seawater to produce high-quality drinking water.The concept designed by Planet Mama is the most cost-effective and sustainable solution in areas of complex water types, high solar irradiation, and high-cost of water provisioning."
    ],
    testimonials: ["I no longer have to walk miles for a safe place. This toilet is my pride. - Kamala, West Bengal"]
  },
  {
    path: "/ocean",
  title: "Ocean Conservation",
  image: oceanImg, // use actual image used in Hero section of /ocean page
  text: "Activating youth and implementing innovative solutions to restore ocean health.",
  style: {
    heroImage: "/assets/ocean-hero.jpg", // replace with exact image used
    sectionImages: [
      "/assets/seaweed-plantation.jpg",
      "/assets/marine-ecosystem.jpg",
      "/assets/plastic-removal.jpg",
      "/assets/plastic-pollution.jpg"
    ]
  },
  paragraphs: [
    "Decades of ocean mismanagement, combined with a rapidly growing population, industrialisation, and the ever-increasing threats created by climate change, place the long-term health of the ocean on a delicate precipice.",
    "Without a healthy ocean, there can be no healthy 'us'. It's imperative that humankind rapidly reduces unnecessary damage to the ocean and develops a new future that preserves, regenerates, and restores ocean ecosystems.",
    "We live on our mother Planet Earth. 70% of the Earth's surface is covered by ocean, and the aquatic wonderland beneath the sea contains vastly more habitable space than the terrestrial landmass populated by humans.",
    "The ocean regulates our climate; produces two-thirds of the oxygen we breathe; fuels the water cycle; sustains livelihoods and provides nourishment for nearly three billion people; is fundamental to diverse cultures; is essential to global transport; is critical to addressing climate change; and is home to millions of marine species, many of which are yet to be studied by science.",
    "Every day, 8 million pieces of plastic pollution find their way into the ocean. Plastic waste has been found on the world's most remote islands, its deepest seafloors, and its highest peaks. Plastic even finds its way into our bodies — you ingest tens of thousands of microplastics every year.",
    "We make seaweed-based packaging that replenishes the social and ecological systems harmed by petroleum plastics."
  ],
  testimonials: [
    "Our beach is cleaner and the fish are back! – Salma, Tamil Nadu"
  ]
},
  {
    path: "/get-involved",
    title: "Get Involved"
  }
];

const App = () => (
  <Router>
    <header className="topbar">
    <div className="logo-container">
    <img src={logo} alt="Planet Mama Logo" className="logo" />
    <h1>Planet Mama</h1>
  </div>
      <nav className="menu">
        <NavLink to="/">Home</NavLink>
        {sections.map((s) => (
          <NavLink key={s.path} to={s.path}>{s.title}</NavLink>
        ))}
      </nav>
    </header>
    <main className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        {sections.map(({ path, title, image, text, paragraphs, extraImages,vision, mission, testimonials, partners }) => (
          <Route
            key={path}
            path={path}
            element={
              path === "/get-involved"
                ? <DonateVolunteer />
                : <SectionCard
                    title={title}
                    image={image}
                    text={text}
                    paragraphs={paragraphs}
                    extraImages={extraImages}
                    vision={vision}
                    mission={mission}
                    testimonials={testimonials}
                    partners={partners}
                  />
            }
          />
        ))}
      </Routes>
    </main>
    <Footer />
    </Router>
);

export default App;