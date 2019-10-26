import colors from './../../style/colors'

const style = {
    qrcodeConfirmation : {
        height: '100vh',
        width: '100vw',
        position: 'absolute',
        backgroundColor: colors.MidGreen,
    },
    logo : {
        width: '100vw',
        position: 'absolute',
        top: '30vh',
    },
    connected : {
        width: '100vw',
        textAlign: 'center',
        marginRight: 'auto',
        position: 'absolute',
        fontSize: '20px',
        color: colors.MidGray,
    },
    machine: {
        width: '100vw',
        top: '10vh',
        position: 'absolute',
        fontSize: '40px',
        textAlign: 'center',
        color: colors.LightGray,
    },
    button : {
        position: 'absolute',
        fontSize: '27px',
        width: '60vw',
        height: '7vh',
        bottom: '10vh',
        marginLeft: '20vw',
        backgroundColor: colors.LightGray,
        borderTopLeftRadius: '50px',
        borderBottomLeftRadius: '50px',
        borderTopRightRadius: '50px',
        borderBottomRightRadius: '50px',
        border: 'none',
        fontWeight: 'bold',
        color: colors.MidGreen,
    }
}

export default style;
