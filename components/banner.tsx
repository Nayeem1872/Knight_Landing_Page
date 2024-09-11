'use client'

import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa' // Import the WhatsApp icon

export default function Banner() {
  const [bannerOpen, setBannerOpen] = useState<boolean>(true)

  return (
    <>
      {bannerOpen && (
        <div className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-50">
          <button className="text-slate-500 hover:text-slate-400 pl-2 ml-3 border-gray-700" onClick={() => setBannerOpen(false)}>
            <span className="sr-only">Close</span>
            <FaWhatsapp className="text-green-500" size={40} /> {/* Set size to 40 */}
          </button>
        </div>
      )}
    </>
  )
}
