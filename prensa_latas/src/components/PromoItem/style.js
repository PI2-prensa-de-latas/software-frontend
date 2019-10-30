import colors from './../../style/colors'

const style = {
    container : {
        background: colors.White,
        height: '100px',
        width: '86vw',
        borderRadius: '5px',
        boxShadow: '2px 1px 5px rgba(0,0,0,25%)',
        margin: '12px auto',
    },
    imgContainer : {
        float: 'left',
        width: '80px',
        height: '80px',
        background: '#fcc',
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
        background: '#cfc',
        marginRight: '10px',
        marginLeft: '100px',
        height: '100%',
    },
    title : {
        height: '40px',
        background: '#ccf',
        padding: '10px 0',
        verticalAlign: 'middle',
        display: 'table-cell',
    },
    label : {
        height: '20px',
        width: '50px',
        float: 'right',
        marginLeft: '8px',
        marginTop: '10px',
        background: '#ffc',
    },

}

export default style;