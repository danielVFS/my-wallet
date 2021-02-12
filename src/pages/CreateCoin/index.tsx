import React from "react";
import { Form, Button, Col } from 'react-bootstrap';

import ContentHeader from "../../components/ContentHeader";
import Dropzone from '../../components/Dropzone';

import { Container, Content, CirculationContainer, CirculationTitle, CirculationOptions, DropzoneContainer, DropzoneArea } from "./styles";

const CreateCoin: React.FC = () => {
  return (
    <Container>
      <ContentHeader title="Cadastrar Moedas" lineColor="#4E41F0">
      </ContentHeader>
      <Content>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formTitle">
              <Form.Label>Título</Form.Label>
              <Form.Control type="text" placeholder="200 reais" />
            </Form.Group>
          </Form.Row>
          
          <Form.Row>
            <Form.Group as={Col} controlId="formType">
              <Form.Label>Tipo</Form.Label>
              <Form.Control as="select" defaultValue="Cédula">
                <option>Cédula</option>
                <option>Moeda</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formClass">
              <Form.Label>Classe</Form.Label>
              <Form.Control as="select" defaultValue="Brasil República 1942-2055">
                <option>Brasil-República 1942-2055</option>
                <option>Brasil-Democrata 1969-2099</option>
              </Form.Control>
            </Form.Group>

            <CirculationContainer>
              <CirculationTitle>Período de Circulação</CirculationTitle>

              <CirculationOptions>
                <Form.Group as={Col} controlId="formTitle">
                  <Form.Control type="text" placeholder="01/07/1969" />
                </Form.Group>
                <Form.Group as={Col} controlId="formTitle">
                  <Form.Control type="text" placeholder="até hoje" />
                </Form.Group>
              </CirculationOptions>
            </CirculationContainer>

            <Form.Group as={Col} controlId="formMonetaryStandard">
              <Form.Label>Padrão Monetário</Form.Label>
              <Form.Control as="select" defaultValue="Real 1994-1998">
                <option>Real 1994-1998</option>
                <option>Real2 1995-1996</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formPrint">
              <Form.Label>Estampa</Form.Label>
              <Form.Control type="text" placeholder="Segunda" />
            </Form.Group>

            <Form.Group as={Col} controlId="formEmitter">
              <Form.Label>Emissor</Form.Label>
              <Form.Control type="text" placeholder="Brasil" defaultValue="Brasil"/>
            </Form.Group>

            <Form.Group as={Col} controlId="formManufacter">
              <Form.Label>Fabricante</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>

            <Form.Group as={Col} controlId="formValue">
              <Form.Label>Valor</Form.Label>
              <Form.Control type="text" placeholder="200" />
            </Form.Group>
          </Form.Row>
          
          <div className="d-flex justify-content-center">
            <p className="h4">Especificações Físicas</p>
          </div>

          <Form.Row>
            <Form.Group as={Col} controlId="formHeight">
              <Form.Label>Altura</Form.Label>
              <Form.Control type="text" placeholder="6.5cm" />
            </Form.Group>

            <Form.Group as={Col} controlId="formWidth">
              <Form.Label>Largura</Form.Label>
              <Form.Control type="text" placeholder="14.2cm"/>
            </Form.Group>

            <Form.Group as={Col} controlId="formManufacter">
              <Form.Label>Espessura</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>

            <Form.Group as={Col} controlId="formMaterial">
              <Form.Label>Material</Form.Label>
              <Form.Control type="text" placeholder="Papel fiduciário" />
            </Form.Group>
          </Form.Row>

          <div className="d-flex justify-content-center">
            <p className="h4">Exibição</p>
          </div>

          <DropzoneContainer>
            <Dropzone />
            <Dropzone />
          </DropzoneContainer>
          
          <Form.Group controlId="formDescription">
            <Form.Label>Descrição</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <div className="d-flex justify-content-center">
            <Button variant="danger" type="submit">
              Salvar
            </Button>
          </div>
        </Form>
      </Content>
    </Container>
  );
};

export default CreateCoin;
