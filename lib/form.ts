export interface MailProps {
    name: string,
    email: string,
    topic: string,
    message: string,
}

export interface FormProps extends MailProps {
    info: string,
    messagePlaceholder: string,
    topicPlaceholder: string,
    send: string,
}

export interface TextareaProps {
    placeholder: string;
    labelName: string;
}

export interface InputProps extends TextareaProps {
    mode: "email" | "name" | "topic";
    type: "email" | "text" | "password"; // for future login maybe 
}
