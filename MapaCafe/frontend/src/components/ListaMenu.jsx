import { Menu } from "antd";
import {
    HomeOutlined,
    CoffeeOutlined,
    PlusCircleOutlined,
    DashboardOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

const ListaMenu = () => {

    const location = useLocation();
    let selectedKey = location.pathname;

    const items = [
        {
            key: '/',
            icon: <HomeOutlined />,
            label: <Link to="/">Home</Link>,
        },
        {
            key: 'btnMinhasCafeterias',
            icon: <CoffeeOutlined />,
            label: 'Minhas Cafeterias',
        },
        {
            key: 'btnNovaCafeteria',
            icon: <PlusCircleOutlined />,
            label: 'Nova Cafeteria',
        },
        {
            key: 'btnDashboard',
            icon: <DashboardOutlined />,
            label: 'Dashboard',
        },
        {
            key: 'btnMeuPerfil',
            icon: <UserOutlined />,
            label: 'Meu Perfil',
        },
    ];

    return (
        <Menu
            mode="inline"
            className="menu-bar"
            selectedKeys={[selectedKey]}
            items={items}
        />
    );
};

export default ListaMenu;