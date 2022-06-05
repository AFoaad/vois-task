import { TypedUseSelectorHook, useSelector } from 'react-redux'
import type { RootState } from '../interfaces/store'

/**
 * @description Use throughout your app instead of plain `useSelector`
 * @returns RootState
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
