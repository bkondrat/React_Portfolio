import "./ContactContainer.css";
import "../../App.css"

const ContactContainer = () => {
    return (
        <div className="section-contact">
			<div className="contact-form">
				<div className="container">
					<div className="contact-title">
						<h2 className="exp-title">Want to get in touch?</h2>
						<h2 className="exp-title">Drop me a line!</h2>
						<p className="designer">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
					<form>
						<div className="row">
							<div className="col-4 form-row">
								<label htmlFor="InputName" className="form-label">Name</label>
							    <input type="name" className="form-control" id="InputName" placeholder="Enter your name" />
							</div>
							<div className="col-4 form-row">
								<label htmlFor="InputEmail" className="form-label">Email Address</label>
							    <input type="email" className="form-control" id="InputEmail" placeholder="Enter your email" />
							</div>
						</div>
						<br />
						<div className="row form-textarea">
							<div className="col-8 form-textarea">
							  <label htmlFor="FormControlTextarea" className="form-label">Message</label>
							  <textarea className="form-control" id="FormControlTextarea" rows={3} placeholder="Enter your message"></textarea>
							</div>
						</div>
					  	<button type="submit" className="btn btn-dark submit-button">Submit</button>
					</form>
				</div>	
			</div>
        </div>
    );
}

export default ContactContainer;
