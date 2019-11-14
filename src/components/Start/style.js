import colors from './../../style/colors';

const style = {
    container : {
        height: '100%',
        width: '100%',
        margin: 0,
        zIndex: '-2',
        position:'fixed',
    },
    containerButton : {
        lineHeight: '50pt',
        margin: 'auto',
        textAlign: 'center',
        verticalAlign: 'middle',
        marginTop: '120%',
        position:'absolute',
        zIndex: '4',
    },
    buttonInput:{
        backgroundColor: '#E2F1F8',
        lineHeight: '30pt',
        border: 'none',
        color: '#003D33',
        padding: '5px 80px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: "large",
        borderRadius:'15px',
        zIndex: '5',
        position: 'relative',
    },
    text:{
        border: 'none',
        color: colors.White,
        textDecoration: 'underline',
    },
}

export default style;
