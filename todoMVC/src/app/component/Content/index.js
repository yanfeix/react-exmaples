import { connect } from 'react-redux';
import Content from './content';
import { mapStateToProps, mapDispatchToProps } from '../../component_redux';

export default connect(mapStateToProps, mapDispatchToProps)(Content);
