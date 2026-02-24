'use client';

import { useCallback, useEffect, useState } from 'react';

export function useMediaQuery(width: number) {
	const [targetReached, setTargetReached] = useState(false);

	const updateTarget = useCallback(
		(e: MediaQueryListEvent) => {
			if (e.matches) {
				setTargetReached(true);
			} else {
				setTargetReached(false);
			}
		},
		[setTargetReached]
	);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const media = window.matchMedia(`(min-width: ${width}px)`);
			media.addEventListener('change', updateTarget);

			if (media.matches) {
				setTargetReached(true);
			}

			return () => media.removeEventListener('change', updateTarget);
		}
	}, [updateTarget, width]);

	return targetReached;
}
