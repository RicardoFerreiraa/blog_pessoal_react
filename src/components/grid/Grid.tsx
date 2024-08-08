import React from 'react'

function Grid() {
  return (
    <div className='grid grid-cols-12'>
        
        <div className='col-span-1 bg-slate-900 h-screen text-cyan-50'>
            Servidores
        </div>

        <div className='col-span-3 bg-black h-screen text-cyan-50'>
            Canais
        </div>

        <div className='col-span-6 bg-slate-600 h-screen text-cyan-50'>
            Feed
        </div>
        
        <div className='col-span-2 bg-slate-100 h-scree'>
            Participantes
        </div>
    </div>
  )
}

export default Grid