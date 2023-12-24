import React from 'react'
import LogoSvg from "@/assets/Logo.svg"
import { Button } from '@/components/ui/button'
const Logo = () => {
  return (
    <Button variant={"ghost"} className='scale-75 hover:bg-transparent hover:scale-[0.8]'>
        <LogoSvg/>
    </Button>
  )
}

export default Logo