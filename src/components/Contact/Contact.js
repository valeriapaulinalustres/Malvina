import React from 'react';
import { AiFillMail } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import './contact.css';




function Contact() {
  return (
    <div className='contact'>
      <div className='logo-contact'></div>
      <div className='contact-container'>
        <div className='contacto margin-contact'>
          <h2 className='titulo-contacto'>CONTACTO</h2>
          <p className="contact-text">Ante cualquier duda o consulta podés comunicarte con nosotros a través de:</p>
          <a href="https://www.instagram.com/malvina.uruguay/" target="_blank"><AiFillInstagram className='instagramIcon' /></a>
          <a href="mailto:malvina.uruguay@gmail.com" target="_blank"
          ><AiFillMail className='mailIcon' /></a>
          <p className='address'>malvina.uruguay@gmail.com</p>
        </div>
        <div className='map margin-contact'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209629.25000450114!2d-56.36766786587796!3d-34.81959984886891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f80ffc63bf7d3%3A0x686fbde87255a664!2sMontevideo%2C%20Departamento%20de%20Montevideo%2C%20Uruguay!5e0!3m2!1ses!2sar!4v1653528613168!5m2!1ses!2sar" width="300" height="300" className='frame' />"
          <p className='address center'>Montevideo, Uruguay</p>
        </div>
      </div>
    </div>
  )
}

export default Contact