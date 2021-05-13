import React from 'react';
import { Table } from 'react-bootstrap';
import { HolidayDto } from '../../../store/holiday/dto';
import * as Styles from './styles';

interface IBodyProps {
  data: HolidayDto[];
  onRowSelected: (value: HolidayDto) => void;
}

type HomeTableResultType = React.FC<IBodyProps>;

const HomeTableResultComponent: HomeTableResultType = ({
  data,
  onRowSelected,
}: IBodyProps) => {
  const onHolidayRowClickedHandle = React.useCallback(
    (holiday) => () => {
      onRowSelected(holiday);
    },
    [onRowSelected],
  );

  if (data.length === 0) {
    return <Styles.NoFoundLabel>No holidays found</Styles.NoFoundLabel>;
  }

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Region</th>
          <th>Event title</th>
          <th>Date</th>
        </tr>
        {data.map((holiday, index) => (
          <Styles.TableRow
            key={`${holiday.division}-${holiday.title}-${holiday.date}`}
            onClick={onHolidayRowClickedHandle(holiday)}
          >
            <td>{index}</td>
            <td>{holiday.division}</td>
            <td>{holiday.title}</td>
            <td>{holiday.date}</td>
          </Styles.TableRow>
        ))}
      </thead>
    </Table>
  );
};

export const HomeTableResult = React.memo(HomeTableResultComponent);
