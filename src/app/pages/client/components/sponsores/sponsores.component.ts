import { Component } from '@angular/core';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sponsores',
  templateUrl: './sponsores.component.html',
  styleUrls: ['./sponsores.component.scss']
})
export class SponsoresComponent implements AfterViewInit{
   @ViewChild('carousel', { static: false }) carousel!: ElementRef<HTMLDivElement>;
 
  cards = [
    { img: 'assets/images/logos/goMycode.png', title: 'Go Mycode' },
    { img: 'assets/images/logos/alta_cafe.png', title: 'Alta_cafe' },
    { img: 'assets/images/logos/Microsoft-Logo.png', title: 'Microsoft' },
    { img: 'assets/images/logos/Ministere-Recherche-Scientifique.png', title: 'Ministere de Recherche' },
    { img: 'assets/images/logos/mosaique.png', title: 'Mosaique' },
    { img: 'assets/images/logos/logo_biat.png', title: 'Biat' },
  
  ];

  ngAfterViewInit() {
    const carousel = this.carousel.nativeElement;

    // Duplicate content
    carousel.innerHTML += carousel.innerHTML;

    let scrollSpeed = 1;
    let currentScroll = 0;

    const animate = () => {
      currentScroll += scrollSpeed;
      if (currentScroll >= carousel.scrollWidth / 2) {
        currentScroll = 0;
      }
      carousel.style.transform = `translateX(-${currentScroll}px)`;
      requestAnimationFrame(animate);
    };

    animate();

    // Optional pause on hover
    carousel.parentElement?.addEventListener('mouseenter', () => scrollSpeed = 0);
    carousel.parentElement?.addEventListener('mouseleave', () => scrollSpeed = 1);
}
}