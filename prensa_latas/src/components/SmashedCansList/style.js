import colors from './../../style/colors'

const style = {
    title : {
        width: '100vw',
        textAlign: 'center',
        position: 'absolute',
        color: colors.MidGreen,
        top: 0,
    },
    instructions : {
        marginLeft: '5vw',
        marginBottom: '5vh',
        height: '20vh',
        width: '90vw',
        textAlign: 'center',
        fontSize: '18px',
    },
    list : {
        backgroundColor: 'white',
        height:'40vh',
        width: '80vw',
        marginLeft: '10vw',
        borderTop: '5px solid',
        borderLeft: '5px solid',
        borderColor: colors.MidGray,
        borderRadius: '7px',
        position: 'absolute',
    },
    waitingCan : {
        marginTop: '35%',
        textAlign: 'center',
        verticalAlign: 'middle',
        display: 'block',
        fontSize: '30px',
    },
    button : {
        position: 'absolute',
        fontSize: '27px',
        width: '60vw',
        height: '7vh',
        bottom: '5vh',
        matginTop: '10vh',
        marginLeft: '20vw',
        backgroundColor: colors.MidGreen,
        borderTopLeftRadius: '50px',
        borderBottomLeftRadius: '50px',
        borderTopRightRadius: '50px',
        borderBottomRightRadius: '50px',
        border: 'none',
        fontWeight: 'bold',
        color: 'white',
    }
}

export default style;