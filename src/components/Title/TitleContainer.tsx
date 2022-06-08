import { Layout } from 'antd';
import "./TitleContainer.css";

const { Header } = Layout;

const TitleContainer = () => {
    return(
        <div className="section_about">
		<div className="container">
			<h2 className="Name">Nazar Omeliukh</h2>
			<p className="Designer">Product Designer</p>
			<h1 className="AboutMe">Hey there! I’m a creative web designer based in sunny Lviv, Ukraine.</h1>
		</div>
	</div>
    );
}

export default TitleContainer;