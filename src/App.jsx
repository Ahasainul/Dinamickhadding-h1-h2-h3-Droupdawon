
import { useRef, useState } from 'react'
import './App.css'
import Haddin from './component/Haddin'

function App() {

  // let [droup, setdrop] = useState(false)

  let DropReef = useRef(null)
  let handelclick = () => {
    if (DropReef.current.style.display == 'block'){
    DropReef.current.style.display ='none'}
    else{
      DropReef.current.style.display = 'block'
    }
  } 
  

  return (
    < >
      {/* Dinamick_Hadding as h1,h2,h3l,  */}
      <Haddin className='py-5 text-center font-bold' text='DropDawon' as='h1' />
      {/* Dinamick_Hadding as h1,h2,h3l,  */}
      {/* normal dopdawon */}
      {/* 
      <button className='px-2 py-2 bg-black text-white' onClick={() => setdrop(!droup)}>click</button>
      {droup &&

        <ul>
          <li>Home</li>
          <li>abut</li>
          <li>contract</li>
          <li>other</li>
          <li>vlog</li>
        </ul>

      } */}
      {/* normal dopdawon  end*/}

      <div onClick={handelclick}>

        <button className='px-2 py-2  bg-black text-white'>click</button>


        <div hidden ref={DropReef}>
          <ul>
            <li>Home</li>
            <li>abut</li>
            <li>contract</li>
            <li>other</li>
            <li>vlog</li>
          </ul>
        </div>
      </div>



    </>
  )
}

export default App
