// src/components/ListaMenu.jsx
import { Menu } from "antd";
import { //icons visuais
  HomeOutlined,
  CoffeeOutlined,
  PlusCircleOutlined,
  DashboardOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom"; //utiliza para detectar qual pagina esta ativa no momento 

const ListaMenu = () => {
  const location = useLocation();
  const selectedKey = location.pathname;

  const items = [
    {
      key: "/",
      icon: <HomeOutlined />,
      label: <Link to="/">Home</Link>,
    },
    {
      key: "/MinhasCafeterias",
      icon: <CoffeeOutlined />,
      label: <Link to="/MinhasCafeterias">Minhas Cafeterias</Link>,
    },
    {
      key: "/NovaCafeteria",
      icon: <PlusCircleOutlined />,
      label: <Link to="/NovaCafeteria">Nova Cafeteria</Link>,
    },
    {
      key: "/Dashboard",
      icon: <DashboardOutlined />,
      label: <Link to="/Dashboard">Dashboard</Link>,
    },
    {
      key: "/MeuPerfil",
      icon: <UserOutlined />,
      label: <Link to="/MeuPerfil">Meu Perfil</Link>,
    },
  ];

  return (  
    <Menu // Renderiza o menu com os itens definidos
      mode="inline"
      className="menu-bar"
      selectedKeys={[selectedKey]}
      items={items}
    />
  );
};

export default ListaMenu; //exportando para ser usado no layout
