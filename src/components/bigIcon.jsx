export function BigIcon({ icon: Icon, sizeIcon, Width, title, paragraph }) {
  return (
    <div className="rounded-xl pt-8 pb-8 px-6 md:px-4 h-full">
      <div className="space-y-4 justify-items-center">
        <div className="flex items-center justify-center w-36 h-36 bg-blue-500 rounded-full bg-gradient-to-tr from-green-400 to-blue-500">
          <Icon
            size={sizeIcon}
            strokeWidth={Width}
            color={"White"} />
        </div>
        <div className="text-center text-xl font-bold tracking-tight py-4">{title}</div>
      </div>
      <div className="flex justify-center sm:pl-4 xl:pl-0">{paragraph}</div>
    </div>
  )

}
