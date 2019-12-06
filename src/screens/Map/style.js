import colors from '../../style/colors'

const style = {
    searchBar:{
        backgroundColor: colors.White,
        border: 'none',
        color: colors.MidGreen,
        padding: '4px 20%',
        textAlign: 'center',
        left: '20%',
        top: '10px',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: "large",
        borderRadius: '20px',
        position: 'absolute',
        zIndex: '3',
    },
    loading: {
        margin: '-150px auto',
        padding: '50vh 0px',
        height: '100px',
        width: '100px',
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