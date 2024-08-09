export enum IconType {
	SMALL = 'small',
	MEDIUM = 'medium',
	LARGE = 'large'
}
export interface IFormatIcon {
	type: IconType
	url: string
}
export interface IOrganizationTypes {
	name: string
	src: string
	jobs_count: number
	meetups_count: number
	events_count: number
	icon: IFormatIcon[]
}
