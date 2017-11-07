import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
/**
 * Generated class for the SafePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'safe',
})
export class SafePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  constructor(private sanitizer: DomSanitizer) {} ;
  transform(url:string) {
    console.log("Pipe...........") ;
    //let oURL=url.replace("watch?v=", "v/")
  return this.sanitizer.bypassSecurityTrustResourceUrl(url);
   //var url = setURL.replace("watch?v=", "v/");
  }
}
