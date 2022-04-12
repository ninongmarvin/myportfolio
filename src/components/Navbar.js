import '../styles/Navbar.css';

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="left-side">
          <h4>Marvin S. Gello-ano</h4>
        </div>
        <div className="hidden-links">
          <a href="#home">Home</a>
          <a href="#my-projects">My Projects</a>
          <a href="#about">About Me</a>
          <a href="#contact">Contact Me</a>
        </div>
        <div className="right-side">
          <a href="#home">Home</a>
          <a href="#my-projects">My Projects</a>
          <a href="#about">About Me</a>
          <a href="#contact">Contact Me</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
