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
        border: "black solid 2px"   
    },
    name: {
        fontStyle: "bold",
        fontSize: "xx-large",
        color: "#00695C", 
        textAlign: "center",
        top: "5%",
        left: "40%",
        position: "fixed"
    },
    editIcon: {
        color: "#00695C",
        left: "90%",
        top: "5%",
        fontSize: "x-large",
        position: "fixed",
  }
    
}

export default style;