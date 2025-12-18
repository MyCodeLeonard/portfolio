import { Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClickButtonComponent } from '../../shared/components/click-button/click-button.component';
import { TranslateContentService } from '../../shared/translate-content.service';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [ClickButtonComponent, CommonModule, FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  translateContent = inject(TranslateContentService);

  name!:string;
  email!:string;
  massage!:string;
  privacyPolicy!:boolean;

  isCheckName:number = -1;
  isCheckEmail:number = -1;
  isCheckMassage:number = -1;
  isCheckPrivacyPolicy:number = -1;

  yourNameError:string = this.translateContent[this.translateContent.language].yourNameError;
  yourEmailError:string = this.translateContent[this.translateContent.language].yourEmailFirstError;
  helpyouError:string = this.translateContent[this.translateContent.language].helpyouFirstError;
  privacyPolicyError:string = this.translateContent[this.translateContent.language].privacyPolicyError;

  isButtonDisabled = true;
  
  senderFeedbackShow:boolean= false;

  privacyPolicyTab: Window | null = null

  setFocus(input: HTMLElement) {
    input.focus();
  }

  adjustHeight(textarea: any) {
    textarea.style.height = '24px';
    textarea.style.height = (textarea.scrollHeight) + 'px';
  }

  highlight(prevHr: HTMLElement, nextHr: HTMLElement) {
    if (prevHr) prevHr.style.borderColor = '#3DCFB6';
    if (nextHr) nextHr.style.borderColor = '#3DCFB6';
  }

  reset(prevHr: HTMLElement, nextHr: HTMLElement) {
    if (prevHr) prevHr.attributeStyleMap.clear();
    if (nextHr) nextHr.attributeStyleMap.clear();
  }

  buttonDisabled(){
    if(this.isCheckName == 1 && this.isCheckEmail == 1 && this.isCheckMassage == 1 && this.isCheckPrivacyPolicy == 1){
      this.isButtonDisabled = false;
    }
    else{
      this.isButtonDisabled = true;
    }
  }

  formSend(){
    this.checkName();
    this.checkEmail();
    this.checkMassage();
    this.checkPrivacyPolicy();

    if(this.isCheckName == 1 && this.isCheckEmail == 1 && this.isCheckMassage == 1 && this.isCheckPrivacyPolicy == 1){
      
      this.senderFeedbackShow = true;
      
      this.name = '';
      this.email = '';
      this.massage = '';
      this.privacyPolicy = false;

      this.isCheckName= -1;
      this.isCheckEmail = -1;
      this.isCheckMassage = -1;
      this.isCheckPrivacyPolicy = -1;
      this.isButtonDisabled = true;

      setTimeout(() => {
        this.senderFeedbackShow = false;
      }, 2000);
    } 
  }

  checkName(){
    if (!this.name?.trim()) return this.isCheckName = 0;
    else return this.isCheckName = 1;
  }

  checkEmail(){
    if (!this.email?.trim()) {
      this.yourEmailError = this.translateContent[this.translateContent.language].yourEmailFirstError;
      return this.isCheckEmail = 0;
    }
    else if (!/^\S+@\S+\.\S+$/.test(this.email)){
      this.yourEmailError = this.translateContent[this.translateContent.language].yourEmailSecondError; 
      return this.isCheckEmail = 0;
    }
    else{
      return this.isCheckEmail = 1;
    } 
  }

  checkMassage(){
    if (!this.massage?.trim()) {
      this.helpyouError = this.translateContent[this.translateContent.language].helpyouFirstError;
      return this.isCheckMassage = 0;
    }
    else if(this.massage.length < 20){
      this.helpyouError = this.translateContent[this.translateContent.language].helpyouSecondError;
      return this.isCheckMassage = 0
    }
    else{
      return this.isCheckMassage = 1;
    } 
  }

  checkPrivacyPolicy(){
    if(this.privacyPolicy) return this.isCheckPrivacyPolicy = 1
    else return this.isCheckPrivacyPolicy = 0
  }

  openPrivacyPolicy() {
    console.log(this.privacyPolicyTab);
    
    if (!this.privacyPolicyTab || this.privacyPolicyTab.closed) this.privacyPolicyTab = window.open('privacy-policy', '_blank');
    else this.privacyPolicyTab.focus();
  }
}
