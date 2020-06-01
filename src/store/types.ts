export interface RootState {
    version: string;
}

export interface Message {
    content: string;
}

export interface Messages {
    messages: Message[];
}
