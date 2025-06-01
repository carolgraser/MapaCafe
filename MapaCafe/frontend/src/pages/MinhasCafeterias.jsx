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
  const [rawData, setRawData] = useState([]);         // dados vindos do servidor (sem filtragem)
  const [displayData, setDisplayData] = useState([]); // dados exibidos (após filtros)
  const [searchText, setSearchText] = useState('');
  const [selectedRatings, setSelectedRatings] = useState([]);

  // Ao montar o componente, busca a lista de cafeterias no servidor
  useEffect(() => {
    fetchCafeterias();
  }, []);

  const fetchCafeterias = async () => {
    try {
      const res = await fetch('http://localhost:5276/api/Cadastro');
      if (res.status !== 200) {
        throw new Error(await res.text());
      }
      const list = await res.json();

      // Atualiza rawData e displayData (inicialmente sem filtros)
      setRawData(list);
      setDisplayData(
        list.map(c => ({
          key: c.id,
          nome: c.nomeCafeteria,
          endereco: ${c.ruaCafeteria}, ${c.bairroCafeteria},
          comidas: c.comidaFavorita || '',
          bebidas: c.bebidaFavorita || '',
          nota: c.avaliacaoCafeteria,
          comentarios: c.observacoesCafeteria || '',
        }))
      );
    } catch (err) {
      console.error('Erro ao buscar cafeterias:', err);
      message.error('Erro ao carregar cafeterias');
    }
  };

  // Função que retorna o array filtrado (sem alterar estado ainda)
  const applyFilterLogic = (text, ratings, dataSource) => {
    let temp = dataSource.map(c => ({
      key: c.id,
      nome: c.nomeCafeteria,
      endereco: ${c.ruaCafeteria}, ${c.bairroCafeteria},
      comidas: c.comidaFavorita || '',
      bebidas: c.bebidaFavorita || '',
      nota: c.avaliacaoCafeteria,
      comentarios: c.observacoesCafeteria || '',
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

  // Chamado quando o usuário digita algo e pressiona Enter na busca
  const onSearch = (val) => {
    setSearchText(val);
    const filtered = applyFilterLogic(val, selectedRatings, rawData);
    setDisplayData(filtered);
  };

  // Chamado quando as checkboxes de nota mudam
  const onRatingChange = (checkedValues) => {
    setSelectedRatings(checkedValues);
  };

  // Chamado ao clicar em "Aplicar" no popover de filtros
  const applyFilters = () => {
    const filtered = applyFilterLogic(searchText, selectedRatings, rawData);
    setDisplayData(filtered);
  };

  // Função que executa o DELETE no backend e atualiza os estados
  const handleDelete = async (id) => {
    try {
      const res = await fetch(http://localhost:5276/api/Cadastro/${id}, {
        method: 'DELETE',
      });

      if (res.status === 204) {
        message.success('Cafeteria excluída com sucesso');
        // Remove do rawData
        const newRaw = rawData.filter(item => item.id !== id);
        setRawData(newRaw);
        // Reaplica filtros sobre o novo rawData
        const newDisplay = applyFilterLogic(searchText, selectedRatings, newRaw);
        setDisplayData(newDisplay);
      } else if (res.status === 404) {
        message.warning('Cafeteria não encontrada (já removida?)');
      } else {
        const texto = await res.text();
        throw new Error(Status ${res.status}: ${texto});
      }
    } catch (err) {
      console.error('Erro ao excluir cafeteria:', err);
      message.error('Erro ao excluir cafeteria');
    }
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
            onClick={() => handleDelete(record.key)}
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