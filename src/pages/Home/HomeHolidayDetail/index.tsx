import React from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import { HolidayDto } from '../../../store/holiday/dto';
import * as Styles from './styles';

interface IBodyProps {
  show: boolean;
  data?: HolidayDto;
  onClose?: () => void;
}

type HomeHolidayDetailType = React.FC<IBodyProps>;

const HomeHolidayDetailComponent: HomeHolidayDetailType = ({
  show,
  data,
  onClose,
}: IBodyProps) => {
  if (!data) {
    return null;
  }

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Holiday Detail</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Styles.ItemRow>
            <Col xs={4}>Division</Col>
            <Col xs={8}>{data.division}</Col>
          </Styles.ItemRow>
          <Styles.ItemRow>
            <Col xs={4}>Title</Col>
            <Col xs={8}>{data.title}</Col>
          </Styles.ItemRow>
          <Styles.ItemRow>
            <Col xs={4}>Date</Col>
            <Col xs={8}>{data.date}</Col>
          </Styles.ItemRow>
          <Styles.ItemRow>
            <Col xs={4}>Notes</Col>
            <Col xs={8}>{data.notes}</Col>
          </Styles.ItemRow>
          <Styles.ItemRow>
            <Col xs={4}>Bunting</Col>
            <Col xs={8}>{data.bunting ? 'Yes' : 'No'}</Col>
          </Styles.ItemRow>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export const HomeHolidayDetail = React.memo(HomeHolidayDetailComponent);
