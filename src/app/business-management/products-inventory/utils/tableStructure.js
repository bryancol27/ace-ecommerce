import { Space } from 'antd';

export const columns_table = [
    {
        title: 'Nombre',
        dataIndex: 'name',
        key: 'name',
        render: (_, record) => <a>{record.name}</a>,
    },
    {
        title: 'Precio',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Inventario',
        dataIndex: 'inventory',
        key: 'inventory',
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a onClick={record.product_edit}>Editar {record.name}</a>
                <a onClick={record.product_delete}>Delete</a>
            </Space>
        ),
    },
];
