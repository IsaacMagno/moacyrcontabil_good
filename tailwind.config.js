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
      },
    },
    screens: {
      lg: "64rem",    //1024
      lmd: "90rem",   //1440
      xlg: "120rem",  //1920
    },
  },
  plugins: [],
};
