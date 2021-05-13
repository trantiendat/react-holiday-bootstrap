import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import { Search as SearchIcon } from 'react-bootstrap-icons';
import { useForm } from 'react-hook-form';

export interface IHomeSearchFormParams {
  region: string;
}

interface IBodyProps {
  onSearch: (values: IHomeSearchFormParams) => void;
}

type HomeSearchHolidayType = React.FC<IBodyProps>;

const HomeSearchHolidayFormComponent: HomeSearchHolidayType = ({
  onSearch,
}: IBodyProps) => {
  const { register, handleSubmit } = useForm();

  const onSubmitHandle = React.useCallback(
    (values) => {
      onSearch(values);
    },
    [onSearch],
  );

  return (
    <Form onSubmit={handleSubmit(onSubmitHandle)}>
      <Form.Row>
        <Col>
          <Form.Control placeholder="Region" {...register('region')} />
        </Col>
        <Col xs="auto">
          <Button variant="light" type="submit" block>
            <SearchIcon />
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
};

export const HomeSearchHolidayForm = React.memo(HomeSearchHolidayFormComponent);
