import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import {FaGithub, FaGoogle} from 'react-icons/fa'

const account = () => {
    const { data: session } = useSession()
    // console.log(session)
    if (session) {
      return (
        <div className='pt-[100px] flex flex-col max-w-[400px] w-full mx-auto p-4'>
          <h2 className='text-2xl font-bold'>Bienvenue, {session.user.name}</h2>
          <p className='py-4'>Connecté en tant que {session.user.email}</p>
          <div className='pb-4' m-auto>
          <img
           src={session.user.image} 
           className='rounded-full' 
           alt="/" 
           width='100' 
           height='100' />
          </div>
          <button className='flex items-center justify-center p-3 bg-gray-600 border border-gray-600' onClick={() => signOut()}>Déconnexion</button>
        </div>
      );
    }
    return (
      <div className='pt-[100px] flex flex-col max-w-[400px] w-full mx-auto p-4'>
        <h2 className='text-3xl font-bold'>Se connecter a Twitch</h2>
        <p className='py-4'>Connexion</p>
        <button className='flex items-center justify-center p-3 bg-gray-600 my-2' onClick={() => signIn()}
        >
        <FaGithub className /> Connexion via  <span className='font-bold pl-1'>Github</span>
        </button>
        <button className='flex items-center justify-center p-3 bg-blue-600 my-2' onClick={() => signIn()}
        >
        <FaGoogle className /> Connexion via  <span className='font-bold pl-1'>Google</span>
        </button>
      </div>
    )
}

export default account