import { Dialog } from '@material-ui/core'
import * as React from 'react'

// Typing
interface CardProps {
  post: any // this is some big object getting sent down from CardContainer
  id: string
}
interface CardState {
  modalOpen: boolean
}

export const Card = (props: CardProps, state: CardState) => {
  const [modalOpen, setModalOpen] = React.useState(false)
  const openModal = (e: any) => {
    console.log('opening modal')
    setModalOpen(true)
  }
  const closeModal = () => {
    setModalOpen(false)
  }
  return (
    <div className="col s4 m4" id={props.id}>
      <Dialog open={modalOpen} onClose={closeModal}>
        <div>{props.post.content.rendered}</div>
      </Dialog>
      <div className="card" id="test">
        <div className="card-image">
          {props.post._embedded['wp:featuredmedia'] ? (
            <img src={props.post._embedded['wp:featuredmedia'][0].source_url} />
          ) : (
            ''
          )}
        </div>
        <div
          className="card-content"
          dangerouslySetInnerHTML={{__html: props.post.excerpt.rendered}}></div>
        <div className="card-action">
          <button onClick={openModal} type="submit">
            {props.post.title.rendered}
          </button>
          <a onClick={openModal}>{props.post.title.rendered}</a>
        </div>
      </div>
    </div>
  )
}
