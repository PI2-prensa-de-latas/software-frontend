import colors from '../../style/colors'

const style = {
    container: {
        width: '100%',
        heigth: 100     ,
        position: 'fixed',
        top: "-1",
        left: "0",
        textAlign: 'center',
    },    
    circle: {
        height: "200px",
        width: "200px",
        backgroundColor: "#00695C",
        borderRadius: "50%",
        display: 'block',
        position: 'relative',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto', 
        verticalAlign: "middle",
    },
    scoreFont: {
        fontStyle: "bold",
        fontSize: "xxx-large",
        color: "#FFFFFF", 
        textAlign: "center",
        verticalAlign: "middle",
        position: 'relative',
        lineHeight: '200px',
    },
    smashedCan: {
        height: '50px',
        fill: "white",
        color: "white",
        verticalAlign: "middle",
        marginTop: "-10px",
    }
}

export default style;