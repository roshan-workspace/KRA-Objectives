import { Body, Controller, Get, Post, Query, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import path from 'path';

import { diskStorage } from 'multer';

interface FileParams {
    fileName: string 
}

@Controller('upload')
export class UploadController {
  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './upload',
        filename: (req, file, cb) => {
          cb(null, `${file.originalname}`);
        },
      }),
    }),
  )
  uplaodFile(@UploadedFile() file: Express.Multer.File) {
      console.log(file);
    return 'fileUplaoded' 
  } 


//   @Get()
//   getUploadedFiles(@Res() res: Response,@Query() query: { filename: string }){
//     console.log(query.filename);
//     return res.sendFile(path.join(__dirname, "../upload/" + query.filename))
//   }
//   @Get()
//   getUploadedFiles(@Res() res: Response, @Body() file : FileParams){
//     console.log(file);
//     res.sendFile(path.join(__dirname, "../upload/" + file.filename))
//   }


    @Get("/getFile")
  getFile(@Res() res : Response , @Body() file : FileParams)
  {
    res.sendFile(path.join(__dirname , "../uploads/" + file.fileName));
  }
}
