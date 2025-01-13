import data from '../data.json';

export default function Summary () {
    return (
        <div className="flex flex-col gap-6 px-[32px] py-[24px] flex-1 md:gap-7 md:py-[38px]">
            {/* summary title */}
            <div className="font-bold text-[18px] text-navyblue md:text-[24px]">Summary</div>
            {/* summary cards */}
            <div className="flex flex-col gap-4">
                {data.map((category) => {
                    const textColor = `text-${category.color}`;
                    const bgColor = `bg-light${category.color}`;

                    return (
                        <div className={`flex justify-between rounded-[12px] ${bgColor} py-[17px] px-[16px]`}>
                            <div className="flex gap-3">
                                <img src={`${category.icon}`} alt={`icon for ${category.category}`} />
                                <div className={`${textColor} md:text-[18px] font-medium`}>{category.category}</div>
                            </div>
                            <div className="flex gap-2">
                                <div className="font-bold text-[16px] text-navyblue md:text-[18px]">{category.score}</div>
                                <div className="font-bold text-[16px] text-navyblue opacity-50 md:text-[18px]">/ 100</div>
                            </div>
                        </div>
                    )
                })}
            </div>
            {/* continue button */}
            <div className='bg-navyblue text-white py-[17px] rounded-full flex justify-center font-bold text-[18px] cursor-pointer hover:bg-gradient-to-b hover:from-violet1 hover:to-violet2'>Continue</div>
        </div>
    )
}