/* eslint-disable */
import type { SystemStyleObject, ConditionalValue } from '../types'
import type { PropertyValue } from '../types/prop-type'
import type { Properties } from '../types/csstype'
import type { Tokens } from '../tokens'

export type ScrollableProperties = {
   direction?: ConditionalValue<"horizontal" | "vertical">
	hideScrollbar?: ConditionalValue<boolean>
}


type ScrollableOptions = ScrollableProperties & Omit<SystemStyleObject, keyof ScrollableProperties | 'overflow'>

/** A container that allows for scrolling */
export declare function scrollable(options?: ScrollableOptions): string
