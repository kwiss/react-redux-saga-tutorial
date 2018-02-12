import { connect } from 'react-redux'

import Something from '../components/something'

const mapStateToProps = (state, props) => ({
  something: state.something
})

function mapDispatchToProps(dispatch) {
  return {}
}
const SomethingContainer = connect(mapStateToProps, mapDispatchToProps)(Something)

export default SomethingContainer
