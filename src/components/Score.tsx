interface ScoreProps {
    score: number;
    total: number;
}

export default function Score ({score, total}: ScoreProps) {
    return (
        <div className="flex flex-col justify-center gap-0 m-auto bg-gradient-to-b from-violet3 to-violet4 w-[140px] h-[140px] rounded-full md:w-[200px] md:h-[200px]">
            <div className="text-white font-extrabold text-[56px] leading-[72px] text-center md:text-[72px]">{score}</div>
            <div className="font-bold text-[16px] text-blue1 text-center md:text-[18px] opacity-50">of {total}</div>
        </div>
    )
}