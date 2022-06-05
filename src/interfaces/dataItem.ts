export interface ItemInterface {
	id?: string
	month?: string
	camp?: string
	country?: string
	school?: string
	lessons?: number
	color?: string
}

export interface ItemsInterface {
	[key: string]: ItemInterface[]
}

export type MappedItemType = ItemInterface & {
	lessonsCount: number
	allSchoolInfo: ItemInterface[]
}
export type mappedDataType = MappedItemType[]
