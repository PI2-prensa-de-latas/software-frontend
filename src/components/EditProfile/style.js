import colors from './../../style/colors';

const style = {
    container : {
        height: '100%',
        width: '100%',
        margin: 0,
        zIndex: '-1',
    },
    logoIcon: {
        paddingTop: '20%',
        display: 'block',
        marginLeft: 'auto',
        marginRight:'auto',
        width: '30%',
        zIndex: '2',
    },
    containerLogin : {
        margin: 'auto',
        textAlign: 'center',
        verticalAlign: 'middle',
        paddingTop: '10%',
    },
    profilePic: {
        height: '140px',
        borderRadius: "500px",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "140px",
        position: "relative",
        marginTop: "30%",
        border: "black solid 2px",
    },
    camIcon: {
        display: "block",
        position: "relative",
        bottom: "20px",
        paddingLeft: "70px",
    },
    logoutIcon: {
        marginBottom: "-3px",
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
        margin:'0px',
    },
    buttonLogout:{
        backgroundColor: colors.MidGreen,
        border: 'none',
        color: colors.White,
        padding: '6px 40px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: "large",
        borderRadius:'15px',
        margin:'50px',
    },
    picName: {
        marginTop: '1vh',
        marginBottom: '2vh'
    }
}

export default style;
