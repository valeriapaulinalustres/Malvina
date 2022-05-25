import React from 'react';
import MailIcon from '@mui/icons-material/Mail';
import { AiFillInstagram } from 'react-icons/ai';
import { RiWhatsappFill } from 'react-icons/ri';
import './contact.css';




function Contact() {
  return (
    <div>
      <div>
        <h2>Contacto</h2>
        <p>Ante cualquier duda o consulta podés comunicarte con nosotros a través de:</p>       
        <a href="https://www.instagram.com/valeria_paulina_photography/"><AiFillInstagram className='instagramIcon' /></a>
        <p><MailIcon className='mailIcon' />malvina.uruguay@gmail.com</p>
        <div>
          <RiWhatsappFill className='waIcon' />
          <p>tel: 555-777</p>
          <a href="https://wa.me/5491121714493/?text=Hola%20Valeria" target="_blank"
      ><button><svg xmlns="http://www.w3.org/2000/svg" width="16"
              height="16" fill="#ffffff" className="bi bi-whatsapp" viewBox="0 0 16 16">
              <path
                d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg><span> Clic para escribirnos por WhatsApp</span></button></a>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.235528120289!2d-58.601596985020194!3d-34.62348788045437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb861c3359a83%3A0x80cb954382f92285!2sDinamarca%201755%2C%20B1685EJS%20El%20Palomar%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1639222449545!5m2!1ses!2sar"
          width="300" height="300" />
        <p>Dinamarca 1755, El Palomar (Bs.As.) </p>
      </div>
    </div>
  )
}

export default Contact