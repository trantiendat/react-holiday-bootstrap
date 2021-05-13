import { GetHolidayDto, HolidayDto } from '../dto';

export class GetHolidayAdapter {
  static toHolidayDto(getHolidayDto: GetHolidayDto) {
    return getHolidayDto.events.map((event) => {
      const divisionCharList = getHolidayDto.division
        .split('-')
        .map((character) => {
          return character.charAt(0).toUpperCase() + character.slice(1);
        });
      return new HolidayDto({
        division: divisionCharList.join(' '),
        ...event,
      });
    });
  }
}
