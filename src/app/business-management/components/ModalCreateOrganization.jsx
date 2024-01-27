import { Modal, Input, Typography } from 'antd';

export const ModalCreateOrganization = ({
    haveToBeShowed,
    handleCloseModal,
    handleCreateOrganization,
    confirmLoading,
    reference_hook,
}) => {
    return (
        <Modal
            title="Ingresa los datos de tu organización"
            centered
            open={haveToBeShowed}
            onOk={() => handleCreateOrganization()}
            confirmLoading={confirmLoading}
            onCancel={() => handleCloseModal(false)}
        >
            <form action="" style={{ paddingTop: '25px' }} ref={reference_hook}>
                <div style={{ marginBottom: '15px' }}>
                    <Typography.Paragraph style={{ marginBottom: '5px' }}>
                        Nombre organización
                    </Typography.Paragraph>
                    <Input
                        placeholder="Ejem: Vendedores de licor asociados"
                        name="name"
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <Typography.Paragraph style={{ marginBottom: '5px' }}>
                        Tipos de productos a vender
                    </Typography.Paragraph>
                    <Input
                        placeholder="Ejem: Articulos para mascotas"
                        name="products_type"
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <Typography.Paragraph style={{ marginBottom: '5px' }}>
                        Ubicación en Colombia:
                    </Typography.Paragraph>
                    <Input
                        placeholder="Ejem: Cudinamarca, Mosquera"
                        name="location"
                    />
                </div>
            </form>
        </Modal>
    );
};
