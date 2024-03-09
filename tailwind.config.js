/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner-mobile": "url('../../public/banner mobile.png')",
        "banner-contact": "url('../../public/banner contact.png')",
        "banner-service": "url('../../public/banner service.png')",
        "banner-about": "url('../../public/banner about.png')",
        "carousel-one": "url('../../public/slide1.png')",
        "carousel-two": "url('../../public/slide2.png')",
        "carousel-three": "url('../../public/slide3.png')",
      },
    },
    screens: {
      lg: "64rem", //1024
      lmd: "90rem", //1440
      xlg: "120rem", //1920
    },
  },
  plugins: [],
};
