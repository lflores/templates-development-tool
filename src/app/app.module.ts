import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AccountCreatedComponent } from "./account-created-user/account-created-user.component";
import { CardActivationComponent } from "./card-activation/card-activation.component";
import { LoginAttemptsComponent } from "./login-attempts/login-attempts.component";
import { UserClaimsComponent } from "./user-claims/user-claims.component";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { WelcomeUserComponent } from "./welcome-user/welcome-user.component";
import { TermsAndConditionsComponent } from "./terms-and-conditions/terms-and-conditions.component";
import { BankClaimComponent } from "./bank-claim/bank-claim.component";

@NgModule({
  declarations: [
    /** Templates  */
    AccountCreatedComponent,
    BankClaimComponent,
    CardActivationComponent,
    ContactUsComponent,
    LoginAttemptsComponent,
    TermsAndConditionsComponent,
    UserClaimsComponent,
    WelcomeUserComponent,
    /** Fin templates  */
    AppComponent
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
