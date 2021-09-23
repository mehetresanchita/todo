import { AppBar ,Toolbar,Typography} from "@material-ui/core";
 import "./Header.css"

const Header = () => {
    return (
        <div>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography varient="h1" className="title" > Todo List</Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
