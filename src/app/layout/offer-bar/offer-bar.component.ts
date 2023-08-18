import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-offer-bar',
  templateUrl: './offer-bar.component.html',
  styleUrls: ['./offer-bar.component.scss'],
})
export class OfferBarComponent implements OnInit {
  faWhatsapp = faWhatsapp;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faTimes = faTimes;

  @ViewChild('top_offer_bar_wrapper')
  top_offer_bar_wrapper!: ElementRef<HTMLDivElement>;
  @ViewChild('top_offer_bar_wrapper_outter')
  top_offer_bar_wrapper_outter!: ElementRef<HTMLDivElement>;

  constructor() {}

  show_top_bar() {
    setTimeout(() => {
      this.top_offer_bar_wrapper.nativeElement.style.transform =
        'translateY(0)';
      this.top_offer_bar_wrapper_outter.nativeElement.style.maxHeight = '35px';
    }, 3000);
  }

  ngOnInit(): void {
    this.show_top_bar();
  }
}
