export interface IFormatEvent {
	type: string
	url: string
	value:string
}
export interface EventTypes {
	location: string
	name: string
	organization_name: string
	date: string
	cover:IFormatEvent[]
}
