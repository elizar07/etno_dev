export interface ICommunity {
    label: string;
    value: string
}

export interface IData {
    devkg: ICommunity[];
    telegram_chats: ICommunity[];
    telegram_channels: ICommunity[];
    websites: ICommunity[];
    facebook: ICommunity[];
    youtube: ICommunity[];
    github: ICommunity[];
}

