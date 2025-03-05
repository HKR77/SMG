import React from "react";

const EmbedMap = React.memo(() => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d582.1649674659102!2d76.95347460474432!3d11.014339033669438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858fd69a96893%3A0x6ecfea1ee5ee7b11!2sSri%20mayan%20glass%20interior%20%26%20exterior!5e0!3m2!1sen!2sin!4v1740472051743!5m2!1sen!2sin"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className=" w-full h-[450px] "
    ></iframe>
  );
});

export default EmbedMap;
