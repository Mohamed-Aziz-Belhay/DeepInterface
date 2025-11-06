import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { UserService } from 'src/app/services/user.service';
import { MaterialModule } from 'src/app/material.module';
import { MatCardModule } from '@angular/material/card';





@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactForm!: FormGroup;
  captchaCode: string = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      captchaInput: ['', Validators.required]
    });

    this.generateCaptcha();
  }

  generateCaptcha(): void {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    this.captchaCode = Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  }

  submit(): void {
    if (this.contactForm.invalid) return;

    if (this.contactForm.value.captchaInput !== this.captchaCode) {
      alert('Incorrect security code!');
      this.generateCaptcha();
      return;
    }

    // Normally you’d send the data to your backend here
    console.log('Contact Form Submitted', this.contactForm.value);
    alert('Message sent successfully!');
    this.contactForm.reset();
    this.generateCaptcha();
  }
  
}