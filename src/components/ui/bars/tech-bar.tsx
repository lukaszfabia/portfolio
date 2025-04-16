import { LangProps } from "@/app/api/stats/route";
import { motion } from "framer-motion";

interface LanguageBarsProps {
    error: string | null;
    isLoading: boolean;
    data: LangProps[];
}

const skeletonArray = new Array(4).fill(0);

export const LanguageBars = ({ data, isLoading, error }: LanguageBarsProps) => {
    if (isLoading || error) {
        return (
            <div className="space-y-4 animate-pulse">
                {skeletonArray.map((_, idx) => (
                    <div key={idx}>
                        <div className="flex justify-between items-center mb-1">
                            <div className="w-24 h-4 bg-slate-400 rounded" />
                            <div className="w-8 h-4 bg-slate-400 rounded" />
                        </div>
                        <div className="w-full bg-slate-400 rounded-full h-4">
                            <div className="h-4 rounded-full w-1/2" />
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    const maxSize = data.reduce((prev, curr) => prev + curr.size, 0);

    return (
        <div className="space-y-4">
            {data.map((lang, index) => {
                const percentage = (lang.size / maxSize) * 100;

                return (
                    <motion.div
                        key={lang.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
                    >
                        <div className="flex justify-between items-center mb-1">
                            <span className="font-medium text-sm text-gray-200">{lang.name}</span>
                            <span className="text-xs">{Math.round(percentage)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-4">
                            <motion.div
                                className="h-4 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${percentage}%` }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                style={{ backgroundColor: lang.color }}
                            />
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};
