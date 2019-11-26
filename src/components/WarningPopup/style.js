import colors from './../../style/colors'

const style = {
    popup : {
        position: 'absolute',
        top: '50vh',
        left: '10vw',
        width: '80vw',
        height: '50vw',
        marginTop: '-25vw',
        border: "solid 2px",
        backgroundColor: colors.LightGray,
        borderRadius: '2%',
        zIndex: 1
    },
    p : {
        fontSize: '20px',
        padding: '0 10% 0 10%',
        textAlign: 'center',
    },
    button : {
        textAlign: 'center',
        fontSize: '25px',
        width: '80%',
        height: '25%',
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
}

export default style;