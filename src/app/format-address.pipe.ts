import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatAddress'
})
export class FormatAddressPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const formattedAddress = value.street + ', ' + value.zipcode + ', ' + value.country;
    return formattedAddress;
  }

}
