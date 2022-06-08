import { Layout } from 'antd';
import "./HeaderContainer.css";
import "../../App.css"

const { Header } = Layout;

const HeaderContainer = () => {
    return (
        <Header className="header">
            <div className="container-fluid">
                <div className="navbar-header">
                    <h2 className="portfolio_logo">Portfolio</h2>
                </div>
            </div>
        </Header>
    );
}

export default HeaderContainer;
