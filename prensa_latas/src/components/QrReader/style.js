import colors from './../../style/colors'

const style = {
    cornerBorder : {
        width: '50vw',
        height: '50vw',
        left: 0,
        top: 0,
        marginTop: '-25vw',
        position: 'absolute',
        borderLeft: '25vw solid rgba(0, 0, 0, 0.3)',
        borderTop: '50vh solid rgba(0, 0, 0, 0.3)',
        borderRight: '25vw solid rgba(0, 0, 0, 0.3)',
        borderBottom: '50vh solid rgba(0, 0, 0, 0.3)',
    },
    back : {
        height: '90px',
        width: '90px',
        bottom: '-3.5vw',
        left: '-2.5vh',
        position: 'absolute',
        backgroundColor: colors.MidGreen,
        borderRadius: '50%',
        border: 'none',
    },
    arrow : {
        border: 'solid rgb(235, 224, 224)',
        borderWidth: '0 6px 6px 0',
        display: 'inline-block',
        padding: '12%',
        top: '25%',
        marginLeft: '25%',
        transform: 'rotate(135deg)',
    },
    corner : {
        position: 'absolute',
        width: '60vw',
        height: '60vw',
        top: '50%',
        marginTop: '-30vw',
        left: '20%',
    },
    top : {
        zIndex: '1',
        position: 'absolute',
        width: '12.5%',
        height: '12.5%',
        top: '0',
        borderTop: '3px solid white',
    },
    bottom : {
        zIndex: '1',
        position: 'absolute',
        width: '12.5%',
        height: '12.5%',
        bottom: '0',
        borderBottom: '3px solid white',
    },
    left : {
        left: '0',
        borderLeft: '3px solid white',
    },
    right : {
        right: '0',
        borderRight: '3px solid white',
    },
    popupError : {
        position: 'absolute',
        top: '50vh',
        left: '10vw',
        width: '80vw',
        height: '50vw',
        marginTop: '-25vw',
        zIndex: 1,
        backgroundColor: colors.LightGray,
        borderRadius: '1%',
        p : {
            fontSize: '20px',
            padding: '5% 10% 0 10%',
            textAlign: 'center',
        },
        button : {
            fontSize: '25px',
            width: '80%',
            height: '25%',
            marginTop: '5%',
            marginLeft: '10%',
            backgroundColor: colors.MidGreen,
            borderTopLeftRadius: '50px',
            borderBottomLeftRadius: '50px',
            borderTopRightRadius: '50px',
            borderBottomRightRadius: '50px',
            border: 'none',
            fontWeight: 'bold',
            color: 'white',
        }
    },
    qrReader : {
        width: '100',
        height: '100',
        section : {
            position: 'static !important',
            div : {
                width: '50vw !important',
                height: '50vw !important',
                left: '25% !important',
                top: '50% !important',
                marginTop: '-25vw',
                boxShadow: 'none !important',
                border: 'none !important',
            }
        }
    }
}

export default style;