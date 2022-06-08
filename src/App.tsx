import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import ExperienceContainer from './components/Experience/ExperienceContainer';
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
    </Content>
    {/* <Content style={{ padding: '0 50px' }}>

      <div className="site-layout-content">Content</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
  </Layout>
  );
}

export default App;
