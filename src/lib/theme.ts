import {extendTheme} from '@chakra-ui/react';

export const customTheme = extendTheme({
	colors: {
		discord: '#44FFB2',
		bgColor: '#110F1C',
		borderColor: '#333',
		grayColor: "rgba(255,255,255,0.8)",
		grayColor2: "#999999",
		grayColor3: "#ccc",
		btnBgColor: "linear-gradient(92.18deg, #44FFB2 19.21%, #00D3DC 105.06%)",
		btnHoverBgColor: "linear-gradient(92.18deg, #44FFB2 19.21%, #00D3DC 105.06%)",
		btnTextColor: '#1C1F24',
		brandColor: '#44FEB0',
		brandColor2: '#44FFB2',
		textColor: "#43C9BA",
    codeColor: '#56CCF2',
    codeColor2: '#44FEB0'
	},
	fonts: {
		body: "Montserrat, sans-serif",
		heading: 'Montserrat, sans-serif'
	},
	shadows: {
		largeSoft: 'rgba(60, 64, 67, 0.15) 0px 2px 10px 6px;'
	},
	styles: {
		global: {
			'html, #__next': {
				height: '100%',
				padding: 0,
				background: "#110F1C"
			},
			'#__next': {
				display: 'flex',
				flexDirection: 'column'
			},
			body: {
				overflowY: 'scroll',
				margin: 0,
				color: "white",
				background: "#110F1C"
			},
			html: {
				scrollBehavior: 'smooth'
			},
			'#nprogress': {
				pointerEvents: 'none'
			},
			'#nprogress .bar': {
				background: 'green.200',
				position: 'fixed',
				zIndex: '1031',
				top: 0,
				left: 0,
				width: '100%',
				height: '2px'
			},
			"@keyframes bigBall": {
				'0%': {
					top: '15%'
				},
				'100%': {
					top: '18%'
				}
			},
			"@keyframes btnHover": {
				'0': {
					marginTop: '0px'
				},
				'100%': {
					marginTop: '-5px'
				},
			},
			"@keyframes upAnimate": {
				'0': {
					top: '0px'
				},
				'100%': {
					top: '-5px'
				},
			},
			'.commonBtnBox': {
				position: "relative",
				display: "block",
				'.commonBtn': {
					width: "100%",
					position: "absolute",
					top: 0,
					marginTop: "0px",
					transition: 'margin 0.5s',
					'&:hover': {
						marginTop: '-5px',
						marginLeft: '5px'
					}
				},
			},
			'.showTwoLine': {
				overflow: 'hidden',
				textOverflow: 'ellipsis',
				display: '-webkit-box',
				WebkitLineClamp: '2',
				WebkitBoxOrient: 'vertical',
				wordWrap: 'break-word',
				wordBreak: 'break-all',
				whiteSpace: 'normal'
			},
			'.caption': {
				fontStyle: 'italic',
        paddingTop: '1rem',
        paddingBottom: '2rem'
			},
      '.dropMenuUl': {
        listStyleType: 'none',
        position: 'absolute',
        display: 'none',
        marginTop: '10px',
        paddingTop: '24px',
        top: 0,
        li: {
          listStyleType: 'none',
          opacity: 0,
          transformOrigin: 'top center',
          backgroundColor: '#272730',
          padding: '8px 10px',
          fontSize: '14px',
          fontWeight: 600,
          '&:hover': {
            background: '#44FFB2',
            color: '#272730'
          },
          a: {
            display: 'block',
            '&:hover': {
              background: '#44FFB2',
              color: '#272730'
            }
          }
        }
      },
      '.dropHoverText': {
        height: '24px',
        '&:hover': {
          height: 'max-content',
          '.dropMenuUl': {
            display: 'block',
            li: {
              '&:first-of-type': {
                animation: 'dropmenu 0.2s ease-in-out forwards',
                animationDelay: '0.1s'
              },
              '&:nth-of-type(2)': {
                animation: 'dropmenu 0.2s ease-in-out forwards',
                animationDelay: '0.2s'
              },
              '&:nth-of-type(3)': {
                animation: 'dropmenu 0.2s ease-in-out forwards',
                animationDelay: '0.4s'
              },
              '&:nth-of-type(4)': {
                animation: 'dropmenu 0.2s ease-in-out forwards',
                animationDelay: '0.6s'
              },
              '&:nth-of-type(5)': {
                animation: 'dropmenu 0.2s ease-in-out forwards',
                animationDelay: '0.8s'
              },
              '&:ast-of-type': {
                animation: 'dropmenu 0.2s ease-in-out forwards',
                animationDelay: '1s'
              },
            }
          }
        }
      },
      '@keyframes dropmenu': {
        '0%': {
          opacity: 0,
          transform: 'translateX(20px)'
        },
        '100%': {
          opacity: 1,
          transform: 'translateX(0)'
        }
		  }
		}
	}
});
