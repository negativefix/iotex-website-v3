import { extendTheme } from '@chakra-ui/react';

export const customTheme = extendTheme({
    colors: {
        discord: '#44FFB2',
        bgColor: '#110F1C',
        borderColor: '#333',
        grayColor: "rgba(255,255,255,0.8)",
        grayColor2: "#999999",
        btnBgColor: "linear-gradient(92.18deg, #44FFB2 19.21%, #00D3DC 105.06%)",
        btnHoverBgColor: "linear-gradient(92.18deg, #44FFB2 19.21%, #00D3DC 105.06%)",
        btnTextColor: '#1C1F24',
        brandColor: '#44FEB0',
        brandColor2: '#44FFB2',
        textColor: "#43C9BA"
    },
    fonts: {
        body: 'Montserrat',
        heading: 'Montserrat'
    },
    shadows: {
        largeSoft: 'rgba(60, 64, 67, 0.15) 0px 2px 10px 6px;'
    },
    styles: {
        global: {
            'html, #__next': {
                height: '100%',
                padding: 0,
            },
            '#__next': {
                display: 'flex',
                flexDirection: 'column'
            },
            body: {
                overflowY: 'scroll',
                margin: 0,
                color: "white",
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
                top: '20%'
              }
            },
            "@keyframes smallBall": {
              '0%': {
                top: '50%'
              },
              '100%': {
                top: '55%'
              }
            },
            "@keyframes upAnimate": {
              '0': {
                marginTop: '0px'
              },
              '50%': {
                marginTop: '-20px'
              },
              '100%': {
                marginTop: '0px'
              }
            },
            '.commonBtn': {
              opacity: 1,
              transition: 'opacity 0.5s',
              '&:hover': {
                opacity: 0.8
              }
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
            }
        }
    }
});
