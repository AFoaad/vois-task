import { memo, useEffect, useState, FC } from 'react'

const Header: FC = () => {
	const [mode, setMode] = useState<'light' | 'dark'>()

	const setModeType = () => {
		if (mode === 'light') {
			document.documentElement.classList.add('dark')
			return setMode('dark')
		} else {
			setMode('light')
			document.documentElement.classList.remove('dark')
		}
	}
	useEffect(() => {
		setModeType()
	}, [])

	return (
		<div className="w-full flex justify-end pr-7 align-center">
			<button onClick={setModeType} className="self-end">
				{mode === 'dark' ? (
					<img
						src={require('../../assets/images/light.png')}
						alt=""
						className="w-8 bg-white"
					/>
				) : (
					<img
						src={require('../../assets/images/dark.png')}
						alt=""
						className="w-8"
					/>
				)}
			</button>
		</div>
	)
}

export default memo(Header)
