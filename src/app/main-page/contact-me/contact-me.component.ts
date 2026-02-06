import { Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClickButtonComponent } from '../../shared/components/click-button/click-button.component';
import { TranslateContentService } from '../../shared/translate-content.service';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from "@angular/router";
import { AUTO_STYLE } from '@angular/animations';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [ClickButtonComponent, CommonModule, FormsModule, RouterLink],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  translateContent = inject(TranslateContentService);
  http = inject(HttpClient);

  post = {
    endPoint: 'https://leonard-fritzmann.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  contactData = {
    name: "",
    email: "",
    massage: "",
  };
  
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

  changePlaceholder(textarea: HTMLTextAreaElement){
    if(textarea.value.length <=0){
      textarea.classList.add('placeholderUnder350');
      textarea.style.removeProperty('height');
    } 
    else {
      textarea.classList.remove('placeholderUnder350');
    }
  }

  adjustHeight(textarea: any) {
    if(textarea.value.trim() != '') textarea.style.height = (textarea.scrollHeight -1) + 'px';
    else textarea.value = '';
  }

  highlight(prevHr: HTMLElement, nextHr: HTMLElement) {
    if (prevHr) prevHr.style.borderColor = '#3DCFB6';
    if (nextHr) nextHr.style.borderColor = '#3DCFB6';
  }

  highlightReset(prevHr: HTMLElement, nextHr: HTMLElement) {
    if (prevHr) prevHr.attributeStyleMap.clear();
    if (nextHr) nextHr.attributeStyleMap.clear();
  }

  disabledButtonOnClick(){
    this.checkName();
    this.checkEmail();
    this.checkMassage();
    this.checkPrivacyPolicy();
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

    this.checkBeforSend();
  }

  checkBeforSend(){
    if(this.isCheckName == 1 && this.isCheckEmail == 1 && this.isCheckMassage == 1 && this.isCheckPrivacyPolicy == 1){
      this.senderFeedbackShow = true;

      this.phpSendMailTrigger();
    } 
  }

  phpSendMailTrigger(){
    this.http.post(this.post.endPoint, this.post.body(this.contactData)).subscribe({
      next: (response) => {
        this.resetInputFelds();
        this.resetIsCheck();
        this.senderFeedbackShow = true;
        setTimeout(() => this.senderFeedbackShow = false, 2000);
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.info('send post complete');
      },
    });
  }

  resetInputFelds(){
    this.contactData.name = "";
    this.contactData.email = "";
    this.contactData.massage = "";
    this.privacyPolicy = false;
  }

  resetIsCheck(){
    this.isCheckName= -1;
    this.isCheckEmail = -1;
    this.isCheckMassage = -1;
    this.isCheckPrivacyPolicy = -1;
    this.isButtonDisabled = true;
  }

  checkName(){
    if (!this.contactData.name?.trim()) return this.isCheckName = 0;
    else return this.isCheckName = 1;
  }

  checkEmail(){
    if (!this.contactData.email?.trim()) {
      this.yourEmailError = this.translateContent[this.translateContent.language].yourEmailFirstError;
      return this.isCheckEmail = 0;
    }
    else if (!/^\S+@\S+\.\S+$/.test(this.contactData.email)){
      this.yourEmailError = this.translateContent[this.translateContent.language].yourEmailSecondError; 
      return this.isCheckEmail = 0;
    }
    else{
      return this.isCheckEmail = 1;
    } 
  }

  checkMassage(){
    if (!this.contactData.massage?.trim()) {
      this.helpyouError = this.translateContent[this.translateContent.language].helpyouFirstError;
      return this.isCheckMassage = 0;
    }
    else if(this.contactData.massage.length < 20){
      this.helpyouError = this.translateContent[this.translateContent.language].helpyouSecondError;
      return this.isCheckMassage = 0
    }
    else{
      this.helpyouError = "hidden";
      return this.isCheckMassage = 1;
    } 
  }

  checkPrivacyPolicy(){
    if(this.privacyPolicy) return this.isCheckPrivacyPolicy = 1
    else return this.isCheckPrivacyPolicy = 0
  }

  blurEventName(){
    this.checkName(); 
    this.buttonDisabled();
  }

  blurEventEmail(){
    this.checkEmail(); 
    this.buttonDisabled();
  }

  blurEventMassage(textarea:HTMLTextAreaElement){
    this.checkMassage(); 
    this.buttonDisabled(); 
    this.adjustHeight(textarea);
    this.changePlaceholder(textarea);
  }

  changeEventMassage(textarea:HTMLTextAreaElement){
    this.adjustHeight(textarea);
    this.changePlaceholder(textarea);
  }

  changeEventPrivacyPolicy(){
    this.checkPrivacyPolicy(); 
    this.buttonDisabled();
  }
}
