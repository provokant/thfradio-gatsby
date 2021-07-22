import React from "react"
import ButtonExternal from "../button/button-external"
import Paragraph from "../paragraph"

import "./contact.scss"

const Contact = () => {

  return (
    <div className="contact">
      <Paragraph text=
                   "THF Radio ist die Radiostation im ehemaligen Pförtnerinnenhaus am Flughafen Tempelhof. Experimentierraum und Sprachrohr für Bürgerinnen, Künstlerinnen, Musiker*innen, Kreative und Initiativen. Wir sind Teil des TORHAUSES am Flughafen Tempelhof. THF Radio ist als experimentelles Forum gedacht: Wir wollen den Flughafen und seine Geschichte thematisieren und Künstler*innen in der Stadt eine Plattform geben."/>
      <Paragraph text=
                   "Schick uns eine Nachricht für allgemeine Anfragen an:"/>
      <div className="contact__english">Send us a message for any general inquiries about:</div>
      <div className="contact__link">
        <a href="mailto:info@thfradio.de?subject=Anfragen zum THF Radio" >THF Radio</a>
        <a href="mailto:info@thfradio.de?subject=Anfragen zum Torhaus" >Torhaus</a>
      </div>

      <Paragraph text=
                   "Hast du Interesse an einer einmaligen Radiosendung oder einer Residency bei THF Radio (oder an einer Mitgliedschaft in unserem Community Radio und Verein)? "/>

      <div className="contact__english">Interested in playing a one-off radio show or having a residency at THF Radio (or to join
        our community radio and Verein)?
      </div>
      <div className="contact__link">
        <div><a href="mailto:play@thfradio.com?subject=Show bei THF Radio">play @ thfradio</a>
        </div>
      </div>
    </div>

  )
}

export default Contact
