import '../App.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index';
import { Button, Layout } from 'antd';

const { Header, Sider } = Layout;

function AppLayout(conteudo) {

    const [collapsed, setCollapsed] = useState(false);

    return (
     <>
    <Layout>
      <Header style={{ padding: 0, background: '#1d6962' }}>
      </Header>
      <Layout>
        <Sider className="sidebar">
            //Adicionar ListaMenu
        </Sider>
        <main className="content">{conteudo.children}</main>
      </Layout>
    </Layout>

     </>
    );
  }
  export default AppLayout;