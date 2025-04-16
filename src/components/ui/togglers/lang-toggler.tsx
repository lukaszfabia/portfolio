'use client';
import { useTransition, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function LangToggler() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const path = usePathname();
    const [currentLang, setCurrentLang] = useState<string>(path.split("/")[1] || "en");

    const toggleLang = () => {
        const newLang = currentLang === "en" ? "pl" : "en";
        startTransition(() => {
            router.replace(`/${newLang}`);
        });
        setCurrentLang(newLang);
    };

    return (
        <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{currentLang.toUpperCase()}</span>
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={currentLang === "pl"}
                    onChange={toggleLang}
                />
                <div className="w-11 h-6 bg-gray-400 rounded-full peer peer-checked:bg-navy transition-all duration-500 ease-in-out"></div>
                <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full shadow-md transition-transform duration-500 ease-in-out peer-checked:translate-x-full"></div>
            </label>
        </div>
    );
}