/**
 *
 * Utility: `generateRandomColor`
 *
 */
/**
 * @function generateRandomColor
 * @returns random hex color
 *
 */
export const generateRandomColor = (): string => {
	const color = ((Math.random() * 0xffffff) << 0).toString(16)
	return `#${color}`
}
