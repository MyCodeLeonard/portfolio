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

  isCheckName:boolean = true;
  isCheckEmail!:boolean;
  isCheckMassage!:boolean;
  isCheckPrivacyPolicy:boolean = true;

  yourNameError:string = this.translateContent[this.translateContent.language].yourNameError;
  yourEmailError!:string;
  helpyouError!:string;
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
    if(this.isCheckName && this.isCheckEmail && this.isCheckMassage && this.isCheckPrivacyPolicy){
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

    if(this.isCheckName && this.isCheckEmail && this.isCheckMassage && this.isCheckPrivacyPolicy){
      
      this.senderFeedbackShow = true;
      
      this.name = '';
      this.email = '';
      this.massage = '';
      this.privacyPolicy = false;

      setTimeout(() => {
        this.senderFeedbackShow = false;
      }, 2000);
    } 
  }

  checkName(){
    if (!this.name?.trim()) return this.isCheckName = false;
    else return this.isCheckName = true;
  }

  checkEmail(){
    if (!this.email?.trim()) {
      this.yourEmailError = this.translateContent[this.translateContent.language].yourEmailFirstError;
      return this.isCheckEmail = false;
    }
    else if (!/^\S+@\S+\.\S+$/.test(this.email)){
      this.yourEmailError = this.translateContent[this.translateContent.language].yourEmailSecondError; 
      return this.isCheckEmail = false;
    }
    else{
      return this.isCheckEmail = true;
    } 
  }

  checkMassage(){
    if (!this.massage?.trim()) {
      this.helpyouError = this.translateContent[this.translateContent.language].helpyouFirstError;
      return this.isCheckMassage = false;
    }
    else if(this.massage.length < 20){
      this.helpyouError = this.translateContent[this.translateContent.language].helpyouSecondError;
      return this.isCheckMassage = false
    }
    else{
      return this.isCheckMassage = true;
    } 
  }

  checkPrivacyPolicy(){
    if(this.privacyPolicy) return this.isCheckPrivacyPolicy = true
    else return this.isCheckPrivacyPolicy = false
  }

  openPrivacyPolicy() {
    console.log(this.privacyPolicyTab);
    
    if (!this.privacyPolicyTab || this.privacyPolicyTab.closed) this.privacyPolicyTab = window.open('privacy-policy', '_blank');
    else this.privacyPolicyTab.focus();
  }
}
