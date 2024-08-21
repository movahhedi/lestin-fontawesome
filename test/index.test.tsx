import { expect, test } from "vitest";
import { FontAwesome } from "../src/index";

test("FontAwesome", () => {
	const icon = "user-circle";
	const className = "test-class";
	const solid = true;
	const brands = true;
	const duotone = true;
	const light = true;
	const regular = true;
	const thin = true;
	const element = FontAwesome({
		class: className,
		icon,
		solid,
		brands,
		duotone,
		light,
		regular,
		thin,
	});

	expect(element.tagName).toBe("I");
	expect(element.className).toBe(`fa fa-${icon} ${className} fa-solid fa-brands fa-duotone fa-light fa-regular fa-thin`);
});
