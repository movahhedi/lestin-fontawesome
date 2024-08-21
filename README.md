# FontAwesome Component for Lestin

FontAwesome icons component for JS/TS/[Lestin](https://github.com/movahhedi/lestin).

## Installation
Install it via [npm](https://www.npmjs.com/package/@lestin/fontawesome):
```bash
npm install @lestin/fontawesome
```
Or yarn:
```bash
yarn add @lestin/fontawesome
```
Or pnpm:
```bash
pnpm add @lestin/fontawesome
```

## Usage
```tsx
import { FontAwesome } from "@lestin/fontawesome";

const box =
	<div>
		<FontAwesome icon="key" />
	</div>

```

## Props

`FontAwesome` accepts these props:

- `icon` (string, required): The name of the FontAwesome icon to be rendered. If the icon name does not start with `fa-`, it will be automatically prefixed with `fa-`.
- `class` (string, optional): Additional CSS classes to be applied to the icon.
- `solid` (boolean, optional): If true, applies the "fa-solid" class to the icon.
- `brands` (boolean, optional): If true, applies the "fa-brands" class to the icon.
- `duotone` (boolean, optional): If true, applies the "fa-duotone" class to the icon.
- `light` (boolean, optional): If true, applies the "fa-light" class to the icon.
- `regular` (boolean, optional): If true, applies the "fa-regular" class to the icon.
- `thin` (boolean, optional): If true, applies the "fa-thin" class to the icon.

## Usage

```jsx
import { FontAwesome } from "@lestin/fontawesome";

const socialsElement (
	<div>
		<FontAwesome icon="plus" />
		<FontAwesome icon="user" solid />
		<FontAwesome icon="github" brands />
		<FontAwesome icon="instagram" brands />
		<FontAwesome icon="twitter" brands />
		<FontAwesome icon="heart" duotone />
		<FontAwesome icon="star" light />
		<FontAwesome icon="bell" regular />
		<FontAwesome icon="comment" thin />
	</div>
);
```

The `class` prop allows you to add any additional CSS classes to the icon for further customization.

```jsx
import { FontAwesome } from "@lestin/fontawesome";

const customElement = (
	<div>
		<FontAwesome icon="plus" class="custom-class" />
	</div>
);
```
