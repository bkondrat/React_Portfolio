import { Layout } from 'antd';
import HeaderContainer from './components/Header/HeaderContainer';

function App() {

  return (
  <Layout className="layout">
    <HeaderContainer />
    {/* <Content style={{ padding: '0 50px' }}>

      <div className="site-layout-content">Content</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
  </Layout>
  );
}

export default App;