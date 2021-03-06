import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MyProjects from './components/MyProjects';
import banner from './assets/banner.jpg';
import vetservice from './assets/vetservice.jpg';
import me from './assets/me.jpg';
import clients from './assets/clients.png';
import login from './assets/login.png';
import mainmenu from './assets/mainmenu.png';
import posts from './assets/posts.png';
import alonsoThumb from './assets/alonso-thumb.jpg';
import alonso1 from './assets/alonso-1.jpg';
import alonso2 from './assets/alonso-2.jpg';
import alonso3 from './assets/alonso-3.jpg';
import alonso4 from './assets/alonso-4.jpg';
import alonsoLaravel1 from './assets/alonso(laravel).jpg';
import alonsoLaravel2 from './assets/alonso(laravel)2.jpg';
import alonsoLaravel3 from './assets/alonso(laravel)3.jpg';
import alonsoLaravel4 from './assets/alonso(laravel)4.jpg';

function App() {
  const projects = [
    {
      "image": vetservice,
      "title": "Veterinary Service(Not Deployed)",
      "description": "This is a website I made for Heaven's Grace Veterinary Clinic. This website allows the Veterinarians of the Clinic to record transactions of their walk-in clients. Be it Boarding, Checkup, Deworming, Grooming, or Vaccination. Furthermore, this system creates an account for any client that is registered in the system, allowing them to access the system's social page where they can see posts and announcements of the Clinic. For this website, I used PHP(Laravel) for Back-end. MySql for Database. Tailwind CSS library for design and a little bit of Javascript.",
      "sampleImage1": login,
      "sampleImage2": mainmenu,
      "sampleImage3": clients,
      "sampleImage4": posts,
      "websiteLink": "l",
      "githubLink": "https://github.com/ninongmarvin/vetclinic",
    },
    {
      "image": alonsoThumb,
      "title": "Alonso's Catering Services(ReactJS)(Deployed)",
      "description": "Alonso's Catering Services Website is a website I made using only HTML5, CSS, and ReactJS. I made this website to further train myself in using ReactJS.",
      "sampleImage1": alonso1,
      "sampleImage2": alonso2,
      "sampleImage3": alonso3,
      "sampleImage4": alonso4,
      "websiteLink": "https://ninongmarvin.github.io/alonsocateringservices",
      "githubLink": "https://github.com/ninongmarvin/alonsocateringservices",
    },
    {
      "image": alonsoThumb,
      "title": "Alonso's Catering Services(Laravel)(Not Deployed)",
      "description": "This is a version of Alonso Catering Services that I made using Laravel this time. It has Back-end functionalities and I used MYSQL for its database",
      "sampleImage1": alonsoLaravel1,
      "sampleImage2": alonsoLaravel2,
      "sampleImage3": alonsoLaravel3,
      "sampleImage4": alonsoLaravel4,
      "websiteLink": "",
      "githubLink": "https://github.com/ninongmarvin/alonsocateringservices-laravel-",
    },
  ];

  return (
    <div className="App">
      <Navbar/>
      <div className="banner" id="home" style={{backgroundImage: `url(${banner})`}}>
        <div className="container">
          <p>Hello There! My name is Marvin S. Gello-ano and I'm a</p>
          <h1>Web Developer</h1>
        </div>
      </div>
      <div className="projects" id="my-projects">
        <div className="title">
          <h3>My Projects</h3>
        </div>
        <div className="projects-container">
          {projects.map((project) => (<MyProjects project={project}/>))}
        </div>
      </div>
      <div className="about-me" id="about">
        <div className="title">
          <h3>About me</h3>
        </div>
        <div className="about-container">
          <img src={me} alt="about me"/>
          <div className="about">
            <p>Hello there! My name is Marvin S. Gello-ano. I'm a Web Developer focusing on Back-end development. Though I spend most of my time learning various Back-end programming, I also dabble in the realm of Front-end development.<br/><br/>

            I started my journey on software development when I was in third year college. Since then, I learned and used PHP and Python to create websites. I also used Frameworks such as Laravel, Codeigniter, and Django. Currently, I'm using Laravel for my projects. On the Front-end side, I first started learning basic HTML and CSS, then I moved on to CSS Libraries such as Bootstrap and Tailwind css.<br/><br/>

            As of 2022, I'm starting to study Javascript and it's Libraries such as Angular and React. Fun Fact, this portfolio website is the first React.js project I've created!</p>
          </div>
        </div>
      </div>
      <div className="contact-me" id="contact">
        <div className="title">
          <h3>Contact Me</h3>
        </div>
        <div className="form-container">
          <form className="contact-form" action="https://formspree.io/f/mrgjajdz" method="POST">
            <label htmlFor="name">Full Name</label>
            <input name="name" type="text" placeholder="Enter Full Name..."/>
            <label htmlFor="email">Email</label>
            <input name="email" type="email" placeholder="Enter Email..."/>
            <label htmlFor="message">Message</label>
            <textarea rows="6" placeholder="Enter Message" name="message" required></textarea>
            <button type="submit" name="submit">Send Message</button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
