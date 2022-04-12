import '../styles/Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const Footer = () => {
  return (
    <div className="footer">
      <div className="social">
        <a href="https://web.facebook.com/gelloano"><FacebookIcon style={{fontSize: `2.50rem`}}/></a>
        <a href="https://github.com/ninongmarvin"><GitHubIcon style={{fontSize: `2.50rem`}}/></a>
        <a href=""><LinkedInIcon style={{fontSize: `2.50rem`}}/></a>
      </div>
      <h3>marvingelloano@gmail.com</h3>
    </div>
  )
}

export default Footer;
