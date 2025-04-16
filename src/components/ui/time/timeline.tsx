import { TimelineProps } from "@/lib/timeline";
import { FC } from "react";

export const Timeline: FC<{ props: TimelineProps[] }> = ({ props }) => {
    return (
        <div className="md:flex-1 md:mt-0 mt-10">
            <ol className="relative border-s border-gray-200" aria-label="Timeline of events">
                {props.map((elem: TimelineProps) => (
                    <li className="mb-10 ms-4" key={elem.event}>
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white" />

                        <time
                            className="mb-1 text-sm font-normal leading-none text-gray-200"
                            dateTime={`${elem.time.year}-${String(elem.time.month).padStart(2, '0')}`}
                            aria-label={`Event took place in ${elem.time.month} ${elem.time.year}`}
                        >
                            {`${elem.time.month} ${elem.time.year}`}
                        </time>

                        <h3 className="text-lg font-semibold text-white">{elem.event}</h3>

                        <p className="mb-4 text-base font-normal text-gray-300">{elem.desc}</p>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Timeline;
