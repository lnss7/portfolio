import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'
import MagicButton from './ui/MagicButton'
import Image from 'next/image'
import { socialMedia } from '@/data'

const Footer = () => {
    return (
        <footer className='w-full pt-10 pb-10 mb-[100px] md:mb-5' id='contact'>
            <div className='flex flex-col items-center'>
                <h1 className='heading lg:max-w-[45vw]'>
                    Buscando um dev para o <span className='text-purple'>seu</span> time ou próximo projeto?
                </h1>
                <p className='text-white-200 md:mt-10 my-5 text-center '>Seja para integrar a sua equipe ou para dar vida a um novo Micro SaaS, minha caixa de entrada está aberta.</p>
                <a href='mailto:novellysimaolucas@gmail.com'>
                    <MagicButton
                        title="Fale Comigo!"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>
            <div className='flex mt-16 md:flex-row flex-col justify-between items-center gap-y-8 md:gap-y-0'>
                <p className='md:text-base text-sm md:font-normal font-light md:order-1 order-2'>Copyright © 2025 Lucas Novelly Simao</p>
                <div className='flex items-center md:gap-3 gap-6 md:order-2 order-1'>
                    {socialMedia.map((profile) => (
                        <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                            <a href={profile.href}>
                                <Image src={profile.img} alt={String(profile.id)} width={20} height={20} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer