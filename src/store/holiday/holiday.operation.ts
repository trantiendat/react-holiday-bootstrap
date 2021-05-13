import { HolidayDto } from './dto/holiday.dto';
import * as HolidayReducer from './holiday.reducer';
import { ActionType } from './holiday.types';
import { Api } from '../../modules/api';
import { GetHolidayDto } from './dto/get-holiday.dto';
import { GetHolidayAdapter } from './adapter';

interface IGetListParams {
  dispatch: HolidayReducer.HolidayDispatch;
}

const api = new Api({ baseURL: 'https://www.gov.uk' });

export const getList = async ({ dispatch }: IGetListParams) => {
  const response = await api.get<GetHolidayDto[]>({
    url: '/bank-holidays.json',
  });
  const holidayData: HolidayDto[] = [];
  if (response?.data) {
    for (const [, value] of Object.entries(response.data)) {
      const listHoliday = GetHolidayAdapter.toHolidayDto(value);
      listHoliday.forEach((holiday) => {
        holidayData.push(holiday);
      });
    }
  }
  dispatch({
    type: ActionType.GetHolidays,
    holidays: holidayData,
  });
};
