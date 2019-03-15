import React, { Fragment } from "react";
import { connect } from "react-redux";
import * as newsActions from "../../redux/actions/newsActions";
import PropTypes from "prop-types";
import { bindActionCreators, compose } from "redux";
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

class NewsPage extends React.Component {
  state = {
    news: {
      title: ""
    }
  };

  handleChange = event => {
    const news = { ...this.state.news, title: event.target.value };
    this.setState({ news });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.actions.createNews(this.state.news);
  };

  render() {
    const { classes } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>News</h2>
        <h3>Add News</h3>
        <div>
          <span>title:</span>  
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.news.title}
          />  
        </div>
        

        <input type="submit" value="Save" />
        {this.props.news.map(newsItem => (
          <Fragment key={newsItem.title}>
            <Paper className={classes.root} elevation={1}>
               <div >{newsItem.title}</div>
            </Paper>
          </Fragment>
        ))}
      </form>
    );
  }
}

NewsPage.propTypes = {
  news: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    news: state.news
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(newsActions, dispatch)
  };
}
//withStyles(styles)-- TODO-- Check 
export default compose(withStyles(styles),connect(mapStateToProps,mapDispatchToProps))(NewsPage)
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(NewsPage);
