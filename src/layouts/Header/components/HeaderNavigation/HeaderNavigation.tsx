import { ROUTES } from '@/consts';
import { FC } from 'react';
import { NavigationItem, NavigationLink, NavigationList } from './HeaderNavigation.styled';

const NAV_ITEMS = [ROUTES.DISCOVER, ROUTES.CREATORS, ROUTES.SELL, ROUTES.STATS];

export const HeaderNavigation: FC = () => {
	return (
		<nav className="header-navigation">
			<NavigationList>
				{NAV_ITEMS.map(({ href, label }) => (
					<NavigationItem key={href}>
						<NavigationLink href={href}>
							{label}
						</NavigationLink>
					</NavigationItem>
				))}
			</NavigationList>
		</nav>
	);
};
