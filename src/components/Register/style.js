import colors from './../../style/colors';

const style = {
    logoIcon: {
        marginTop: '20%',
        display: 'block',
        marginLeft: 'auto',
        marginRight:'auto',
        width: '30%',
        zIndex: '2',
    },
    container : {
        height: '100%',
        width: '100%',
        margin: 0,
        zIndex: '-1',
    },
    containerLogin : {
        margin: 'auto',
        textAlign: 'center',
        verticalAlign: 'middle',
        marginTop: '30%',
    },
    textInput: {
        backgroundColor: 'transparent',
        padding: '10px',
        border: 'none',
        borderBottom: 'solid 1px #CFD8DC',
    },
    buttonInput:{
        backgroundColor: colors.MidGreen,
        border: 'none',
        color: colors.White,
        padding: '8px 70px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: "large",
        borderRadius:'15px',
    }
}

export default style;