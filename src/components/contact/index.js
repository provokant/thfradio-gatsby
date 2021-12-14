import React from "react"
import ButtonExternal from "../button/button-external"
import Paragraph from "../paragraph"

import "./contact.scss"

const Contact = () => {

  return (
    <div className="contact">
      <Paragraph text=
                   "THF Radio is a radio station located in the former gatehouse at Tempelhof Airport. An experimental space and mouthpiece for citizens, artists, musicians, creative people and initiatives. We are part of the TORHAUS at Tempelhof Airport. THF Radio is intended as an experimental forum: we want to address the airport and its history and give artists in the city a platform."/>
      <div className="contact__german">THF Radio ist die Radiostation im ehemaligen Pförtnerinnenhaus am Flughafen Tempelhof. Experimentierraum und Sprachrohr für Bürger:innen, Künstler:innen, Musiker:innen, Kreative und Initiativen. Wir sind Teil des TORHAUSES am Flughafen Tempelhof. THF Radio ist als experimentelles Forum gedacht: Wir wollen den Flughafen und seine Geschichte thematisieren und Künstler*innen in der Stadt eine Plattform geben.</div>
      <Paragraph text=
                   "Send us a message for any general inquiries about:"/>
      <div className="contact__german">Schick uns eine Nachricht für allgemeine Anfragen an:</div>
      <div className="contact__link">
        <a href="mailto:info@thfradio.de?subject=Anfragen zum THF Radio" >THF Radio</a>
        <a href="mailto:info@thfradio.de?subject=Anfragen zum Torhaus" >Torhaus</a>
      </div>

      <Paragraph text=
                   "Interested in playing a one-off radio show or having a residency at THF Radio (or to join our community radio and association)?"/>

      <div className="contact__german">Hast du Interesse an einer einmaligen Radiosendung oder einer Residency bei THF Radio (oder an einer Mitgliedschaft in unserem Community Radio und Verein)?
      </div>
      <div className="contact__link">
        <div><a href="mailto:play@thfradio.com?subject=Show bei THF Radio">play @ thfradio</a>
        </div>
      </div>
    </div>

  )
}

export default Contact
