import type { HTMLAttributes } from 'react';
import { BurgerButton } from './MenuButton.styled';

interface MenuButtonProps extends HTMLAttributes<HTMLButtonElement> {
	open?: boolean;
}

export function MenuButton(props: MenuButtonProps) {
	const { open, ...rest } = props;

	return (
		<BurgerButton data-open={open ? '' : undefined} {...rest}>
			<span />
			<span />
			<span />
		</BurgerButton>
	);
}
