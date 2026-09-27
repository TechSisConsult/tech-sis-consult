'use client';

import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const phoneNumber = '2347026766769';

  const message = encodeURIComponent(
    'Hi TechSis Consult, I would like to know more about your website services.',
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with TechSis Consult on WhatsApp"
      className="
        fixed
        bottom-6
        left-6
        z-50
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-lg
        transition
        duration-300
        hover:scale-110
        hover:shadow-xl
      "
    >
      <FaWhatsapp size={30} />
    </a>
  );
}
