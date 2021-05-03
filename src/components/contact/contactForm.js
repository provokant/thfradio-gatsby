import React, { useState } from "react"
import Button from "../button"

import "./contact.scss"

const ContactForm = ({ className }) => {
  const [status, setStatus] = useState()
  const action = "https://formspree.io/f/xdopqjal"

  function submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        setStatus("SUCCESS")
      } else {
        setStatus("ERROR")
      }
    }
    xhr.send(data)
  }

  return (
    <form
      onSubmit={submitForm}
      action={action}
      method="POST"
      className=""
    >

<div class="grid grid-cols-2 gap-2">

<div class="col-span-1 mt-5">
      <label
          for="name"
          className="form">
          Name 
        </label>
</div>
<div class="mt-5">
<label
          for="email"
          className="">
          <div className="form">E-Mail-Adresse</div>
          <div className="form-english">Email Address</div>
        </label>
</div>
<div class="w-full">
<input 
          type="text" 
          name="name"
          className=" appearance-none w-full sm:max-w-xs px-5 py-3 border rounded-md border-gray-400 leading-snug -md text-gray-900 bg-white placeholder-gray-600 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out"
         />
</div>
<div class="">
<input 
          type="email" 
          name="email"
          className="appearance-none w-full sm:max-w-xs px-5 py-3 border rounded-md border-gray-400 leading-snug -md text-gray-900 bg-white placeholder-gray-600 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out"
         />
</div>
<div class="col-span-2 mt-5">
<label
          for="message"
          className="">
          <div className="form">Erzähl uns ein bisschen von dir </div>
          <div className="form-english">Tell us about yourself</div>
        </label>
</div>
<div class="col-span-2 ">
<textarea 
        name="message"
        className="appearance-none w-full h-full px-5 py-5 border border-gray-400 rounded-md leading-snug -md text-gray-900 bg-white placeholder-gray-600 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out" />
</div>
<div class="col-span-2 mt-5">
<label
          for="message"
          className="">
          <div className="form">Beschreibe, wie du dir das Format deiner Radiosendung vorstellst (Falls vorhanden, schick uns ein Beispiel deiner Arbeit/vergangener Projekte als streambaren Link)</div>
          <div className="form-english">Explain the radio show format you are proposing (please include a streamable link example of your work if you have one)</div>
        </label>
</div>
<div class="col-span-2">
<textarea 
        name="message"
        className="appearance-none w-full h-full px-5 py-5 border border-gray-400 rounded-md leading-snug -md text-gray-900 bg-white placeholder-gray-600 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out" />
</div>
<div class="col-span-2 mt-5">
<label
          for="message"
          className="">
          <div className="form">Deine zeitliche Verfügbarkeit, und die angedachte Länge und Häufigkeit deiner Sendung (bspw. 1 Stunde alle 4 Wochen; 2 Stunden alle 8 Wochen)</div>
          <div className="form-english">Explain your regular availability and state the desired length and frequency of your show (i.e. 1 hour every 4 weeks; 2 hours every 8 weeks)</div>
        </label>
</div>
<div class="col-span-2 ">
<textarea 
        name="message"
        className="appearance-none w-full h-full px-5 py-5 border border-gray-400 rounded-md leading-snug -md text-gray-900 bg-white placeholder-gray-600 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out" />
</div>
<div class="col-span-2 mt-5">
<label
          for="message"
          className="">
          <div className="form">Die angedachte Länge und Häufigkeit deiner Sendung (bspw. 1 Stunde alle 4 Wochen; 2 Stunden alle 8 Wochen)</div>
          <div className="form-english">State the desired length and frequency of your show (i.e. 1 hour every 4 weeks; 2 hours every 8 weeks)</div>
        </label>
</div>
<div class="col-span-2">
<textarea 
        name="message"
        className="appearance-none w-full h-full px-5 py-5 border border-gray-400 rounded-md leading-snug -md text-gray-900 bg-white placeholder-gray-600 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out" />
</div>
<div class="col-span-2 mt-5">
<label
          for="message"
          className="">
          <div className="form"> Erzähl uns, wie du zu unserer Community beitragen möchtest, inwiefern du verschiedene Communitys in deiner Show vorhast mit einzubeziehen und wie du unseren Verein unterstützen möchtest</div>
          <div className="form-english">Tell us how you can contribute to our community building, involve the wider communities through your show, and support our Verein</div>
        </label>
</div>
<div class="col-span-2 mb-10">
<textarea 
        name="message"
        className="appearance-none w-full h-full px-5 py-5 border border-gray-400 rounded-md leading-snug -md text-gray-900 bg-white placeholder-gray-600 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out" />
</div>
<div class="col-span-2">
      {status === "SUCCESS" ? <p>Thanks!</p> :
      <Button>Senden</Button>}
      {status === "ERROR" && <p>Ooops! There was an error.</p>}
</div>

<input type="text" name="_gotcha" className="invisible"/>

</div>
    
    </form>
  )
}

export default ContactForm