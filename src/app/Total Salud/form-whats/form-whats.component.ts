import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-form-whats',
  templateUrl: './form-whats.component.html',
  styleUrls: ['./form-whats.component.css']
})
export class FormWhatsComponent implements OnInit {

  public innerHtmlBtn:String = '<i class="fa-brands fa-whatsapp">&nbsp</i>Enviar whatsapp';

  constructor(
  ) { }
  ngOnInit(): void {

    function isMobile() {
      if (sessionStorage['desktop'])
        return false;
      else if (localStorage['mobile'])
        return true;
      var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
      for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
      return false;
    }

    const formulario = document.querySelector('#formulario');
    const buttonSubmit = document.querySelector<HTMLButtonElement>('submit');
    const urlDesktop = 'https://web.whatsapp.com/';
    const urlMobile = 'whatsapp://';
    const telefono = '5213112303646';

    formulario?.addEventListener('submit', (event) => {
      event.preventDefault()
      this.innerHtmlBtn = '<i class="fa-solid fa-circle-notch fa-spin"></i>'
      buttonSubmit?.disabled
      setTimeout(() => {
        const nombre = document?.querySelector<HTMLInputElement>('#nombre')?.value
        let cel = document.querySelector<HTMLInputElement>('#apellidos')?.value
        let email = document.querySelector<HTMLInputElement>('#email')?.value
        let mensaje = 'send?phone=' + telefono + '&text=*Formulario%20Facturación*%0a_-¿Cuál%20es%20tu%20nombre?-_%0A'+nombre+'%0A_-¿Cual%20es%20tu%20numero%20celular?-_%0A'+cel+'%0A_-¿Cual%20es%20tu%20correo%20electrónico?-_%0A'+email
        if (isMobile()) {
          window.open(urlMobile + mensaje, '_blank')
        } else {
          window.open(urlDesktop + mensaje, '_blank')
        }
        this.innerHtmlBtn = '<i class="fa-brands fa-whatsapp">&nbsp</i>Enviar whatsapp'
        buttonSubmit?.disabled
      }, 3000);
    });
  }
}


