import { AfterViewInit, Component, ElementRef } from "@angular/core";

@Component({
  selector: "account-created-user",
  templateUrl: "../../templates/account-created-user.html"
})
export class AccountCreatedComponent implements AfterViewInit {
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
