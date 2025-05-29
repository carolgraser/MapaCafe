import React from 'react';
import { Form, Input, Select, Button, Row, Col } from 'antd';
import '../assets/NovaCafeteria.css';

const { TextArea } = Input;
const { Option } = Select;

const NovaCafeteria = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Dados cadastrados:', values);
    // aqui você chamaria sua API para salvar
    form.resetFields();
  };

  return (
    <div className="nova-container">
      <div className="nova-card">
        <div className="nova-title">Cadastrar Nova Cafeteria</div>
        <Form
          form={form}
          layout="vertical"
          className="nova-form"
          onFinish={onFinish}
        >
          <Row gutter={16}>
            <Col span={16}>
              <Form.Item
                name="nome"
                label="Nome da Cafeteria"
                rules={[{ required: true, message: 'Informe o nome' }]}
              >
                <Input placeholder="Nome da Cafeteria" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="nota"
                label="Nota"
                rules={[{ required: true, message: 'Selecione a nota' }]}
              >
                <Select placeholder="Nota">
                  {[1,2,3,4,5].map(n => (
                    <Option key={n} value={n}>{n}</Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="rua"
            label="Endereço"
            rules={[{ required: true, message: 'Informe a rua' }]}
          >
            <Input placeholder="Rua" />
          </Form.Item>

          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                name="bairro"
                label="Bairro"
                rules={[{ required: true, message: 'Informe o bairro' }]}
              >
                <Input placeholder="Bairro" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="cep"
                label="CEP"
                rules={[{ required: true, message: 'Informe o CEP' }]}
              >
                <Input placeholder="CEP" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="numero"
                label="Número"
                rules={[{ required: true, message: 'Informe o número' }]}
              >
                <Input placeholder="Número" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="cidade"
                label="Cidade"
                rules={[{ required: true, message: 'Informe a cidade' }]}
              >
                <Input placeholder="Cidade" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="estado"
                label="Estado"
                rules={[{ required: true, message: 'Informe o estado' }]}
              >
                <Input placeholder="Estado" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="comida"
            label="Comida Favorita"
          >
            <Input placeholder="Comida Favorita" />
          </Form.Item>

          <Form.Item
            name="bebida"
            label="Bebida Favorita"
          >
            <Input placeholder="Bebida Favorita" />
          </Form.Item>

          <Form.Item
            name="observacoes"
            label="Observações"
          >
            <TextArea rows={4} placeholder="Observações" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Cadastrar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default NovaCafeteria;
