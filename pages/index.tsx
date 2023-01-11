
export default function Gallery() {
  return (
    <div className="max-w2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
    <Image/>
      </div>
    </div>
  )
}

function Image() {
  return(
    <a className="group" href="#">
        <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
          <img src="https://bit.ly/placeholder-img" alt="" className="group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 text-sm text-gray-700">Yusran Abdullah</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">@ydoublea</p>
    </a>
  )
}