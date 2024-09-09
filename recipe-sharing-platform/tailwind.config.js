/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addBase, config }) {
      const content = config('content', [
        "./public/index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
      ]);

      // Optionally, you can add base styles or other plugin logic here.
      addBase({});
    }
  ],
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ]
}
