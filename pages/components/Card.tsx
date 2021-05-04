import { Dialog, Grid } from '@material-ui/core'
import * as React from 'react'
import { Button } from '@material-ui/core'
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';


// ~~~AATP~~~~
interface CardProps {
  post: any // this is some big object getting sent down from CardContainer
  id: string
}
interface CardState {
  modalOpen: boolean
}

// Functional Component for Card, instantiating prop and state variables
  const Card = (props: CardProps, state: CardState) => {
  //modalOpen refers to state while setModalOpen is 
  const [modalOpen, setModalOpen] = React.useState(false)
  //
  const openModal = (e: any) => {
    console.log('opening modal')
    setModalOpen(true)
  }
  const closeModal = () => {
    setModalOpen(false)
  }
  return (
    <div className="col s4" id={props.id}> 
      <div className="card" id="test">
        <div className="card-image" onClick={openModal}>
          {props.post._embedded['wp:featuredmedia'] ? (
            // TODO: Fix alt
            <img alt={props.post.title.rendered} src={props.post._embedded['wp:featuredmedia'][0].source_url} />
          ) : (
            ''
          )}
        </div>
        <div className="card-title">
        {props.post.title.rendered}
        </div>
        <div
          className="card-content"
          dangerouslySetInnerHTML={{__html: props.post.excerpt.rendered}}></div>
        <div className="card-action">
          <Button className="card-button" variant="outlined" onClick={openModal}>
            {props.post.title.rendered}
          </Button>
      <Dialog onClose={closeModal} maxWidth={'lg'} open={modalOpen}>
        <DialogTitle>
        {props.post.title.rendered}
        </DialogTitle>
        <DialogContent dividers>
          <Typography variant="h6">
          {props.post.content.rendered}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={closeModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
        </div>
      </div>
    </div>
  )
}

export default Card
