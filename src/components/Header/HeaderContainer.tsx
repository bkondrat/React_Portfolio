import { Layout } from 'antd';
import "./HeaderContainer.css";
import "../../App.css"

const { Header } = Layout;

const HeaderContainer = () => {
    return (
        <Header>
            <div className="container-fluid">
                <div className="navbar-header">
                    <h2 className="portfolio-logo">Portfolio</h2>
                </div>
            </div>
        </Header>
    );
}

export default HeaderContainer;
