export const HomePage = () => {
  return (
    <div className="w-full bg-black text-white h-dvh flex flex-col gap-4 items-center justify-center">
      <h1 className="text-5xl">KODE</h1>
      <h2 className="text-2xl">V0.1 beta</h2>
      <div className="flex gap-4 items-center">
        <a href="https://github.com/SadBatya/react-viteplus-tempate" target="_blank">
          <img
            src="/github.svg"
            alt=""
            width="48px"
            className="opacity-50 transition-all hover:opacity-100 cursor-pointer"
          />
        </a>
        <a href="https://t.me/skripnik_vladimir_skriv" target="_blank">
          <img
            src="/telegram.webp"
            width="68px"
            alt=""
            className="opacity-50 transition-all hover:opacity-100 cursor-pointer"
          />
        </a>
      </div>
    </div>
  )
}
