import AppBar from '@material-ui/core/AppBar';
import { Container, Toolbar, Typography  } from '@material-ui/core';
export default function Footer() {
    return (
        <AppBar position="static" color="primary">
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                © 2021 Damian Bemben
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}