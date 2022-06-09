import { Layout } from 'antd';
import "./FooterContainer.css";
import "../../App.css"

const { Footer } = Layout;

const FooterContainer = () => {
    return (
        <Footer className="footer">
            <div className="row row-cols-auto justify-content-center">
                <div className="col footer-text"><a href="#">Facebook</a></div>
                <div className="col footer-text"><a href="#">Twitter</a></div>
                <div className="col footer-text"><a href="#">Instagram</a></div>
            </div>
        </Footer>
    );
}

export default FooterContainer;
