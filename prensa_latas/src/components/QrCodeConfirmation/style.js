import colors from './../../style/colors'

const style = {
    qrcodeConfirmation : {
        height: '100%',
        width: '100%',
        position: 'absolute',
        backgroundColor: colors.MidGreen,
    },
    logo : {
        width: '100vw',
        position: 'absolute',
        top: '30vh',
    },
    check : {
        width: '45vw',
        position: 'absolute',
        top: '50vh',
        marginTop: '-20vw',
        left: '27.5vw',
    },
    connected : {
        width: '100vw',
        top: '5vh',
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
