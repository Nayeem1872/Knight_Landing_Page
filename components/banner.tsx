'use client'

import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa' // Import the WhatsApp icon

export default function Banner() {
  const [bannerOpen, setBannerOpen] = useState<boolean>(true)

  const handleWhatsAppClick = () => {
    const phoneNumber = '+8801964613773' // Replace with the target phone number
    const message = 'Hello! I would like to inquire about your services.' // Customize your message
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    
 
    window.open(whatsappLink, '_blank')
  }

  return (
    <>
      {bannerOpen && (
        <div className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-50">
          <button className="text-slate-500 hover:text-slate-400 pl-2 ml-3 border-gray-700" onClick={handleWhatsAppClick}>
            <span className="sr-only">Send WhatsApp Message</span>
            <FaWhatsapp className="text-green-500" size={40} /> {/* WhatsApp icon with size 40 */}
          </button>
        </div>
      )}
    </>
  )
}
