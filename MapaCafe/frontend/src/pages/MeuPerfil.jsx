import React from 'react';
import { Form, Input, Button } from 'antd';
import '../assets/MeuPerfil.css';

const { TextArea } = Input;

const MeuPerfil = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Perfil salvo:', values);
    // Aqui você pode enviar para sua API...
  };

  return (
    <div className="meuperfil-container">
      <div className="meuperfil-card">
        <h2>Olá!</h2>
        <Form
          form={form}
          layout="vertical"
          className="meuperfil-form"
          onFinish={onFinish}
        >
          <Form.Item
            name="nome"
            label="Nome"
            rules={[{ required: true, message: 'Informe seu nome' }]}
          >
            <Input placeholder="Nome" />
          </Form.Item>

          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              { required: true, message: 'Informe seu e-mail' },
              { type: 'email', message: 'Formato de e-mail inválido' }
            ]}
          >
            <Input placeholder="E-mail" />
          </Form.Item>

          <Form.Item
            name="biografia"
            label="Minha Biografia"
          >
            <TextArea placeholder="Minha Biografia" rows={4} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default MeuPerfil;
