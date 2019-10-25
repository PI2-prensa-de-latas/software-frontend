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
        width: '50vw',
        top: '5vh',
        left: '25vw',
        position: 'absolute',
        fontSize: '20px',
        color: colors.MidGray,
    },
    machine: {
        width: '50vw',
        left: '25vw',
        top: '10vh',
        position: 'absolute',
        fontSize: '40px',
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
