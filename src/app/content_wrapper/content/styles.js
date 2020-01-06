import styled from 'styled-components'

export const StyledContent = styled.main`
	min-height: 380px;
	background-color: #fff;
	margin-left: 266px;
	border-right: 1px solid #f1f1f1;
	min-height: calc(100vh);
	-webkit-transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
	transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);

	@media (max-width: 930px) {
		width: calc(100vw - 266px - 42px);
		margin-left: 308px;
	}

	@media (max-width: 750px) {
		margin-left: 0;
		width: auto !important;
		padding: 0;
		z-index: 100;
	}
`

export const Editor = styled.div`
	vertical-align: top;
	padding-left: 44px;
	padding-right: 14px;
	padding-top: 80px;
	padding-bottom: 84px;
`
