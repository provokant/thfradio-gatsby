import React from 'react';
import Paragraph from '../paragraph';

import './contact.scss';

const Contact = () => {
  return (
    <div className='contact'>
      <Paragraph text='THF Radio is a radio station located in the former gatehouse at Tempelhof Airport. An experimental space and mouthpiece for citizens, artists, musicians, creative people and initiatives. We are part of the TORHAUS at Tempelhof Airport. THF Radio is intended as an experimental forum: we want to address the airport and its history and give artists in the city a platform.' />
      <div className='contact__german'>
        THF Radio ist die Radiostation im ehemaligen Pförtnerinnenhaus am
        Flughafen Tempelhof. Experimentierraum und Sprachrohr für Bürger:innen,
        Künstler:innen, Musiker:innen, Kreative und Initiativen. Wir sind Teil
        des TORHAUSES am Flughafen Tempelhof. THF Radio ist als experimentelles
        Forum gedacht: Wir wollen den Flughafen und seine Geschichte
        thematisieren und Künstler*innen in der Stadt eine Plattform geben.
      </div>
      <Paragraph text='Send us a message for any general inquiries about:' />
      <div className='contact__german'>
        Schick uns eine Nachricht für allgemeine Anfragen an:
      </div>
      <div className='contact__link'>
        <a href='mailto:info@thfradio.de?subject=Anfragen zum THF Radio'>
          THF Radio
        </a>
        <a href='mailto:info@thfradio.de?subject=Anfragen zum Torhaus'>
          Torhaus
        </a>
      </div>

      <Paragraph text='Interested in playing a one-off radio show or having a residency at THF Radio (or to join our community radio and association)? Please fill out the following form, we will come back to you. Please do not write mails.' />

      <div className='contact__german'>
        Hast du Interesse an einer einmaligen Radiosendung oder einer Residency
        bei THF Radio (oder an einer Mitgliedschaft in unserem Community Radio
        und Verein)? Füll bitte das folgende Formular aus, dann kommen wir
        schnellstmöglich auf dich zurück. Bitte schreibt uns keine Mails.
      </div>
      <div className='contact__link'>
        <div>
          <a href='https://forms.gle/eJsPSY5AZDMDKmpA9' target='_blank'>
            Form
          </a>
        </div>
      </div>

      <Paragraph text='Please only write us mails in urgent cases or if you are interested in cooperations:' />

      <div className='contact__german'>
        Bitte schreibt uns nur in dringenden Fällen oder für andere
        Kooperationen per Mail an:
      </div>

      <div className='contact__link'>
        <div>
          <a href='mailto:play@thfradio.com?subject=OTHER'>play @ thfradio</a>
        </div>
      </div>

      <Paragraph text='If you want to give us feedback, if you experienced something uncomfortable or something amazing at our studio or if you have a proposal for improvement, please send us an email. A single person of trust is reading the feedback mails and can pass on points of criticism anonymously.' />

      <div className='contact__german'>
        Wenn ihr uns Feedback geben möchtet, weil ihr eine unangenehme Erfahrung
        oder eine schöne Zeit im Studio hattet bzw. uns Verbesserungsvorschläge
        schicken möchtet, schreibt uns eine Mail. Eine einzelne Vertrauensperson
        liest die Feedback Mails und kann Kritikpunkte auch anonym weitergeben.
      </div>

      <div className='contact__link'>
        <div>
          <a href='mailto:feedback@thfradio.com?subject=Feedback'>
            feedback @ thfradio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
