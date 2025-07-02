export class UpdatePersonCommand {
  constructor(
    public readonly id: number,
    public readonly data: any,
  ) {}
}
