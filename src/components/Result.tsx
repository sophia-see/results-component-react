import Score from "./Score";


export default function Result () {
    return (
        <div className="flex flex-col gap-6 bg-gradient-to-b from-violet1 to-violet2 pt-[24px] pb-[40px] rounded-bl-[32px] rounded-br-[32px] flex-1 md:rounded-[32px]">
            <div className="text-blue1 font-bold text-[18px] text-center md:text-[24px]">Your Result</div>
            <Score score={76} total={100} />
            <div className="flex flex-col gap-2 items-center m-auto max-w-[266px] md:max-w-[260px]">
                <div className="font-bold text-white text-[24px] md:text-[42px]">Great</div>
                <div className="font-medium text-blue1 text-[16px] text-center md:text-[18px]">Your performance exceed 65% of the people conducting the test here!</div>
            </div>
        </div>
    )
}