import React from 'react'

export default function page() {
  return (
    <div className='flex bg-black h-screen w-screen'>

    {/* colocar div 1 para a imagem */}  
      <div className='w-[50%] bg-blue-700 flex items-center justify-center'>
        <div className='flex gap-2 flex-wrap w-[500px] h-[220px] '>
          <img className='item-img' src="image/carro1.jpg"  alt="Rolls royce" />
          <img className='item-img' src="image/carro2.webp" alt="lamborghini" />
          <img className='item-img' src="image/carro3.webp" alt="Ferrari" />
          <img className='item-img' src="image/carro4.jpg"  alt="Bmw" />
        </div>
      </div>

    {/*  colocar div 2 para o formulario */}
      <div className='w-[50%] bg-green-600'>
          <h1>Bem vindo,</h1>
          <form>
             <input type="text" placeholder='E-mail' />
             <input type="text" placeholder='Senha' />
          </form>
      </div>
    </div>
  )
}
