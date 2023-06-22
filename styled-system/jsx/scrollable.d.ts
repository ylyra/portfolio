/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ScrollableProperties } from '../patterns/scrollable'
import type { HTMLStyledProps } from '../types/jsx'

export type ScrollableProps = ScrollableProperties & Omit<HTMLStyledProps<'div'>, keyof ScrollableProperties | 'overflow'>

/** A container that allows for scrolling */
export declare const Scrollable: FunctionComponent<ScrollableProps>