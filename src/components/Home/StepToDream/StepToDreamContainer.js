import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeStateProp } from '../../../actions/index'
import { increment, decrement } from '../../../actions/main'
import StepToDream from './StepToDream'

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

const StepToDreamContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StepToDream)

export default StepToDreamContainer
