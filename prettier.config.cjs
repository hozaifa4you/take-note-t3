/** @type {import("prettier").Config} */
const config = {
   plugins: [require.resolve('prettier-plugin-tailwindcss')],
   semi: true,
   singleQuote: true,
   tabWidth: 3,
};

module.exports = config;
