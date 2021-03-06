import colors from './../../style/colors';

const style = {
    container : {
        backgroundColor: colors.MidGreen,
        height: '100%',
        width: '100%',
        margin: 0,
        zIndex: '-2',
        position:'fixed',
    },
    logoIcon: {
        display: 'block',
        marginLeft: 'auto',
        marginRight:'auto',
        width: '60%',
        padding: '10vh 0',
        zIndex: '2',
        position:'relative',
    },
    loginWaves: {
        display: 'block',
        marginLeft: 'auto',
        marginRight:'auto',
        width: '100%',
        zIndex: '1',
        top: '30%',
        position:'absolute',
    },
}

export default style;
