import colors from '../../style/colors'

const style = {
    containerFeed : {
        background: colors.White,
        height: '100px',
        width: '86vw',
        margin: '12px auto',
    },
    container : {
        background: colors.White,
        height: '100px',
        width: '86vw',
        margin: '12px auto',
        borderTop: "1px solid black",
    },
    feed: {
        fontStyle: "bold",
        fontSize: "xx-large",
        color: "#00695C",
        textAlign: "left",
        margin:"20px",
    },
    imgContainer : {
        float: 'left',
        width: '80px',
        height: '80px',
        margin: '10px',
        borderRadius: '5px',
        overflow: 'hidden'
    },
    img : {
        height: '80px',
        width: '80px',
        objectFit: 'cover',
    },
    infoContainer : {
        marginRight: '10px',
        marginLeft: '100px',
        height: '100%',
        display: "table-cell",
        verticalAlign: "middle",
        padding: '10px 0 0 0',
    },
}
export default style;