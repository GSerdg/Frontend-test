import styled from 'styled-components';

export const LayoutGrid = styled.div`
  display: grid;
	grid-template-columns:
		minmax(var(--container-margin, 3rem), 33.7rem)
		min(var(--container-max-width, 1240px), 100% - 2 * var(--container-margin, 3rem))
		minmax(var(--container-margin, 3rem), 33.7rem);

	& > * {
		grid-column: 2;
	}
`;
