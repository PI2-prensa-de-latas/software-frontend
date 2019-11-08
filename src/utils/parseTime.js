function parseTime(type) {
    switch (type) {
        case 'd': return 'dias';
        case 'h': return 'hrs';
        case 'm': return 'min';
        default : return '?';
    }
}

export default parseTime;