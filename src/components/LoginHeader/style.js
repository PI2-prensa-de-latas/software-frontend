import colors from './../../style/colors';

const style = {
    container : {
        background:  '#00695C',
        height: '100vh',
        width: '100vw',
        margin: 0,
        zIndex: '10',
        position:'absolute',
    },
    logoIcon: {
        display: 'block',
        marginLeft: 'auto',
        marginRight:'auto',
        width: '60%',
        padding: '10vh 0',
        zIndex: '12',
        position:'relative',
    },
    loginWaves: {
        display: 'block',
        marginLeft: 'auto',
        marginRight:'auto',
        width: '100%',
        zIndex: '8',
        top: '30%',
        position:'absolute',
    },
    containerLogin : {
        margin: 'auto',
        textAlign: 'center',
        verticalAlign: 'middle',
        padding: '10vh 0',
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
        color: '#CFD8DC',
        border: 'none',
        borderBottom: 'solid 1px #CFD8DC',
    },
    buttonInput:{
        backgroundColor: '#E2F1F8',
        border: 'none',
        color: '#003D33',
        padding: '5px 70px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: "large",
        borderRadius:'15px',
    }
}

export default style;
