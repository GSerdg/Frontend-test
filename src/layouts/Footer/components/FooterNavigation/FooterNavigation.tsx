import { ROUTES } from '@/consts';
import { FC } from 'react';
import { NavigationItem, NavigationLink, NavigationList } from './FooterNavigation.styled';

const NAV_ITEMS = [ROUTES.PRIVACY_POLICY, ROUTES.TERM_CONDITIONS, ROUTES.ABOUT_US, ROUTES.CONTACT];

export const FooterNavigation: FC = () => {
	return (
		<nav className="footer-navigation">
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
