export const namespaced = true;

export interface Message {
    content: string;
}

export const state = {
    messages: [{content: 'hello world'}, {content: 'hello everyone'}] as Message[],
};

