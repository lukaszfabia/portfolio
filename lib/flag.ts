export interface WrapFlagsProps {
    changeLanguage: (lang: string) => void;
    availableLangs: string[];
    flags: Flag[];
}

export interface Flag {
    key: number;
    flag: React.ReactNode;
}