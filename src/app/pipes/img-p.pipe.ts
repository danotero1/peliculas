import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgP'
})
export class ImgPPipe implements PipeTransform {

  transform(img: any): any {
    if(img == null){
      return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyL4boRUlkGajD1gCVFDIBqSBtjQqutjZThY_kc3Xm0VebZ__XOw&s';
    } else {
      return img;
    }
   
  }

}
