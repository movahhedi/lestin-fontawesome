export type HintedString<TKnownValues extends string> = (string & NonNullable<unknown>) | TKnownValues;

// TODO Complete the implementation
// https://docs.fontawesome.com/web/setup/packages#kit-package
// https://github.com/FortAwesome/react-fontawesome/blob/976c1adc59934b34e52b11c03dda4bd69831a6df/src/components/FontAwesomeIcon.js

export interface IFontAwesome_Props {
	icon: HintedString<ICommonFontAwesomeIcons>;
	// icon: ICommonFontAwesomeIcons;
	brands?: boolean;
	class?: string;
	duotone?: boolean;
	light?: boolean;
	regular?: boolean;
	solid?: boolean;
	thin?: boolean;
}

export type ICommonFontAwesomeIcons =
	| "rotate"
	| "flip"
	| "angle-left"
	| "angle-right"
	| "angle-down"
	| "angle-up"
	| "eye"
	| "eye-slash"
	| "user-circle"
	| "unlock-keyhole"
	| "key"
	| "copy"
	| "paste"
	| "eraser"
	| "search"
	| "plus"
	| "minus"
	| "pen-to-square"
	| "id-card"
	| "envelope"
	| "ellipsis-v"
	| "house"
	| "user-pen"
	| "info"
	| "arrow-right-from-bracket"
	| "user-plus";

/**
 * Renders a FontAwesome icon.
 *
 * @param {IFontAwesome_Props} props - The props for the FontAwesome component.
 * @returns {JSX.Element} The rendered FontAwesome icon.
 */
export function FontAwesome(props: IFontAwesome_Props): HTMLElement {
	let icon: string = props.icon;
	if (!props.icon.startsWith("fa-")) {
		icon = `fa-${props.icon}`;
	}

	return (
		<i
			class={[
				/* "fontAwesomeIcon", */
				"fa",
				icon,
				props.class,
				props.solid && "fa-solid",
				props.brands && "fa-brands",
				props.duotone && "fa-duotone",
				props.light && "fa-light",
				props.regular && "fa-regular",
				props.thin && "fa-thin",
			]}
		></i>
	);
}
