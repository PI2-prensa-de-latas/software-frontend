import colors from '../../style/colors'

const style = {
    container: {
        width: '100%',
        heigth: 100     ,
        position: 'fixed',
        top: -1,
        left: 0,
        textAlign: 'center',
        zIndex: 98,
    },
    img: {
        width: '102%',
        position: 'absolute',
        top: '-3%',
        left: '-1%',
        zIndex: -1,
    },
    title: {
        color: colors.DarkGreen,
        fontSize: 30,
        fontWeight: 'bold',
        marginBlockStart: 20,
    },
    blankSpace: {
        top: 0,
        height: 100,
        width: '100%',
    }
}

export default style;