import colors from '../../style/colors'

const style = {
    container: {
        width: '100%',
        heigth: 100     ,
        position: 'fixed',
        top: -1,
        left: 0,
        textAlign: 'left',
        zIndex:98,
    },
    profilePic: {
        width: '100px',
        height: '100px',
        objectFit: 'cover',
        borderRadius: "0% 50% 50% 50%",
        top: 0,
        left: 0,
        marginTop: "-5px",
        marginLeft: "-5px",
        border: "black solid 2px",
    },
    name: {
        fontStyle: "bold",
        fontSize: "xx-large",
        color: colors.MidGreen,
        textAlign: "center",
        top: "3%",
        left: "30%",
        position: "fixed",
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: '60%',
        height: '45px',
        overflowWrap: 'break-word',
    },
    editIcon: {
        color: colors.MidGreen,
        left: "90%",
        top: "5%",
        fontSize: "x-large",
        position: "fixed",
  }
}

export default style;