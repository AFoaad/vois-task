export type query = {
	[key: string]: string | undefined | number | boolean | null
}

export type QueryType<T> = Record<string, T>
