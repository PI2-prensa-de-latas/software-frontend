import colors from './../../style/colors';

const style = {
    container : {
        height: '100%',
        width: '100%',
        margin: 0,
        zIndex: '-1',
        position:'absolute',
    },
    containerLogin : {
        margin: 'auto',
        textAlign: 'center',
        verticalAlign: 'middle',
        marginTop: '120%',
    },
    title : {
        textAlign: 'center',
        lineHeight: '60px',
        fontSize: '25px',
        fontWeight: 'regular',
    },
    textInput: {
        backgroundColor: 'transparent',
        padding: '10px',
        color: colors.InputGrey,
        border: 'none',
        borderBottom: 'solid 1px ' + colors.InputGrey,
    },
    buttonInput:{
        backgroundColor: colors.LightGray,
        border: 'none',
        color: colors.DarkGreen,
        padding: '5px 70px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: "large",
        borderRadius:'15px',
    }
}

export default style;
