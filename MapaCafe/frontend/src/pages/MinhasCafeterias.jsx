import React, { useState } from 'react';
import { Table, Input, Button, Popover, Checkbox, Rate, Space } from 'antd';
import {
    FilterOutlined,
    EditOutlined,
    DeleteOutlined,
} from '@ant-design/icons';
import '../assets/MinhasCafeterias.css';

const { Search } = Input;

const mockData = [
    {
        key: '1',
        nome: 'Café do Jardim',
        endereco: 'Rua das Flores, 123',
        comidas: 'Pão de Queijo, Bolo de Cenoura',
        bebidas: 'Latte, Cappuccino',
        nota: 4,
        comentarios: 'Ambiente super agradável',
    },
    {
        key: '2',
        nome: 'Casa do Espresso',
        endereco: 'Av. Central, 456',
        comidas: 'Torradas, Croissant',
        bebidas: 'Espresso, Americano',
        nota: 5,
        comentarios: 'Ótima seleção de grãos',
    },
    {
        key: '3',
        nome: 'Cantinho do Café',
        endereco: 'Praça da Paz, 789',
        comidas: 'Waffle, Brownie',
        bebidas: 'Mocha, Chá Gelado',
        nota: 3,
        comentarios: 'Preço justo',
    },
];

const MinhasCafeterias = () => {
    const [data, setData] = useState(mockData);
    const [searchText, setSearchText] = useState('');
    const [selectedRatings, setSelectedRatings] = useState([]);

    const filterData = (text = searchText, ratings = selectedRatings) => {
        let temp = mockData;

        if (text) {
            const lower = text.toLowerCase();
            temp = temp.filter(item =>
                item.nome.toLowerCase().includes(lower) ||
                item.endereco.toLowerCase().includes(lower) ||
                item.comidas.toLowerCase().includes(lower) ||
                item.bebidas.toLowerCase().includes(lower) ||
                item.comentarios.toLowerCase().includes(lower)
            );
        }

        if (ratings.length > 0) {
            temp = temp.filter(item => ratings.includes(item.nota));
        }

        setData(temp);
    };

    const onSearch = (val) => {
        setSearchText(val);
        filterData(val, selectedRatings);
    };

    const onRatingChange = (checkedValues) => {
        setSelectedRatings(checkedValues);
    };

    const applyFilters = () => {
        filterData();
    };

    const columns = [
        { title: 'Nome', dataIndex: 'nome', key: 'nome' },
        { title: 'Endereço', dataIndex: 'endereco', key: 'endereco' },
        { title: 'Comidas Favoritas', dataIndex: 'comidas', key: 'comidas' },
        { title: 'Bebidas Favoritas', dataIndex: 'bebidas', key: 'bebidas' },
        {
            title: 'Nota',
            dataIndex: 'nota',
            key: 'nota',
            render: (value) => <Rate disabled defaultValue={value} />,
        },
        { title: 'Comentários', dataIndex: 'comentarios', key: 'comentarios' },
        {
            title: '',
            key: 'actions',
            render: (_, record) => (
                <Space className="action-icons">
                    <EditOutlined onClick={() => console.log('Editar', record.key)} />
                    <DeleteOutlined
                        className="delete-icon"
                        onClick={() => console.log('Excluir', record.key)}
                    />
                </Space>
            ),
        },
    ];

    const filterContent = (
        <div className="filter-popup">
            <strong>Filtrar por nota:</strong>
            <Checkbox.Group
                options={[
                    { label: '5 estrelas', value: 5 },
                    { label: '4 estrelas', value: 4 },
                    { label: '3 estrelas', value: 3 },
                ]}
                value={selectedRatings}
                onChange={onRatingChange}
            />
            <Button type="primary" onClick={applyFilters}>
                Aplicar
            </Button>
        </div>
    );

    return (
        <div className="minhas-container">
            <h2>Minhas Cafeterias</h2>

            <div className="minhas-header">
                <Search
                    placeholder="Pesquisar"
                    onSearch={onSearch}
                    allowClear
                    style={{ maxWidth: 300 }}
                />
                <Popover
                    content={filterContent}
                    trigger="click"
                    placement="bottomRight"
                >
                    <Button className="filter-button" icon={<FilterOutlined />}>
                        Filtro
                    </Button>
                </Popover>
            </div>

            <div className="minhas-table">
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                    size="middle"
                />
            </div>
        </div>
    );
};

export default MinhasCafeterias;
