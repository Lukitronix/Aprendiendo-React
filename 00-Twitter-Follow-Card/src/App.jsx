import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: false
  },
  {
    userName: 'lukitronix',
    name: 'Lucas',
    isFollowing: true
  },
  {
    userName: 'gueepard',
    name: 'Gueepard',
    isFollowing: true
  },
  {
    userName: 'unknown',
    name: '****',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}>{name}</TwitterFollowCard>
        ))
      }
    </section>
  )
}