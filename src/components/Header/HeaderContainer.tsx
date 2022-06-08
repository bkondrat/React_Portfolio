import { Layout } from 'antd';
import "./HeaderContainer.css";

const { Header } = Layout;

const HeaderContainer = () => {
    return (
        <Header className="header">
            <h2 className="portfolio_logo">Portfolio</h2>
        </Header>
    );
}

export default HeaderContainer;