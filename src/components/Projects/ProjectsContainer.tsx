import "./ProjectsContainer.css";
import "../../App.css"

const ProjectsContainer = () => {
    return (
        <div className="section-projects">
        <div className="container-fluid">
			<div className="block">
				<div className="row">
					<div className="left col-lg-8">
						<div className="work-image">
							<a href="#"><img className="image" src="assets/Images/NAgame.png" alt="E" /></a>
						</div>
						<div className="work-description">
							<a className="project-name">Project 1</a>
							<p className="description">Graphic Design</p>
						</div>
					</div>
					<div className="right col-lg-4">
						<div className="work-image">
							<a href="#"><img className="image" src="assets/Images/WebSite.png" alt="E" /></a>
						</div>
						<div className="work-description">
							<a className="project-name">Project 2</a>
							<p className="description">Graphic Design</p>
						</div>
					</div>
				</div>
			</div>

			<div className="block">
				<div className="row">
					<div className="left col-lg-4">
						<div className="work-image">
							<a href="#"><img className="image" src="assets/Images/tree.jpg" alt="E" /></a>
						</div>
						<div className="work-description">
							<a className="project-name">Project 3</a>
							<p className="description">Graphic Design</p>
						</div>
					</div>
					<div className="right col-lg-8">
						<div className="work-image">
							<a href="#"><img className="image" src="assets/Images/tree.jpg" alt="E" /></a>
						</div>
						<div className="work-description">
							<a className="project-name">Project 4</a>
							<p className="description">Graphic Design</p>
						</div>
					</div>
				</div>
			</div>
		</div>
        </div>
    );
}

export default ProjectsContainer;
