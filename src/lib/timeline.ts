export interface Time {
    year: string,
    month: string,
}

export interface TimelineProps {
    time: Time,
    event: string,
    desc: string,
}