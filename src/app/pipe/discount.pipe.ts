import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
})
export class DiscountPipe implements PipeTransform {
  transform(value: number, discountPercentage: number): number {
    if (isNaN(value) || isNaN(discountPercentage)) {
      return value;
    }

    const discountAmount = (discountPercentage / 100) * value;
    const finalAmount = value - discountAmount;

    return finalAmount;
  }
}
