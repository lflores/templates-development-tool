import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef
} from "@angular/core";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";

import * as TemplateData from "../assets/template-data.json";
import * as ConfigData from "../assets/config-data.json";

export declare interface ITemplateComponent extends AfterViewInit {}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit, AfterContentInit {
  DOMAIN_ICON_URL: string = "domainIcon";
  CLAIMS_IMAGE_URL: string = "imageUrl";

  title = "CodeSandbox";
  form: FormGroup;
  el: HTMLElement;

  constructor(el: ElementRef, fb: FormBuilder) {
    this.el = el.nativeElement;
    this.form = fb.group({
      selectedCountries: new FormArray([])
    });
  }

  ngAfterViewInit(): void {
    this.replaceImagesPath();
    this.replaceAnchorPath();
    this.replaceNamesAndValues();
    this.replaceLinkPath();
    this.replaceClaimImages();
  }

  ngAfterContentInit(): void {
    //this.replaceNamesAndValues();
  }

  replaceImagesPath() {
    let imagesHTML: HTMLCollection = document.getElementsByTagName("img");
    let images: [] = Array.prototype.slice.call(imagesHTML);
    images.map(
      (img: HTMLImageElement) =>
        (img.src = img.src
          .replace(this.DOMAIN_ICON_URL, ConfigData[this.DOMAIN_ICON_URL])
          .replace("https://kcp6dm.csb.app/", ""))
    );
  }

  replaceAnchorPath() {
    let anchor: [] = Array.prototype.slice.call(
      document.getElementsByTagName("a")
    );
    anchor.map(
      (img: HTMLAnchorElement) =>
        (img.href = img.href
          .replace(this.DOMAIN_ICON_URL, ConfigData[this.DOMAIN_ICON_URL])
          .replace("https://kcp6dm.csb.app/", ""))
    );
  }

  replaceLinkPath() {
    let links: [] = Array.prototype.slice.call(
      document.getElementsByTagName("link")
    );
    links
      .filter((link: HTMLLinkElement) => link.type === "text/css")
      .map(
        (link: HTMLLinkElement) =>
          (link.href = link.href
            .replace(this.DOMAIN_ICON_URL, ConfigData[this.DOMAIN_ICON_URL])
            .replace("https://kcp6dm.csb.app/", ""))
      );
  }

  replaceNamesAndValues() {
    for (let key in TemplateData) {
      console.log(`Replacing '${key}' with '${TemplateData[key]}''`);
      this.el.innerHTML = this.el.innerHTML.replace(key, TemplateData[key]);
    }
  }

  replaceClaimImages() {
    let imagesHTML: HTMLCollection = document.getElementsByTagName("img");
    let images: [] = Array.prototype.slice.call(imagesHTML);
    images
      .filter(
        (img: HTMLImageElement) => img.src.indexOf(this.CLAIMS_IMAGE_URL) > 0
      )
      .map(
        (img: HTMLImageElement) =>
          (img.src = img.src
            .replace(this.CLAIMS_IMAGE_URL, ConfigData["claimImageUrl"])
            .replace("https://kcp6dm.csb.app/", ""))
      );
  }
}
