export const Header = (props) => {
    const styles = {
        header: {
            width: '100%',
            height: 60,
            borderBottom: '2px solid #a4a2a2',
            boxShadow: 'rgb(201 200 200 / 60%) 0px 4px',
            backgroundColor: '#10162f',
            color: 'white'
        },

        h1: {
            margin: 0,
            paddingTop: 10
        }
    }
    return (
        <div style={styles.header}>
            <h1 style={styles.h1}>LÄRLÄTT</h1>
        </div>
    )
}