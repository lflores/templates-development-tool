import { AfterViewInit, Component, ElementRef } from "@angular/core";

@Component({
  selector: "contact-us",
  templateUrl: "../../templates/contact_us.html"
})
export class ContactUsComponent implements AfterViewInit {
  el: HTMLElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  ngAfterContentInit(): void {
    //this.replaceNamesAndValues();
  }

  ngAfterViewInit(): void {
    //this.replaceNamesAndValues();
  }
}
