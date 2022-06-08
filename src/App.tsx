import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import ContactContainer from './components/Contact/ContactContainer';
import ExperienceContainer from './components/Experience/ExperienceContainer';
import FooterContainer from './components/Footer/FooterContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import ProjectsContainer from './components/Projects/ProjectsContainer';
import TitleContainer from './components/Title/TitleContainer';

function App() {

  return (
  <Layout className="layout">
    <HeaderContainer />
    <Content>
      <TitleContainer />
      <ProjectsContainer />
      <ExperienceContainer />
      <ContactContainer />
    </Content>
    <FooterContainer />
  </Layout>
  );
}

export default App;
