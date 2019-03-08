import React from 'react'
import Twemoji from '../Utils/Twemoji'
import Avatar from './Avatar'

import './Home.css'


const AVATAR_URL = 'https://cdn.discordapp.com/avatars/466378653216014359/6ca415864e7886408035d96a4d2fe876.png'

const INVITE_URL = 'https://discordapp.com/oauth2/authorize?client_id=466378653216014359&scope=bot&permissions=536995904'


class Home extends React.PureComponent {
  render () {
    return (
      <>
        <header>
          <h1>
            <Avatar url={AVATAR_URL} /> PluralKit
          </h1>
          <a
            href={INVITE_URL} target='_blank' rel='noreferrer noopener'
            className='button' draggable={false}
          >
            Add me to Discord!
          </a>
        </header>
        <section className='home-description'>
          <p>
            PluralKit is a bot designed for plural communities on Discord.
          </p>
          <p>
            It allows you to register systems, maintain system information, set up message proxying, log switches, and more.
          </p>
        </section>
      </>
    )
  }
}

export default Home