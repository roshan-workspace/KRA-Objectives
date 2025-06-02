import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";

export class BookPipe implements PipeTransform{
    transform(value: any, metadata: ArgumentMetadata) {
        console.log(value);
        if(typeof value.id == "number"){
            return value
        }else{
            throw new BadRequestException("Validation failed!")
        }
    }
}