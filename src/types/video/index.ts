export interface IFormatVideo {
    type: string;
    url: string;
}
export interface VideoTypes {
    title: string;
    organization_name:string;
    date: string;
    cover_formats: IFormatVideo[];
}