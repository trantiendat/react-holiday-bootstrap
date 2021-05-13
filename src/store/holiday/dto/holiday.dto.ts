export class HolidayDto {
  readonly division: string;

  readonly title: string;

  readonly date: string;

  readonly notes: string;

  readonly bunting: boolean;

  constructor(params: Partial<HolidayDto>) {
    Object.assign(this, params);
  }
}
