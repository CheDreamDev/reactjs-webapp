import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeStateProp } from '../../actions'
import { increment, decrement } from '../../actions/main'
import DreamsCity from './DreamsСity'

const mapStateToProps = ({main: {value}}, ownProps) => {
  return {
    value,
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // bind actions with dispatch
    ...bindActionCreators({changeStateProp, increment}, dispatch),
    // example that we can add our custom funcs to props
    decrement: function () {
      // call of action in custom func
      decrement()(dispatch)
    }
  }
}

const DreamsCityContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DreamsCity)

export default DreamsCityContainer
