import React, { useState } from "react"
import ButtonExternal from "../button/buttonExternal"
import Paragraph from "../paragraph"

import "./contact.scss"

const Contact = () => {

  return (
    <div>
      <Paragraph text=
    "THF Radio ist die Radiostation im ehemaligen Pförtnerinnenhaus am Flughafen Tempelhof. Experimentierraum und Sprachrohr für Bürgerinnen, Künstlerinnen, Musiker*innen, Kreative und Initiativen. Wir sind Teil des TORHAUSES am Flughafen Tempelhof. THF Radio ist als experimentelles Forum gedacht: Wir wollen den Flughafen und seine Geschichte thematisieren und Künstler*innen in der Stadt eine Plattform geben." />
    <Paragraph text=
    "Schickst du uns eine Nachricht für allgemeine Anfragen zum:" />
      <div className="english">Send us a message for any general inquiries about:</div>
    <div className="contact">
    <div><ButtonExternal href="mailto:info@thfradio.de?subject=Anfragen zum THF Radio">THF Radio</ButtonExternal></div>
    <div><ButtonExternal href="mailto:info@thfradio.de?subject=Anfragen zum Torhaus">Torhaus</ButtonExternal></div>
  </div>

  <Paragraph text=
    "Hast du Interesse an einer einmaligen Radiosendung oder einer Residency bei THF Radio (oder an einer Mitgliedschaft in unserem Community Radio und Verein)? " />
    
  <div className="english">Interested in playing a one-off radio show or having a residency at THF Radio (or to join our community radio and Verein)? </div>
  <div className="contact">
    <div><ButtonExternal href="mailto:play@thfradio.de?subject=Show bei THF Radio">play @ thfradio</ButtonExternal></div>
  </div>
  </div>

  )
}

export default Contact