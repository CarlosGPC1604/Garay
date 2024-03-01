"use client";
import React from 'react';
import { Form, Input, Button } from 'antd';


const AntDesignForm = () => {
  const onFinish = (values) => {
    console.log('Valores del formulario:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Fallo al enviar el formulario:', errorInfo);
  };

  return (
    <section>
      <div className="container mx-auto">
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Nombre de usuario"
            name="username"
            rules={[{ required: true, message: 'Por favor ingresa tu nombre de usuario!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Contraseña"
            name="password"
            rules={[{ required: true, message: 'Por favor ingresa tu contraseña!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Enviar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>

  );
};

export default AntDesignForm;
