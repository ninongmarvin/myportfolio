import '../styles/MyProjects.css';
import {useState, useEffect} from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';

const MyProjects = ({project}) => {
  const [description, setDescription] = useState(false);
  const [sample1, setSample1] = useState(false);
  const [sample2, setSample2] = useState(false);
  const [sample3, setSample3] = useState(false);
  const [sample4, setSample4] = useState(false);
  const [count, setCount] = useState(0);

  const showDesc = () => {
    setDescription(!description);
  };

  const showSample1 = () => {
    setSample1(!sample1);
  };

  const showSample2 = () => {
    setSample2(!sample2);
  };

  const showSample3 = () => {
    setSample3(!sample3);
  };

  const showSample4 = () => {
    setSample4(!sample4);
  };

  return (

    <div className="project-cards" id={description ? "project-clicked" : "not-clicked"}>
      <div className="project-contents">
        <img src={project.image} alt={project.title} id={description ? "clicked-image" : "not-clicked-image"} onClick={showDesc} />
        <div className="website-title">
          <h3>{project.title}</h3>
          <div className="links">
            <a href={project.githubLink}><GitHubIcon style={{fontSize: `1.25rem`}}/></a>
            <a href={project.websiteLink}><OpenInBrowserIcon style={{fontSize: `1.50rem`}}/></a>
          </div>
        </div>
        <div className="desc" id={description ? "show" : "hide"}>
          <h1>Description</h1>
          <p>{project.description}</p>
          <div id="sample-images">
            <img id={sample1 ? "clicked1" : "not1"} onClick={showSample1} src={project.sampleImage1} alt={project.title} />
            <img id={sample2 ? "clicked2" : "not2"} onClick={showSample2} src={project.sampleImage2} alt={project.title} />
            <img id={sample3 ? "clicked3" : "not3"} onClick={showSample3} src={project.sampleImage3} alt={project.title} />
            <img id={sample4 ? "clicked4" : "not4"} onClick={showSample4} src={project.sampleImage4} alt={project.title} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProjects;
