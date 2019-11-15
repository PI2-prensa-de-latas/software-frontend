import colors from './../../style/colors'

const style = {
    container : {
        width: '100vw',
        bottom: 0,
        height: '80px',
        position: 'fixed',
        overflow: 'hidden',
    },
    bar : {
        width: '100vw',
        height: '55px',
        background: colors.MidGreen,
        bottom: 0,
        position: 'absolute',
    },
    iconContainer : {
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
    none : {
        color: colors.White,
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
    },
    blankSpace : {
        bottom: 0,
        width: '100%',
        height: '100px',
    }
}

export default style;