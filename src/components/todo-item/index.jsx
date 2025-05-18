import { Card, CardActions, CardContent, Typography ,Button} from "@mui/material";

function TodoItem({todo , fetchTodoDetails}) {


    return (
        <Card sx={{
            maxWidth: 350,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        }}>
            <CardContent>
                <Typography variant="h5" color={"textSecondary"}>
                 {todo?.todo}
                </Typography>
            </CardContent>
            <CardActions>

                <Button onClick={()=> fetchTodoDetails(todo?.id)} sx={{
                    backgroundColor: '#000000',
                    color: '#fff',
                    opacity: '0.85',
                    '&:hover': {
                        backgroundColor: '#000000',
                         color: '#fff',
                        opacity: '1'
                    }

                }}>
                     Details
                </Button>
                

            </CardActions>
        </Card>
    )
}
export default TodoItem;