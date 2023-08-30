import { createGlobalStyle } from 'antd-style';

const GlobalStyle = createGlobalStyle`
  
  
	body {
		margin: 0;
		padding: 0;

		font-family: ${({ theme }) => theme.fontFamily};
		font-size: ${({ theme }) => theme.fontSize}px;
		line-height: 1;
		color: ${({ theme }) => theme.colorTextBase};

		background-color: ${(p) => p.theme.colorBgLayout};

		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
  
  a {
	  line-height: 1;
  }

	* {
		box-sizing: border-box;
	}

	#root {
		min-height: 100vh;
	}

	::-webkit-scrollbar {
		width: 4px;
		height: 4px;
		margin-right: 4px;
		background-color: transparent;

		&-thumb {
			background-color: ${({ theme }) => theme.colorFill}; 
			border-radius: 4px; 
		}

		&-corner {
			display: none;
		}
    
	}
`;

export default GlobalStyle;
