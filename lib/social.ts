export interface Social {
    name: string,
    link: string,
    icon: React.ReactNode
}

export interface Socials {
    text: string;
    socials: Social[];
}