import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


export default class AddMovie extends Component {
    state={ open :false}
    handleOpen = () => {
        this.setState({open : true})
      };
    
      handleClose = () => {
        this.setState({open : false})
      };
    render() {
        return (
     <div>
      <button  className="btn-modal" type="button" onClick={this.handleOpen}>
       +
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={this.state.open}
        onClose={this.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={this.state.open}>
          <div className="paper">
            <h2>Add Movies :</h2>
            <input 
            name="name"
             type='text'
             placeholder='title' 
             onChange={this.props.chng}
            value={this.props.name}/>
            <input name="link"
             type='text'
             placeholder='Link' 
             onChange={this.props.chng1}
             value={this.props.image}
             />
            <input 
            name="year"
             type='text'
             placeholder='year'
            onChange={this.props.chng2}
            value={this.props.an}/>
            <input
              name="rate" 
              type='text'
              placeholder='rate'
               onChange={this.props.chng3}
               value={this.props.rate}
               />
            <button onClick={e=>{this.props.ajt(e);
            this.handleClose()}
            } >Add</button>
            <button onClick={this.handleClose}>Cancel</button>
          </div>
        </Fade>
      </Modal>
    </div>
        )
    }
}

