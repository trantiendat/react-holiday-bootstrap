import React, { Dispatch } from 'react';
import { ActionType } from './holiday.types';
import { HolidayDto } from './dto/holiday.dto';

type HolidayStateType = {
  data: HolidayDto[];
};

type HolidayActionType = {
  type: symbol;
  holidays: HolidayDto[];
};

type HolidayReducerType = React.Reducer<HolidayStateType, HolidayActionType>;

export type HolidayDispatch = Dispatch<HolidayActionType>;

const initialGetState: HolidayStateType = {
  data: new Array<HolidayDto>(),
};

export const Reducer: HolidayReducerType = (
  state = initialGetState,
  action,
) => {
  switch (action.type) {
    case ActionType.GetHolidays:
      return {
        data: action.holidays || [],
      };
    default:
      return state;
  }
};
