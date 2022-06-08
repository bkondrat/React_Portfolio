import "./ExperienceContainer.css";
import "../../App.css"

const ExperienceContainer = () => {
    return(
        <div className="section-experience">
		<div className="container">
			<div className="row">
				<div className="experience-title">
					<div className="col-8">
						<h2 className="exp-title">My experience</h2>
						<small className="designer">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</small>
					</div>
				</div>
			</div>
			<div className="work-exp-grid">
				<div className="row exp-grid">
					<div className="col-3 grid-block">
						<h2 className="webflow">Webflow</h2>
						<p className="paragraf-light">Graphic Designer</p>
						<p className="paragraf-tiny">April 2014 — Mar 2015</p>
					</div>
					<div className="col-3 grid-block">
						<h2 className="webflow">Webflow</h2>
						<p className="paragraf-light">Graphic Designer</p>
						<p className="paragraf-tiny">April 2014 — Mar 2015</p>
					</div>
					<div className="col-3 grid-block">
						<h2 className="webflow">Webflow</h2>
						<p className="paragraf-light">Graphic Designer</p>
						<p className="paragraf-tiny">April 2014 — Mar 2015</p>
					</div>
					<div className="col-3 GridBlock">
						<h2 className="webflow">Webflow</h2>
						<p className="paragraf-light">Graphic Designer</p>
						<p className="paragraf-tiny">April 2014 — Mar 2015</p>
					</div>
				</div>
			</div>
		</div>
	</div>
    );
}

export default ExperienceContainer;
