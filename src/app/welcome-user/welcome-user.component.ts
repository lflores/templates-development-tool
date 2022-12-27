import { AfterViewInit, Component, ElementRef } from "@angular/core";

@Component({
  selector: "welcome-user",
  templateUrl: "../../templates/welcome_user.html"
})
export class WelcomeUserComponent implements AfterViewInit {
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
