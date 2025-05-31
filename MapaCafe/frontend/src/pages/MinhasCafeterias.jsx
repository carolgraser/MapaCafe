// src/pages/MinhasCafeterias.jsx

import React, { useState, useEffect } from 'react';
import { Table, Input, Button, Popover, Checkbox, Rate, Space, message } from 'antd';
import {
  FilterOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import '../assets/MinhasCafeterias.css';

const { Search } = Input;

const MinhasCafeterias = () => {
  const [rawData, setRawData]           = useState([]);  // dados vindos do servidor
  const [displayData, setDisplayData]   = useState([]);  // dados filtrados/exibidos
  const [searchText, setSearchText]     = useState('');
  const [selectedRatings, setSelectedRatings] = useState([]);

  // Ao montar o componente, busca a lista no servidor
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('http://localhost:5276/api/Cadastro');
        console.log('GET /api/Cadastro →', res.status);

        if (res.status !== 200) {
          throw new Error(await res.text());
        }

        const list = await res.json();
        console.log('Lista recebida:', list);

        setRawData(list);
        // Inicialmente exibimos todos
        setDisplayData(list.map(c => ({
          key: c.id,
          nome: c.nomeCafeteria,
          endereco: `${c.ruaCafeteria}, ${c.bairroCafeteria}`,
          comidas: c.comidaFavorita || '',
          bebidas: c.bebidaFavorita || '',
          nota: c.avaliacaoCafeteria,
          comentarios: c.observacoesCafeteria || ''
        })));
      } catch (err) {
        console.error('Erro ao buscar cafeterias:', err);
        message.error('Erro ao carregar cafeterias');
      }
    })();
  }, []);

  // Função para aplicar filtros (busca por texto + notas selecionadas)
  const applyFilterLogic = (text, ratings) => {
    let temp = rawData.map(c => ({
      key: c.id,
      nome: c.nomeCafeteria,
      endereco: `${c.ruaCafeteria}, ${c.bairroCafeteria}`,
      comidas: c.comidaFavorita || '',
      bebidas: c.bebidaFavorita || '',
      nota: c.avaliacaoCafeteria,
      comentarios: c.observacoesCafeteria || ''
    }));

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

    return temp;
  };

  const onSearch = (val) => {
    setSearchText(val);
    setDisplayData(applyFilterLogic(val, selectedRatings));
  };

  const onRatingChange = (checkedValues) => {
    setSelectedRatings(checkedValues);
  };

  const applyFilters = () => {
    setDisplayData(applyFilterLogic(searchText, selectedRatings));
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
      render: (v) => <Rate disabled defaultValue={v} />,
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
        <Popover content={filterContent} trigger="click" placement="bottomRight">
          <Button className="filter-button" icon={<FilterOutlined />}>
            Filtro
          </Button>
        </Popover>
      </div>

      <div className="minhas-table">
        <Table
          columns={columns}
          dataSource={displayData}
          pagination={false}
          size="middle"
        />
      </div>
    </div>
  );
};

export default MinhasCafeterias;
