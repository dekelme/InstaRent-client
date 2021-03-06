import Message from './Message';
import Grid from '@material-ui/core/Grid';

export default function MessageList(props) {
    const eachItem = (item) => {
        return (
            <Message id={item.id} item={item} renter={props.renter}>
                {props.children}
            </Message>
        )
    }
    return (
        <Grid container direction="row" justify="center" alignItems="center" style={{marginBottom:"2%"}}>
            { props.messageList.map(eachItem) }
        </Grid>
    )
}