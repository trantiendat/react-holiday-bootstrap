import { GetEventDto } from './get-event.dto';
import { HolidayDto } from './holiday.dto';

export class GetHolidayDto {
  readonly division: string;

  readonly events: GetEventDto[];
}
