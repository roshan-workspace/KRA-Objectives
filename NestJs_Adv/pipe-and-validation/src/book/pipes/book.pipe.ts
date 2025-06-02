import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";

export class BookPipe implements PipeTransform{
    transform(value: any, metadata: ArgumentMetadata) {
        console.log(value, typeof value);
        return value
    }
}