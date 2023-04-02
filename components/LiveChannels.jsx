import React from 'react'
import LiveChannelItem from './LiveChannelItem'
import Live1 from '../public/assets/live/live1.jpeg'
import Live2 from '../public/assets/live/live2.jpeg'
import Live3 from '../public/assets/live/live3.jpeg'
import Live4 from '../public/assets/live/live4.jpeg'
import Live5 from '../public/assets/live/live5.jpeg'
import Live6 from '../public/assets/live/live6.jpeg'
import Live7 from '../public/assets/live/live7.jpeg'
import Live8 from '../public/assets/live/live8.jpeg'
import Live9 from '../public/assets/live/live9.jpeg'
import Live10 from '../public/assets/live/live10.jpeg'


const LiveChannels = () => {
    return (
      <div id='live' className='p-2 md:p-8'>
        <h2 className='text-xl font-bold px-2'>
          <span className='text-[#9147ff]'>Chaînes live</span> qui pourraient vous plaire
        </h2>
        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 py-2'>
          <LiveChannelItem
            img={Live1}
            profile_img='https://robohash.org/cd4601891860f5664fed57f82a49fc56?set=set4&bgset=&size=400x400'
            title='CHARITY STREAM! Any support is ap...'
            user='Natt'
            game='Valorant'
          />
          <LiveChannelItem
            img={Live2}
            profile_img='https://robohash.org/a83697fe1d77613c932dc3ffc812610f?set=set4&bgset=&size=400x400'
            title='Deployable shield commin in clutch'
            user='50ZINT'
            game='Call of Duty: Warzone'
          />
          <LiveChannelItem
            img={Live3}
            profile_img='https://robohash.org/8610ec0b6b3ade9ce2ff2072f0375da7?set=set4&bgset=&size=400x400'
            title='VALORANT WITH NIJI AND FRIENDS!...'
            user='baoo'
            game='Valorant'
          />
          <LiveChannelItem
            img={Live4}
            profile_img='https://static-cdn.jtvnw.net/jtv_user_pictures/jerma985-profile_image-447425e773e6fd5c-50x50.jpeg'
            title='Local Streamer stuck in a cave: sings...'
            user='Jerma985'
            game='One Hand Clapping'
          />
          <LiveChannelItem
            img={Live5}
            profile_img='https://static-cdn.jtvnw.net/jtv_user_pictures/bed3ea39-265b-4632-b866-598bb8c045dd-profile_image-50x50.png'
            title='BIG Mario Kart session'
            user='Bigpuffer'
            game='Mario Kart 8 Deluxe'
          />
          <LiveChannelItem
            img={Live6}
            profile_img='https://static-cdn.jtvnw.net/jtv_user_pictures/b3c347ed-1a7a-40a2-8bee-8a7c4426eb33-profile_image-50x50.png'
            title='Tripod Man Gains RP | Code: MFAM | @...'
            user='NICKMERCS'
            game='Apex Legends'
          />
          <LiveChannelItem
            img={Live7}
            profile_img='https://robohash.org/8b21a540f50d4bebef91f445a58163c6?set=set4&bgset=&size=400x400'
            title='JESUS LOVES YOU!!!'
            user='coletteleclair'
            game='Just Chatting'
          />
          <LiveChannelItem
            img={Live8}
            profile_img='https://static-cdn.jtvnw.net/jtv_user_pictures/b3fc1f16-0818-4121-8711-c31b9469bc21-profile_image-50x50.png'
            title='Covert_Muffin teaching Star Wars...'
            user='JamesDoneQuick'
            game='Star Wars: Jedi Knight II - Jedi Outcast'
          />
          <LiveChannelItem
            img={Live9}
            profile_img='https://static-cdn.jtvnw.net/jtv_user_pictures/7ed5e0c6-0191-4eef-8328-4af6e4ea5318-profile_image-50x50.png'
            title='Grinding'
            user='shroud'
            game='The Cycle: Frontier'
          />
          <LiveChannelItem
            img={Live10}
            profile_img='https://static-cdn.jtvnw.net/jtv_user_pictures/958d17a9-0c82-4210-8376-7e3c00a006f5-profile_image-50x50.png'
            title='GRILLIN / CHILLEN! Steak / Burgers...'
            user='KennyGoodloe'
            game='Just Chatting'
          />
        </div>
      </div>
    );
  };
  
  export default LiveChannels;
  