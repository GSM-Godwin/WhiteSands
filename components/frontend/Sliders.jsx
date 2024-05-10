
export default function Sliders () {
  return (
    <div className="w-3/4 m-auto">
      <div className="mt-10">
            {data.map((d) => (
                <div key={d.key} className="flex relative h-[250px]">
                    <div>
                        <img src={d.img} alt="" className="" />
                    </div>
                    <div className="flex absolute w-full h-[250px] items-center justify-center">
                        <p className="text-[45px] text-white font-medium">{d.name}</p>
                    </div>
                </div>
            ))}
      </div>
    </div>
  )
}

const data = [
    {
        name: `Melbourne`,
        img: `/assets/snow-truck.svg`,
        key: `1`
    },
    {
        name: `Melbourne`,
        img: `/assets/snow-truck.svg`,
        key: `2`
    },
    {
        name: `Melbourne`,
        img: `/assets/snow-truck.svg`,
        key: `3`
    },
    {
        name: `Melbourne`,
        img: `/assets/snow-truck.svg`,
        key: `4`
    },
    {
        name: `Melbourne`,
        img: `/assets/snow-truck.svg`,
        key: '5'
    },
    {
        name: `Melbourne`,
        img: `/assets/snow-truck.svg`,
        key: `6`
    },   
]