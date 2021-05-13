import React from 'react';
import {
  HomeSearchHolidayForm,
  IHomeSearchFormParams,
} from './HomeSearchHolidayForm';
import { HomeTableResult } from './HomeTableResult';
import { HolidayReducer, HolidayOperation } from '../../store/holiday';
import { HolidayDto } from '../../store/holiday/dto';
import { HomeHolidayDetail } from './HomeHolidayDetail';

const HomePageComponent: React.FC = () => {
  const [holidayState, holidayDispatch] = React.useReducer(
    HolidayReducer.Reducer,
    {
      data: [],
    },
  );
  const [params, setParams] = React.useState<IHomeSearchFormParams>({
    region: '',
  });
  const [selectedHoliday, setSelectedHoliday] = React.useState<HolidayDto>();

  const sortedHoliday = React.useMemo(() => {
    if (params.region !== '') {
      return holidayState.data.filter((holiday) =>
        holiday.division.includes(params.region),
      );
    }
    return holidayState.data;
  }, [holidayState, params]);

  const onSearchHandle = React.useCallback((values: IHomeSearchFormParams) => {
    setParams(values);
  }, []);

  const onHolidaySelected = React.useCallback((value: HolidayDto) => {
    setSelectedHoliday(value);
  }, []);

  const onHolidayDetailModalCloseHandle = React.useCallback(() => {
    setSelectedHoliday(undefined);
  }, []);

  React.useEffect(() => {
    async function asyncLoadData() {
      await HolidayOperation.getList({ dispatch: holidayDispatch });
    }

    asyncLoadData();
  }, [holidayDispatch]);

  return (
    <>
      <h3>List UK Holidays</h3>
      <HomeSearchHolidayForm onSearch={onSearchHandle} />
      <br />
      <h6>There are {sortedHoliday.length} holidays</h6>
      <HomeTableResult data={sortedHoliday} onRowSelected={onHolidaySelected} />
      <HomeHolidayDetail
        show={selectedHoliday !== undefined}
        data={selectedHoliday}
        onClose={onHolidayDetailModalCloseHandle}
      />
    </>
  );
};

export const HomePage = React.memo(HomePageComponent);
