import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint({ name: "isValidDob", async: false })
export class CustomeDobValidator implements ValidatorConstraintInterface {

  validate(text: string, args: ValidationArguments) {
    console.log(new Date(text));
    console.log(args);
    return text.length > 1 && text.length < 10; 
  }

  defaultMessage(args: ValidationArguments) {
    return 'Text ($value) is too short or too long!';
  }
}