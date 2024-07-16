/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // 监视 src 文件夹中的所有 JavaScript、TypeScript 和 JSX、TSX 文件
    "./public/**/*.html",  // 监视 public 文件夹中的所有 HTML 文件
    "./node_modules/@shadcn/ui/dist/**/*.js"  // 添加这个路径来包含 shadcn/ui 组件库的样式
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}