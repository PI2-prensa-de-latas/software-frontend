import colors from './../../style/colors'

const style = {
    containner : {
        width: '100vw',
        position: 'absolute',
        bottom: 0,
        overflow: 'hidden',
        height: '80px',
    },
    bar : {
        width: '100vw',
        height: '55px',
        background: colors.MidGreen,
        bottom: 0,
        position: 'absolute',
    },
    iconContainner : {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 35,
        marginTop: 10,
        marginRight: 80,
        color: colors.White,
    },
    selected : {
        color: colors.LightGreen,
    },
    qrButton : {
        width: '100px',
        height: '100px',
        background: colors.DarkGreen,
        right: '-20px',
        bottom: '-20px',
        position: 'absolute',
        borderRadius: '100%',
    },
    qrContainner : {
        width: '90%',
        height: '90%',
        display: 'flex',
        flexDirection: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    }
}

export default style;